import React, { useState } from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { amit, lavanya, rajavengadesh, quote } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={amit}
                  alt="Amit Shroff"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Corporate Training Specialist
                  </p>
                  <h3 className="text-2xl font-bold">Amit Shroff</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Business Communication Expert
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-16 lgl:w-26" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Commendable Problem-Solving Skills
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via LinkedIn
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    A fantastic human being to work with, his skills and techniques
                    to solve critical issues is commendable. Thank you for doing
                    your best, so I could silently learn your way of tackling
                    various situations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={lavanya}
                  alt="Lavanya Badhrinathan"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Certified Coach
                  </p>
                  <h3 className="text-2xl font-bold">Lavanya Badhrinathan</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Learning & Development Specialist
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Creative and Professional
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via LinkedIn
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Excellent team player, very creative, energetic, helpful & a
                    true professional. I enjoy the way he Facilitates the Workshops.
                    I have learned a lot from him. Thanks for all the support
                    extended.
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* Testimonial 3 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={rajavengadesh}
                  alt="Lavanya Badhrinathan"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Emerald Jewel Industry
                  </p>
                  <h3 className="text-2xl font-bold">Raja Venkatesh</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    AGM Zilara
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Hard working and Result oriented person
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via LinkedIn
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Siva Subramaian is in fact a very hard working, studious and result oriented person. He though young is a very zealous and ambitious trainer.He has developed his skills as a trainer is always enriching his knowledge to come oout with unique ideas to make the training programme a success.
                    At this young age he has understood that Training as a profession is like a Salesman job where we really need to make sense in the session and the participant should see value addition in the programme and he should be willing to implement it. We use to have many discussions in this regard.
                    He is very confident and he does execute jobs well. He is good at developing content for the training programmes and also assess the post training impact.
                    I wish he reaches height even he himself had not wished for !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional testimonials... */}
          {/* Repeat the above block for all remaining testimonials provided */}
        </Slider>
      </div>
    </section>

  );
}

export default Testimonial