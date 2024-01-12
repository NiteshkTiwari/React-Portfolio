import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function NavBar() {
  const { scrollYProgress } = useScroll();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: document.getElementById("home").offsetTop - 150,
        about: document.getElementById("about").offsetTop - 150,
        education: document.getElementById("education").offsetTop - 150,
        skill: document.getElementById("skill").offsetTop - 150,
        project: document.getElementById("project").offsetTop - 150,
        contact: document.getElementById("contact").offsetTop - 150,
      };

      const currentScroll = window.scrollY;

      let activeSection = "home";
      Object.entries(sectionOffsets).forEach(([section, offset]) => {
        if (currentScroll >= offset) {
          activeSection = section;
        }
      });

      setActiveLink(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (section) => {
    const targetElement = document.getElementById(section);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="Navbar1 bg-[#343434]">
      <nav className="Navbar2 flex px-20 gap-12 pt-3 pb-3">
        <a
          href="#home"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
        >
          About
        </a>
        <a
          href="#education"
          className={activeLink === "education" ? "active" : ""}
          onClick={() => handleLinkClick("education")}
        >
          Education
        </a>
        <a
          href="#skill"
          className={activeLink === "skill" ? "active" : ""}
          onClick={() => handleLinkClick("skill")}
        >
          Tech-Stack
        </a>
        <a
          href="#project"
          className={activeLink === "project" ? "active" : ""}
          onClick={() => handleLinkClick("project")}
        >
          Project
        </a>
        <a
          href="#contact"
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => handleLinkClick("contact")}
        >
          Contact
        </a>
      </nav>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}

export default NavBar;
