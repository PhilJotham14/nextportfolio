"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import VideoModal from "./ui/VideoModal"; // Import the VideoModal component
import Image from 'next/image';

const RecentProjects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    setCurrentVideo(videoUrl); // Set the video to play
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setCurrentVideo(null); // Clear the video
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Recent <span className="text-purple">Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            {/* <a href={item.link} target="_blank"> */}
              {/* <PinContainer title="View" href={item.link}> */}
              {/* <PinContainer title="View"> left this blank and removed View because it would confuse users to click it */}
              <PinContainer>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    {/* <img src="/bg.png" alt="bgimg" /> */}
                    <Image 
                      src="/bg.png" 
                      alt="bgimg" 
                      layout="responsive" 
                      width={500}  // Aspect ratio width
                      height={300} // Aspect ratio height
                    />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
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
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex justify-center items-center cursor-pointer"
                    onClick={() => handleVideoClick(item.videoLink)}
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Video
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            {/* </a> */}
          </div>
        ))}
      </div>

      {isModalOpen && currentVideo && (
        <VideoModal videoUrl={currentVideo} onClose={closeModal} />
      )}
    </div>
  );
};

export default RecentProjects;