import { motion, useScroll } from "framer-motion";

function NavBar() {
  const { scrollYProgress } = useScroll();
  return (
    <header className="Navbar1 bg-[#343434]">
      <nav className="Navbar2 flex px-20 gap-12 pt-3 pb-3 ">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skill">Tech-Stack</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </nav>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}

export default NavBar;
