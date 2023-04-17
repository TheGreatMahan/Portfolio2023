import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    kbx,
    sagacity,
    carfax,
} from "../assets";

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
        title: "Web Developer",
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
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
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
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Developer (CO-OP)",
        company_name: "KBX/Aptude",
        icon: kbx,
        iconBg: "#009ADA",
        date: "September 2021 - April 2022",
        points: [
            "Assisted colleagues with distributed version control software to maximize productivity and speed in every sprint",
            "Tested many different services on Development and Quality Assurance environments to provide the best feedback for software developers and product managers",
            "Contributed software development expertise in the development of products through agile development",
            "Worked closely with the Quality Assurance team to fix bugs and problems",
        ],
    },
    {
        title: "Full-Stack developer (CO-OP)",
        company_name: "Sagacity Software",
        icon: sagacity,
        iconBg: "#FFFFFF",
        date: "May 2022 - August 2022",
        points: [
            "Developed multiple services on an MVC architecture system",
            "Developed Software on a Linux-based operating system to minimize the development and licensing cost",
            "Worked closely with the Quality Assurance team to fix bugs and problems",
            "Developed a good understanding of computer software and hardware"
        ],
    },
    {
        title: "Associate Software Engineer (CO-OP)",
        company_name: "Carfax",
        icon: carfax,
        iconBg: "#009ADA",
        date: "December 2022 - April 2023",
        points: [
            "Designed a comprehensive interface that allowed the QA team to easily template received documents",
            "Implemented React testing library and Jest for efficient and effective testing with 100% coverage",
            "Utilized TypeScript for improved type safety and code reliability",
            "Worked collaboratively with cross-functional teams to ensure the tool met the needs of the QA team and aligned with business objectives",
            "Worked closely with a senior engineer from developing a proof of concept to creating a minimum viable product",
        ],
    }
];



export { services, technologies, experiences };
