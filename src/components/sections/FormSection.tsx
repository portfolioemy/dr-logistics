import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { PrimaryButton } from "../buttons/Buttons";

interface FormSectionProps {
    title: string;
    image: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ title, image, onSubmit }) => {
    return (
        <Box className="w-full px-4 sm:px-10 py-20 mt-10 bg-black text-white flex flex-col items-center gap-10" id="form1">
            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-6xl w-full lg:w-2/3 text-white text-center ">
                {title}
            </h2>

            <Box className="flex flex-col lg:flex-row gap-10 w-full items-center">
                <Box className="w-full flex-1 flex flex-col gap-4 h-full">
                    <form className="flex flex-col gap-4 w-full h-full" onSubmit={onSubmit} >
                        <Box className="flex flex-col sm:flex-row gap-4 ">
                            <Box className="flex-1 flex flex-col gap-4">
                                <label htmlFor="first-name" className="text-lg text-white">
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
                                <label htmlFor="last-name" className="text-lg text-white">
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
                                <label htmlFor="email" className="text-lg text-white">
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
                                <label htmlFor="phone" className="text-lg text-white">
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
                            <label htmlFor="dealership-name" className="text-lg text-white">
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
                            <label htmlFor="dealership-location" className="text-lg text-white">
                                Dealership Location
                            </label>
                            <input
                                id="dealership-location"
                                type="text"
                                placeholder="Dealership Location"
                                className="p-5 rounded-md text-black bg-white text-lg"
                            />
                        </Box>

                        <Box className="flex justify-start">
                            <PrimaryButton label="Submit" className="cta-blue" />
                        </Box>

                    </form>
                </Box>

                <Box className="w-full flex-1 flex justify-center h-full">
                    <Image
                        src={image}
                        alt="Form Section"
                        className="object-cover "
                        width={700}
                        height={700}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default FormSection;