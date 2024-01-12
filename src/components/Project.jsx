import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

function Project() {
  return (
    <section className="Projects pt-14 pb-14 px-14 bg-[#f3f3f3]" id="project">
      <h1 className="text-3xl text-[#425BB5] long-dash mx-20">04</h1>
      <h1 className="py-7 section-heading mx-20">
        My
        <br />
        Projects
      </h1>

      {/* <div className="flex">
        

        
        
      </div> */}
      <Splide
        aria-label="My Favorite Images"
        options={{
          width: 1000,
          height: 500,
        }}
        className="mx-40"
      >
        <SplideSlide className="bg-white flex justify-between ">
          <img src="/trekking.jpg" alt="Img-1" className="Project-Image"></img>
          <div className=" project-info">
            <p className="py-4 px-3 leading-8">
              Discover adventure effortlessly with our streamlined tour booking
              platform. Powered by Node.js, Express.js, Pug, MongoDB, and
              Mongoose, our user-friendly site ensures a seamless and memorable
              experience. Explore the perfect blend of technology and
              wanderlust.
            </p>
            <a
              href="https://natoursapi.cyclic.app/"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mx-2"
            >
              Check the Website!
            </a>
          </div>
        </SplideSlide>

        <SplideSlide className="bg-white  flex justify-between ">
          <img src="/Nodejs.jpg" alt="Img-1" className="Project-Image "></img>
          <div className=" project-info">
            <p className="py-4 px-3 leading-8">
              A comprehensive Node.js project that encompasses key concepts,
              methodologies, and features of Node.js, with a particular focus on
              asynchronous workflows, ensuring a thorough exploration of the
              platform's essential topics.
            </p>
            <a
              href="https://natoursapi.cyclic.app/"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mx-2"
            >
              Check the Github Repo!
            </a>
          </div>
        </SplideSlide>
        <SplideSlide className="bg-white flex justify-between">
          <img src="/Htmlcss.jpg" alt="Img-1" className="Project-Image"></img>
          <div className=" project-info">
            <p className="py-4 px-3 leading-8">
              Curated a repository housing a diverse array of frontend projects,
              leveraging HTML, CSS, and Javascript, to showcase proficiency
              across multiple aspects of web development.
            </p>
            <a
              href="https://natoursapi.cyclic.app/"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mx-2"
            >
              Check the GitHub Repo!
            </a>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default Project;
