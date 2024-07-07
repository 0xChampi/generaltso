import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UrlObject } from 'url';
import '../globals.css';

const Buy = () => {
  const createButton = (
    href: string | UrlObject,
    imgSrc: string,
    altText: string,
    buttonText: string,
    id: string // Unique ID for each button
  ) => (
    <div className="relative m-4 inline-block" id="buy">
      <Link href={href}>

          <Image
            src={imgSrc}
            alt={altText}
            width={350}
            height={200}
            className="rounded-xl"
          />
          <span className="absolute inset-0 flex items-center justify-center text-center text-white text-lg font-bold rounded-xl">
            {buttonText}
          </span>
   
      </Link>
    </div>
  );

  return (
    
    <div className="p-6 bg-black opacity-90">
      <div className="relative z-10 ">
        <Image
          priority
          src="/topborder1.png"
          width={2000}
          height={250}
          alt="lel"
          objectFit="cover"
          className="animate-tilt w-[2000px] h-[80px] sm:w-[1000px] sm:h-[50px] md:w-[4000px] md:h-[150px] object-cover"
        />
        <h2 className="text-center text-yellow-200  py-4 text-4xl  md:text-6xl mb-[0px]  yonezawa z-30">
    <div style={{ textDecoration: 'underline' }}>
      <div className="flex flexbox flex-row justify-center">
    <Image
          priority
          src="/buydeez.png"
          width={500}
          height={200}
          alt="lel"
          className="animate-pulse rounded-full flex flexbox flex-col justify-center items-center mt-0    "
        />
        </div>
    </div>
        </h2>
<div  className="rounded-full flex flexbox flex-col justify-center items-center">
<div  className="rounded-full flex flexbox flex-col justify-center items-center mt-12 ">
<Image
          priority
          src="/deezbuy.png"
          width={300}
          height={100}
          alt="lel"
          className="rounded-full flex flexbox flex-col justify-center items-center mt-0 border-8 border-yellow-200   "
        />
        </div>
      </div>

</div>
      <div className="flex flex-col md:flex-col mb-[2px] items-center justify-center gap-12 h-[800px] mt-2 text-6 md:mb-5 md:mt-5 z-50">
        
        {createButton(
          "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=jTCmWBY9hussHxEX1mY9CdTqMmVDH1Mg9Tb8E321xgV&inputAmount=0&fixed=in",
          "/buy.png",
          "Buy Image Description",
          "",
          "buy-button-1"
        )}
        {createButton(
          "http://changenow.io",
          "/dex.png",
          "",
          "",
          "buy-button-2"
        )}
        {createButton(
          "https://dexscreener.com/solana/jTCmWBY9hussHxEX1mY9CdTqMmVDH1Mg9Tb8E321xgV",
          "/charto.png",
          "",
          "",
          "buy-button-3"
        )}
      </div>
      

      <div className="flex flexbox flex-row gap-4 mb-[124px] mx-12 justify-center my-12 ">
        <a
          href="https://twitter.com/deezthedragon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/X.png" width={50} height={50} alt="X Mark" />
        </a>
        <a
          href="https://t.me/deezthedragon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/telegram.png"
            width={50}
            height={50}
            alt="Telegram Logo"
          />
        </a>
      </div>

      <div className="yonezawa text-center text-[35px] text-yellow-200 md:text-[80px] mb-[8px] mt-[10px] md:mt-[10px] z-10 relative">
        buy. hodl. win.
      </div>
    </div>

    
  );
};

export default Buy;
