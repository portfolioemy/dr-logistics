import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

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
        <Box className="w-full px-6 pb-20 pt-20 max-w-4xl flex flex-col text-black gap-5 align-center justify-center">
            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl w-full   text-center text-black self-center">{title}</h2>
            {items.map((faq, index) => (
                <Box
                    key={index}
                    className="border-b border-black py-5 cursor-pointer "
                    onClick={() => toggle(index)}
                >
                    <Box className="flex justify-between items-center">
                        <h3 className="text-xl lg:text-2xl text-black flex-4">
                            {index + 1}. {faq.question}
                        </h3>
                        <span className="flex-1 flex justify-end">
                            {activeIndex === index ? (
                                <Image src="/images/up.svg" alt="up-arrow" width={20}
                                    height={20} />
                            ) : (
                                <Image src="/images/down.svg" alt="down-arrow" width={20}
                                    height={20} />
                            )}
                        </span>
                    </Box>
                    {activeIndex === index && (
                        <p className="mt-4 text-lg text-black whitespace-pre-line">{faq.answer}</p>

                    )}
                </Box>
            ))}
        </Box>
    );
};

export default FAQsSection;