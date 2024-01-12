import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Messageani from "../assets/Message.json";
import Lottie from "lottie-react";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgvei6m",
        "template_2mu2loj",
        form.current,
        "7SG2UkX8YSNmQJ1Gy"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="pt-14 pb-14 px-14 bg-white" id="contact">
      <h1 className="text-3xl text-[#425BB5] long-dash mx-20"> 05</h1>
      <h1 className="py-7 section-heading mx-20">Contact Me</h1>
      <div className="Message flex justify-between">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" flex flex-col gap-2 p-11 ml-12 bg-[#f3f3f3] rounded-lg"
        >
          <label>Name</label>
          <input
            className="bg-white rounded-md"
            type="text"
            name="user_name"
            required
          />
          <label>Email</label>
          <input
            className="bg-white rounded-md"
            type="email"
            name="user_email"
            required
          />
          <label>Message</label>
          <textarea name="message" className="bg-white rounded-md" />
          <input
            type="submit"
            value="Send"
            className="text-white bg-[#425BB5] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-20 cursor-pointer"
          />
        </form>
        <Lottie
          animationData={Messageani}
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    </section>
  );
}

export default ContactMe;
