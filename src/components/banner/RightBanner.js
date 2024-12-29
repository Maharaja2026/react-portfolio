import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-[40%] flex justify-center items-center relative">
      <img
<<<<<<< HEAD
        className="w-[200px] h-[300px] lgl:w-[500px] lgl:h-[680px] z-10"
=======
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
>>>>>>> fe0e7e332210ec39dec0aa6feafc28c53cab3179
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

<<<<<<< HEAD
export default RightBanner
=======
export default RightBanner;
>>>>>>> fe0e7e332210ec39dec0aa6feafc28c53cab3179
