import { ArrowRight, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "../../constants/socials";

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Split-screen dark card, polished to match desired design */}
      <section className="rounded-[2rem] bg-gray-900/95 text-white shadow-2xl border border-white/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Photo */}
          <div className="relative min-h-[28rem] lg:min-h-[36rem] bg-black/90">
            <img src="Nasr.aboutme.png" alt="Nasrullah Qasim" className="absolute inset-0 w-full h-full object-cover object-left" />
          </div>

          {/* Right: Content */}
          <div id="about-sections" className="p-8 sm:p-10 lg:p-12 bg-gray-900/90">
            {/* ABOUT ME */}
            <div className="pb-8 border-b border-white/10">
              <h1 className="text-3xl sm:text-4xl font-bold text-sky-300 mb-2">Nasrullah Qasim</h1>
              <h2 className="text-base sm:text-lg text-slate-300 mb-6">Frontend & Backend Developer | Tech Enthusiast | Community Builder | Social & Climate Activist</h2>
              <p className="text-slate-200 leading-7">
                I’m a passionate <strong>frontend and backend developer</strong> with expertise in <strong>HTML, CSS, JavaScript, React.js, Node.js, Express, and TypeScript</strong>. I’m dedicated to empowering communities through education, technology, and sustainability. As the co-founder of <strong>Healio</strong> and Campus Director at the <strong>Digital Empowerment Network</strong>, my work bridges innovation with social impact. With a strong focus on <strong>AI, climate action</strong>, and <strong>digital literacy</strong>, I aim to develop impactful digital solutions and create inclusive opportunities for youth in Pakistan and beyond.
              </p>
            </div>

            {/* MY WORK */}
            <div className="py-8 border-b border-white/10">
              <h2 className="text-sm tracking-[.25em] text-white/70 mb-3">MY WORK</h2>
              <p className="text-white/90 mb-2">
                I work across projects that blend innovation, sustainability, and education — from building digital tools to leading community initiatives
              </p>
              <p className="text-white/90 mb-6">that promote climate action and empowerment.</p>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-900 rounded-md hover:bg-amber-300 transition-colors"
              >
                BROWSE PORTFOLIO
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* FOLLOW ME */}
            <div className="pt-8">
              <h2 className="text-sm tracking-[.25em] text-white/70 mb-4">FOLLOW ME</h2>
              <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.linkedin} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.facebook} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.github} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.twitter} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.instagram} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.youtube} className="p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                >
                  <Mail className="w-4 h-4" /> Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
