import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Spring Boot, Hibernate, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Spring Boot, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving problems. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - April 2024",
    role: "Software Developer Intern",
    company: "29 Kreative.",
    description: `Worked in a team with collabrative envoirment. Designed and Developed frontend of the websites using React. Worked on the backend of the website using  Node.js, Express.js and used ZOD for the schema validation libarary.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Node.js", "Express.js"],
  },
  {
    year: "May 2022 - Aug 2022",
    role: "Software Developer Intern",
    company: "Aabmatica Private Limited.",
    description: `Developed  RESTful APIs while covering all validations using Spring Boot and used Hibernate as an ORM framework. Learned to implement Authentication such as JWT and Google Auth 2.0. · Designed and developed a vehicle service booking website.`,
    technologies: ["React", "Spring Boot", "Hibernate", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: 'https://github.com/dontwike/ecommerce',
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication, paytm gateway. Implemented Admin portal for inventory management.",
    technologies: ["HTML", "CSS", "Spring Boot", "Hibernate", "MySQL", "Spring Security"],
  },
  {
    title: "Notes App",
    image: project2,
    link: 'https://github.com/dontwike/inotes-ui',
    description:
      "A web application for managing notes, with features such as notes creation, update, and delete.",
    technologies: ["React", "Spring Boot", "Hibernate", "MySQL"],
  },
  {
    title: "Personal Portfolio",
    image: project4,
    link: 'https://github.com/dontwike/portfolio',
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Image Generator using Open-AI",
    image: project3,
    link: 'https://pai-app.vercel.app',
    description:
      "A platform for creating and publishing AI generated images from the user text, Used Open AI API to generate image from text and used cloudinary to store images.",
    technologies: ["React", "Node", "Express", "MongoDB", "Open-AI API", "Cloudinary"],
  },
];

export const CONTACT = {
  address: "Dehradun, Uttarakhand, India ",
  phoneNo: "+91 9808407890 ",
  email: "itspranjal00@gmail.com",
};
