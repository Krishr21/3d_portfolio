import { hero, meta, shopify, starbucks, tesla, logo } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Micropro Solutions",
        icon: react,
        iconBg: "#d1e8ff",
        date: "Mar 2024 - Apr 2024",
        points: [
            "Designed and deployed responsive web pages using HTML, CSS, and JavaScript.",
            "Improved user engagement by 20% and accessibility by 15%.",
            "Enhanced user satisfaction by 30% through animations and UI enhancements.",
        ],
    },
    {
        title: "Automation & Integration Intern",
        company_name: "UIC",
        icon: nodejs,
        iconBg: "#ffe0ac",
        date: "Oct 2024 - May 2025",
        points: [
            "Built custom SDK connectors in Workato and integrated Solace for real-time data flow.",
            "Implemented automated workflows for solving real-world problems.",
            "Collaborated across teams to deliver robust, scalable integrations.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Krishr21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/krish-ruparel-456702250',
    }
];

export const projects = [
    {
        iconUrl: javascript,
        theme: 'btn-back-red',
        name: 'BhojanKaksha',
        description: 'An AI-powered dietary assistant that uses YOLOv8 for food recognition and AWS for backend deployment.',
        link: 'https://github.com/Krishr21/BhojanKaksha',
    },
    {
        iconUrl: mongodb,
        theme: 'btn-back-blue',
        name: 'StayEase',
        description: 'Airbnb-inspired full-stack accommodation booking app using the MERN stack and Bootstrap.',
        link: 'https://github.com/Krishr21/MajorProject',
    },
    {
        iconUrl: github,
        theme: 'btn-back-yellow',
        name: 'URL Shortener',
        description: 'Scalable URL shortener built with Golang and MongoDB, using REST APIs.',
        link: 'https://github.com/Krishr21/url-shortener',
    },
    {
        iconUrl: github,
        theme: 'btn-back-green',
        name: 'Virtual Assistant',
        description: 'End-to-end canteen management tool developed with PHP, JavaScript, SQL, and HTML/CSS.',
        link: 'https://github.com/Krishr21/Virtual-Assistant',
    }
];
