import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import JavaSvg from "@/public/icons/java-icon.svg"
import RustSvg from "@/public/icons/rust-lang-icon.svg"
import C_plus_Svg from "@/public/icons/c.svg"
import C_Svg from "@/public/icons/c-1.svg"
// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import SpringSvg from "@/public/icons/spring-svgrepo-com.svg"
// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MySql_Svg from "@/public/icons/mysql-icon.svg"

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import Github_Svg from "@/public/icons/iconmonstr-github-1.svg";
import Terraform_Svg from "@/public/icons/terraform-svgrepo-com (1).svg"
import Ansible_Svg from "@/public/icons/ansible-icon (1).svg";
import Jenkins_Svg from "@/public/icons/jenkins-icon.svg";
import Bash_Svg from "@/public/icons/bash-icon-svgrepo-com.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "Rust",
        icon: RustSvg,
      },
      {
        name: "C++",
        icon: C_plus_Svg,
      },
      {
        name: "C",
        icon: C_Svg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
   
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      // {
      //   name: "Socket.io",
      //   icon: SiSocketdotio,
      // },
      {
        name: "Spring Boot",
        icon: SpringSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MySQL",
        icon: MySql_Svg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Github",
        icon: Github_Svg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Terraform",
        icon: Terraform_Svg,
      },
      {
        name: "Ansible",
        icon: Ansible_Svg,
      },
      {
        name: "Jenkins",
        icon: Jenkins_Svg,
      },
      {
        name: "Bash",
        icon: Bash_Svg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
