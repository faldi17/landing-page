import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10 bg-white/10 backdrop-blur-lg text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
      <div className="w-full max-w-2xl bg-gray-900/80 p-6 rounded-lg shadow-md">
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 mb-4 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
          ></textarea>
          <button className="w-full px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-semibold shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
