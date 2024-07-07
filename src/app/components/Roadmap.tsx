import Image from "next/image";

const Roadmap = () => {
  return (
    <div id="roadmap" className="relative myDiv border-black">
      {/* Overlay Div */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content Div */}
      <div className="relative z-10">
        <Image
          priority
          src="/topborder1.png"
          width={2000}
          height={250}
          alt="Top Border"
          objectFit="cover"
          className="w-full "
        />
        <h2 className="flex flexbox flex-row justify-center text-center text-yellow-200 py-4 text-2xl md:text-4xl mb-[30px] yonezawa ">
          <div style={{ textDecoration: "underline" }}>
            <Image
              src="/roadmapp.png"
              layout="fixed"
              width={500}
              height={75}
              alt="Phase 1 Image"
              className="animate-pulse"
            />
          </div>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-[14px] mb-24 p-4 md:p-[12px] z-10">
        {/* Phases Section */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-4  md:px-[28px] md:gap-[4px] mb-24 p-4 md:p-[12px] md:mx-14 z-10">
          {/* Phase 1 */}
          <div className="flex flex-col items-center text-center gap-4 p-[80px]">
            <Image
              src="/phases_planing.png"
              layout="responsive"
              width={50}
              height={25}
              alt="Phase 1 Image"
              className="w-full "
            />
            <div className="text-yellow-200  yonezawa z-10 text-2xl">
              Phase 1: <br></br><br></br>Authority: <br></br>
            </div>
            <div className="w-full md:w-[300px] text-lg font-thin text-white z-10">
              The Genesis of Meme Mastery: Establishing Deez as a symbol of
              digital identity in the meme economy. &quot;The Genesis of Meme
              Mastery&quot; In this inaugural phase, we lay the foundation of
              the Deez memecoin universe. Here, Deez is not just a coin;
              it&apos;s an emblem of digital identity and authority in the meme
              economy. We focus on establishing Deez as a recognized symbol
              within the crypto community, intertwining humor and investment in
              a way that appeals to both seasoned traders and newcomers. As the
              cornerstone of our ecosystem, Deez leads the charge in
              demonstrating the power of community-driven finance, supported by
              a robust network of meme enthusiasts and financial wizards.
            </div>
          </div>

          {/* Phase 2 */}
          <div className="flex flex-col items-center text-center gap-4 p-[80px]">
            <Image
              src="/phases_execution.png"
              layout="responsive"
              width={50}
              height={25}
              alt="Phase 2 Image"
              className="w-full md:w-44 md:h-32" // Smaller size for md screens
            />
            <div className="text-yellow-200 yonezawa z-10 text-2xl">
              Phase 2: <br></br><br></br>Prosperity
            </div>
            <div className="w-full md:w-[300px]  text-lg font-thin md:text-base text-white z-10 ">
              Flourishing Through Innovation: Expansion of the Deez ecosystem
              with innovative utilities and partnerships. &quot;Flourishing
              Through Innovation&quot; Phase 2 is where prosperity blooms.
              It&apos;s not just about the growth of Deez but the expansion of
              an entire ecosystem where Deez acts as a catalyst. Here, we
              introduce innovative utilities and platforms that integrate
              seamlessly with the Deez token, further solidifying its position
              in the market. We delve into partnerships and collaborations,
              creating a vibrant space where memes meet practicality. This phase
              is characterized by new features, enhanced user engagement, and an
              overarching theme of prosperity for all members of the Deez
              community.
            </div>
          </div>

          {/* Phase 3 */}
          <div className="flex flex-col items-center text-center gap-4 p-[80px]">
            <Image
              src="/phases_completion.png"
              layout="responsive"
              width={50}
              height={25}
              alt="Phase 3 Image"
              className="w-full md:w-44 md:h-32" // Smaller size for md screens
            />
            <div className="text-yellow-200 yonezawa z-10 text-2xl">
              Phase 3: <br></br><br></br>Good Fortune
            </div>
            <div className="w-full md:w-[300px]  text-lg font-thin md:text-base text-white z-10 ">
              Era of Ecosystem Expansion: Deez becomes the heart of a new meme
              economy, introducing diverse applications. &quot;Era of Ecosystem
              Expansion&quot; In this final phase, we witness the rise of an
              expansive ecosystem where Deez is the key to unlocking a myriad of
              possibilities. It&apos;s not just about a memecoin; it&apos;s
              about creating a holistic environment that revolves around Deez.
              From NFT integrations to decentralized finance applications, Deez
              becomes the heart of a new meme economy. This phase focuses on
              sustainability, long-term growth, and the establishment of Deez as
              a staple in both the meme and financial sectors. The ecosystem
              evolves, offering users diverse ways to engage, invest, and enjoy
              the world of Deez.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
