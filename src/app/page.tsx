// pages/index.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Weather from "@/components/Weather";
import Weather from "./components/Weather";
import { LocationProps } from "./types/types";

const Home: React.FC = () => {
  const company = "Clima Cast";

  const [currentLocation, setCurrentLocation] = useState<LocationProps | null>(
    null
  );

  useEffect(() => {
    // Use Geolocation API to get real-time location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position);
          setCurrentLocation({
            name: "Your Location",
            lat: latitude?.toString(),
            lon: longitude?.toString(),
          });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-between mt-[139px] pb-3 mb-5">
      <Image width={100} height={100} src="/logo.png" alt={company} />
      <h1 className="text-3xl font-bold mb-4">{company}</h1>
      <Weather location={currentLocation} />
    </main>
  );
};

export default Home;
