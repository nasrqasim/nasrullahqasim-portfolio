import { ProjectCard } from "../ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "Regional Fake News Detection",
      description:
        "AI-powered system to detect misinformation and fake news in local languages across Balochistan region",
      techStack: "Python, NLP, Machine Learning, TensorFlow",
      image: "fake detection.png",
      url: "https://github.com/nasrqasim/Fake-News-Detection",
    },
    {
      title: "LUAWMS Students Recommendation System (ML Projects)",
      description:
        "Computer vision and ML experiments including flood-risk detection on imagery and signals",
      techStack: "Python, OpenCV, Deep Learning",
      image: "luawmsstudentsrecommedation.png",
      url: "https://github.com/nasrqasim/ML-projects/tree/main",
    },
    {
      title: "Transparent Animated Login Form",
      description:
        "Beautiful, glassmorphism-inspired animated login UI built with modern CSS and JS",
      techStack: "HTML, CSS, JavaScript",
      image: "transparented animated system.png",
      url: "https://github.com/nasrqasim/Transparent-Animated-Login-Form",
    },
    {
      title: "Opp4You Platform",
      description:
        "Portal aggregating opportunities for students and professionals with clean UI",
      techStack: "Next.js, TypeScript, Tailwind CSS",
      image: "opp4you.png",
      url: "https://github.com/nasrqasim/opp4you",
    },
    {
      title: "Hostel Management System",
      description:
        "Web application to manage hostel rooms, residents, and payments with admin features",
      techStack: "PHP/Laravel or Node.js (varies by branch)",
      image: "hoselmanagement system.png",
      url: "https://github.com/nasrqasim/Hostel-Management-System-",
    },
    {
      title: "Urdu AI Learning Platform",
      description:
        "Teaching artificial intelligence concepts in Urdu language to bridge the digital divide and make AI accessible",
      techStack: "Next.js, TensorFlow, Educational Tech",
      image: "urdu ai learning.png",
      url: "https://github.com/nasrqasim/ML-projects/tree/main",
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">My Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A collection of innovative solutions addressing real-world challenges
          in education, technology, healthcare, and social impact. Each project
          reflects my commitment to leveraging technology for positive change.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
