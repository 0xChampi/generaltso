import React from "react";
import Image from "next/image";

type SectionProps = {
  title: string;
  content: string;
  className?: string; // Optional prop for additional class names
  backgroundImage: string; // Make this non-optional as you always need a background image
};

const Section = ({ title, content, className, backgroundImage }: SectionProps) => (
  <div
    className={`relative shrink p-[2px] md:p-12 mb-[20px] h-[150px] w-[100px] md:h-[300px] md:w-[200px] border-white rounded-[24px] justify-center  ${className}`}
    style={{
      backgroundImage: `url('${backgroundImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <h2 className="flex flexbox justify-center text-[10px] p-2 mt-4 font-bold text-red-700 mb-2">{title}</h2>
    <p className="text-slate-500 text-[5px] md:text-[10px] ml-4 w-[60px] md:w-[120px] md:-mx-2 ">{content}</p>
  </div>
);



 

    const ThreeSections = () => {
      return (
        <div>
      <div id="contact" className=" gap-8 flex flex-col w-full h-[100vh] bg-[url('/flowersm.png')] md:bg-[url('/flower.png')] bg-cover bg-center bg-no-repeat">
        {/* Simplified Image Components for Debugging */}
        <div className="w-full flex justify-center px-12">
          <Image src="/meetdeez.png" alt="Meet Deez" width={500} height={400} className="mt-[50px]" />
        </div>
 
   

  
       {/* Images visible on desktop but hidden on mobile */}
       <div className="hidden md:flex mt-[10px] flex-row justify-center">
          <Image src="/scrolld.png" alt="Scroll" width={300} height={400} />
          <Image src="/poem1.png" alt="Poem" width={300} height={400} />
        </div>

        {/* Image visible on mobile but hidden on desktop */}
        <div className="flex md:hidden flex-row justify-center mt-[200px] mb-[10px]">
          <Image src="/scrolld.png" alt="Scroll" width={200} height={400} />
        </div>

        <div className="flex flexbox md:gap-12 flex-row md:flex-row justify-center w-full h-[100px] md:mt-[0px] mb-[0px]">


<Section
  title="Genesis"
  content="In lands of code and crypto streams, 
  Deez reigns supreme in digital dreams. 
  With laughter and wit in the market's heart, 
  He crafts his realm, a masterful art."
  backgroundImage="/panel1.png" 
  className=""/>
  

<Section
   title="Flourishing"
   content="In a world where growth and change are key, 
   Deez guides us all, wild and free. 
   Through innovations, partnerships, and more, 
   He leads us to prosperity's door."
   backgroundImage="/panel1.png" 
   className="" />
<Section
      title="Ecosystem"
      content="In an era where ecosystems entwine,
      Deez stands tall, his destiny's design. 
      From NFTs to finance, decentralized,
       He champions a future, reimagined, realized."
       backgroundImage="/panel1.png" />
<Section
      title="Expansion"
      content="In an era where ecosystems entwine,
      Deez stands tall, his destiny's design. 
      From NFTs to finance, decentralized,
       He champions a future, reimagined, realized."
       backgroundImage="/panel1.png" />
     </div>
      </div>
 
    
               
               </div>
      
               
      );
};

export default ThreeSections;