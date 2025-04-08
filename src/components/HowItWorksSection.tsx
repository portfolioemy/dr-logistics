import React from "react";
import { Box, Button } from "@mui/material";

interface Step {
    number: number;
    title: string;
    content: string;
    image: string;
}

interface HowItWorksSectionProps {
    title: string;
    steps: Step[];
    buttonText: string;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ title, steps, buttonText }) => {
    return (
        <Box className="w-full px-4 sm:px-6 py-10 flex flex-col items-center text-black gap-10">
            <h2 className="font-ivar text-1xl sm:text-3xl lg:text-5xl w-full text-black text-center">
                {title}
            </h2>

            <Box className="relative w-full max-w-7xl flex flex-col gap-23">
                <Box className="absolute left-5 top-0 bottom-30 w-px bg-gray-300 hidden lg:flex z-0" />

                {steps.map((step, index) => (
                    <Box
                        key={index}
                        className="flex flex-col lg:flex-row items-start gap-6 lg:gap-20 relative z-10"
                    >
                        <Box className="flex flex-row lg:flex-1 gap-4 relative">
                            <Box className="min-w-[40px] flex justify-center">
                                <Box
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10`}
                                    style={{
                                        backgroundColor: index === 0 ? "#1B19E6" : "#ffffff",
                                        border: "2px solid #333367",
                                        color: index === 0 ? "#ffffff" : "#000000",
                                    }}
                                >
                                    {step.number}
                                </Box>
                            </Box>

                            <Box className="flex flex-col gap-2 sm:gap-4 lg:gap-6 w-full sm:w-3/4 lg:w-1/2">
                                <h3 className="font-semibold text-base sm:text-lg lg:text-xl">{step.title}</h3>
                                <p className="text-sm sm:text-base lg:text-lg text-gray-700">{step.content}</p>
                            </Box>
                        </Box>

                        <Box className="justify-center lg:justify-end">
                            <img
                                src={step.image}
                                alt={`step-${step.number}`}
                                className="w-full max-w-sm"
                            />
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box className="flex justify-center py-10">
                <Button className="cta-blue cta-btn">{buttonText}</Button>
            </Box>
        </Box>
    );
};

export default HowItWorksSection;