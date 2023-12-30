import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skills";
import NavBar from "./components/navbar";
import HeadSection from "./components/HeadSection";
import Project from "./components/Project";
import ContactMe from "./components/contact";

function App() {
  return (
    <>
      <NavBar />
      <HeadSection />
      <About />
      <Education />
      <Skill />
      <Project />
      <ContactMe />
    </>
  );
}

export default App;
