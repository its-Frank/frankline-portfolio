import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const educationItems = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Eldoret",
    location: "Kenya",
    period: "Current",
  },
  {
    degree: "Web Development Certification",
    institution: "EldoHub Academy",
    location: "Kenya",
    period: "Completed: April 2024",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <Card
              key={index}
              className="mb-8 border-none shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="mt-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/20 dark:to-indigo-400/20 p-2 rounded-full">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-blue-600 dark:text-blue-400">
                    {item.degree}
                  </CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <span className="font-medium">{item.institution}</span>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <CalendarDays className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
