import React from "react";
import code from "../img/code.png";

const About = () => {
  return (
    <div className="flex items-center justify-center w-full About">
      <div className="w-full text-black bg-white text-[15px] flex justify-between gap-[50px] py-[100px]">
        <div>
          <img src={code} alt="" className="w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-3 max-w-[500px]">
          <div className="font-bold text-blue-400">ABOUT ME</div>
          <p>
            Thanks for stopping by. As a Web Developer, I have spent the last 13
            months honing my skills in creating visually appealing and
            user-friendly websites. I am looking for an opportunity to join a
            company, where I am excited to be part of creating cutting-edge
            digital solutions that enhance the online experience for the
            clients.
          </p>
          <p>
            I have a strong passion for design and user experience, and I
            believe that the key to creating successful websites is
            understanding and catering to the needs of the end user. I am always
            eager to learn new techniques and technologies to stay ahead -in the
            field and deliver the best possible experience for our clients.
          </p>
          <div className="grid grid-cols-2 gap-3 [&>div>h4]:font-bold ">
            <div>
              <h4>NAME</h4>
              <div>Arif Al Kharusi</div>
            </div>
            <div>
              <h4>EDUCATION</h4>
              <div>Full Stack Developer Bootcamp</div>
              <div>Msc Finance & Accounting</div>
            </div>
            <div>
              <h4>EMAIL</h4>
              <div>arifalkharusi@hotmail.com</div>
            </div>
            <div>
              <h4>EMPLOYMENT</h4>
              <div>Open</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
