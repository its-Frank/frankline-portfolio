import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Website Development for Cambrian Valuers",
    description:
      "Developed a responsive and dynamic website for Cambrian Valuers with user authentication, property listing, and search functionalities using Node.js and Express.js. Integrated MySQL for database management.",
    role: "Full Stack Developer",
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    links: {
      live: "https://www.cambrianvaluers.co.ke/",
      github: "https://github.com/its-Frank/Cambrian-newest.git",
    },
  },
  {
    title: "Freelancing Marketplace",
    description:
      "Designed and developed a freelancing marketplace where clients can find writers and sell their services. Used Bootstrap for a responsive frontend interface and built backend functionalities with Node.js and Express.js.",
    role: "Full Stack Developer",
    technologies: ["Node.js", "Express.js", "MySQL", "Bootstrap", "JavaScript"],
    links: {
      live: "#",
      github: "https://github.com/its-Frank/marketplace.git",
    },
  },
  {
    title: "Car Parking System",
    description:
      "Created and managed server-side logic and database operations for a car parking system. Utilized Express.js to build robust APIs for handling car parking and user transactions. Ensured data consistency and security with MySQL.",
    role: "Full Stack Developer",
    technologies: ["Express.js", "MySQL", "Node.js", "JavaScript"],
    links: {
      live: "#",
      github: "https://github.com/its-Frank/paspark_html.git",
    },
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase skills, projects, and experience. Built with modern web technologies and deployed on GitHub Pages.",
    role: "Full Stack Developer",
    technologies: ["HTML", "CSS", "JavaScript", "React", "GitHub Pages"],
    links: {
      live: "#",
      github: "#",
    },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all hover:translate-y-[-5px]"
            >
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">
                  {project.title}
                </CardTitle>
                <CardDescription>Role: {project.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
                >
                  <Link
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0"
                >
                  <Link
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
