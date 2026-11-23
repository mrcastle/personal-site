import type { WorkExperience } from "@/features/resume/types/experience";

export const experiences: WorkExperience[] = [
  {
    role: "Senior Software Developer",
    company: "The Walt Disney Company",
    duration: "October 2025 - Present",
    description:
      "Part of a team improving how web apps across Disney+, ESPN, and Hulu are built, tested, released, and monitored.",
    skills: [
      "Next.js",
      "Kubernetes",
      "Spinnaker",
      "Terraform",
      "GitHub Actions",
      "Datadog",
    ],
  },
  {
    role: "Lead Web Developer",
    company: "PACCAR, Inc.",
    duration: "July 2024 - October 2025",
    description:
      "Led the team on a greenfield Angular micro-frontend app that gathers truck data for PACCAR's global platform, built most of the frontend, and mentored the junior developers who worked mostly on the backend.",
    skills: ["Angular", ".NET Core", "Docker", "AWS", "GitHub Actions"],
  },
  {
    role: "Senior Software Developer",
    company: "Planet DDS",
    duration: "March 2023 - January 2024",
    description:
      "Consolidated customer records into golden-record entries with a Node.js microservice, and upgraded the Node.js and React code to current versions.",
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Google Cloud Platform",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Armaments Research Company, Inc.",
    duration: "April 2021 - February 2023",
    description:
      "Architected and built most of the frontend for a firearms IoT device startup, from real-time maps and data dashboards to the CI/CD that deployed them.",
    skills: ["TypeScript", "React", "Next.js", "Leaflet", "D3.js", "AWS"],
  },
  {
    role: "Software Developer",
    company: "Eleven Peppers Studios",
    duration: "February 2018 - March 2021",
    description:
      "Helped a team build the Small Business Administration's Ascent learning platform, and redesigned an internal web app for TiVo with the design team.",
    skills: ["React", "TypeScript", "Ruby on Rails", "HTML", "CSS", "AWS"],
  },
  {
    role: "Software Developer",
    company: "MetaCoastal",
    duration: "May 2017 - February 2018",
    description:
      "Overhauled the Oracle Service Cloud integrations for a group of travel companies, helped launch a revamped version of their website in Angular, and built an analytics dashboard for their executives.",
    skills: ["C#", ".NET", "Angular", "Azure", "JavaScript"],
  },
  {
    role: "Software Developer",
    company: "Anne Arundel County Register of Wills",
    duration: "October 2011 - April 2017",
    description:
      "Led the development of an in-house suite of office productivity, timekeeping, and customer support apps that replaced spreadsheet-based workflows.",
    skills: ["C#", ".NET MVC", "JavaScript", "HTML", "CSS", "jQuery"],
  },
];
