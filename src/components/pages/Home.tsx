import React from "react";
import { ArrowRight, Target, BookOpen, Award, Users, Leaf } from "lucide-react";
import { DeviceMockup } from "../DeviceMockup";
import { ProjectCard } from "../ProjectCard";
import { BlogCard } from "../BlogCard";
import { ImageWithFallback } from "../figma/ImageWithFallback";
 
const portfolio1 = new URL("../../assets/portfolio/portfolio-1.svg", import.meta.url).href;
const portfolio2 = new URL("../../assets/portfolio/portfolio-2.svg", import.meta.url).href;
const portfolio3 = new URL("../../assets/portfolio/portfolio-3.svg", import.meta.url).href;
const portfolio4 = new URL("../../assets/portfolio/portfolio-4.svg", import.meta.url).href;
const portfolio5 = new URL("../../assets/portfolio/portfolio-5.svg", import.meta.url).href;
const portfolio6 = new URL("../../assets/portfolio/portfolio-6.svg", import.meta.url).href;

interface HomeProps {
  onNavigate?: (page: string) => void;
}

function Home({ onNavigate }: HomeProps) {
  const featuredProjects = [
    {
      title: "Regional Fake News Detection",
      description:
        "AI-powered system to detect misinformation in local languages across Balochistan",
      techStack: "Python, NLP, Machine Learning",
      image: "fake detection.png",
      imageCaption: "Fake news detection pipeline",
      url: "https://github.com/nasrqasim/Fake-News-Detection",
    },
    {
      title: "Urdu AI Learning Platform",
      description:
        "Teaching artificial intelligence concepts in Urdu to bridge the digital divide",
      techStack: "Next.js, TensorFlow, Educational Tech",
      image: "urdu ai learning.png",
      imageCaption: "Urdu AI learning",
      url: "https://github.com/nasrqasim/ML-projects/tree/main",
    },
    {
      title: "Flood Detection System",
      description:
        "Computer vision pipeline to detect and assess flood-affected regions from imagery",
      techStack: "Python, OpenCV, Deep Learning",
      image: "Flood detection.png",
      imageCaption: "Flood detection model",
      url: "https://github.com/nasrqasim/floodriskdetection",
    },
  ];

  const blogPosts = [
    {
      title: "Bridging the Digital Divide: Teaching AI in Urdu",
      date: "March 15, 2025",
      description:
        "Exploring the importance of making artificial intelligence education accessible in local languages.",
      image:
        "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1OTgyMDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageCaption: "AI education for everyone",
    },
    {
      title: "Climate Action in Balochistan: Youth Leadership Matters",
      date: "February 28, 2025",
      description:
        "How young activists are driving climate change awareness in Balochistan region.",
      image:
        "https://images.unsplash.com/photo-1552799446-159ba9523315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwYWN0aXZpc218ZW58MXx8fHwxNzU5ODUzMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageCaption: "Youth-led climate rallies",
    },
    {
      title: "The Power of Community-Led Technology Innovation",
      date: "February 10, 2025",
      description:
        "Lessons learned from building technology solutions that address real community needs.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nfGVufDF8fHx8MTc1OTg1MzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageCaption: "Workshops that spark ideas",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero - redesigned to match provided inspiration */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Top badges */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="px-5 py-2 rounded-full bg-gray-800 text-white text-sm tracking-wide">FRONTEND DEVELOPER</span>
          <span className="px-5 py-2 rounded-full bg-amber-400 text-gray-900 text-sm font-medium tracking-wide">HTML/CSS/JS EXPERT</span>
        </div>

        {/* Big headline */}
        <h1 className="text-center leading-tight mb-8">
          <span className="block text-white text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">CRAFTING</span>
          <span className="block text-amber-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">ENGAGING</span>
          <span className="block text-white text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">WEB EXPERIENCES</span>
        </h1>

        {/* Supporting copy */}
        <p className="text-center text-gray-200 max-w-3xl sm:max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10">
          I build responsive, dynamic websites with a focus on user‑friendly interfaces and fast, accessible
          web experiences that leave a lasting impression.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4">
          <button
            className="px-8 py-4 bg-amber-400 text-gray-900 rounded-lg font-medium hover:bg-amber-300 transition-colors"
            onClick={() => onNavigate?.("Projects")}
          >
            View My Work <ArrowRight className="inline-block w-4 h-4 ml-2 align-middle" />
          </button>
          <button
            className="px-8 py-4 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            onClick={() => onNavigate?.("Contact")}
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* About section intentionally hidden per request */}

      {/* Featured Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-gray-900 mb-3">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative solutions addressing real-world challenges in education, technology, and social
            impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p, i) => (
            <div key={i}>
              <ProjectCard
                title={p.title}
                description={p.description}
                techStack={p.techStack}
                image={p.image}
                imageCaption={p.imageCaption}
                url={p.url}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button
            className="px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => onNavigate?.("Projects")}
          >
            View All Projects
          </button>
        </div>
      </section>

      

      {/* Community Initiatives */}
      <section id="initiatives" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-8">
          <h2 className="text-gray-900 mb-2">Community Initiatives</h2>
          <p className="text-gray-600">Driving positive change through climate action, education, and community empowerment</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "leaf", title: "Climate Activism", color: "text-emerald-500" },
            { icon: "bulb", title: "Workshops & Training", color: "text-amber-400" },
            { icon: "target", title: "Community Projects", color: "text-blue-600" },
          ].map((card, i) => (
            <div key={i} className="bg-gray-800 rounded-xl shadow-lg p-8 text-center border border-white/20 transition-transform transition-shadow duration-300 hover:shadow-xl">
              {card.title === "Climate Activism" ? (
                <Leaf className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
              ) : card.title === "Workshops & Training" ? (
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              ) : (
                <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              )}
              <h3 className="text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600">
                {card.title === "Climate Activism"
                  ? "Leading youth-driven climate campaigns and environmental awareness programs"
                  : card.title === "Workshops & Training"
                  ? "Hands-on sessions on AI, machine learning, and web development"
                  : "Co-founding projects improving access to vital community services"}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => onNavigate?.("Initiatives")}
          >
            Explore All Initiatives
          </button>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <Award className="w-12 h-12 mx-auto text-amber-400 mb-4" />
          <h2 className="text-gray-900 mb-2">Achievements & Recognition</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Milestones and recognitions across technology, activism, and community service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-semibold text-blue-900 mb-2">8+</div>
            <div className="text-gray-600">Major Achievements</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-emerald-600 mb-2">5+</div>
            <div className="text-gray-600">Years of Volunteering</div>
          </div>
          <div>
            <div className="text-4xl font-semibold text-amber-400 mb-2">500+</div>
            <div className="text-gray-600">People Impacted</div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            className="px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => onNavigate?.("Achievements")}
          >
            View Full Timeline
          </button>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-10">
          <BookOpen className="w-12 h-12 mx-auto text-blue-900 mb-4" />
          <h2 className="text-gray-900 mb-2">Latest Insights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Thoughts and reflections on technology, climate action, and social innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((b, i) => (
            <div key={i}>
              <BlogCard
                title={b.title}
                date={b.date}
                description={b.description}
                image={b.image}
                imageCaption={b.imageCaption}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            className="px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => onNavigate?.("Blog")}
          >
            Read All Articles
          </button>
        </div>
      </section>

      

      {/* CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h2 className="mb-3">Let's Work Together</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to make an impact together.
          </p>
          <button
            className="px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => onNavigate?.("Contact")}
          >
            Get In Touch <ArrowRight className="inline-block w-4 h-4 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
