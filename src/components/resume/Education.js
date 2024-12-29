import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2009</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MBA, HR"
            subTitle="Magnus School of Business (2007 - 2009)"
            result=""
            des="Specialized in Human Resource Management, developing leadership and organizational skills."
          />
          <ResumeCard
            title="Bachelor of Commerce (B.COM, Commerce)"
            subTitle="SASTRA University (2004 - 2007)"
            result=""
            des="Focused on commerce principles, financial management, and business strategies."
          />
          <ResumeCard
            title="Higher Secondary Education (HSC)"
            subTitle="Sri Vidhya Mandir Hr. Sec. School, Salem (2003 - 2004)"
            result="Aggregate: 86%"
            des="Built a strong foundation in business studies and economics."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
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
      </div> */}
    </motion.div>
  );
};

export default Education;
