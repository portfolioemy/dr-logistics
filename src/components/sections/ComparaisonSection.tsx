import { Box } from "@mui/material";
import Image from "next/image";

interface ComparisonSectionProps {
    title: string;
    content:string;
    imageSet: string[];
    contentSet: { 
        title: string; 
        content: string[]; 
        subContent?: string;
        risksTitle?:string;
        risks?: string[];
    }[];
    secTitle: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
    title,
    content,
    imageSet,
    contentSet,
    secTitle,
}) => {
    
    return (
        <Box className="w-full py-15 flex flex-col items-center gap-10 lg:gap-15">
                <h2 className="font-ivar text-2xl sm:text-4xl lg:text-6xl w-full lg:w-2/3 text-center text-black px-10">{title}</h2>
                <p className="font-inter  text-center text-black w-full lg:w-2/3 px-10">{content}</p>

            <Box className="w-full flex flex-col lg:flex-row justify-center items-stretch relative py-10 px-15">

                <Box className="flex flex-col gap-15 w-full items-stretch">
                    {[0, 1].map((i) => (
                        <Box
                            key={i}
                            className={`flex flex-col lg:flex-row justify-center items-center gap-10 w-full relative ${
                                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
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
                                <h3 className="font-ivar text-3xl text-[#131222] font-normal">
                                    {contentSet[i].title}
                                </h3>
                                {contentSet[i].subContent && (
                                    <p className="text-base sm:text-lg text-black w-full lg:w-5/6">{contentSet[i].subContent}</p>
                                )}
                                <ul className="text-black flex flex-col gap-5 lg:gap-5">
                                    {contentSet[i].content.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-[#1B19E6] font-inter"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {contentSet[i].risksTitle && (
                                    <h3 className="font-ivar text-3xl text-[#131222] font-normal">
                                    {contentSet[i].risksTitle}
                                </h3>

                                )}
                                {contentSet[i].risks && (
                                    <Box className="">
                                        <ul className=" text-black flex flex-col gap-5 lg:gap-5">
                                            {contentSet[i].risks.map((risk, idx) => (
                                                <li
                                                    key={idx}
                                                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:border before:border-[#1B19E6]  font-inter"
                                                >
                                                    {risk}
                                                </li>
                                            ))}
                                        </ul>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box className="h-[1px] w-full sm:w-3/4 lg:w-1/3 bg-[#333367] rounded-full" />
            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-6xl w-full lg:w-2/3 text-center text-black">
                {secTitle}
            </h2>
        </Box>
    );
};

export default ComparisonSection;