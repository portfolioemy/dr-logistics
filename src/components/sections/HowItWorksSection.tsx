import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface Step {
    number: number;
    title: string;
    content: string;
    image: string;
}

interface HowItWorksSectionProps {
    title: string;
    steps: Step[];
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ title, steps }) => {
    return (
        <Box className="w-full px-4 sm:px-6 py-20 flex flex-col items-center text-black gap-10">
            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl w-full lg:w-1/2  text-center text-black">
                {title}
            </h2>

            <Box className="relative w-full max-w-7xl flex flex-col gap-23">
                <Box className="absolute left-5 top-0 bottom-30 w-px bg-[#333367] hidden lg:flex z-0" />

                {steps.map((step, index) => (
                    <Box
                        key={index}
                        className="flex flex-col lg:flex-row items-start gap-6 lg:gap-20 relative z-10"
                    >
                        <Box className="flex flex-row lg:flex-1 gap-4 relative">
                            <Box className="min-w-[40px] flex justify-center">
                                <Box
                                    className={`w-6 sm:w-10 h-6 sm:h-10 rounded-full flex items-center justify-center  text-2sm z-10 bg-[#1B19E6] border-[1px] border-[#333367] text-white`}
                                >
                                    {step.number}
                                </Box>
                            </Box>

                            <Box className="flex flex-col gap-2 sm:gap-4 lg:gap-6 w-full sm:w-1/2 lg:w-3/4">
                                <h3 className="font-ivar text-xl sm:text-2xl lg:text-3xl">{step.title}</h3>
                                <p className="text-sm sm:text-base lg:text-lg text-black">{step.content}</p>
                            </Box>
                        </Box>

                        <Box className="self-center lg:self-start">
                            <Image
                                src={step.image}
                                alt={`step-${step.number}`}
                                className=""
                                width={150}
                                height={150}
                                quality={100}

                            />
                        </Box>
                    </Box>
                ))}
            </Box>



        </Box>
    );
};

export default HowItWorksSection;