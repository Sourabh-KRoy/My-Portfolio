import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#001b29] text-white overflow-x-hidden">
      <div className="container mx-auto py-16 px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white mb-12">
          Get in <span className="text-[#00eeff]">Touch</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Contact Information */}
          <div className="bg-[#002b36] p-8 rounded-lg shadow-lg w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#00eeff] mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg">
              If you have any questions, feel free to reach out through any of the following methods:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                <i className="bx bx-phone text-2xl text-[#00eeff] mr-3" /> +1 (234) 567-890
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                <i className="bx bx-mail-send text-2xl text-[#00eeff] mr-3" /> email@example.com
              </li>
              <li className="flex items-center text-gray-300 text-sm sm:text-base md:text-lg">
                <i className="bx bx-map text-2xl text-[#00eeff] mr-3" /> 1234 Street Name, City, Country
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-[#002b36] p-8 rounded-lg shadow-lg w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#00eeff] mb-4">Send a Message</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 mb-4 bg-[#003347] text-white rounded-md border-none focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 mb-4 bg-[#003347] text-white rounded-md border-none focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 mb-4 bg-[#003347] text-white rounded-md border-none focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-[#00eeff] text-[#001b29] font-semibold rounded-full shadow-lg hover:bg-[#00bcd4] hover:shadow-2xl transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
