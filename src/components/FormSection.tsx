import React from "react";
import { Box } from "@mui/material";

interface FormSectionProps {
    title: string;
    image: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ title, image, onSubmit }) => {
    return (
        <Box className="w-full px-4 sm:px-10 py-10 bg-black text-white flex flex-col items-center gap-10">
            <h2 className="font-ivar text-1xl sm:text-3xl lg:text-5xl w-full text-black text-center text-white">
                {title}
            </h2>

            <Box className="flex flex-col lg:flex-row gap-10 w-full items-center">
                <Box className="w-full flex-1 flex flex-col gap-4">
                    <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
                        <Box className="flex flex-col sm:flex-row gap-4">
                            <Box className="flex-1 flex flex-col gap-1">
                                <label htmlFor="first-name" className="text-sm text-white">
                                    First Name
                                </label>
                                <input
                                    id="first-name"
                                    type="text"
                                    placeholder="First Name"
                                    className="p-3 rounded-md text-black bg-white"
                                />
                            </Box>
                            <Box className="flex-1 flex flex-col gap-1">
                                <label htmlFor="last-name" className="text-sm text-white">
                                    Last Name
                                </label>
                                <input
                                    id="last-name"
                                    type="text"
                                    placeholder="Last Name"
                                    className="p-3 rounded-md text-black bg-white"
                                />
                            </Box>
                        </Box>

                        <Box className="flex flex-col sm:flex-row gap-4">
                            <Box className="flex-1 flex flex-col gap-1">
                                <label htmlFor="email" className="text-sm text-white">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="p-3 rounded-md text-black bg-white"
                                />
                            </Box>
                            <Box className="flex-1 flex flex-col gap-1">
                                <label htmlFor="phone" className="text-sm text-white">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="p-3 rounded-md text-black bg-white"
                                />
                            </Box>
                        </Box>

                        <Box className="flex flex-col gap-1">
                            <label htmlFor="dealership-name" className="text-sm text-white">
                                Dealership Name
                            </label>
                            <input
                                id="dealership-name"
                                type="text"
                                placeholder="Dealership Name"
                                className="p-3 rounded-md text-black bg-white"
                            />
                        </Box>

                        <Box className="flex flex-col gap-1">
                            <label htmlFor="dealership-location" className="text-sm text-white">
                                Dealership Location
                            </label>
                            <input
                                id="dealership-location"
                                type="text"
                                placeholder="Dealership Location"
                                className="p-3 rounded-md text-black bg-white"
                            />
                        </Box>

                        <button type="submit" className="cta-btn cta-blue w-fit text-white">
                            Submit
                        </button>
                    </form>
                </Box>

                <Box className="w-full flex-1 flex justify-center">
                    <img
                        src={image}
                        alt="Form Section"
                        className="w-full h-full object-cover rounded-xl max-w-md lg:max-w-full"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default FormSection;