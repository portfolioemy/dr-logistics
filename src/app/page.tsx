"use client";
import { useState } from "react";
import TwoColsSection from "@/components/sections/TwoColsSection";
import HeroSection from "@/components/sections/HeroSection";
import { Box } from "@mui/material";
import data from "@/data/about.json";
import CustomerSection from "@/components/sections/CustomerSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FAQsSection from "@/components/sections/FAQSection";
import { PrimaryButton } from "@/components/buttons/Buttons";
import ctaData from "@/data/cta.json";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const { hero, sections, customers: customersData, howItWorks, faqs ,} = data;
  const { ctaSection } = ctaData;
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
      />
      <PrimaryButton
        label={"Get My Best Rates"}
        variant="contained"
        className="cta-blue"
        href="/thanks"
      />

      {/* FAQs Section */}
      <FAQsSection
        title={faqs.title}
        items={faqs.items}
        activeIndex={activeIndex}
        toggle={toggle}
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