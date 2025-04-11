import { Box } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "../buttons/Buttons";

interface CTASectionProps {
  image: string;
  title?: string;
  subtitle?: string;
  content?: string;
  buttons?: {
    href: string | undefined; label: string; variant: string; className?: string; icon?: string 
}[];
}

export default function CTASection({ image, title, subtitle,content,  buttons }: CTASectionProps) {
  return (
    <Box className="relative w-full h-[50rem]">
    <Image src={image} alt="hero-section" className="object-cover w-full h-[50rem]" width={3000} height={3000} quality={100} />
      <Box className="absolute flex flex-col items-center right-0 top-0 left-0 z-10 gap-5 pt-10 pb-5 sm:pt-30 sm:pb-10 h-full justify-between ">
        <Box className="flex flex-col justify-center items-center sm:gap-5 w-full sm:w-xlg px-4 text-center">
          {title && (
            <h1 className="font-ivar text-4xl sm:text-5xl md:text-6xl  sm:w-lg text-white">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg text-white font-Inter w-full lg:w-1/3">
              {subtitle}
            </p>
          )}
          {content && (
            <p className="text-lg text-white font-Inter w-full lg:w-1/3">
              {content}
            </p>
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
