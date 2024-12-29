import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Instructional Designer.", "Learning and Development Leader.", "Gamification Specialist."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-[60%] flex flex-col gap-20">
      <div className="flex flex-col gap-5">
<<<<<<< HEAD
        <h4 className=" text-lg font-normal">DISCOVER MY REALM</h4>
=======
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
>>>>>>> fe0e7e332210ec39dec0aa6feafc28c53cab3179
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Siva Subramaniyan</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
<<<<<<< HEAD
          With 15+ years in L&D and E-learning, I’ve delivered 120+ courses for 8,000+ employees globally. Key 
=======
          With 14+ years in L&D and E-learning, I’ve delivered 120+ courses for 8,000+ employees globally. Key 
>>>>>>> fe0e7e332210ec39dec0aa6feafc28c53cab3179
          achievements include developing an LCMS, leading training for Microsoft and Google, and earning awards
           like “Young Business Leader - L&D.” I specialize in gamified learning and leadership programs that drive efficiency.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://api.whatsapp.com/send?phone=9176640033" target="blank">
              <span className="bannerIcon">
                <IoLogoWhatsapp/>
              </span>
            </a>
            <a href="https://www.facebook.com/sharer.php?u=https://linktr.ee/shivkristos?utm_source=linktree_profile_share&ltsid=5610ddd6-957b-4f89-a416-3a4c5563c861" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://x.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20https://linktr.ee/shivkristos?utm_source=linktree_profile_share&ltsid=5610ddd6-957b-4f89-a416-3a4c5563c861" target="blank">
              <span className="bannerIcon">
                <FaXTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/siva-subramanian-n" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
