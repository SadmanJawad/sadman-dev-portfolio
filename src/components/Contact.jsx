import React, { useRef, useState } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const notifySuccess = () => toast.success("Email sent successfully!");
  const notifyError = (message) => toast.error(message);

  const form = useRef();
  const [validationError, setValidationError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.user_name.value.trim()) {
      setValidationError(true);
      notifyError("Complete the name field");
      return;
    }

    if (!form.current.user_email.value.trim()) {
      setValidationError(true);
      notifyError("Complete the email field");
      return;
    }

    if (!form.current.message.value.trim()) {
      setValidationError(true);
      notifyError("Complete the message field");
      return;
    }

    setValidationError(false);

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
          notifySuccess();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col mb-10 mx-auto">
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
            required
          />

          <input
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />

          <textarea
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            rows="10"
            name="message"
            placeholder="Message"
            required
          />

          <button
            type="submit"
            className="btn btn-outline text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work with me
          </button>
          {validationError && <p className="text-red-500">Please complete all fields.</p>}
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Contact;
