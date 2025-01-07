export const navItems = [
  { name: "Education", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Accomplishments", link: "#accomplishments" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Landing.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "GCSE O/A Levels",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,

    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Numbers AI: Multimodal Voice Bot Platform",
    des: "Built with Python FastAPI and LiveKit Agent, leveraging OpenAI s real-time API for low-latency responses.. ",
    img: "/Project5.png",
    video: "/Project5.mp4",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  },
  {
    id: 2,
    title: "IT Curves: Accessible Ride-Booking Chatbot ",
    des: "Implemented a real-time Named Entity Recognition model using Groq LLaMA 3.1-70B-Versatile for dynamic address suggestions..",
    img: "/chatImage.png",
    video: "/VideoImage.mp4",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  },
  {
    id: 3,
    title: "Somos: Ethereum Crypto Wallet application",
    des: "Developed a subscription-based crypto wallet application utilzing Web3.js for Solana blockchain interaction",
    img: "Image1Project.png",
    video: "/Video2.mp4",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.somosblockchain.com",
  },
  {
    id: 4,
    title: "Inflo: One click Information Sharing Mobile App",
    des: "Designed a scalable database schema with Prisma ORM for seamless migrations and optimized query performance.",
    img: "/Image2.png",
    video: "/Video1.mp4",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  },
  {
    id: 5,
    title: "Baichday: Web based Bidding Platform using MERN Stack",
    des: "Developed a MERN stack web app with a user-friendly UI designed in Figma and ensured functionality through Cypress automated testing, enabling secure bidding and efficient item listing.",
    img: "/Image3.png",
    video: "/Video3.mp4",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  },
  {
    id: 6,
    title: "A Neural Network s Exploration of Custom Image Data",
    des: "Achieved high accuracy on fashion item recognition, reflecting expertise in neural network architecture, hyperparameter tuning, and model evaluation..",
    img: "/Image2.jpg",

    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  },
];

export const accomplishments = [
  {
    title: "Deans Honour List",
    description:
      "Recognized for academic excellence in Spring 2020 and Fall 2022.",
  },
  {
    title: "Football Excellence",
    description:
      "Awarded the prestigious LUMS Football Team Color Award and named Top Goal Scorer for two consecutive years.",
  },
  {
    title: "Cricket Excellence",
    description:
      "Achieved Top Runs Scorer Award for the LUMS Cricket Team, scoring six half-centuries and two centuries across competitive matches.",
  },
  {
    title: "Leadership in Sports",
    description:
      "Captained the LUMS Football Team to a historic victory at the UCL Sportsfest 23 Inter-University Tournament.",
  },
  {
    title: "LRP Football League 22",
    description:
      "Crowned Top Scorer and secured the Runners-Up trophy in a competitive league hosted by SA Gardens.",
  },
  {
    title: "Team of the Year 2022",
    description:
      "Contributed to LUMS Football Team being awarded the prestigious title.",
  },
  {
    title: "LSE Sports Gala 22",
    description:
      "Part of the winning LUMS Football Team and honoured with the Best Delegation Award.",
  },
  {
    title: "Islamic Microfinance Leadership",
    description:
      "Core Team Member for the 2nd Islamic Microfinance Round Table Conference, hosting 50+ participants from leading organizations in the microfinance sector.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "Volunteered for Lahore Conservation Society s plantation drive, planting 1,000 trees across parks and government schools.",
  },
  {
    title: "A-Level Merit Scholarship",
    description:
      "Awarded a 100% merit-based scholarship for exceptional academic performance.",
  },
  {
    title: "JT Sportsfest Leadership",
    description:
      "Served as Logistics Head for one of Pakistan s largest sports Olympiads, coordinating 1,500 participants.",
  },
  {
    title: "Innoventions Security Head",
    description:
      "Led security arrangements for JT Innoventions, a national high school STEM Olympiad with 675 delegates.",
  },
  {
    title: "Cultural Ambassador",
    description:
      "Represented Pakistan on a cultural exchange program to Azerbaijan and Uzbekistan, promoting cross-cultural understanding.",
  },
  {
    title: "Academic Distinctions",
    description:
      "Achieved Internal Distinction in O-Level Chemistry and Straight A s in Cambridge O-Level exams.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer - Senarios",
    desc: "Developing AI-powered platforms and Web3 apps focusing on business automation and customer engagement. Proficient in backend development using FastAPI and Node.js, API integration, and AWS-based deployments.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Software Developer - Embedded Processing Limited",
    desc: "Implemented WI-SUN communication protocol integration into Smart Meters embedded C codebase, conducting rigorous unit testing through hardware flash programming. Enhanced user experience with front-end design using Vue JS and improved backend functionality.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Development Intern - Suave Solutions",
    desc: "Designed the front-end of a web application using HTML/CSS and ensured consistency across 20+ web pages.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Market Research Intern - SB&B Marketing Research",
    desc: "Assisted the Senior Strategist on Auto-car surveys by conducting 200+ face-to-face interviews with car owners in customer satisfaction surveys, brand image/health surveys, and post-launch surveys.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mahadmubashir",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mahad-mubashir-beg-408126214/",
  },
];
