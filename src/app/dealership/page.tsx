"use client";
import TwoColsSection from "@/components/sections/TwoColsSection";
import { Box } from "@mui/material";
import data from "@/data/dealership.json";
import HeroSection from "@/components/sections/HeroSection";
import { useRouter } from "next/navigation";
import React from "react";
import FormSection from "@/components/sections/FormSection";
import ComparisonSection from "@/components/sections/ComparaisonSection";
import CTASection from "@/components/sections/CTASection";
import ctaData from "@/data/cta.json";


export default function Dealership() {
    const { hero, sections, form, comparison } = data;
    const { ctaSection } = ctaData;

    const router = useRouter();


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
                subtitle={hero.subtitle}
                content={hero.content}
                secTitle={hero.secTitle}
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
                    <Box className="flex flex-col flex-1 justify-center items-center gap-5 sm:px-0 lg:px-15">
                        {section.title && (
                            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl w-full text-black">{section.title}</h2>
                        )}
                        {section.content && (
                            <>
                                <p className="text-base w-full text-black">{section.content}</p>
                                <p className="text-base w-full text-black">{section.secContent}</p>
                            </>
                        )}
                    </Box>
                </TwoColsSection>
            ))}
            {/* Form section */}
            <FormSection
                title={form.title}
                image={form.image}
                onSubmit={handleSubmit}
            />

            {/* Comparison Section */}
            <ComparisonSection
                title={comparison.title}
                imageSet={comparison.imageSet}
                contentSet={comparison.contentSet}
                secTitle={comparison.secTitle}
            />
            {/* CTA Section */}
            <CTASection
                title={ctaSection.title}
                subtitle={ctaSection.subtitle}
                content={ctaSection.content}
                image={ctaSection.image}
                buttons={ctaSection.buttons}
            />


        </Box>

    );
}
