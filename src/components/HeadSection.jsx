import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutAnime from "../assets/AboutAnime.json";
import Lottie from "lottie-react";
import React from "react";
import Typed from "typed.js";
import {
  faInstagram,
  faDiscord,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function HeadSection() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-Stack Developer", "Software Engineer"],
      startDelay: 300,
      typeSpeed: 150,

      backDelay: 150,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
  }, []);
  return (
    <section className="HeadContainer flex justify-between gap-2" id="home">
      <div className="HeadSection self-center inline-block ml-20">
        <h3
          className="py-4 text-4xl font-semibold"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          Hello ,it's Me
        </h3>
        <h1
          className="py-4 px-3 text-6xl font-bold "
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Nitesh Tiwari
        </h1>
        <h3
          className="py-4 pr-10 text-4xl font-semibold"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          And I'm a <span ref={el} style={{ color: "#425BB5" }} />
        </h3>
        <div
          className=" flex justify-between w-60 mx-16 mt-7"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <a href="https://www.linkedin.com/in/nitesh-tiwari-96803924a/">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
          </a>

          <a href="https://www.instagram.com/nitesh._.tiwari">
            <FontAwesomeIcon icon={faInstagram} className="instagram" />
          </a>

          <a href="https://discord.com/users/532543987676872705">
            <FontAwesomeIcon icon={faDiscord} className="discord" />
          </a>

          <a href="https://github.com/NiteshkTiwari">
            <FontAwesomeIcon icon={faGithub} className="github" />
          </a>

          <a href="https://twitter.com/nt08802">
            <FontAwesomeIcon icon={faTwitter} className="twitter" />
          </a>
        </div>
      </div>

      <Lottie
        animationData={AboutAnime}
        style={{
          width: "750px",
          height: "600px",
          marginRight: "30px",
          marginTop: "80px",
        }}
        data-aos="fade-left"
        data-aos-duration="800"
      />
    </section>
  );
}

export default HeadSection;
