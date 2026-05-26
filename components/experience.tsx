import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Innovative Software Solutions",
    location: "San Diego, CA",
    period: "July 2018 – May 2025",
    description: [
      "Developed and maintained high-quality software applications in Java, Python, and JavaScript.",
      "Designed and implemented software solutions to optimize business processes and improve decisionmaking.",
      " Collaborated with cross-functional teams to analyze requirements, design software architecture, and deliver robust solutions.",
      "Conducted code reviews and provided mentorship to junior developers.",
      "Delivered training sessions and workshops on advanced software development concepts and techniques. ",
    ],
  },

  {
    title: "Software Developer",
    company: "Tech Innovations",
    location: "San Diego, CA",
    period: " January 2018 - June 2020  ",
    description: [
      "Conducted in-depth software development and system analysis to support business operations and strategic decision-making.",
      "Designed and implemented algorithms to optimize resource allocation, improve efficiency, and minimize costs. ",
      "Developed and maintained web applications using JavaScript, Typescript, and C++. ",
      "Communicated findings and recommendations to stakeholders through clear and concise reports and presentations. ",
      "Collaborated with cross-functional teams to implement software solutions that addressed complex business challenges and improved overall performance.",
    ],
  },

  {
    title: "Technical Writer and Instructor.",
    company: "San Diego State University",
    location: "San Diego, CA",
    period: " August 2016 - December 2016  ",
    description: [
      "Taught undergraduate courses in software engineering, including programming languages and software design principles. ",
      "Designed and delivered engaging lectures, tutorials, and interactive activities to facilitate learning and comprehension. ",
      "Provided one-on-one assistance to students, offering guidance and support to help them succeed academically. ",
      " Participated in curriculum development and assessment activities to ensure alignment with educational standards and objectives.  ",
      "Contributed to the development of course materials, including lecture notes, assignments, and exams, to enhance the learning experience for students.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">Work Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="mb-8 border-none shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all"
            >
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">
                  {exp.title}
                </CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="font-medium">{exp.company}</span>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <CalendarDays className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
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
