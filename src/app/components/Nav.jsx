
import React from "react";
import "../globals.css";
import Image from "next/image";
// import useSound from "use-sound";
// // Import PlayButton if it's a custom component or replace it with a suitable element
// import PlayButton from './PlayButton'; // Adjust the path as needed

// const Demo = () => {
//   const [play, { stop, isPlaying }] = useSound('asd.mp3'); // Adjust the sound file path as needed

//   return (
//     <PlayButton
//       active={isPlaying}
//       size={60}
//       iconColor="var(--color-background)"
//       idleBackgroundColor="var(--color-text)"
//       activeBackgroundColor="var(--color-primary)"
//       play={play}
//       stop={stop}
//     />
//   );
// };


const Nav = () => {
  return (
    // <nav className="w-full">
    //         <button onClick={playSound}>Play Sound</button>

      <div>
        <Image
          priority
          src="/topborder1.png"
          width={2000}
          height={250}
          alt="lel"
          objectFit="cover"
          className=" w-[2000px] mb-6 h-[30px] sm:w-[800px] sm:h-[30px] md:w-[2000px] md:h-[60px] object-cover" // Tailwind classes for responsiveness
        />

      <div className="flex justify-center text-red-300/90 mt-8">
        {/* Responsive text size using Tailwind */}
        <div className=" flex flexbox flex-row justify-center text-xs sm:text-xs md:text-base lg:text-lg xl:text-1xl yonezawa py-4  w-full items-center">
        
          {" "}
          {/* Replace 'antonio' with your custom font class if needed */}
          <a
            href="#home"
            className="hover:text-yellow-600 transition-colors duration-300 mx-1 md:mx-2 hover:animate-jump"
          >
            Home
          </a>{" "}
          -
          <a
            href="#contact"
            className="hover:text-yellow-600 transition-colors duration-300 mx-1 md:mx-2 hover:animate-ping"
          >
            About
          </a>{" "}
          -
          <a
            href="#tokenomics"
            className="hover:text-yellow-600 transition-colors duration-300 mx-1 md:mx-2 hover:animate-ping"
          >
            Tokenomics
          </a>{" "}
          -
          <a
            href="#roadmap"
            className="hover:text-yellow-600 transition-colors duration-300 mx-1 md:mx-2 hover:animate-ping"
          >
            Roadmap
          </a>
          <a
            href="#buy"
            className="hover:text-yellow-600 transition-colors duration-300 mx-1 md:mx-2 hover:animate-ping"
          >
            Buy
          </a>
{/* <Demo /> */}
         
        </div>
      </div>
      </div>

  );
};



export default Nav;