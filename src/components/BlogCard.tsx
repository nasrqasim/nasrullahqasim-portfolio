import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  imageCaption?: string;
}

export function BlogCard({ title, date, description, image, imageCaption }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full flex flex-col">
      <div className="relative overflow-hidden w-full h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {imageCaption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-2 backdrop-blur-sm">
            {imageCaption}
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <h3 className="text-gray-900 mb-2 min-h-[48px]">{title}</h3>
        <p className="text-gray-600 mb-4 min-h-[84px]">{description}</p>
        <button className="mt-auto flex items-center text-blue-900 hover:text-blue-700 transition-colors">
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}
