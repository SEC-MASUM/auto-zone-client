import React from "react";
import photo from ".././../../Assets/images/portfolio/Masum.JPG";
const AboutMe = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="min-h-fit max-h-fit bg-[white] flex flex-col lg:flex-row">
        <div className="flex-1 ">
          <div className="px-6 py-12">
            <div className="flex items-center">
              <div className="bg-slate-600 w-10 h-px "></div> About Me
            </div>
            <h1 className="text-4xl font-bold pt-4">Md. Masum Billah</h1>
            <p className="text-base py-8">
              Hello, My name is Md. Masum Billah. I am a student of PH. I love
              minimalism and I create web application using React. Feel free to
              contact me for any React projects you might have in mind.
            </p>
            <div className="grid grid-cols-2 gap-y-6">
              <label htmlFor="" className="">
                <span className="font-bold">Birthday:</span>30 November 1996
              </label>
              <label htmlFor="" className="">
                <span className="font-bold">Degree:</span> BSc
              </label>
              <label htmlFor="" className="">
                <span className="font-bold">Study:</span> Sylhet Engineering
                College
              </label>
              <label htmlFor="" className="">
                <span className="font-bold">Phone:</span> +880 1680 262295
              </label>
              <label htmlFor="" className="">
                <span className="font-bold">Mail:</span> masum.jess42@gmail.com
              </label>
              <label htmlFor="" className="">
                <span className="font-bold">Linkedin:</span> @masumbillah42
              </label>
              <label htmlFor="" className="">
                <span className="font-bold">Github:</span> /SEC-MASUM
              </label>
              <label htmlFor="" className="">
                <span className="font-bold">Fb:</span> /devbillah.masum
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center bg-[#399BDA]">
          <figure>
            <img src={photo} alt="" className="h-[500px] aspect-auto" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
