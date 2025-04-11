import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Layout,
  Server,
  Terminal,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: ["JavaScript", "Python", "C++", "C#", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: <Layout className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Next.Js",
      "Django",
      "Tailwind",
      "React",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: <Terminal className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: ["Git", "GitHub", "Visual Studio Code", "Postman"],
  },
  {
    title: "Web Technologies",
    icon: <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: ["RESTful APIs", "AJAX", "JSON"],
  },
  {
    title: "Other Skills",
    icon: <GitBranch className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      "Graphic Design",
      "Agile Development",
      "Problem-Solving",
      "Team Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          Technical Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-none shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all hover:translate-y-[-5px]"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
