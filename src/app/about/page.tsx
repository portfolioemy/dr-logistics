"use client";
import TwoColsSection from "@/components/TwoColsSection";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function About() {
  return (
    <Box className="flex flex-col justify-center items-center w-100%">
      <img
        src={"/images/hero.webp"}
        alt="hero-section"
        className="w-full h-screen object-cover"
      />
      <Box className="bg-black-fade absolute flex flex-col justify-between items-center w-full h-screen right-0 top-0 left-0 z-10 gap-5 pt-30 pb-10">
        <Box className="flex flex-col justify-center items-center gap-5 w-xlg">
          <h1 className="font-ivar text-6xl text-center w-lg ">
            Elevate Your Auto Transport Experience
          </h1>
          <h2 className="font-ivar text-4xl text-center w-full ">
            Reliable. Secure. White-Glove Service.
          </h2>
        </Box>
        <Box className="flex justify-center items-center w-full gap-5">
          <Button variant="outlined" className="cta-btn">
            For Dealerships
          </Button>
          <Button variant="outlined" className="cta-btn cta-blue">
            Get a Quote
          </Button>
          <Button variant="outlined" className="cta-btn gap-3">
            <img
              src={"/images/phone-icon.svg"}
              alt="hero-section"
              className="w-5 h-5"
            />
            (866) 782-7519
          </Button>
        </Box>
      </Box>
      <TwoColsSection img={"/images/Trust-duPont-Registry-Logistics.webp"} reversed={false}>
      <Box className="flex flex-col flex-1 justify-center items-center gap-5">
          <h2 className="font-ivar text-6xl w-full ">
            Why Car Owners Trust duPont Registry Logistics for Vehicle Transport
          </h2>
          <p className="font-ivar text-2xl w-full ">
            At duPont REGISTRY Logistics, we understand that your vehicle is
            more than just transportation, it’s an investment, a passion, and a
            statement.
            <br />
            <br /> Whether you’re relocating, purchasing a luxury car, attending
            an auto show, or shipping a vehicle to a collector, our premium auto
            transport service ensures a seamless and stress-free experience.
          </p>
        </Box>
      </TwoColsSection>
      <TwoColsSection img={"/images/Trust-duPont-Registry-Logistics.webp"} reversed={false}>
      <Box className="flex flex-col flex-1 justify-center items-center gap-5">
          <h2 className="font-ivar text-6xl w-full ">
            Why Car Owners Trust duPont Registry Logistics for Vehicle Transport
          </h2>
          <p className="font-ivar text-2xl w-full ">
            At duPont REGISTRY Logistics, we understand that your vehicle is
            more than just transportation, it’s an investment, a passion, and a
            statement.
            <br />
            <br /> Whether you’re relocating, purchasing a luxury car, attending
            an auto show, or shipping a vehicle to a collector, our premium auto
            transport service ensures a seamless and stress-free experience.
          </p>
        </Box>
      </TwoColsSection>
    </Box>
  );
}
