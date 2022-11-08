import React from "react"
import Image1 from "./assets/Project1.png"
import PersonColorImage from "./assets/Saurav.jpg"
import PersonBWImage from "./assets/SauravBW.jpg"
import {
  CSS3,
  ExpressJs,
  Git,
  GitHub,
  HTML5,
  MongoDB,
  Netlify,
  NextJs,
  NodeJs,
  Npm,
  ReactJs,
  ReactTestingLibrary,
  Redux,
  JavaScript,
  TailwindCSS,
  TypeScript,
} from "./assets/stack_images"
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai"

// About Person
export const Person = {
  name: "Saurav",
  username: "themodernmonk7",
  tags: [
    " 🔓 Open Source",
    " #️⃣ Creator",
    " 💼 Looking for new opportunities",
    " 👥 Open to collaborate",
    "👨‍💻 Full Stack Web Developer",
    "  React Developer",
  ],
  image: [PersonColorImage, PersonBWImage],
  tagline_text: "creative designer & a developer.",
  short_bio: `Hi I'm SAurav, a passionate Front-end Developer & UI/UX Designer based in the India.`,
  long_bio:
    "I am a passionate software developer and ui/ux designer with a keen eye for details.",
  about_myself: [
    {
      id: 1,
      sidebar_title: "story",
      title: "A story of hardwork and perseverance.",
      description: `Hi! I'm SAurav. I have a strong passion for design and technology. I specialize in Front End Development and UI/UX Design and my passion is all about building elegant and professional user interfaces and websites. I also do branding and identity design such as logo design, letterhead and business card, along with photo editing, image cropping and other graphic design services.

      I live in the Philippines. I am a graduate of Information Technology from Don Honorio Ventura State University. I started drawing and designing from a young age and most of my design skills and knowledge are self-taught. I got into programming when I was introduced to web programming during high school. It fascinated me and it hooked me on, so I decided to pursue this career. Even though I took the path of becoming a programmer, my strong and innate talent in arts and design persisted. Consequently, I taught myself about multimedia design. Combining the state of the art and my programming knowledge, I am able to build a professional and interactive websites.

      I will not stick around on just doing Front End development projects. My goal is to take it to the next level of becoming a Full Stack Developer and become one of the world's top designers, so now, I am working towards it. I have prepared myself to accept the challenges into this ever changing world and I will try my very best to achieve my dreams and goals.
      `,
    },
    {
      id: 2,
      sidebar_title: "the process",
      title: "How I work",
      description: `When I start working on a project, I try to get all the information and data from my client that are relevant to the project such as goals, demographics and preferred aesthetics. After this, I start doing the research about the industry, competition, trends and other factors that are necessary for the development of the project. After I have all the data that I need, my next step is to work on the wireframe and prototype using tools such as Adobe XD and Figma. After the prototype is finished and the wireframes are finalized and approved, this is where I start doing the visual designs using various tools such as Adobe Photoshop for processing images, Adobe Illustrator for creating vector graphics, and Adobe XD for building the actual visual design. After the visual designs are approved, I start on coding and transforming the designs into actual code using a wide range of technologies such as HTML, CSS and JavaScript with best practices in mind.`,
    },
    {
      id: 3,
      sidebar_title: "the tools",
      title: "what i use.",
      description: `I use a number of tools that make design and development much easier. I usually use Adobe XD or Figma interchangeably for doing all the process that includes wireframing, prototyping and visual design. For wireframing alone, any graphic design tool can make the job done either it is low fidelity or high fidelity wireframe. For development/coding, I use different tools specific to the development of the application or website. Listed below are the tools and technologies that I use and I'm knowledgeable with.`,
    },
    {
      id: 4,
      sidebar_title: "tech stacks",
      title: "My tech stacks",
    },
  ],
  stacks: [
    {
      stack_title: "languages",
      stack_items: [
        {
          title: "JavaScript",
          image: JavaScript,
        },
        {
          title: "HTML5",
          image: HTML5,
        },
        {
          title: "CSS3",
          image: CSS3,
        },
      ],
    },
    {
      stack_title: "front-end frameworks",
      stack_items: [
        {
          title: "Tailwind CSS",
          image: TailwindCSS,
        },
      ],
    },
    // Frameworks
    {
      stack_title: "Frameworks",
      stack_items: [
        {
          title: "ExpressJS",
          image: ExpressJs,
        },
      ],
    },
    // Frameworks (Full Stack)
    {
      stack_title: "Frameworks (Full Stack)",
      stack_items: [
        {
          title: "Node.js",
          image: NodeJs,
        },
        {
          title: "Next.js",
          image: NextJs,
        },
      ],
    },
    // Testing Frameworks
    {
      stack_title: "Testing Frameworks",
      stack_items: [
        {
          title: "react-testing-library (RTL)",
          image: ReactTestingLibrary,
        },
      ],
    },
    // State Management
    {
      stack_title: "State Management",
      stack_items: [
        {
          title: "Redux",
          image: Redux,
        },
      ],
    },
    // JavaScript UI
    {
      stack_title: "JavaScript UI",
      stack_items: [
        {
          title: "React",
          image: ReactJs,
        },
      ],
    },
    // Version Control
    {
      stack_title: "Version Control",
      stack_items: [
        {
          title: "Git",
          image: Git,
        },
        {
          title: "GitHub",
          image: GitHub,
        },
      ],
    },
    // Databases
    {
      stack_title: "Databases",
      stack_items: [
        {
          title: "MongoDB",
          image: MongoDB,
        },
      ],
    },
    // Static Web Hosting
    {
      stack_title: "Static Web Hosting",
      stack_items: [
        {
          title: "Netlify",
          image: Netlify,
        },
      ],
    },
    // Package Manager
    {
      stack_title: "Package Manager",
      stack_items: [
        {
          title: "npm",
          image: Npm,
        },
      ],
    },
    // Templating Languages
    {
      stack_title: "Templating Languages",
      stack_items: [
        {
          title: "TypeScript",
          image: TypeScript,
        },
      ],
    },
  ],
}

