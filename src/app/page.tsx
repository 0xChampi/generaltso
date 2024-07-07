import Image from 'next/image'
import Panel from './components/Panel'
import * as React from 'react';
import Nav from './components/Nav';
import './globals.css';
import Buy from './components/Buy';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Snowfall from './components/Snowfall';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#b20d1d] flex flexbox max-h-[120vh] md:min-h-[120vh] flex-col md:max-h-full" 
          style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'cover', backgroundRepeat: 'no repeat', backgroundPosition: '100% 100%', backgroundOrigin: 'border-box' }}>

      <Panel />
      <Contact />
<Tokenomics />
      <div className="flex flexbox flex-row justify-center items-center">
      <Roadmap />
    
      </div>
      <Buy />
      


      <Snowfall />
        </main>
  )
}