 const navLinks = [
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "My Projects",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact Me",
    link: "#contact",
  },
];

const tags = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const btItems = [
  { value: 1, suffix: "+", context: "Years of Experience" },
  { value: 12, suffix: "+", context: "Languages Learned" },
  { value: 15, suffix: "+", context: "Completed Projects" },
  { value: 90, suffix: "%", context: "Project Success Rate" },
];

const logoIconsList = [
  {
    name: "HTML5",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    percentage: 95,
  },
  {
    name: "CSS3",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    percentage: 90,
  },
  {
    name: "TailwindCSS",
    imgPath: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    percentage: 85,
  },
  {
    name: "JavaScript",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    percentage: 90,
  },
  {
    name: "TypeScript",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    percentage: 75,
  },
  {
    name: "React",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    percentage: 85,
  },
  {
    name: "Next.js",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    percentage: 70,
  },
  {
    name: "GSAP",
    imgPath: "https://cdn.worldvectorlogo.com/logos/greensock.svg",
    percentage: 65,
  },
  {
    name: "Three.js",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
    percentage: 60,
  },
  {
    name: "Firebase",
    imgPath: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    percentage: 80,
  },
  {
    name: "Flutter",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
    percentage: 75,
  },
  {
    name: "Dart",
    imgPath: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",
    percentage: 70,
  },
];



const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const skillStackIcons = [
  {
    name: "Frontend Development",
    modelPath: "/models/react.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Development",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Development",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Development",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const qualityCards = [
  {
    review:
      "Languages (HTML5, CSS3, TailwindCSS, Bootstrap, JS, TS) Frameworks (React, Three, Next.js, Vue, GSAP) Main Focus (UI/UX, interactivity)",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated with UI/UX teams to ensure seamless user experiences.",
    ],
  },
  {
    review:
       "Languages (JS, Python, Java, PHP) Frameworks (Node.js, Next.js) Database (XAMPP, FireBase, SQL/NoSQL, JSON) Main Focus (Logic)",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Worked on Backend in each project, focusing on scalability and logic.",
      "Worked with teams to integrate cloud API seamlessly with the frontend.",
    ],
  },
  {
    review:
     "Languages (JS/TS, Python)	Frameworks (Node, Next, React) Database (XAMPP, FireBase, SQL/NoSQL, JSON) Main Focus (Clean, Perfect)",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Full Stack Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Led every project in both web and mobile application, Merged Frontend with Backend.",
      "Improved app performance and user experience through code optimization and testing.",
    ],
  },
];

const aboutCards = [
  {
    title: "Frontend Developer",
    imgP: "/images/nishyDp.png",
    review: "Languages (HTML5, CSS3, TailwindCSS, Bootstrap, JS, TS) Frameworks (React, Three, Next.js, Vue, GSAP) Main Focus (UI/UX, interactivity)",
    responsibilities: [
      "Developed and maintained user-facing features for web applications.",
      "Collaborated with UI/UX teams to ensure seamless user experiences.",
      "Implemented interactive animations and responsive designs.",
    ],
  },
  {
    title: "Education",
    imgP: "/images/ewu.jpg",
    review: "Languages (Dart, Flutter) Main Focus (Cross-platform mobile development, UI/UX)",
    responsibilities: [
      "Built cross-platform mobile applications with Flutter.",
      "Integrated Firebase for authentication and database management.",
      "Optimized app performance and responsiveness across devices.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/nayma-amin-nishy-b1260532b/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  tags,
  abilities,
  logoIconsList,
  btItems,
  qualityCards,
  aboutCards,
  expLogos,
  socialImgs,
  skillStackIcons,
  techStackImgs,
  navLinks,
};