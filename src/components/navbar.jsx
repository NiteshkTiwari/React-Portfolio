import { motion, useScroll } from "framer-motion";

function NavBar() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="Navbar1 bg-[#343434]">
      <nav className="Navbar2 flex px-20 gap-12 pt-3 pb-3 ">
        <a href="" className="hover:text-[#425BB]">
          About
        </a>
        <a href="" className="hover:text-[#425BB]">
          Education
        </a>
        <a href="" className="hover:text-[#425BB]">
          Tech-Stack
        </a>
        <a href="" className="hover:text-[#425BB]">
          Project
        </a>
        <a href="" className="hover:text-[#425BB]">
          Contact
        </a>
      </nav>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export default NavBar;
