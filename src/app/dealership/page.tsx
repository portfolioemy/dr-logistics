"use client";
import TwoColsSection from "@/components/TwoColsSection";
import { Box } from "@mui/material";
import data from "@/data/dealership.json";
import HeroSection from "@/components/HeroSection";
import { useRouter } from "next/navigation";
import React from "react";
import FormSection from "@/components/FormSection";
import ComparisonSection from "@/components/ComparaisonSection";

export default function Dealership() {
    const { hero, sections, form, comparison } = data;
    const router = useRouter();

    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.push("/thanks");
    };

    return (
        <Box className="flex flex-col justify-center items-center w-100%">
            {/* Hero section */}
            <HeroSection
                image={hero.image}
                title={hero.title}
                buttons={hero.buttons}
            />
            {/* Second section */}
            {sections.map((section, index) => (
                <TwoColsSection
                    key={index}
                    img={section.image}
                    imageSet={section.imageSet}
                    contentSet={section.contentSet}
                    reversed={section.reversed}
                >
                    <Box className="flex flex-col flex-1 justify-center items-center gap-5">
                        {section.title && (
                            <h2 className="font-ivar text-1xl sm:text-3xl lg:text-5xl w-full text-black">{section.title}</h2>
                        )}
                        {section.content && (
                            <p className="text-sm sm:text-base lg:text-lg w-full text-black">{section.content}</p>
                        )}
                    </Box>
                </TwoColsSection>
            ))}
            {/* Form section */}
            <FormSection title={form.title} image={form.image} onSubmit={handleSubmit} />

            {/* Comparison Section */}
            <ComparisonSection
                title={comparison.title}
                content={comparison.content}
                imageSet={comparison.imageSet}
                contentSet={comparison.contentSet}
                secTitle={comparison.secTitle}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />


        </Box>

    );
}
