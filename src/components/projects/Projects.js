import React from 'react'
import Title from '../layouts/Title'
import { learning, elearning, gemifection } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Learning and development "
          des="Learning and development focuses on empowering individuals to acquire new skills, enhance knowledge, and grow professionally. It involves structured training programs, hands-on experiences, and continuous self-improvement. This process fosters innovation, adaptability, and personal growth in dynamic environments."
          src={learning}
        />
        <ProjectsCard
          title="E learning service"
          des="E-learning services provide flexible and accessible online education tailored to diverse learning needs. They include interactive courses, multimedia content, and virtual tools to enhance engagement and knowledge retention. These services enable learners to upskill anytime, anywhere, at their own pace."
          src={elearning}
        />
        <ProjectsCard
          title="Gamification"
          des="Gamification incorporates game design elements into non-game contexts to enhance engagement and motivation. Key elements include points, badges, leaderboards, challenges, and rewards. It fosters interactive learning, improves user participation, and encourages goal achievement."
          src={gemifection}
        />
      </div>
    </section>
  );
}

export default Projects