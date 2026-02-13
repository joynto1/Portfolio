import { Project, SkillCategory, Experience, Education, Certificate, Service } from './types';
import { Server, Terminal, Layout } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Joyonto Kumar Das",
  role: "Frontend Developer & DevOps Enthusiast",
  bio: "A passionate CSE graduate from Northern University Bangladesh, bridging the gap between elegant user interfaces and robust infrastructure. Specialized in building scalable React applications and implementing efficient CI/CD pipelines.",
  email: "mr.joyontokumardas@gmail.com",
  phone: "+880 1865875819",
  location: "Dhaka, Bangladesh",
  availability: "Open for Opportunities",
  socials: {
    linkedin: "https://www.linkedin.com/in/joyontodas/",
    github: "https://github.com/joynto1",
    facebook: "https://www.facebook.com/joyontokumardas.joy",
    instagram: "https://www.instagram.com/joyonto_kumar_das/"
  }
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Web development is the process of building, programming, and maintaining websites and web applications. I create responsive, high-performance interfaces using modern technologies like React, Next.js, and Tailwind CSS to ensure a seamless user experience across all devices.",
    icon: "Layout"
  },
  {
    id: 2,
    title: "DevOps & Automation",
    description: "I streamline software delivery through efficient CI/CD pipelines, Docker containerization, and automated cloud infrastructure management. My focus is on reducing deployment time, increasing reliability, and ensuring that development and operations teams work together seamlessly.",
    icon: "Server"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95, proficiency: "Advanced" },
      { name: "CSS3 & Tailwind", level: 95, proficiency: "Advanced" },
      { name: "JavaScript (ES6+)", level: 75, proficiency: "Intermediate" },
      { name: "React.js", level: 75, proficiency: "Intermediate" },
      { name: "Bootstrap", level: 75, proficiency: "Intermediate" },
      { name: "Responsive Design", level: 95, proficiency: "Advanced" }
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Git & GitHub", level: 75, proficiency: "Intermediate" },
      { name: "Linux CLI", level: 70, proficiency: "Intermediate" },
      { name: "Docker", level: 50, proficiency: "Beginner" },
      { name: "AWS Basics", level: 45, proficiency: "Beginner" },
      { name: "CI/CD Concepts", level: 45, proficiency: "Beginner" },
      { name: "Bash Scripting", level: 40, proficiency: "Beginner" }
    ]
  },
  {
    category: "Professional Skills",
    skills: [
      { name: "Problem Solving", level: 90, proficiency: "Advanced" },
      { name: "Continuous Learning", level: 95, proficiency: "Advanced" },
      { name: "Communication", level: 75, proficiency: "Intermediate" },
      { name: "Team Collaboration", level: 75, proficiency: "Intermediate" },
      { name: "Time Management", level: 70, proficiency: "Intermediate" },
      { name: "Project Management", level: 50, proficiency: "Beginner" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "HealPoint - Doctor Portal",
    description: "A comprehensive healthcare management system allowing patients to find doctors, book appointments, and manage their health records. Features a responsive dashboard and secure authentication.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Node.js"],
    role: "Frontend Developer",
    demoUrl: "https://healpoint.netlify.app/",
    sourceUrl: "https://github.com/joynto1/doc-app",
    image: "../images/healpoint.jpeg"
  },
  {
    id: "2",
    title: "Dhaka Local Bus Info",
    description: "A utility web application designed to help daily commuters in Dhaka city. It provides detailed information on bus routes, stoppages, and fare charts in a user-friendly interface.",
    techStack: ["React", "JavaScript", "JSON", "CSS"],
    role: "Frontend Developer",
    demoUrl: "https://dhaka-local-bus-info.netlify.app/",
    sourceUrl: "https://github.com/joynto1/dhaka_local_bus",
    image: "../images/dhaka_local_bus.jpeg"
  },
  {
    id: "3",
    title: "Convention Center",
    description: "A visually appealing and fully responsive landing page for a convention center booking service. It showcases facilities, pricing packages, and photo galleries to attract potential clients.",
    techStack: ["HTML5", "CSS3", "Bootstrap"],
    role: "Frontend Developer",
    demoUrl: "https://joynto1.github.io/Convention-center/",
    sourceUrl: "https://github.com/joynto1/Convention-center",
    image: "../images/convention.png"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    title: "DevOps Intern",
    company: "Business Automation LTD.",
    period: "Oct 2025 - Jan 2026",
    description: "DevOps Intern at Business Automation LTD, with hands-on experience in CI/CD pipelines, Linux systems, version control (Git), and basic cloud & automation tools. Passionate about learning DevOps best practices, improving deployment workflows, and bridging development with operations through efficient and secure solutions."
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "Youtube Course",
    period: "Feb 2025 - Sep 2025",
    description: "Assisted in developing responsive web applications using React.js and REST APIs. Participated in code reviews and contributed to team meetings. Gained experience with Git version control and agile development methodologies."
  },
  {
    id: "3",
    title: "University Projects",
    company: "Various Academic Projects",
    period: "2022 - 2023",
    description: "Developed multiple Web Based applications as part of coursework. The HealthCare Management System (Doctor Portal) and Dhaka Local Bus System Project were appreciated at the University."
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Northern University Bangladesh",
    year: "2022 - 2025",
    description: "Graduated with honors (CGPA: 3.25/4.0). Focus areas included Web Development, Cloud Computing, Database Systems, and Software Engineering. Completed capstone project on \"Modern Web Application Deployment Pipeline.\""
  },
  {
    id: "2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Science Group",
    year: "2018 - 2020",
    description: "Completed with GPA 4.67/5.0. Focused on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving foundations."
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "1",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "#",
    description: "I have successfully completed the Introduction to Cybersecurity course from Cisco Networking Academy."
  },
  {
    id: "2",
    title: "Docker for Beginners",
    issuer: "Business Automation LTD.",
    date: "2025",
    link: "#",
    description: "Containerization fundamentals, Docker commands, Dockerfiles, and basic orchestration concepts."
  },
  {
    id: "3",
    title: "Introduction to Python",
    issuer: "DataCamp",
    date: "2024",
    link: "#",
    description: "I have completed the Introduction to Python course through DataCamp."
  },
  {
    id: "4",
    title: "Git & GitHub Mastery",
    issuer: "Business Automation LTD",
    date: "2025",
    link: "#",
    description: "Comprehensive understanding of version control, branching strategies, and collaborative development workflows."
  }
];

export const CATEGORY_ICONS: Record<string, any> = {
  "Frontend": Layout,
  "DevOps": Server,
  "Tools & Others": Terminal
};