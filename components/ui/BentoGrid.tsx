// to prevent errors whe using Framer motion, drag component, have to tell Framer this is a client component
"use client";

import { useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

// Extra Cards/BentoGrid 
import {Card} from "./Card";
import JavascriptIcon from '@/public/assets/icons/square-js.svg';
import CssIcon from '@/public/assets/icons/css3.svg'; 
import ReactIcon from '@/public/assets/icons/react.svg'; 
import GithubIcon from '@/public/assets/icons/github.svg';
import NodeJsIcon from '@/public/assets/icons/node-js.svg';
import MongoDbIcon from '@/public/assets/icons/mongodb.svg';
import ExpressJsIcon from '@/public/assets/icons/express.svg';
import MySqlIcon from '@/public/assets/icons/mysql.svg';
import TailwindCssIcon from '@/public/assets/icons/tail.svg';
import PythonIcon from '@/public/assets/icons/python.svg';
import FigmaIcon from '@/public/assets/icons/figma.svg';
import NextJsIcon from '@/public/assets/icons/nextjs.svg';
import AndroidStudioIcon from '@/public/assets/icons/android_studio.svg';
import PostgreSQLIcon from '@/public/assets/icons/postgresql.svg';
import PostmanIcon from '@/public/assets/icons/postman.svg';
import { CardHeaderBentoGrid } from "./CardHeaderBentoGrid";
import { ToolboxItemsBentoGrid } from "./ToolboxItemsBentoGrid";
import { motion } from 'framer-motion';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 px-6 lg:px-8 w-full mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Next JS", "Express", "Node JS"];
  const rightLists = ["MongoDB", "ReactJS", "Python"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "p.jothamokiror@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Get toolbox icons from Font Awesome https://fontawesome.com/icons/
const toolboxItems = [
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },
  {
    title: "Express JS",
    iconType: ExpressJsIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next JS",
    iconType: NextJsIcon,
  },
  {
    title: "Node JS",
    iconType: NodeJsIcon,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "MySQL",
    iconType: MySqlIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindCssIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Android Studio",
    iconType: AndroidStudioIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQLIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
];

const hobbies = [
  {
    title: 'Reading',
    emoji: '📚', 
    left: "45%",
    top: "75%",
  },
  {
    title: 'Documentation',
    emoji: '✍️', 
    left: "50%",
    top: "5%",
  },
  {
    title: 'Open Source Contributions',
    emoji: '💻', 
    left: "35%",
    top: "40%",
  },
  {
    title: 'Technical Writing',
    emoji: '📝', 
    left: "5%",
    top: "5%",
  },
  {
    title: 'Learning New Tech',
    emoji: '📖', 
    left: "10%",
    top: "35%",
  },
  {
    title: 'Mentorship',
    emoji: '👨‍🏫', 
    left: "70%",
    top: "45%",
  },
  {
    title: 'Problem Solving',
    emoji: '🧩', 
    left: "5%",
    top: "65%",
  },
]

// Cards, svg resources
export const AbtSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="container px-4 lg:px-8">
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-2">
        {/* My Toolbox Card */}
        <Card className="h-[320px] md:col-span-3 lg:col-span-1">
          <CardHeaderBentoGrid
            title="My Tech Stark"
            description="Explore the technologies and tools I use to craft exceptional digital experiences."
            className=""
          />
          <ToolboxItemsBentoGrid 
            items={toolboxItems} 
            className="" 
            itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
          <ToolboxItemsBentoGrid
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName="animate-move-right [animation-duration:15s]"
          />
        </Card>

        {/* Beyond the Code Card */}
        <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-1">
          <CardHeaderBentoGrid
            title="Elevation from Code"
            description="Discover my passions and hobbies beyond the digital realm."
            className="px-6 py-6"
          />
          <div className="relative flex-1" ref=
          {constraintRef}>
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.title}
                className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}