import Lottie from "lottie-react";
import animation from "./assets/main.json";
import Education from "./assets/Education.json";
import C from "./assets/C.json";
import CSS from "./assets/CSS.json";
import html from "./assets/html.json";
import java from "./assets/Java.json";
import javascript from "./assets/Javascript.json";
import Mongodb from "./assets/Mongodb.json";
import Nextjs from "./assets/Nextjs.json";
import Nodejs from "./assets/Nodejs.json";
import react from "./assets/Reactjs.json";
import skillset from "./assets/Skillset.json";
import { motion, useScroll } from "framer-motion";

import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="NavContainer">
        <nav className="Navbar1">
          <ul className="Navbar2 flex px-20 gap-12 pt-3 pb-3">
            <li>About</li>
            <li>Education</li>
            <li>Tech-Stack</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="flex flex-row justify-between  my-20">
          <div className="HeadSection inline-block mt-20 mb-20 mx-20">
            <h1>Nitesh Tiwari</h1>
            <h1>Software Engineer&</h1>
            <h1>Full Stack Developer</h1>
          </div>
          <div className="flex flex-col justify-between Link">
            <span className="px-10">
              <a href="https://www.linkedin.com/in/nitesh-tiwari-96803924a/">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
              </a>
            </span>
            <span className="px-10">
              <a href="https://www.instagram.com/nitesh._.tiwari">
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
              </a>
            </span>
            <span className="px-10">
              <a href="https://discord.com/users/532543987676872705">
                <FontAwesomeIcon icon={faDiscord} className="discord" />
              </a>
            </span>
            <span className="px-10">
              <a href="https://github.com/NiteshkTiwari">
                <FontAwesomeIcon icon={faGithub} className="github" />
              </a>
            </span>
            <span className="px-10">
              <a href="https://twitter.com/nt08802">
                <FontAwesomeIcon icon={faTwitter} className="twitter" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="About flex justify-between pt-14 pb-14 px-14 bg-white">
        <div className="flex-col mx-20">
          <h1 className="text-3xl text-[#425BB5] long-dash"> 01</h1>
          <h1 className="py-7 section-heading">
            Know <br />
            About me
          </h1>
          <p className="pt-8 pb-5 text-xl">
            I am a tech fanatic, always pumped about the latest gadgets and
            software. Learning new skills is my jam; it is like an ongoing
            adventure that keeps me hooked and excited.
          </p>
          <p className="pt-2 pb-5 text-xl">
            Staying on top of tech trends is my thing. I love diving into new
            challenges, exploring cool innovations, and using the latest tech to
            make a difference in this ever-changing digital world.
          </p>
        </div>

        <Lottie
          animationData={animation}
          style={{ width: "1100px", height: "600px", marginRight: "80px" }}
        />
      </div>
      <div className="Education pt-14 pb-14 px-14 bg-[#f3f3f3]">
        <h1 className="text-3xl text-[#425BB5] long-dash mx-20"> 02</h1>
        <h1 className="py-7 section-heading mx-20">
          My <br />
          Education
        </h1>
        <div className="flex">
          <Lottie
            animationData={Education}
            style={{
              width: "600px",
              height: "500px",
              marginTop: "10px",
              marginLeft: "70px",
            }}
          />
          <div className="mx-20">
            <div className="contents">
              <div className="box mt-4 mb-4 bg-white mx-12">
                <h4 className="smallsub-heading px-5">2009 - 2019</h4>
                <h3 className="sub-heading px-5">Secondary School Degree</h3>
                <p className="text-lg px-5 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="box mt-4 mb-4 bg-white mx-12">
                <h4 className="smallsub-heading px-5">2019 - 2021</h4>
                <h3 className="sub-heading px-5">High School Degree</h3>
                <p className="text-lg px-5 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>

              <div className="box mt-4 mb-4 bg-white mx-12">
                <h4 className="smallsub-heading px-5">2021 - 2025</h4>
                <h3 className="sub-heading px-5">Bachelor's Degree</h3>
                <p className="text-lg px-5 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills pt-14 pb-14 px-14 bg-white">
        <h1 className="text-3xl text-[#425BB5] long-dash mx-20">03</h1>
        <h1 className="py-7 section-heading mx-20">
          My
          <br />
          Tech-Stack
        </h1>
        <div className="flex justify-between">
          <div className="flex-col content-between ml-12 px-10">
            <div className="flex justify-between gap-20 my-20">
              <span className="box">
                {" "}
                <Lottie
                  animationData={C}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8",
                  }}
                />
              </span>
              <span className="box">
                <Lottie
                  animationData={java}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>

              <span className="box">
                <Lottie
                  animationData={javascript}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>
            </div>
            <div className="flex justify-between gap-20 my-20">
              <span className="box">
                {" "}
                <Lottie
                  animationData={html}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>

              <span className="box">
                <Lottie
                  animationData={CSS}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>

              <span className="box">
                <Lottie
                  animationData={Nodejs}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>
            </div>
            <div className="flex justify-between gap-20 my-20 ">
              <span className="box">
                <Lottie
                  animationData={Mongodb}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>

              <span className="box">
                <Lottie
                  animationData={react}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>

              <span className="box">
                <Lottie
                  animationData={Nextjs}
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#F5F7F8 ",
                  }}
                />
              </span>
            </div>
          </div>
          <div>
            <Lottie
              animationData={skillset}
              style={{ width: "600px", height: "600px", marginRight: "80px" }}
            />
          </div>
        </div>
      </div>
      <div className="Projects pt-14 pb-14 px-14 bg-[#f3f3f3]">
        <h1 className="text-3xl text-[#425BB5] long-dash mx-20">04</h1>
        <h1 className="py-7 section-heading mx-20">
          My
          <br />
          Projects
        </h1>
        <div className="flex">
          <a href="https://natoursapi.cyclic.app/">
            <div className="Project1"></div>
          </a>

          <a href="https://github.com/NiteshkTiwari/Backend-Development-Project">
            <div className="Project2"></div>
          </a>
          <a href="https://github.com/NiteshkTiwari/11-days-11-projects-using-HTML-CSS-and-JAVASCRIPT">
            <div className="Project3"></div>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
