import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Leadership & Team Management"
          des="With 14+ years of experience, I have led teams of up to 18 FTEs, enhancing performance through mentorship and strategic direction."
        />
        <Card
          title="Learning Strategy & Design"
          des="Specialized in developing training solutions tailored to diverse learning needs while aligning with business goals."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Digital Learning & Gamification"
          des="Expert in gamification and e-learning to create engaging and impactful learning experiences for organizations."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile & E-learning Development"
          des="Designed and delivered 120+ courses, including mobile and microlearning, impacting over 8,000 employees globally."
          icon={<FaMobile />}
        />
        <Card
          title="Instructional Design & UX"
          des="Certified in instructional design and UX, creating interactive storyboards and effective learning materials."
          icon={<SiAntdesign />}
        />
        <Card
          title="Project & Content Management"
          des="Managed complex L&D projects, including a Learning Content Management System for 8,000+ employees."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
