export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  // {
  //   id: 1,
  //   title: "I prioritize client collaboration, fostering open communication ",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b1.svg",
  //   spareImg: "",
  // },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    // originally className: "lg:col-span-2 md:col-span-3 md:row-span-1", changed it so the below borders could fit perfectly.
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MERN STACK DASHBOARD WEB-APPLICATION",
    des: "Admin Dashboard Wireframe design using FIGMA & working Web Application.",
    img: "/dashboard.png",
    iconLists: ["/mongodb.svg", "/express.svg", "/react.svg", "/nodejs.svg", "/postman.svg"],
    link: "/ui.earth.com",
    videoLink: "https://res.cloudinary.com/dv0cy50r2/video/upload/v1727128004/mernAdminDashboard_agmjib.mp4",
  },
  {
    id: 2,
    title: "CLIENT & DRIVER MOBILE APP",
    des: "Client App to order Groceries & Driver App to track & deliver Groceries running on Android Studio.",
    img: "/client.png",
    iconLists: ["/android_studio.svg", "/react.svg", "/ts.svg", "/mongodb.svg"],
    link: "/ui.yoom.com",
    videoLink: "https://res.cloudinary.com/dv0cy50r2/video/upload/v1727128153/ntumaMobileDemoApp_uv8aiv.mp4",
  },
  {
    id: 3,
    title: "SOFTWARE WEB-PORTFOLIO",
    des: "Built a Professional Web Porfolio to show my IT competence in Sentry, Next JS, React JS and Framer Motion.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.aiimg.com",
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "I've had the privilege of mentoring Phillip throughout his journey as a Full Stack Developer | Software Developer. His dedication to mastering both front-end and back-end technologies, combined with their problem-solving mindset has been impressive. Phillip consistently delivers high-quality work and I have no doubt they will continue to excel in the tech industry.",
    name: "Mr. Bright Onapito",
    title: "FullStack Engineer | Data and Artificial Intelligence",
    profileImage: "/bright.png", // Add profile image path
  },
  {
    quote:
      "During Phillip's time at Refactory, I witnessed remarkable growth and dedication. As a Full Stack Developer, Phillip consistently demonstrated technical expertise, a keen eye for detail and the ability to solve complex challenges. His coolaborative projects are a testament to his hard work and innovative approach. I’m confident Phillip will continue to make significant contributions in his future endeavors.",
    name: "Ms. Dorothy Oyella",
    title: "Placement and Mentorship Lead",
    profileImage: "/dorothy.png", // Add profile image path
  },
];

export const companies = [
  {
    id: 1,
    name: "refactory",
    img: "/refactorylogo.png",
    nameImg: "/refactorylogo.png",
  },
  {
    id: 2,
    name: "isbat",
    img: "/isbatlogo.png",
    nameImg: "/isbatlogo.png",
  },
  // {
  //   id: 1,
  //   name: "cloudinary",
  //   img: "/cloud.svg",
  //   nameImg: "/cloudName.svg",
  // },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "FullStack Development",
    desc: "Conservant with building Web-Apps both Frontend & Backend in Next JS | MERN STACK [MONGO DB, EXPRESS, REACT JS, NODE JS] | Mobile Apps in React Native",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Python Data Analyst",
    desc: "The ability to scrape, analyse, interprete data in a data set in Python using Numpy, Pandas, Matplotlib",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX Wireframes",
    desc: "FIGMA Designs in User Research / User Personas & User flows / Wireframing & Prototyping / Visual Design / Usability Testing.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Design",
    desc: "With the S.O.L.I.D design principles, creational and structural design patterns in mind to design extensible, modular, reusable, secure, and scalable software solutions which are then modelled with ADL and UML diagrams.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
    {
    id: 5,
    title: "Project Management",
    desc: "Using the Agile framework methodology and Scrum in particular getting team players accountable to the process. Trello Boards and Github Projects are great tools to track project progress and visualization of projects.",
    className: "md:col-span-2",
    thumbnail: "/exp5.svg",
  },
    {
    id: 6,
    title: "Software & Office Application Installations",
    desc: "Fully Activated Installation of Software of Choice, to boost productivity and smooth adminstration of running Office applications at workplaces.",
    className: "md:col-span-2",
    thumbnail: "/exp6.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/PhilJotham14",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/okiror-phillip-jotham-4389521ab",
  },
];
