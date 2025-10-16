import { Award, Trophy, Star, Target } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      year: "2025",
      title: "Fellowship Application - Akhuwat Fellowship 2025",
      description:
        "Applied for a fellowship program focused on social entrepreneurship and community development.",
      icon: Star,
    },
    {
      year: "2024",
      title: "Vice President - NYCCC Balochistan Chapter",
      description:
        "Appointed as Vice President to lead youth climate change initiatives across Balochistan region",
      icon: Trophy,
    },
    {
      year: "2024",
      title: "Campus Director - Digital Empowerment Network",
      description:
        "Selected to lead digital literacy and technology empowerment programs at LUAWMS University",
      icon: Award,
    },
    {
      year: "2023",
      title: "Co-founder - Healio Healthcare Startup",
      description:
        "Successfully launched healthcare technology startup to improve medical access in rural areas",
      icon: Target,
    },
    {
      year: "2023",
      title: "Campus Director - Zindigi Pakistan",
      description:
        "Led financial literacy and digital banking awareness campaigns on campus",
      icon: Award,
    },
    {
      year: "2022-Present",
      title: "Featured Speaker & Trainer",
      description:
        "Delivered workshops and training sessions on AI, web development, and technology in local youth programs",
      icon: Star,
    },
    {
      year: "2019-2024",
      title: "5+ Years Community Volunteering with WANG",
      description:
        "Dedicated volunteer work focused on grassroots community development and social welfare",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Virtual Tour Projects Recognition",
      description:
        "Recognized for innovative digital showcase projects of LUAWMS campus and Lasbela region",
      icon: Award,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Trophy className="w-16 h-16 mx-auto mb-4 text-amber-400" />
        <h1 className="text-gray-900 mb-4">Achievements & Recognition</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Milestones, leadership positions, and recognitions across technology,
          activism, and community service
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-900 via-emerald-500 to-amber-400 hidden lg:block"></div>

        <div className="space-y-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:mr-auto" : "lg:ml-auto"}`}>
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all lg:text-left space-y-2`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 lg:flex-row lg:justify-start`}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm text-amber-600">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>

                  {/* Center Icon (Desktop) */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-12 h-12 bg-white border-4 border-blue-900 rounded-full flex items-center justify-center shadow-md z-10">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <section className="mt-16 bg-gradient-to-r from-blue-900 to-emerald-600 rounded-2xl p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-4xl mb-2">8+</div>
            <p className="text-blue-100">Major Achievements</p>
          </div>
          <div>
            <div className="text-4xl mb-2">5+</div>
            <p className="text-blue-100">Years of Volunteering</p>
          </div>
          <div>
            <div className="text-4xl mb-2">500+</div>
            <p className="text-blue-100">People Impacted</p>
          </div>
        </div>
      </section>
    </div>
  );
}
