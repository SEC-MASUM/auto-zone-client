import React from "react";
import reactProject from "../../../Assets/images/portfolio/ReactProject.PNG";
import bootstrapProject from "../../../Assets/images/portfolio/BootstrapProject.PNG";
import jsProject from "../../../Assets/images/portfolio/JSProject.PNG";

const WorkShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="min-h-fit max-h-fit bg-white">
        <div className="">
          <div className="px-6 py-12">
            <div className="flex items-center">
              <div className="bg-slate-600 w-10 h-px "></div> Recent work
              completed
            </div>
            <h1 className="text-4xl font-bold pt-4">Work showcase</h1>
            <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center py-8">
              {/* <div className="bg-slate-50 w-40 h-40  min-h-fit    rounded-xl shadow-lg flex justify-center items-center">
                <i class="devicon-html5-plain-wordmark colored "></i>
              </div> */}
              {/* -------------------Project Bootstrap------------ */}
              <div
                className="hero group  bg-white w-80 h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
                style={{
                  backgroundImage: `url(${bootstrapProject})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
                <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
                  <p className="text-2xl">Bootstrap Project</p>
                  <div className="space-x-3">
                    <a
                      href="https://convention-center-landing-page-bootstrap.netlify.app/"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                    <a
                      href="https://github.com/Porgramming-Hero-web-course/convention-center-SEC-MASUM"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------------- */}
              {/* -------------------Project JS------------ */}
              <div
                className="hero group  bg-white w-80 h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
                style={{
                  backgroundImage: `url(${jsProject})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
                <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
                  <p className="text-2xl">Javascript Project</p>
                  <div className="space-x-3">
                    <a
                      href="https://money-expense-manager.netlify.app/"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                    <a
                      href="https://github.com/Porgramming-Hero-web-course/money-master-SEC-MASUM"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------------- */}
              {/* -------------------Project React------------ */}
              <div
                className="hero group  bg-white w-80 h-72 min-h-fit max-w-xs md:max-w-sm   rounded-xl  shadow-lg "
                style={{
                  backgroundImage: `url(${reactProject})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="hero-overlay rounded-xl group-hover:bg-opacity-90 bg-gray-800 bg-opacity-0"></div>
                <div className="hidden group-hover:block hero-content text-center text-white space-y-4">
                  <p className="text-2xl">React Project</p>
                  <div className="space-x-3">
                    <a
                      href="https://book-buddy01.web.app/"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                    <a
                      href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-SEC-MASUM"
                      className="btn btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
              {/* ------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
