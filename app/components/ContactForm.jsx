"use client";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

 

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const serviceID = "service_gkbhrzg";
    const templateID = "template_q93aw8w";
    const publicKey = "umjYihTJtsop8K28Q";

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          toast.success("Thank you for your message! I will get back to you soon.", {
            position: "top-right",
            autoClose: 4000,
          });
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Oops! Something went wrong. Please try again.", {
            position: "top-right",
            autoClose: 4000,
          });
          console.error("EmailJS error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-black">
      <ToastContainer />
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center text-white mb-20 mt-20">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading || !isOnline}
            className={`w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              loading || !isOnline
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
