import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface Customer {
    stars: string[];
    review: string;
    name: string;
}

interface CustomerSectionProps {
    image: string;
    title: string;
    customers: Customer[];
}

const CustomerSection: React.FC<CustomerSectionProps> = ({ image, title, customers }) => {
    return (
        <Box className="flex flex-col justify-between items-center gap-10  mt-10 w-full p-10 lg:p-15 bg-[#0F0D1D] ">
            <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl w-full lg:w-1/2  text-center text-white">{title}</h2>
            <Box className="flex flex-col lg:flex-row gap-10 w-full items-center">
                <Box className="flex-1 flex justify-center items-center h-full">
                    <Image
                        src={image}
                        alt="customer-section"
                        className="object-cover rounded-xl"
                        width={2000}
                        height={2000}
                        quality={100}
                    />
                </Box>
                <Box className="flex flex-col gap-10 w-full flex-1 align-center justify-center h-full">
                    {customers.map((customer, index) => (
                        <Box
                            key={index}
                            className="flex flex-col gap-5 border-b border-white/20  bg-white p-10 rounded-lg"
                        >
                            <Box className="flex gap-1">
                                {customer.stars.map((star, i) => (
                                    <Image key={i} src={star} alt="star" width={20} height={20} />
                                ))}
                            </Box>
                            <p className="text-base text-black">
                                &quot;{customer.review}&quot;
                            </p>
                            <span className="text-base text-black">_{customer.name}</span>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default CustomerSection;