import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <div className="mt-[4px] gap-4 bg-black opacity-70">
      {/* Top Border Image */}
      <div className="p-4 gap-4 bg-black opacity-5">
        <Image
          priority
          src="/topborder1.png"
          width={2000}
          height={250}
          alt="Top Border"
          objectFit="cover"
          className="w-full object-cover mt-2 bg-black opacity-5"
        />
      </div>

      {/* Main Content */}
      <div id="tokenomics" className="relative h-full">
        <div className="relative z-10 p-4">
          {/* Center Image */}
          <div className="flex justify-center py-4 px-4">
            <Image
              priority
              src="/tokenomix.png"
              width={300}
              height={250}
              alt="Tokenomics"
              objectFit="cover"
              className="animate-pulse"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-md font-bold text-red-300/90 rounded-full">
            {/* Circular Image */}
            <div className="mt-12 mb-12 rounded-full hover:animate-spin">
              <Image
                className="rounded-full"
                src="/woodendragon.png"
                width={200}
                height={200}
                alt="Wooden Dragon"
              />
            </div>

            {/* Token Details */}
            <div className="text-center text-white text-4xl px-12 space-y-4 mb-[40px]">
              <p>token supply: 420,000,000</p>
              <p>✅ based devs</p>
              <p>✅ No Taxes</p>
              <p>✅ LP Burnt</p>
              <p>✅ 100 Score</p>
              <p className="mb-12">✅ Ownership Renounced</p>
            </div>

            {/* Call to Action */}
            <div className="text-center text-[35px] text-yellow-200 md:text-[80px] mb-20 mt-[10px] md:mt-[10px]">
              buy. hodl. win.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
