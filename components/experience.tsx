import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Intern Web Developer",
    company: "Cambrian Valuers Limited",
    location: "Nairobi, Kenya",
    period: "May 2024 – August 2024",
    description: [
      "Assisted in the development of web applications.",
      "Collaborated with the design team to integrate frontend components.",
      "Participated in code reviews and contributed to improving coding standards.",
    ],
  },
]

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
                <CardTitle className="text-blue-600 dark:text-blue-400">{exp.title}</CardTitle>
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
  )
}