// Projects data
export const projects = [
  {
    id: 1,
    project_name_id: "Landypix",
    name: "Landypix photo app",
    category: "React App",
    description:
      "This is the clone project of the free stocks photos and videos website, Pexels.",
    link: "https://landypix.netlify.app/",
    image: Image1,
  },
  {
    id: 2,
    project_name_id: "vodutv",
    name: "Vodutv.com",
    category: "React App",

    description:
      "This is the clone project of the free stocks photos and videos website, Pexels.",
    link: "https://vodutv.netlify.app/",
    image: Image1,
  },
  {
    id: 3,
    project_name_id: "hackernews",
    name: "Hacker News",
    category: "React App",

    description:
      "This is the clone project of the free stocks photos and videos website, Pexels.",
    link: "https://20-hacker-news.netlify.app/",
    image: Image1,
  },
  {
    id: 4,
    project_name_id: "hackernews",
    name: "Hacker News",
    category: "React App",

    description:
      "This is the clone project of the free stocks photos and videos website, Pexels.",
    link: "https://20-hacker-news.netlify.app/",
    image: Image1,
  },
  {
    id: 5,
    project_name_id: "hackernews",
    name: "Hacker News",
    category: "React App",

    description:
      "This is the clone project of the free stocks photos and videos website, Pexels.",
    link: "https://20-hacker-news.netlify.app/",
    image: Image1,
  },
]
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "works",
    url: "/works",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
]

export const socialLinks = [
  {
    id: 1,
    text: "Twitter",
    url: "https://twitter.com/themodernmonk7",
    icon: <AiOutlineTwitter className="w-6 h-6" />,
  },
  {
    id: 2,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/themodernmonk7/",
    icon: <AiFillLinkedin className="w-6 h-6" />,
  },
  {
    id: 3,
    text: "Github",
    url: "https://github.com/themodernmonk7",
    icon: <AiOutlineGithub className="w-6 h-6" />,
  },
  {
    id: 4,
    text: "Showwcase",
    url: "https://www.showwcase.com/themodernmonk7",
    icon: "https://assets.showwcase.com/landing-page/svg/footer-logo.svg",
  },
]
