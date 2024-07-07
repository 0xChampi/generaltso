
import React from 'react'
import useSound from 'use-sound'

import WabiSound from '../assets/asd.mp3'

const Boombox = () => {
  const [play, {stop}] = useSound(WabiSound, {interrupt: true,});
  return (
    <div id='boombox'>
    <div>
    <img className="image" height="300px" src="https://cdn.discordapp.com/attachments/940053991574880267/1001949293910962206/IMG_0552.gif" onClick={() => play()}>
    </img>
    <div>
    <img className="image" height="50px" src="https://cdn.discordapp.com/attachments/940053991574880267/1001968610266325082/IMG_0553.png" onClick={() => stop()}>
    </img>
    </div>
        </div>
        </div>
      )
  };    

  export default Boombox;