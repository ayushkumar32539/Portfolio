import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  docker,
  threejs, chatgpt
} from "../assets";
import nuren_ai from "../assets/company/nuren_ai.jpeg"
import agbiz from "../assets/company/agbiz.jpeg"
import carikture from "../assets/company/carikture.png"
import csi from "../assets/company/csi.png"
import crypto_tracker from "../assets/crypto_tracker.png"
import crm from "../assets/crm.png"
import portal from '../assets/portal.png'


  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Wordpress Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Chat GPT",
      icon: chatgpt,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Nuren AI",
      icon: nuren_ai,
      iconBg: "#ffffff",
      date: "May 2022 - Present",
      points: [
        "Achieved a 50% increase in product performance and scalability through optimization and code refactoring.",
        "Developed and Optimized Complex DS Algorithm for Labeling in Siteview Product.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Worked on Scalability & UX features for Siteview.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "Agbiz Technologies",
      icon: agbiz,
      iconBg: "#000000",
      date: "Apr 2023 - Jul 2023",
      points: [
        "Mentored junior developers, enhancing team performance and promoting knowledge sharing, leading to increased productivity.",
        "The curriculum focused on teaching coding in Javascript, understanding REST APIs, constructing backend structures using Flask, and developing impressive web applications with React.",
        "My main role involved guiding students and working on the core projects of the company",
        "The emphasis was on providing a comprehensive education in full-stack development.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Carikture",
      icon: carikture,
      iconBg: "#FAF9F6",
      date: "Dec 2022 - Feb 2022",
      points: [
        "I specialized in React JS, React Native, and Node JS development. Utilized React Hooks, React Routers, and Redux for enhanced functionality",
        "Implemented strict lint checks with TypeScript in Node JS projects. Contributed to diverse, large-scale applications, including e-commerce and social media platforms",
        "Established professional workflows for React Native and Node JS development. Implemented CI/CD pipelines with tools like Travis and Github.",
        "Proficient in working with databases like MongoDB, MySQL, and Postgres. Experienced with Docker, AWS, GCP, and Firebase for efficient deployment and scalability in the cloud.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Computer Society of India",
      icon: csi,
      iconBg: "#FAF9F6",
      date: "Dec 2021 - Jul 2024",
      points: [
        "Developed a tailored website and application for a school during the COVID period.",
        "Created a basic online learning platform using HTML, JS (frontend), and PHP, SQL (backend).",
        "Led the design and implementation of graphic layouts and communication materials.",
        "Managed multimedia initiatives, producing educational videos and maintaining school web services.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nikhil, as all the features, of a highly skilled, guide, mentor and professional in the web development world. his technical abilities, he always encouraged students to work on a independent way, and face the coding challenges head on",
      name: "Luís Miguel Lopes Santos",
      designation: "Electrical Engineer",
      company: "eReM",
      image: "https://media.licdn.com/dms/image/D4D03AQEO1P7quIcbyg/profile-displayphoto-shrink_100_100/0/1683222236604?e=1710979200&v=beta&t=Azg5LCvfTo1FJrazWYxuBiXYgYW2mdvjKPsRp1RXHX8",
    },
    {
      testimonial:
        "I have no doubt that Nikhil would be a valuable asset to any team. He is a highly skilled, motivated, and dedicated individual with a passion for software development. I highly recommend him for any software development position.",
      name: "Keyur Vadodariya",
      designation: "Full Stack Developer",
      company: "La Net Team",
      image: "https://media.licdn.com/dms/image/D4D03AQFFzcff-Vsnsg/profile-displayphoto-shrink_200_200/0/1695226357503?e=1710979200&v=beta&t=vu4xC8vs5rCpvXNI_scAHYUXGTT8SskT9PRS1YTChlI",
    },
    {
      testimonial:
        "Nikhil was a mentor and a guide who played a pivotal role in shaping our journey as Full Stack Web Developers. I am grateful for his impactful teaching style, support, and the valuable lessons that will undoubtedly resonate throughout my career.",
      name: "Lucia Mackova",
      designation: "Full Stack Developer",
      company: "Just Imagine",
      image: "https://media.licdn.com/dms/image/D4D35AQGCReQRV9Vpwg/profile-framedphoto-shrink_200_200/0/1697097930914?e=1705838400&v=beta&t=kwqV_q5iPmwhV09rKBh-dFRO6e24xEvAcEmgCE4Hslk",
    },
  ];
  
  const projects = [
    {
      name: "Crypto Tracker",
      description:
        "Developed a web application tracking real-time cryptocurrency data, using Material-UI and charts for data visualization, reaching over 500 daily users. Implemented state management with Context API and integrated third-party APIs for live data, ensuring high data accuracy and reliability.Enhanced user experience with search and filter functionalities.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "MUI",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: crypto_tracker,
      source_code_link: "https://github.com/ayushkumar32539/Crypto-Hunter",
    },
    {
      name: "Nuren AI CRM",
      description:
        "I developed a comprehensive CRM using the PERN stack, focusing primarily on the frontend with React. This system is equipped with AI-powered features using OpenAI, allowing intelligent responses and automations. I also integrated popular social platforms including Facebook, Instagram, WhatsApp, LinkedIn, and email for seamless communication. To explore the CRM, you can log in with the credentials: username 'll' and password 'll'.",
      tags: [
        {
          name: "PERN",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "OpenAi",
          color: "pink-text-gradient",
        },
      ],
      image: crm,
      source_code_link: "https://crm.nuren.ai/",
    },
    {
      name: "Exam Portal",
      description:
        "Designed and developed an online exam portal using ReactJS, NodeJS, and MongoDB, facilitating seamless exam management for over 200 students.Created the login page, user feedback functionality, and implemented regular expression validation to ensure secure user authentication and data entry.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "MUI",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: portal,
      source_code_link: "https://csiakgecportal.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };