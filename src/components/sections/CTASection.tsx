import { Box } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "../buttons/PrimaryButton";

interface CTASectionProps {
  image: string;
  title?: string;
  subtitle?: string;
  content?: string;
  buttons?: {
    href: string | undefined;
    label: string;
    className?: string;
    colorVariant?: "default" | "secondary";
    icon?: string;
  }[];
}

export default function CTASection({
  image,
  title,
  subtitle,
  content,
  buttons,
}: CTASectionProps) {
  return (
    <Box className="relative w-full h-[40rem] lg:h-[50rem]">
      <Image
        src={image}
        alt="hero-section"
        className="object-cover object-center w-full h-full"
        quality={100}
        fill
        loading="lazy"
        unoptimized
      />

      <Box className="absolute inset-0 bg-black/50 z-0" />

      <Box className="absolute flex flex-col items-center right-0 top-0 left-0 z-10 gap-5 pt-10 pb-5 sm:pt-30 sm:pb-10 h-full justify-between">
        <Box className="flex flex-col justify-center items-center sm:gap-5 w-full sm:w-xlg px-4 text-center gap-5">
          {title && (
            <h1 className="font-ivar text-2xl sm:text-4xl lg:text-6xl w-full lg:w-2/3 text-center text-white">
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
                className={button.className}
                icon={button.icon}
                href={button.href}
                colorVariant={button.colorVariant}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
