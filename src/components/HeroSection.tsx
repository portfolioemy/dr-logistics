import { Box, Button } from "@mui/material";
import Link from "next/link";

interface HeroSectionProps {
  image: string;
  title?: string;
  subtitle?: string;
  buttons?: { label: string; variant: string; className?: string; icon?: string }[];
}

export default function HeroSection({ image, title, subtitle, buttons }: HeroSectionProps) {
  return (
    <Box className="relative w-full h-screen">
      <img src={image} alt="hero-section" className="w-full h-screen object-cover" />
      <Box className="bg-black-fade absolute flex flex-col items-center w-full h-screen right-0 top-0 left-0 z-10 gap-5 pt-10 pb-5 sm:pt-30 sm:pb-10 justify-center sm:justify-between">
        <Box className="flex flex-col justify-center items-center gap-3 sm:gap-5 w-full sm:w-xlg px-4 text-center">
          {title && (
            <h1 className="font-ivar text-xl sm:text-2xl md:text-6xl w-full sm:w-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base lg:text-lg">
              {subtitle}
            </p>
          )}
        </Box>

        {buttons && buttons.length > 0 && (
          <Box className="flex justify-center items-center w-full gap-3 sm:gap-5 flex-wrap px-4">
            {buttons.map((button, index) => {
              const isDealershipButton = button.label.toLowerCase().includes("dealership");
              const buttonContent = (
                <Button
                  variant={button.variant as "outlined" | "text" | "contained"}
                  className={`${button.className} text-xs sm:text-sm`}
                >
                  {button.icon && (
                    <img
                      src={button.icon}
                      alt="button-icon"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  )}
                  {button.label}
                </Button>
              );

              return isDealershipButton ? (
                <Link href="/dealership" key={index}>{buttonContent}</Link>
              ) : (
                <span key={index}>{buttonContent}</span>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}
