import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

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
    }, []);

    return (
        <Box className="w-full py-15 flex flex-col items-center gap-20">
            <Box className="flex flex-col gap-5 w-full items-center sm:w-xlg text-center">
                <h2 className="font-ivar text-1xl sm:text-3xl lg:text-5xl text-black">{title}</h2>
                <p className="text-sm sm:text-base lg:text-lg text-black">{content}</p>
            </Box>

            <Box className="w-full flex flex-col gap-24 bg-gray-100 py-10 px-10">
                {[0, 1].map((i) => (
                    <Box
                        key={i}
                        ref={rowRefs[i]}
                        className="flex flex-col lg:flex-row justify-center items-start gap-10 w-full relative"
                    >
                        {i === 0 && (
                            <Box className="absolute left-1/2 top-5 bottom-[-110] w-px bg-gray-300 -translate-x-1/2 z-0 hidden lg:flex" />
                        )}

                        <Box className="flex-1 flex justify-center">
                            <img
                                src={imageSet[i]}
                                alt={contentSet[i].title}
                                className="object-cover"
                            />
                        </Box>

                        <Box className="justify-center w-[50px] relative z-10 hidden lg:flex">
                            <Box
                                className="mt-[10px] w-8 h-8 rounded-full border-2"
                                style={{
                                    backgroundColor: activeRow === i ? "#1B19E6" : "#ffffff",
                                    borderColor: activeRow === i ? "#1B19E6" : "#333367",
                                }}
                            />
                        </Box>

                        <Box className="flex-1 flex flex-col gap-6 justify-center items-start">
                            <h3 className="font-ivar text-xl sm:text-2xl lg:text-3xl text-black">
                                {contentSet[i].title}
                            </h3>
                            <ul className="pl-6 text-base sm:text-lg text-gray-800 flex flex-col gap-10">
                                {contentSet[i].content.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:border before:border-[#1B19E6]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box className="h-[2px] w-full sm:w-3/4 lg:w-1/3 bg-[#333367] rounded-full" />
            <h2 className="font-ivar text-1xl sm:text-3xl lg:text-5xl text-black text-center w-full sm:w-3/4 lg:w-1/2 px-2">
                {secTitle}
            </h2>
        </Box>
    );
};

export default ComparisonSection;