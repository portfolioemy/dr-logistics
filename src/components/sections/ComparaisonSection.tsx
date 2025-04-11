import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface ComparisonSectionProps {
    title: string;
    content: string;
    imageSet: string[];
    contentSet: { title: string; content: string[] }[];
    secTitle: string;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
    title,
    content,
    imageSet,
    contentSet,
    secTitle,
}) => {
    const [activeRow, setActiveRow] = useState(0);
    const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = rowRefs.findIndex((ref) => ref.current === entry.target);
                        setActiveRow(index);
                    }
                });
            },
            { threshold: 0.5 }
        );

        rowRefs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            rowRefs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [rowRefs]);

    return (
        <Box className="w-full py-15 flex flex-col items-center gap-10 lg:gap-20">
            <Box className="flex flex-col gap-5 lg:gap-10 w-full items-center text-center">
                <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl w-full lg:w-1/2 text-center text-black">{title}</h2>
                <p className="lg:text-lg text-black">{content}</p>
            </Box>

            <Box className="w-full flex flex-col lg:flex-row justify-center items-stretch relative bg-gray-100 py-10 px-10">
                <Box className="hidden lg:flex absolute top-15 bottom-15 left-1/2 w-px bg-[#333367] -translate-x-1/2 z-0" />

                <Box className="flex flex-col gap-20 w-full">
                    {[0, 1].map((i) => (
                        <Box
                            key={i}
                            ref={rowRefs[i]}
                            className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full relative"
                        >
                            <Box className="flex-1 flex justify-center">
                                <Image
                                    width={1000}
                                    height={1000}
                                    quality={100}
                                    loading="lazy"
                                    src={imageSet[i]}
                                    alt={contentSet[i].title}
                                    className="object-cover"
                                />
                            </Box>

                            <Box className="w-[50px] relative z-10 hidden lg:flex flex-col justify-between h-full">
                                <Box
                                    className="w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2"
                                    style={{
                                        backgroundColor: activeRow === i ? "#1B19E6" : "#ffffff",
                                        borderColor: activeRow === i ? "#1B19E6" : "#333367",
                                        alignSelf: "center",
                                        position: "absolute",
                                        top: i === 0 ? "17px" : "100%",
                                        transform: i === 0 ? "translateY(-50%)" : "translateY(-100%)",
                                    }}
                                />
                            </Box>

                            <Box className="flex-1 flex flex-col gap-6 justify-center items-start">
                                <h3 className="font-ivar text-4xl lg:text-7xl text-black font-normal">
                                    {contentSet[i].title}
                                </h3>
                                <ul className="pl-6 text-base sm:text-lg text-gray-800 flex flex-col gap-5 lg:gap-10">
                                    {contentSet[i].content.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:border before:border-[#1B19E6] font-semibold text-xl"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>


            <Box className="h-[1px] w-full sm:w-3/4 lg:w-1/3 bg-[#333367] rounded-full" />
            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-6xl w-full lg:w-1/2 text-center text-black">
                {secTitle}
            </h2>
        </Box>
    );
};

export default ComparisonSection;