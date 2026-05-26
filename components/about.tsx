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
              I am a highly motivated and results-driven software engineer with
              a strong academic background in Computer Science and several years
              of professional experience in software development and technical
              problem-solving. I hold both a Bachelor of Science and a Master of
              Science in Computer Science from the University of California, San
              Diego, where I gained extensive knowledge in software engineering,
              programming, systems design, and analytical problem-solving. My
              educational journey helped me build a solid foundation in modern
              computing technologies, algorithms, and software architecture,
              while also strengthening my communication and research skills.
            </p>
            <p>
              Professionally, I have worked as a Software Engineer and Software
              Developer, where I developed and maintained high-quality software
              applications using programming languages such as Java, Python,
              JavaScript, TypeScript, and C++. I have experience designing
              scalable software solutions, optimizing business processes,
              conducting system analysis, and collaborating with
              cross-functional teams to deliver efficient and innovative
              solutions. In addition, I have experience mentoring junior
              developers, conducting code reviews, and delivering technical
              training sessions and workshops. My work has also involved
              developing web applications, improving software performance, and
              communicating technical findings clearly to stakeholders and team
              members.
            </p>
            <p>
              Beyond software development, I also served as a Technical Writer
              and Instructor, where I taught software engineering concepts and
              programming courses to undergraduate students. This role
              strengthened my ability to explain complex technical concepts in a
              simple and engaging way while helping students succeed
              academically. I am passionate about continuous learning and always
              stay updated with the latest technologies, coding practices, and
              software development trends.
            </p>
            <p>
              My technical skill set includes proficiency in numerous
              programming languages and technologies such as SQL, Swift, Ruby,
              Rust, Go, PHP, HTML, MATLAB, C#, Shell scripting, and .NET
              development. I also possess strong analytical, communication,
              technical writing, and problem-solving skills, which allow me to
              adapt quickly to new challenges and work effectively both
              independently and within teams. Additionally, I have contributed
              to open-source projects, published articles related to software
              engineering best practices, and developed software tools that
              improved data processing performance. Overall, I am passionate
              about technology, innovation, mentorship, and using my skills to
              create impactful and efficient solutions.
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
