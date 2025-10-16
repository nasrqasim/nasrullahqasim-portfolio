import React from "react";
import { ArrowRight } from "lucide-react";

export interface MobileCardProps {
  title: string;
  description: string;
  techStack: string;
  image: string;
}

export function MobileCard({ title, description, techStack, image }: MobileCardProps) {
  return (
    <article className="rounded-2xl shadow-lg overflow-hidden border border-white/10 bg-white/5">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">
          {description}
        </p>
        <p className="text-sm text-gray-400 mb-4">{techStack}</p>
        <button className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors">
          View Details <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </article>
  );
}


