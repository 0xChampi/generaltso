"use client";
import { useRef, useEffect, forwardRef } from "react";
import Image from "next/image";
import Nav from "./Nav";

interface CustomVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  playbackrate?: number;
}

const VideoComponent = forwardRef<HTMLVideoElement, CustomVideoProps>(
  (props, ref) => <video {...props} ref={ref}></video>
);

VideoComponent.displayName = "VideoComponent";

const MyComponent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    console.log(videoRef.current); // Log to check if the ref is correct
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById("about");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[100vh] mb-[0px]" id="home">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Nav />
      </div>
      <div>
        <div className="relative h-[100vh] bg-black " id="home">
          {/* Background Video */}
          <div className="absolute inset-0 z-0 opacity-40">
            <VideoComponent
              src="/tensor1.mp4"
              ref={videoRef}
              autoPlay
              loop
              muted
              playbackrate={1}
              className="hidden sm:block absolute top-0 left-0 w-full h-[100vh] object-cover"
            />

            {/* GIF - Shown only on smaller screens */}
            <Image
              src="/tensor1.gif"
              layout="fill"
              objectFit="cover"
              className="block sm:hidden absolute top-0 left-0 w-full h-[100vh]"
              alt="Background GIF"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Centered Content */}
          <div className="absolute inset-0 z-10 flex flexbox flex-col md:flex-row justify-center items-center h-[100vh]">
            {/* Top Image */}
            <div className="w-full mt-[240px] sm:mt-0 sm:ml-12 p-12 mb-[250px] md:mb-[50px] max-w-[1200px]">
              <Image
                src="/geetso.png"
                layout="responsive"
                width={1}
                height={1}
                quality={100}
                alt="Dragon Deez"
                className="animate-pulse"
              />
            </div>
            <div>
              <Image
                src="/darrow.svg"
                layout="fixed"
                width={100}
                height={100}
                quality={100}
                alt="Arrow"
                className="border-4 rounded-full border-red-300/90 w-[40px] h-[40px] animate-bounce md:hidden mb-[80px]"
                onClick={handleClick}
              />
            </div>
            {/* Bottom Image (commented out) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;