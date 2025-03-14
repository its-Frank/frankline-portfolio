import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 dark:from-blue-950 dark:to-indigo-950 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <Link
              href="https://github.com/its-Frank"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:franklineorina6@gmail.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="www.linkedin.com/in/frankline-orina-a24a72315"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-white/80">
              &copy; {currentYear} Frankline Orina. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
