import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const RecentProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div>
      <div className="py-20" id="projects">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={item.id}
              onMouseEnter={() => setHoveredProject(item.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() =>
                item.link && window.open(item.link, "_blank", "noopener,noreferrer")
              }
            >
              <PinContainer>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    {item.img ? (
                      <Image
                        src={item.img.startsWith("/") ? item.img : `/${item.img}`} // Ensure the path starts with a slash if it's relative
                        alt="cover" // Alt text for accessibility
                        width={500} // Replace with the actual width of the image
                        height={300} // Replace with the actual height of the image
                        className={`absolute bottom-0 w-full h-full ${
                          item.imgContain ? "object-contain bg-white" : "object-cover"
                        }`}
                      />
                    ) : item.video ? (
                      // No still image: the video itself is the cover
                      <video
                        src={item.video}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#13162D] to-[#2a1f4d] p-6">
                        <span className="text-purple text-center font-bold lg:text-3xl text-xl">
                          {item.category}
                        </span>
                      </div>
                    )}

                    {hoveredProject === item.id && item.img && item.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <video
                          src={item.video}
                          className="w-98 h-full object-cover z-50"
                          autoPlay
                          loop
                          muted
                        />
                        <button
                          className="absolute top-2 right-2 text-white text-2xl"
                          onClick={(e) => {
                            e.stopPropagation();
                            setHoveredProject(null);
                          }}
                        >
                          &times;
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {/* {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))} */}
                  </div>

                  <div className="flex justify-center items-center">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center lg:text-xl md:text-xs text-sm text-purple z-1000"
                        onClick={(e) => e.stopPropagation()} // Card click would open the link a second time
                      >
                        {item.linkLabel ?? "Check Live Site"}
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </a>
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
