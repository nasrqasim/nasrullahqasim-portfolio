import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  GitBranch, 
  Globe, 
  Layers, 
  Server, 
  Terminal,
  Users,
  MessageCircle,
  Target,
  Lightbulb,
  Mic
} from "lucide-react";

export function Skills() {
  const technicalSkills = {
    "Languages & Fundamentals": [
      { name: "Python", icon: Code, level: "Advanced" },
      { name: "JavaScript", icon: Code, level: "Advanced" },
      { name: "HTML", icon: Globe, level: "Advanced" },
      { name: "CSS", icon: Layers, level: "Advanced" }
    ],
    "Frameworks & Libraries": [
      { name: "Node.js", icon: Server, level: "Advanced" },
      { name: "React.js", icon: Layers, level: "Advanced" },
      { name: "Express.js", icon: Server, level: "Intermediate" },
      { name: "Tailwind CSS", icon: Layers, level: "Advanced" }
    ],
    "Databases & Tools": [
      { name: "MongoDB", icon: Database, level: "Intermediate" },
      { name: "Oracle", icon: Database, level: "Intermediate" },
      { name: "SQL", icon: Database, level: "Intermediate" },
      { name: "Git", icon: GitBranch, level: "Advanced" },
      { name: "Vercel", icon: Terminal, level: "Intermediate" }
    ]
  };

  const softSkills = [
    { name: "Leadership", icon: Users },
    { name: "Communication", icon: MessageCircle },
    { name: "Teamwork", icon: Users },
    { name: "Project Management", icon: Target },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Public Speaking", icon: Mic }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="skills-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Skills & Expertise
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A blend of technical knowledge, creativity, and practical experience to build impactful digital solutions.
        </p>
      </motion.div>

      {/* Technical Skills Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-8 text-center"
        >
          Technical Skills
        </motion.h2>
        
        <div className="space-y-12">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300 border border-gray-700 hover:border-emerald-400"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                      <div className="flex items-center justify-center">
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          skill.level === 'Advanced' 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Soft & Professional Skills Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-20"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-white mb-4 text-center"
        >
          Soft & Professional Skills
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 text-center mb-8 max-w-2xl mx-auto"
        >
          Beyond code — I value leadership, communication, and collaboration in every project.
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          {softSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group rounded-full px-6 py-3 flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 border border-gray-600 hover:bg-amber-400 hover:text-gray-900 hover:border-amber-400 hover:shadow-lg"
              >
                <IconComponent className="w-5 h-5 text-emerald-400 group-hover:text-gray-900" />
                <span className="text-white font-medium group-hover:text-gray-900">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Quote Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-12 border border-gray-600">
          <motion.blockquote 
            className="text-2xl sm:text-3xl font-medium text-white leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "Empowering communities through technology, innovation, and collaboration."
          </motion.blockquote>
        </div>
      </motion.section>
    </div>
  );
}
