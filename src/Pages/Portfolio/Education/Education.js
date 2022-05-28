import React from "react";

const Education = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="min-h-fit max-h-fit bg-white flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#CA9670] ">
          <div className="text-white px-6 py-12">
            <h1 className="text-3xl font-bold border-b-2">Education</h1>
            <div className="space-y-3 py-3">
              <div>
                <label htmlFor="" className="label py-0 ">
                  <span className="text-lg font-medium">
                    BSc Engineering in CSE
                  </span>
                  <span className="px-2 py-1 bg-orange-500/50">2014-2019</span>
                </label>
                <label htmlFor="" className="">
                  <span className="label py-0 label-text ">
                    Sylhet Engineering College under the school of Applied
                    Science & Technology, SUST
                  </span>
                </label>
              </div>
              <div>
                <label htmlFor="" className="label py-0">
                  <span className="text-lg font-medium">HSC</span>{" "}
                  <span className="px-2 py-1 bg-orange-500/50">2011-2013</span>
                </label>
                <label htmlFor="" className="">
                  <span className="label py-0 label-text ">
                    Cantonment College Jessore
                  </span>
                </label>
              </div>
              <div>
                <label htmlFor="" className="label py-0 ">
                  <span className="text-lg font-medium">SSC</span>
                  <span className="px-2 py-1 bg-orange-500/50">2007-2011</span>
                </label>
                <label htmlFor="" className="">
                  <span className="label py-0 label-text">
                    Police Line Secondary School Jessore
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
