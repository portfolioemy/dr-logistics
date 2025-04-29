import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "../buttons/PrimaryButton";

interface FormSectionProps {
  title: string;
  image: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ title, image, onSubmit }) => {
  return (
    <Box
      id="form1"
      className="px-4 sm:px-10 py-20 mt-10 bg-black text-white flex flex-col gap-10 w-full items-center"
    >
      <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl w-full lg:w-2/3 text-center">
        {title}
      </h2>

      <Box className="flex flex-col lg:flex-row gap-10 w-full items-stretch min-h-0">
        <Box className="w-full flex-1 flex flex-col gap-4 self-stretch">
          <form
            className="flex flex-col gap-4 w-full h-full"
            onSubmit={onSubmit}
          >
            <Box className="flex flex-col sm:flex-row gap-4">
              <Box className="flex-1 flex flex-col gap-4">
                <label htmlFor="first-name" className="text-lg">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First Name"
                  className="p-4 rounded-md text-black bg-white text-lg"
                />
              </Box>
              <Box className="flex-1 flex flex-col gap-4">
                <label htmlFor="last-name" className="text-lg">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  className="p-4 rounded-md text-black bg-white text-lg"
                />
              </Box>
            </Box>

            <Box className="flex flex-col sm:flex-row gap-4">
              <Box className="flex-1 flex flex-col gap-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="p-4 rounded-md text-black bg-white text-lg"
                />
              </Box>
              <Box className="flex-1 flex flex-col gap-4">
                <label htmlFor="phone" className="text-lg">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="p-4 rounded-md text-black bg-white text-lg"
                />
              </Box>
            </Box>

            <Box className="flex flex-col gap-4">
              <label htmlFor="dealership-name" className="text-lg">
                Dealership Name
              </label>
              <input
                id="dealership-name"
                type="text"
                placeholder="Dealership Name"
                className="p-4 rounded-md text-black bg-white text-lg"
              />
            </Box>

            <Box className="flex flex-col gap-4">
              <label htmlFor="dealership-location" className="text-lg">
                Dealership Location
              </label>
              <input
                id="dealership-location"
                type="text"
                placeholder="Dealership Location"
                className="p-4 rounded-md text-black bg-white text-lg"
              />
            </Box>

            <Box className="flex justify-start mt-4">
              <PrimaryButton label="Submit" colorVariant="secondary" />
            </Box>
          </form>
        </Box>

        <Box className="w-full flex-1 flex justify-center items-center self-stretch">
          <div className="relative w-full h-64 lg:h-full">
            <Image
              src={image}
              alt="Form Section"
              fill
              className="object-cover rounded-xl"
              quality={100}
            />
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default FormSection;
