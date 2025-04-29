import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TwoColsSectionProps {
  img?: string;
  imageSet?: string[];
  contentSet?: { title: string; content: string }[];
  reversed?: boolean;
  children?: React.ReactNode;
}

const TwoColsSection: React.FC<TwoColsSectionProps> = ({
  img,
  imageSet,
  contentSet,
  reversed,
  children,
}) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const isMultiStep = imageSet && contentSet;

  useEffect(() => {
    if (isMultiStep) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setStepIndex((prev) => (prev + 1) % imageSet.length);
          setFade(true);
        }, 300);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMultiStep, imageSet]);

  return (
    <Box
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } justify-center items-center gap-10 md:gap-20 w-full px-4 sm:px-6 py-8 sm:py-10 md:px-10`}
    >
      <Box className="flex flex-1 relative gap-6 sm:gap-10">
        {isMultiStep && (
          <Box className="relative flex flex-col items-center pt-1">
            <Box className="absolute top-1 bottom-0 w-px bg-[#333367] left-1/2 -translate-x-1/2 z-0" />
            <Box className="flex flex-col justify-between h-full z-10">
              {contentSet.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setStepIndex(index)}
                  className="w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 cursor-pointer last:mb-0 transition-all duration-300"
                  style={{
                    backgroundColor: stepIndex === index ? "#1B19E6" : "#fff",
                    borderColor: stepIndex === index ? "#1B19E6" : "#333367",
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        <Box className="flex flex-col gap-10 sm:gap-15">
          {isMultiStep ? (
            contentSet.map((item, index) => (
              <Box key={index} className="flex flex-col gap-2 sm:gap-3">
                <h3 className="font-ivar text-2xl text-black">
                  {item.title}
                </h3>
                <p className="w-full sm:w-3/4 text-base text-black">
                  {item.content}
                </p>
              </Box>
            ))
          ) : (
            children
          )}
        </Box>
      </Box>

      <Box className="flex-1 flex justify-center items-center">
        <Image
          src={
            isMultiStep
              ? imageSet?.[stepIndex] || "/images/Trust-duPont-Registry-Logistics.webp"
              : img || "/images/Trust-duPont-Registry-Logistics.webp"
          }
          alt="Step visual"
          className={`object-cover rounded-lg sm:rounded-xl transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          width={1000}
          height={1000}
          loading="eager"
        />
      </Box>
    </Box>
  );
};

export default TwoColsSection;
