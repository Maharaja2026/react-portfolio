import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { FaXTwitter } from 'react-icons/fa6';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Siva Subramaniyan</h3>
        <p className="text-lg font-normal text-gray-400">
          Learning and Development
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          With 15+ years in Learning & Development and E-learning, I create impactful training programs that drive results and enhance employee growth.        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9176640033</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">shiv.kristos@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
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
    </div>
  );
}

export default ContactLeft