import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto mb-12 rounded-full"></div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <p>
              I have a solid foundation in frontend and backend development,
              particularly in Node.js and the Express framework.
            </p>
            <p>
              I have proven ability to develop effective and efficient web
              solutions demonstrated through practical projects and
              certifications. I'm eager to leverage my skills in a dynamic
              professional environment to drive technological advancements.
            </p>
            <p>
              My passion for coding extends beyond the classroom, as I regularly
              participate in coding challenges and hackathons to sharpen my
              skills. I enjoy solving complex problems and creating intuitive,
              user-friendly applications.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            >
              <Link href="#contact">Let's Connect</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
