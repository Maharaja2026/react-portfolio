import React from "react"; 
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Head - Global Talent Transformation (Learning & Development)"
            subTitle="Agilisium Consulting (Jan 2024 - Present)"
            result="Chennai, India"
            des="Leading initiatives in training delivery, leadership development, and gamified learning programs to enhance global talent transformation."
          />
          <ResumeCard
            title="Manager - Learning and Development"
            subTitle="Vee Technologies (Apr 2023 - Jan 2024)"
            result="Salem, India"
            des="Developed self-paced learning programs, maintained LCMS, and delivered leadership coaching to drive employee performance."
          />
          <ResumeCard
            title="Assistant Manager - Learning Development"
            subTitle="Vee Technologies (Oct 2021 - Apr 2023)"
            result="Chennai, India"
            des="Created e-learning content, analyzed training needs, and managed instructional design projects to boost organizational efficiency."
          />
          <ResumeCard
            title="Senior Manager - E-learning Services"
            subTitle="Novac Technology Solutions (Dec 2019 - Sep 2021)"
            result="Chennai, India"
            des="Oversaw blended learning projects and led a team to deliver impactful training programs for clients globally."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Training Solutions Lead - Learning and Development"
            subTitle="Infosys BPM (Apr 2016 - Dec 2019)"
            result="Chennai, India"
            des="Designed and delivered programs focusing on productivity and performance improvement across various business domains."
          />
          <ResumeCard
            title="Associate Manager"
            subTitle="Shriram Value Services (Nov 2013 - Aug 2015)"
            result="Chennai, India"
            des="Managed training content design, delivery, and e-learning development for enterprise-wide training needs."
          />
          <ResumeCard
            title="Quality Analyst & Voice Coach"
            subTitle="HCL Technologies (Sep 2011 - Nov 2013)"
            result="Chennai, India"
            des="Conducted training needs analysis, content design, and training delivery for improved employee performance."
          />
          <ResumeCard
            title="Assistant Team Lead - Learning and Development"
            subTitle="Shriram Value Services (Aug 2010 - Aug 2011)"
            result="Chennai, India"
            des="Designed and delivered training programs, conducted TNA, and developed instructional content to support organizational goals."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
