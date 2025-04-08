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
        <Box className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full p-10 lg:p-20 bg-[#0F0D1D] text-white">
            <Box className="flex-1 flex justify-center items-center">
                <img
                    src={image}
                    alt="customer-section"
                    className="w-full h-full object-cover rounded-xl"
                />
            </Box>

            <Box className="flex flex-col gap-10 w-full flex-1">
                <h2 className="font-ivar text-1xl sm:text-3xl lg:text-5xl w-full text-white">{title}</h2>
                {customers.map((customer, index) => (
                    <Box
                        key={index}
                        className="flex flex-col gap-2 border-b border-white/20 pb-5 bg-white p-5 rounded-lg"
                    >
                        <Box className="flex gap-1">
                            {customer.stars.map((star, i) => (
                                <Image key={i} src={star} alt="star" width={20} height={20} />
                            ))}
                        </Box>
                        <p className="text-sm sm:text-base lg:text-lg italic text-black">
                            &quot;{customer.review}&quot;
                        </p>
                        <span className="text-sm font-bold text-black">__{customer.name}</span>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CustomerSection;