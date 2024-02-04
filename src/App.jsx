import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skills";
import NavBar from "./components/navbar";
import HeadSection from "./components/HeadSection";
import Project from "./components/Project";
import ContactMe from "./components/contact";

import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  once: true,
});

function App() {
  // let section = document.querySelectorAll("section");
  // let navLink = document.querySelectorAll("header nav a");

  // window.onscroll = () => {
  //   section.forEach((sec) => {
  //     let top = window.scrollY;
  //     let offset = sec.offsetTop - 150;
  //     let height = sec.offsetHeight;
  //     let id = sec.getAttribute("id");
  //     console.log(sec);
  //     if (top >= offset && top < offset + height) {
  //       navLink.forEach((links) => {
  //         links.classList.remove("active");
  //         document
  //           .querySelector("header nav a[href*=" + id + "]")
  //           .classList.add("active");
  //         console.log(links);
  //       });
  //     }
  //   });
  // };
  return (
    <div>
      <NavBar />
      <HeadSection />
      <About />
      <Education />
      <Skill />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
