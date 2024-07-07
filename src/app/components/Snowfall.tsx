"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Petal {
  id: number;
  x: number;
  rotate: number;
  scale: number;
  image: string;
}

const images = ["/petal1.svg", "/petal2.svg", "/petal3.svg"]; // Array of images

const generateSnowflake = (imageIndex: number): Petal => {
  return {
    id: Date.now() + Math.random(), // Unique ID for each petal
    x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 0), // Check for window object
    rotate: Math.random() * 30,
    scale: Math.random() * 5 + 1,
    image: images[imageIndex % images.length], // Cycle through the images
  };
};

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Petal[]>([]);
  const [imageIndex, setImageIndex] = useState<number>(0); // Counter for images

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure window is available for client-side rendering

    const interval = setInterval(() => {
      const newSnowflake = generateSnowflake(imageIndex);
      setImageIndex((prevIndex) => prevIndex + 1);

      setSnowflakes((prevSnowflakes) => [...prevSnowflakes, newSnowflake]);

      const duration = Math.random() * 5 + 2;
      const timeout = setTimeout(() => {
        setSnowflakes((prevSnowflakes) =>
          prevSnowflakes.filter((flake) => flake.id !== newSnowflake.id)
        );
      }, duration * 1000); // Duration in milliseconds

      return () => clearTimeout(timeout); // Clear timeout on each interval iteration
    }, 500);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [imageIndex]);

  return (
    <div>
      {snowflakes.map((petal) => (
        <motion.div
          key={petal.id}
          style={{
            position: "absolute",
            left: petal.x,
            top: 0,
            width: "10px", // Set a fixed size for petals
            height: "10px",
            background: "transparent",
          }}
          animate={{
            y: window.innerHeight, // Move to the bottom of the window
            rotate: petal.rotate,
            scale: petal.scale,
            transition: {
              duration: Math.random() * 5 + 5, // Random duration for falling effect
              ease: "linear",
            },
          }}
          exit={{ opacity: 0, y: window.innerHeight + 150 }}
        >
          <Image
            src={petal.image}
            width={10}
            height={10}
            alt="Petal"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Snowfall;
