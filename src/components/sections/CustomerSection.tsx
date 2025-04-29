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
  subTitle?: string;
  customers: Customer[];
}

const CustomerSection: React.FC<CustomerSectionProps> = ({
  image,
  title,
  subTitle,
  customers,
}) => {
  return (
    <Box className="flex flex-col items-center gap-25 mt-10 w-full px-10 py-25 bg-[#0F0D1D]">
      <Box className="w-full lg:w-1/2 flex flex-col items-center gap-2">
        <h2 className="font-ivar text-2xl sm:text-4xl lg:text-5xl text-center text-white">
          {title}
        </h2>
        {subTitle && (
          <h3 className="font-ivar text-2xl sm:text-4xl lg:text-5xl text-center text-white">
            {subTitle}
          </h3>
        )}
      </Box>

      <Box className="flex flex-col lg:flex-row gap-5 w-full items-stretch min-h-0">
        <Box className="flex-1 flex justify-center items-center">
          <div className="relative w-full h-70 sm:h-100 md:h-120 lg:h-full">
            <Image
              src={image}
              alt="customer-section"
              fill
              className="object-cover rounded-xl"
              quality={100}
            />
          </div>
        </Box>

        <Box className="flex flex-col gap-5 w-full flex-1 self-stretch justify-center">
          {customers.map((customer, index) => (
            <Box
              key={index}
              className="flex flex-col gap-5 border-b border-white/20 bg-white p-10 rounded-lg"
            >
              <Box className="flex gap-1">
                {customer.stars.map((star, i) => (
                  <Image key={i} src={star} alt="star" width={20} height={20} />
                ))}
              </Box>
              <p className="text-base text-black">&quot;{customer.review}&quot;</p>
              <span className="text-base text-black font-semibold">
                {customer.name}
              </span>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerSection;
