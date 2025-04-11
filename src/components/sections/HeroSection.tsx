import { Box } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "../buttons/Buttons";

interface HeroSectionProps {
  image: string;
  title?: string;
  subtitle?: string;
  content?: string;
  secTitle?: string;
  buttons?: { label: string; variant: string; className?: string; icon?: string; href?: string }[];
}

export default function HeroSection({ image, title, subtitle, buttons, content ,secTitle }: HeroSectionProps) {
  return (
    <Box className="relative w-full h-screen mb-10">
      <Image src={image} alt="hero-section" className="w-full h-screen object-cover object-center" width={3000} height={2000} quality={100} loading="eager" unoptimized priority/>
      <Box className="absolute flex flex-col items-center w-full h-screen right-0 top-0 left-0 z-10 gap-5 sm:py-10 py-30 lg:py-40 justify-center sm:justify-between">
        <Box className="flex flex-col justify-center items-center gap-3 sm:gap-5 w-full sm:w-xlg px-4 text-center">
          {title && (
            <h1 className="font-ivar text-4xl sm:text-5xl md:text-6xl w-full sm:w-1/2 text-white">
              {title}
            </h1>
          )}
          {secTitle && (
            <h2 className="font-ivar text-4xl sm:text-5xl md:text-6xl w-full sm:w-1/2 text-white">
              {secTitle}
            </h2>
          )}
          {content && (
            <h3 className="font-ivar text-2xl lg:text-4xl w-full sm:w-1/2 text-white">
              {content}
            </h3>
          )}
          {subtitle && (
            <h3 className="font-ivar text-2xl lg:text-4xl text-white font-Inter">
              {subtitle}
            </h3>
          )}
        </Box>

        {buttons && buttons.length > 0 && (
          <Box className="flex justify-center items-center w-full gap-3 sm:gap-5 flex-wrap px-4">
            {buttons.map((button, index) => (
              <PrimaryButton
                key={index}
                label={button.label}
                variant={button.variant as "outlined" | "text" | "contained"}
                className={button.className}
                icon={button.icon}
                href={button.href}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
