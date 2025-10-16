import React from "react";

interface FeedItem {
  id: string;
  title: string;
  description: string;
  meta: string;
  image: string;
}

const items: FeedItem[] = [
  {
    id: "1",
    title: "Designing Accessible Interfaces",
    description:
      "Practical steps to build inclusive, user‑friendly UI that performs well across devices and networks.",
    meta: "Oct 2025 • 5 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "2",
    title: "From Wireframe to Prototype",
    description:
      "How to translate ideas into interactive prototypes while keeping the experience consistent.",
    meta: "Sep 2025 • Case study",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    title: "Micro‑interactions that Matter",
    description:
      "Subtle feedback and motion can improve comprehension and delight when used thoughtfully.",
    meta: "Aug 2025 • UI patterns",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export function MobileFeed() {
  return (
    <section className="py-8">
      {/* Main container with generous side/top spacing to simulate mobile screen */}
      <div className="max-w-md mx-auto px-5">
        <div className="space-y-6">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl shadow-lg overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              {/* Fixed‑aspect image container */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text block */}
              <div className="p-5">
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-3">
                  {item.description}
                </p>
                <p className="text-sm text-gray-400">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MobileFeed;





