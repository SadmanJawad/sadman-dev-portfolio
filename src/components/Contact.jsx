import React, { useRef } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const notify = () => toast.success("Email sent successfully!");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34dt3hu",
        "template_d0tg9sa",
        form.current,
        "QV2BjqyVPVIZoQ31a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="contact-container flex justify-center items-center">
        <form
          className="flex flex-col w-full md:w-7/12"
          ref={form}
          onSubmit={sendEmail}
        >
          <Title>Contact</Title>

          <input
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            type="text"
            name="user_name"
            placeholder="Name"
          />

          <input
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            type="email"
            name="user_email"
            placeholder="Email"
          />

          <textarea
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            rows="10"
            name="message"
            placeholder="Message"
          />

          <button
            onClick={notify}
            type="button"
            className="btn btn-outline text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            {" "}
            <input type="submit" value="Work with me" />
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Contact;
