import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold">Notable Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Learning & Development Excellence Award"
            subTitle="Honored at the Excellence Achiever Awards 2024 by Vanakkam HRD"
            result="Full-Circle Moment"
            des="Received the prestigious Learning & Development Excellence Award from Pradeep B, a mentor who shaped my early career, celebrating a journey of relentless growth and transformative mentorship in revolutionizing the L&D landscape."
          />
          <ResumeCard
            title="Leadership Development Programs"
            subTitle="FLDP, EMLP, JMLP, FLIIP"
            result="Impact"
            des="Designed and executed leadership programs to foster professional growth and enhance leadership capabilities globally."
          />
          <ResumeCard
            title="Awards and Recognitions"
            subTitle="Golden Aim Awards & Global Skill Development Council"
            result="Excellence"
            des="Earned 'Young Business Leader - Learning & Development' and 'Excellence in Learning and Development' awards for innovative contributions."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certified Train the Trainer"
            subTitle="Dale Carnegie"
            result=""
            des="Enhanced training delivery and coaching skills to improve learner engagement and retention."
          />
          <ResumeCard
            title="Certified Instructional Designer"
            subTitle="Carlton Advanced Management Institute"
            result=""
            des="Gained expertise in designing impactful and engaging instructional content for diverse audiences."
          />
          <ResumeCard
            title="Certified Master Trainer Facilitator"
            subTitle="Carlton Advanced Management Institute"
            result=""
            des="Specialized in facilitation techniques to deliver effective and memorable training experiences."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
