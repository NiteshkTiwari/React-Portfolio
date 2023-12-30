import Lottie from "lottie-react";
import animation from "../assets/main.json";

function About() {
  return (
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
        <p className="pt-2 pb-5 text-xl">And I love 🐼.</p>
        <div className="Signature self-center"></div>
      </div>

      <Lottie
        animationData={animation}
        style={{ width: "1100px", height: "600px", marginRight: "80px" }}
      />
    </div>
  );
}

export default About;
