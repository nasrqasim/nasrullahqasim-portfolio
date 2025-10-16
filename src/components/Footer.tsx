import { Github, Linkedin, Twitter, Instagram, Mail, Facebook } from "lucide-react";
import { SOCIAL_LINKS } from "../constants/socials";

export function Footer() {
  const quickLinks = [
    "Home",
    "About",
    "Projects",
    "Initiatives",
    "Achievements",
    "Blog",
    "Contact",
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-['Inter:Bold',_sans-serif] text-lg">
                  NQ
                </span>
              </div>
              <span className="ml-3 font-['Inter:Medium',_sans-serif]">
                Nasrullah Qasim
              </span>
            </div>
            <p className="text-gray-400">
              Tech Innovator, Climate Activist & Community Leader from
              Balochistan, Pakistan
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-amber-400">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Nasrullah Qasim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
