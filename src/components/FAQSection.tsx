import React from "react";
import { Box } from "@mui/material";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQsSectionProps {
    title: string;
    items: FAQ[];
    activeIndex: number | null;
    toggle: (index: number) => void;
}

const FAQsSection: React.FC<FAQsSectionProps> = ({ title, items, activeIndex, toggle }) => {
    return (
        <Box className="w-full px-6 pb-40 pt-10 max-w-4xl flex flex-col text-black gap-5">
            <h2 className="font-ivar text-1xl sm:text-3xl lg:text-5xl w-full text-black text-center">{title}</h2>
            {items.map((faq, index) => (
                <Box
                    key={index}
                    className="border-b border-gray-300 py-4 cursor-pointer"
                    onClick={() => toggle(index)}
                >
                    <Box className="flex justify-between items-center">
                        <h3 className="text-base sm:text-lg lg:text-2xl text-black">
                            {index + 1}. {faq.question}
                        </h3>
                        <span>
                            {activeIndex === index ? (
                                <img src="/images/up.svg" alt="up-arrow" />
                            ) : (
                                <img src="/images/down.svg" alt="down-arrow" />
                            )}
                        </span>
                    </Box>
                    {activeIndex === index && (
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700">{faq.answer}</p>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default FAQsSection;