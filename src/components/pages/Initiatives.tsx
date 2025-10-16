import { Leaf, Users, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Initiatives() {
  const climateActivism = [
    {
      title: "NYCCC Leadership",
      description:
        "As Vice President of NYCCC Balochistan, leading youth-driven climate campaigns and environmental awareness programs",
    },
    {
      title: "Environmental Campaigns",
      description:
        "Organizing tree plantation drives, clean energy advocacy, and sustainability workshops across the region",
    },
    {
      title: "Youth Engagement",
      description:
        "Mobilizing young people to take action on climate change through education and grassroots organizing",
    },
  ];

  const workshops = [
    {
      title: "AI & Machine Learning Workshops",
      description:
        "Conducting hands-on training sessions on artificial intelligence and machine learning in local languages",
    },
    {
      title: "Digital Skills Training",
      description:
        "Empowering students and community members with essential digital literacy and technology skills",
    },
    {
      title: "Web Development Bootcamps",
      description:
        "Teaching modern web development technologies to aspiring developers from underserved communities",
    },
  ];

  const communityProjects = [
    {
      title: "Healio Healthcare Startup",
      description:
        "Co-founded healthcare technology startup focused on improving access to medical services in rural areas",
      image:
        "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NTk3NzQ3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Virtual Tour of Lasbela",
      description:
        "Digital preservation and promotion of regional cultural heritage through interactive virtual experiences",
      image:
        "https://images.unsplash.com/photo-1665772480424-98c9b5cdc4e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU5NzQ1MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Community Initiatives</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Driving positive change through climate action, education, and
          community empowerment across Balochistan and beyond.
        </p>
      </div>

      {/* Climate & Social Activism */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Leaf className="w-10 h-10 text-emerald-500 mr-4" />
          <h2 className="text-gray-900">Climate & Social Activism</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {climateActivism.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
          <ImageWithFallback
            src="initiavtive card.png"
            alt="Climate activism"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Workshops & Training */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Lightbulb className="w-10 h-10 text-amber-400 mr-4" />
          <h2 className="text-gray-900">Workshops & Training</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {workshops.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md p-6 border border-white/10 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-900 rounded-xl p-8 text-white text-center">
          <p className="text-xl mb-4">
            Trained over 500+ students and community members in technology and
            digital skills
          </p>
          <p className="text-blue-200">
            Committed to making technology education accessible to all
          </p>
        </div>
      </section>

      {/* Community Projects */}
      <section>
        <div className="flex items-center mb-8">
          <Users className="w-10 h-10 text-blue-600 mr-4" />
          <h2 className="text-gray-900">Community Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {communityProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-64 md:h-72 w-full">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
