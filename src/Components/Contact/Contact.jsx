import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "../Contact/Contact.css";
import profilePhoto from "../../assets/webdev.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_wi8fglu",
        "template_f2fdcto",
        formData,
        "Cu9oOcWd5rCmGGAmb"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFeedbackMessage(
            "Thank you for reaching out! I will get back to you soon."
          );
          setFormData({ name: "", email: "", message: "" }); // Clear form after submission
        },
        (error) => {
          console.log("FAILED...", error);
          setFeedbackMessage(
            "Sorry, something went wrong. Please try again later."
          );
        }
      );
  };

  return (
    <div
      id="contact-section"
      className="p-8 min-h-screen flex flex-col items-center justify-between "
    >
      {/* Center Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center  text-green-400 ">
        Looking for a freelancer? Contact me!
      </h1>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-5xl mb-24">
        {/* Left Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg w-full md:w-1/2 flex flex-col justify-between ">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form className="space-y-4 flex-grow" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-lg font-medium mb-2 block">Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Your Name"
                required
              />
            </label>
            <label className="block">
              <span className="text-lg font-medium mb-2 block">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Your Email"
                required
              />
            </label>
            <label className="block">
              <span className="text-lg font-medium mb-2 block">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="form-input mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Your Message"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition ease-in-out duration-150 w-full"
            >
              Send Message
            </button>
          </form>
          {feedbackMessage && (
            <p className="text-green-500 mt-4">{feedbackMessage}</p>
          )}
        </div>

        {/* Right Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg w-full md:w-1/2 flex flex-col justify-between ">
          <div className="flex-shrink-0 mb-6 w-full flex justify-center">
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-50 lg:h-50 shadow-md"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4">Why Choose Me?</h2>
          <p className=" mb-4">
            I am a dedicated frontend developer with over 1 years of experience.
            I specialize in creating beautiful and functional user interfaces
            using the latest technologies. If you are looking for someone who
            can turn your ideas into a polished product, you’ve come to the
            right place!
          </p>
          <p className=" mb-4">
            Feel free to reach out if you have any questions or need further
            information. I look forward to hearing from you!
          </p>
          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
