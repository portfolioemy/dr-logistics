import { Box } from "@mui/material";
import Image from "next/image";

interface ComparisonSectionProps {
    title: string;
    imageSet: string[];
    contentSet: { title: string; content: string[] }[];
    secTitle: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
    title,
    imageSet,
    contentSet,
    secTitle,
}) => {
    
    return (
        <Box className="w-full py-15 flex flex-col items-center gap-10 lg:gap-20">
                <h2 className="font-ivar text-2xl sm:text-4xl lg:text-6xl w-full lg:w-2/3 text-center text-black">{title}</h2>

            <Box className="w-full flex flex-col lg:flex-row justify-center items-stretch relative py-10 px-10">

                <Box className="flex flex-col gap-20 w-full">
                    {[0, 1].map((i) => (
                        <Box
                            key={i}
                            className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full relative"
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
                            <Box className="flex-1 flex flex-col gap-6 justify-center items-start">
                                <h3 className="font-ivar text-3xl lg:text-5xl text-black font-normal">
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
            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl w-full lg:w-2/3 text-center text-black">
                {secTitle}
            </h2>
        </Box>
    );
};

export default ComparisonSection;