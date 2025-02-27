import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="m-auto mt-[100px] text-center text-[max(3vw,20px)] font-[500]"
    >
      <p>
        For Better Experience Download our <br /> Tomato App
      </p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <img
          className="w-[max(30vw,120px] max-w-[180px] cursor-pointer transition hover:scale-105 duration-300"
          src={assets.play_store}
          alt="play store icon"
        />
        <img
          className="w-[max(30vw,120px] max-w-[180px] cursor-pointer transition hover:scale-105 duration-300"
          src={assets.app_store}
          alt="app store icon"
        />
      </div>
    </div>
  );
}

export default AppDownload