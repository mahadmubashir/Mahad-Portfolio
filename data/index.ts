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
    id: 3,

    className: "lg:col-span-2 md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

type Project = {
  id: number;
  title: string;
  des: string;
  img?: string;
  // Fit the whole image instead of cropping it to fill the card (e.g. charts)
  imgContain?: boolean;
  video?: string;
  link?: string;
  // Defaults to "Check Live Site"
  linkLabel?: string;
  // Shown as a placeholder when there is no `img`
  category?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Poocho AI: Agentic AI Platform",
    des: "Built the backend for a unified AI-powered call centre platform with Node.js, PostgreSQL and Redis, plus IVR flows on FreeSWITCH and FusionPBX with RabbitMQ event processing.",
    img: "/Poocho.png",
    link: "https://poochoai.com/",
  },
  {
    id: 2,
    title: "Morphological Toxicity Prediction",
    des: "Benchmarked XGBoost and CatBoost across 412 toxicity endpoints, achieving MTT R²=0.820 with 5.2× fewer features via mutual information feature selection.",
    img: "/ToxicityProfiling.png",
    link: "https://canva.link/wsykujvu1bp3ulk",
    linkLabel: "View Presentation",
  },
  {
    id: 3,
    title: "Dialect-Aware Sarcasm Detection",
    des: "LoRA fine-tuned TinyLlama-1.1B across 3 English varieties, beating pooled RoBERTa (Macro-F1 0.6275 vs 0.6075) with a 550× smaller footprint.",
    img: "/SarcasmHeatmap.png",
    imgContain: true,
    link: "/Sarcasm_Detection_Report.pdf",
    linkLabel: "View Report",
  },
  {
    id: 4,
    title: "Diabetic Retinopathy Grading with Vision Transformers",
    des: "Fine-tuned ViT-B/16 on 35K retinal images across 7 ablation experiments, with Grad-CAM, Attention Rollout and LIME explainability.",
    img: "/DRGrading.png",
    link: "https://canva.link/ya9qzw5y2tgzbm4",
    linkLabel: "View Presentation",
  },
  {
    id: 5,
    title: "PM2.5 Air Quality Forecasting for Lahore",
    des: "End-to-end LSTM, CNN and Transformer forecasting pipeline with SHAP/LIME analysis and TFLite quantisation achieving 85-91% compression for edge devices.",
    img: "/PM25Residuals.jpg",
    imgContain: true,
    link: "/PM25_Forecasting_Report.pdf",
    linkLabel: "View Report",
  },
  {
    id: 6,
    title: "Numbers AI: RAG based Multimodal Voice Bot Platform",
    des: "Users create voice bots from documents or website URLs, backed by FAISS vector indexes, FastAPI, LiveKit Agent, OpenAI's low-latency API and Twilio.",
    img: "/Project5.png",
    video: "/Project5.mp4",
    link: "https://number5.ai/",
  },
  {
    id: 8,
    title: "IT Curves: Accessible Ride-Booking Chatbot",
    des: "Implemented a real-time Named Entity Recognition model using Groq LLaMA 3.1-70B-Versatile for dynamic address suggestions, with fine-tuned GPT-4o via LangChain.",
    img: "/ChatImage.png",
    video: "/VideoImage.mp4",
  },
  {
    id: 9,
    title: "Somos: Ethereum Crypto Wallet application",
    des: "Developed a subscription-based crypto wallet application utilizing Web3.js for Solana blockchain interaction",
    img: "/Image1Project.png",
    video: "/Video2.mp4",
    link: "https://www.somosblockchain.com",
  },
  {
    id: 10,
    title: "Inflo: One click Information Sharing Mobile App",
    des: "Designed a scalable database schema with Prisma ORM for seamless migrations and optimized query performance.",
    img: "/Image2.png",
    video: "/Video1.mp4",
  },
  {
    id: 11,
    title: "Video2Music: AI-Driven Video to Music Conversion",
    des: "Full-stack React and Python app that transcribes video audio with Whisper, analyses mood with fine-tuned GPT-3.5 and generates music with Meta's MusicGen.",
    video: "/vid2music.mp4",
    link: "https://github.com/mahadmubashir/Video2Music",
    linkLabel: "View Code",
  },
  {
    id: 12,
    title: "Unveiling Road Accident Patterns and Trends",
    des: "Applied EDA, clustering and frequent pattern mining to identify accident hotspots and develop data-driven road safety recommendations.",
    img: "/RoadAccidentClusters.png",
    imgContain: true,
    link: "https://colab.research.google.com/drive/1OKlsSmN0gv2fLcXterTPWWA45IDHXI8m?usp=sharing",
    linkLabel: "View Notebook",
  },
  {
    id: 13,
    title: "A Neural Network's Exploration of Custom Image Data",
    des: "Achieved high accuracy on fashion item recognition, reflecting expertise in neural network architecture, hyperparameter tuning, and model evaluation.",
    img: "/Image2.jpg",
  },
];

export const accomplishments = [
  {
    title: "Graduated with Distinction",
    description:
      "Awarded an MSc in Artificial Intelligence with Distinction from the University of Surrey.",
  },
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
    title: "Senior Software Engineer (ML & Full Stack) - Senarios",
    desc: "Built LLM-powered products for clients, including a RAG voice bot platform (FAISS, FastAPI, LiveKit, OpenAI, Twilio) and a ride-booking chatbot with Groq LLaMA NER and fine-tuned GPT-4o. Led client requirement meetings, ran SCRUM, and deployed backends on AWS with CI/CD.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer - Embedded Processing Limited",
    desc: "Implemented WI-SUN communication protocol integration into Smart Meters embedded C codebase, conducting rigorous unit testing through hardware flash programming. Automated testing with VectorCAST to validate code integrity and reliability, and built front-end features in Vue JS.",
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
