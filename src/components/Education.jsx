import Lottie from "lottie-react";

import Educationani from "../assets/Education.json";

function Education() {
  return (
    <div className="Education pt-14 pb-14 px-14 bg-[#f3f3f3]">
      <h1 className="text-3xl text-[#425BB5] long-dash mx-20"> 02</h1>
      <h1 className="py-7 section-heading mx-20">
        My <br />
        Education
      </h1>
      <div className="flex">
        <Lottie
          animationData={Educationani}
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
                Completed my Secondary School from D.C. Lewis Memorial School
                with Grade A marks.
              </p>
            </div>

            <div className="box mt-4 mb-4 bg-white mx-12">
              <h4 className="smallsub-heading px-5">2019 - 2021</h4>
              <h3 className="sub-heading px-5">High School Degree</h3>
              <p className="text-lg px-5 pb-5">
                Completed my High School from D.C. Lewis Memorial School with
                Grade A marks.
              </p>
            </div>

            <div className="box mt-4 mb-4 bg-white mx-12">
              <h4 className="smallsub-heading px-5">2021 - 2025</h4>
              <h3 className="sub-heading px-5">
                Bachelors In Technology Degree
              </h3>
              <p className="text-lg px-5 pb-5">
                Pursuing Bachelors in Technology in Computer Science And
                Engineering from Chandigarh Engineering College.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
