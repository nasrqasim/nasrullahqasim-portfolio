import React from "react";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  image: string;
  imageCaption?: string;
  url?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  image,
  imageCaption,
  url,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-gray-50">
        <img
          src={`/images/${image}`}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
        />
        {imageCaption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-2 backdrop-blur-sm">
            {imageCaption}
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 min-h-[64px]">{description}</p>
        <p className="text-sm text-emerald-600 mb-4">{techStack}</p>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        ) : (
          <button className="mt-auto flex items-center text-amber-400 hover:text-amber-300 transition-colors">
            View Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}
