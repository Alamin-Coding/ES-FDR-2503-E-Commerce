import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-sm shadow-xs border border-gray-100 ">
      <form className="py-11.5 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-sm border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none"
            />
            <span className="text-[#E89C9C] absolute top-3 left-27.5">*</span>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none"
            />
            <span className="text-[#E89C9C] absolute top-3 left-33.5">*</span>
          </div>
          <div className="relative">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none"
            />
            <span className="text-[#E89C9C] absolute top-3 left-34.5">*</span>
          </div>
        </div>
        <div className=" mt-8">
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full pl-4 pt-3 pb-16.5 rounded-lg border border-gray-200 bg-gray-50 placeholder-gray-400 focus:outline-none "
          ></textarea>
        </div>
        <div className="relative pt-8 pb-10">
        <button
          type="submit"
          className=" bg-secondary hover:bg-red-600 text-white font-medium py-4 px-12 rounded-sm transition-colors duration-200 absolute right-0 cursor-pointer"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
