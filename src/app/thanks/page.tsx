"use client";
import { Box } from "@mui/material";
import data from "@/data/thanks.json";
import Link from "next/link";
import Image from "next/image";


export default function ThanksPage() {
    const { hero } = data;

    return (
        <Box className="relative w-full h-screen text-white">
            <Image
                src={hero.image}
                alt="Thank You"
                className="absolute inset-0 w-full h-full object-cover z-0"
                fill
                quality={100}
            />
            <Box className="absolute inset-0 bg-black opacity-50 z-10" />
            <Box className="relative z-20 h-full flex flex-col justify-between items-center text-center py-40 px-4">

                <Box className="flex flex-col gap-5 w-full sm:w-xlg px-4 text-center">
                    <Link href="/" className="text-lg self-start text-white">
                        ← Back to Home
                    </Link>
                    <Box className="flex flex-col justify-center items-center gap-3 sm:gap-5 w-full sm:w-xlg px-4 text-center">
                        <h1 className="font-ivar text-4xl sm:text-5xl md:text-6xl w-full sm:w-lg text-white">{hero.title}</h1>
                        <p className="text-xl w-full sm:w-1/2 text-white">{hero.content}</p>
                    </Box>

                </Box>
                <Box className="flex flex-col justify-center items-center gap-3 sm:gap-5 w-full sm:w-xlg px-4 text-center">
                    <h2 className="font-ivar text-2xl sm:text-3xl lg:text-5xl w-full text-white">{hero.subtitle}</h2>
                    <p className="text-xl w-full sm:w-1/2 text-white">{hero.subcontent}</p>
                </Box>
            </Box>
            
        </Box>
    );
}
