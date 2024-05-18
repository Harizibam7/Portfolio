import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Job Seekers",
    href: "/projects",
    tags: ["React js", "Express js", "Node js", "MongoDB"],
    image: {
      LIGHT: "/images/projects/Project1_1.png",
      DARK: "/images/projects/Project1_1.png",
    },
  }
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Job Seekers",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/Project1_1.png",
      "/images/projects/Project1_1.png",
    ],
    description:
      " Discover your dream career with our comprehensive job seeker platform, connecting you with endless opportunities worldwide.",
    sourceCodeHref: "https://github.com/Harizibam7/PRd",
    liveWebsiteHref: "https://github.com/Harizibam7/PRd",
  },
  
];
