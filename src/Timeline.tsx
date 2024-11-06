import { motion } from "framer-motion";
import experiences from "./experience";

import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";

import use3DRotation from "./util/use3DRotation";

export default function Timeline({ defaultColor }: { defaultColor: string }) {
  const { ref, transform, handleMouseMove, handleMouseLeave } =
    use3DRotation(10);
  return (
    <div>
      {experiences.map((element, index) => {
        // const colors = ["bg-blue-500", "bg-green-500", "bg-orange-500"];
        const color = `bg-${element.color}-500` || defaultColor;

        return (
          <div key={index} className="flex mt-4 relative">
            <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-[14.5rem] opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-96 translate-y-[14.5rem] opacity-60 sm:hidden`}
            ></div>

            {/* only show on small screen */}
            <div className="hidden items-start w-72 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-gray-500">{element.date}</div>
              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`${color} flex items-center justify-center w-10 h-10 p-1 rounded-lg z-20`}
              >
                {element.icon === "work" ? (
                  <MdOutlineWorkOutline color="white" size="1.5em" />
                ) : (
                  <IoSchoolOutline color="white" size="1.5em" />
                )}
              </motion.div>
              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>

            {/* big screen */}
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
                transform,
              }}
              className="border bg-gradient-to-br from-[#29323c] to-[#485563] rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96"
            >
              <div className="text-xl font-medium font-poppins">
                {element.title}
              </div>
              <div className="text-gray-300 mb-4 sm:mb-6 sm:text-xs">
                {element.locatoin}{" "}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <div className="mb-4 text-left text-base">
                {element.description}
              </div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div
                className={`${color} flex items-center justify-center w-8 h-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
              >
                <IoSchoolOutline color={color} size="2em" />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
