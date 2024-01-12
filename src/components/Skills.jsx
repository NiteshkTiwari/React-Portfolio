import Lottie from "lottie-react";

import C from "../assets/C.json";
import CSS from "../assets/CSS.json";
import html from "../assets/html.json";
import java from "../assets/Java.json";
import javascript from "../assets/Javascript.json";
import Mongodb from "../assets/Mongodb.json";
import Nextjs from "../assets/Nextjs.json";
import Nodejs from "../assets/Nodejs.json";
import react from "../assets/Reactjs.json";
import skillset from "../assets/Skillset.json";

function Skill() {
  return (
    <section className="skills pt-14 pb-14 px-14 bg-white" id="skill">
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
    </section>
  );
}

export default Skill;
