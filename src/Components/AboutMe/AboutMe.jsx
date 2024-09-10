import React from "react";
import profilePhoto from "../../assets/mypic2.jpeg";

function AboutMe() {
  return (
    <div id="about-section" className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400  ">
        About Me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
          <div className="flex flex-col mt-10 lg:flex-row items-center">
            {/* Profile Picture */}
            <div className="flex-shrink-0 lg:mb-0 lg:mr-8 text-center">
              <img
                src={profilePhoto}
                alt="Profile"
                className="rounded-full mx-auto w-80 h-96 object-cover shadow-md my-auto"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-green-400 ">
                  Experience
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  1+ years in Frontend Development
                </p>
                <h2 className="text-2xl font-semibold mb-2 mt-4 text-green-400 ">
                  Education
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Bachelor in Computer Science
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Masters in Information Technology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Technologies and Skill Bars */}
          <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 ">Technologies</h2>

            {/* Skill Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Skill Bar: HTML */}
              <div className="mb-4">
                <span className="font-semibold">HTML</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: CSS */}
              <div className="mb-4">
                <span className="font-semibold">CSS</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: JavaScript */}
              <div className="mb-4">
                <span className="font-semibold">JavaScript</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-yellow-500 h-4 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: React */}
              <div className="mb-4">
                <span className="font-semibold">React</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-300 h-4 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: Vue */}
              <div className="mb-4">
                <span className="font-semibold">Vue</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-green-400 h-4 rounded-full"
                    style={{ width: "73%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: Angular */}
              <div className="mb-4">
                <span className="font-semibold">Angular</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: Next */}
              <div className="mb-4">
                <span className="font-semibold">Next.js</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: Nuxt */}
              <div className="mb-4">
                <span className="font-semibold">Nuxt.js</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-gray-600 h-4 rounded-full"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: Bootstrap */}
              <div className="mb-4">
                <span className="font-semibold">Bootstrap</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-purple-500 h-4 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: Tailwind */}
              <div className="mb-4">
                <span className="font-semibold">Tailwind CSS</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-teal-500 h-4 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              {/* Skill Bar: PrimeVue */}
              <div className="mb-4">
                <span className="font-semibold">PrimeVue</span>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-orange-500 h-4 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
