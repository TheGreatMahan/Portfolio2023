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
    docker,
    threejs,
    kbx,
    sagacity,
    carfax,
    dataannotation,
    dotnet,
    androidstudio,
    angular,
    aws,
    azure,
    bootstrap,
    c,
    csharp,
    cpp,
    java,
    jira,
    jquery,
    json,
    kotlin,
    laravel,
    linux,
    macos,
    php,
    python,
    springboot,
    sql,
    unity,
    visualstudio,
    vue,
    windows,
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
        title: "frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Problem Solver",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
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
        iconBg: "#29ABE2",
        date: "December 2022 - April 2023",
        points: [
            "Designed a comprehensive interface that allowed the QA team to easily template received documents",
            "Implemented React testing library and Jest for efficient and effective testing with 100% coverage",
            "Utilized TypeScript for improved type safety and code reliability",
            "Worked collaboratively with cross-functional teams to ensure the tool met the needs of the QA team and aligned with business objectives",
            "Worked closely with a senior engineer from developing a proof of concept to creating a minimum viable product",
        ],
    },
    {
        title: "Software Developer - AI Training",
        company_name: "DataAnnotation",
        icon: dataannotation,
        iconBg: "#000000",
        date: "March 2024 - Present",
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
