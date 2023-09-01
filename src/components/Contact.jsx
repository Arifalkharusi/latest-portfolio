import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full text-white Contact bg-primary">
      <div className="flex flex-col w-full gap-16 py-[70px]">
        <div className="self-center text-xl font-bold">CONTACT</div>
        <div className="flex gap-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621737.0336530621!2d-2.4747514363883214!3d52.503388694486276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487080d43225d7fd%3A0x8dc86fdb3abbf3e7!2sWest%20Midlands!5e0!3m2!1sen!2suk!4v1692800209228!5m2!1sen!2suk"
            width="600"
            height="450"
            title="maps"
            className="w-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col w-full gap-4">
            <div className="text-5xl font-bold">Contact Me</div>
            <form className="flex flex-col gap-4 text-black">
              <div className="flex gap-2 [&>input]:p-2 [&>input]:border-[1px] [&>input]:w-full [&>input]:border-gray-300 [&>input]:rounded-[4px] [&>input:focus]:outline-none">
                <input type="text" placeholder="Name*" />
                <input type="email" placeholder="Email*" />
              </div>
              <textarea
                cols="30"
                rows="10"
                placeholder="Your message here*"
                className="p-2 border-[1px] border-gray-300 rounded-[4px] focus:outline-none"
              />
              <button
                className="px-10 py-5 font-bold text-white transition-all bg-blue-400 rounded-md cursor-pointer hover:bg-blue-500"
                type="submit"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
