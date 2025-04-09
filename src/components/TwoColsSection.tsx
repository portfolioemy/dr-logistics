import { Box } from "@mui/material";
import { useState } from "react";

interface TwoColsSectionProps {
  img?: string;
  imageSet?: string[];
  contentSet?: { title: string; content: string }[];
  reversed?: boolean;
  children?: React.ReactNode;
}

const TwoColsSection: React.FC<TwoColsSectionProps> = ({ img, imageSet, contentSet, reversed, children }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const isMultiStep = imageSet && contentSet;

  return (
    <Box
      className={`flex flex-col md:flex-row ${reversed ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center gap-15 w-full p-10`}
    >
      <Box className="flex flex-1 gap-10 relative">
        {isMultiStep && (
          <Box className="relative flex flex-col items-center pt-1">
            <Box className="absolute top-1 bottom-0 w-px bg-gray-300 left-1/2 -translate-x-1/2 z-0" />

            <Box className="flex flex-col justify-between h-full z-10">
              {contentSet.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setStepIndex(index)}
                  className="w-8 h-8 rounded-full border-2 cursor-pointer last:mb-0 transition-all duration-300"
                  style={{
                    backgroundColor: stepIndex === index ? "#1B19E6" : "#fff",
                    borderColor: stepIndex === index ? "#1B19E6" : "#333367",
                  }}
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Content blocks aligned with stepper */}
        <Box className="flex flex-col gap-16">
          {isMultiStep ? (
            contentSet.map((item, index) => (
              <Box key={index} className="flex flex-col gap-3">
                <h3 className="font-ivar text-xl sm:text-2xl lg:text-3xl text-black">{item.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-black">{item.content}</p>
              </Box>
            ))
          ) : (
            children
          )}
        </Box>
      </Box>

      {/* Right column: Dynamic image */}
      <Box className="flex-1 justify-center items-center mt-10 md:mt-0">
        <img
          src={isMultiStep ? imageSet[stepIndex] : img}
          alt="Step visual"
          className="object-cover rounded-xl aspect-square transition-all duration-500"
        />
      </Box>
    </Box>
  );
};

export default TwoColsSection;
