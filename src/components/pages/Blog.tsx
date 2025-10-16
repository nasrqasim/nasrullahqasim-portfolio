import { BlogCard } from "../BlogCard";

export function Blog() {
  const blogPosts = [
    {
      title: "Bridging the Digital Divide: Teaching AI in Urdu",
      date: "March 15, 2025",
      description:
        "Exploring the importance of making artificial intelligence education accessible in local languages and the impact on underserved communities.",
      image:
        "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1OTgyMDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Climate Action in Balochistan: Youth Leadership Matters",
      date: "February 28, 2025",
      description:
        "How young activists are driving climate change awareness and environmental sustainability in Balochistan region.",
      image:
        "https://images.unsplash.com/photo-1552799446-159ba9523315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwYWN0aXZpc218ZW58MXx8fHwxNzU5ODUzMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "The Power of Community-Led Technology Innovation",
      date: "February 10, 2025",
      description:
        "Lessons learned from building technology solutions that address real community needs and create lasting social impact.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nfGVufDF8fHx8MTc1OTg1MzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Fighting Misinformation with AI: Regional Fake News Detection",
      date: "January 25, 2025",
      description:
        "An in-depth look at developing AI systems to combat fake news and misinformation in local languages.",
      image:
        "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NTk3NzQ3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "From Student to Social Entrepreneur: The Healio Journey",
      date: "January 5, 2025",
      description:
        "The story behind co-founding a healthcare startup and the challenges of bringing innovation to rural healthcare.",
      image:
        "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU5ODQ1MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Education as Empowerment: My 5-Year Volunteering Journey",
      date: "December 20, 2024",
      description:
        "Reflections on five years of community volunteering and the transformative power of education and mentorship.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nfGVufDF8fHx8MTc1OTg1MzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Climate Change",
    "Social Innovation",
    "Leadership",
    "Education",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Blog & Insights</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Thoughts, experiences, and reflections on technology, climate action,
          social innovation, and community leadership
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-gradient-to-r from-blue-900 to-emerald-600 rounded-2xl p-12 text-center text-white">
        <h2 className="mb-4">Stay Updated</h2>
        <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
          Subscribe to receive the latest articles and insights on technology,
          climate action, and social innovation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button className="px-6 py-3 bg-amber-400 text-gray-900 rounded-lg hover:bg-amber-300 transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
