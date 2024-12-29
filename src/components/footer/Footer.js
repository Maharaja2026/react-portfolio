import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (url) => {
    window.open(url, "_blank"); 
  };

  return (
    <div className="w-full py-10 px-4 md:px-10 lg:px-20 bg-black text-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img className="w-32" src={logo} alt="logo" />
          <div className="flex gap-4">
            <span
              onClick={() => handleNavigation("https://www.facebook.com/sharer.php?u=https://linktr.ee/shivkristos?utm_source=linktree_profile_share&ltsid=5610ddd6-957b-4f89-a416-3a4c5563c861")}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 cursor-pointer"
            >
              <FaFacebookF />
            </span>
            <span
              onClick={() => handleNavigation("https://x.com/intent/tweet?text=Check%20out%20this%20Linktree!%20-%20https://linktr.ee/shivkristos?utm_source=linktree_profile_share&ltsid=5610ddd6-957b-4f89-a416-3a4c5563c861")}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 cursor-pointer"
            >
              <FaTwitter />
            </span>
            <span
              onClick={() => handleNavigation("https://www.linkedin.com/in/siva-subramanian-n")}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300 cursor-pointer"
            >
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center justify-center md:items-start gap-6">
          <h3 className="text-xl uppercase text-designColor tracking-wider">
            Quick Links
          </h3>
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start font-medium">
            <li
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <span className="text-lg hover:text-designColor transition duration-300">
                About
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-designColor group-hover:w-full transition-all duration-300"></span>
            </li>
            <li
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              <span className="text-lg hover:text-designColor transition duration-300">
                Projects
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-designColor group-hover:w-full transition-all duration-300"></span>
            </li>
            <li
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("features")}
            >
              <span className="text-lg hover:text-designColor transition duration-300">
                Services
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-designColor group-hover:w-full transition-all duration-300"></span>
            </li>
            <li
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("resume")}
            >
              <span className="text-lg hover:text-designColor transition duration-300">
                Resume
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-designColor group-hover:w-full transition-all duration-300"></span>
            </li>
            <li
              className="relative group cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              <span className="text-lg hover:text-designColor transition duration-300">
                Contact
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-designColor group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
