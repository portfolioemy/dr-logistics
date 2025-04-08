"use client";
import { useState } from "react";
import TwoColsSection from "@/components/TwoColsSection";
import HeroSection from "@/components/HeroSection";
import { Box } from "@mui/material";
import data from "@/data/about.json";
import CustomerSection from "@/components/CustomerSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQsSection from "@/components/FAQSection";

export default function Home() {
  const { hero, sections, customers: customersData, howItWorks, faqs } = data;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Box className="flex flex-col justify-center items-center w-100%">
      <HeroSection
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
        buttons={hero.buttons}
      />

      {/* Second Section */}
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

      {/* Customer Section */}
      <CustomerSection
        image={customersData.image}
        title={customersData.title}
        customers={customersData.customers}
      />

      {/* How It Works Section */}
      <HowItWorksSection
        title={howItWorks.title}
        steps={howItWorks.steps.map((step) => ({
          ...step,
          number: parseInt(step.number, 10),
        }))}
        buttonText="Get My Best Rates"
      />

      {/* FAQs Section */}
      <FAQsSection
        title={faqs.title}
        items={faqs.items}
        activeIndex={activeIndex}
        toggle={toggle}
      />
    </Box>
  );
}