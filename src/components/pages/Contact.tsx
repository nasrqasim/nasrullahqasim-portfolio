import { Mail, MapPin, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";
import { SOCIAL_LINKS } from "../../constants/socials";
import { useEffect, useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info("Contact form ready (Formspree)");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      console.log("Form submitted", formData);
      const res = await fetch("https://formspree.io/f/xblzqyzg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Form error", res.status, text);
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      console.log("Form success");
      setStatus({ type: "success", message: "✅ Message sent successfully!" });
      // Auto dismiss after 5 seconds
      setTimeout(() => setStatus(null), 5000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Form error", err);
      setStatus({ type: "error", message: "❌ Failed to send message. Please try again later." });
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nasrqasimroonjha10@gmail.com",
      link: "mailto:nasrqasimroonjha10@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "LUAWMS University, Balochistan, Pakistan",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", link: SOCIAL_LINKS.linkedin, color: "hover:bg-blue-600" },
    { icon: Github, label: "GitHub", link: SOCIAL_LINKS.github, color: "hover:bg-gray-800" },
    { icon: Twitter, label: "Twitter", link: SOCIAL_LINKS.twitter, color: "hover:bg-blue-400" },
    { icon: Instagram, label: "Instagram", link: SOCIAL_LINKS.instagram, color: "hover:bg-pink-500" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate on impactful projects! Whether you have a question,
          an opportunity, or just want to connect, I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 w-full">
          <h2 className="text-gray-900 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full max-w-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full max-w-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full max-w-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full max-w-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg transition-colors flex items-center justify-center ${isSubmitting ? "bg-blue-800/70 cursor-not-allowed text-white" : "bg-blue-900 hover:bg-blue-800 text-white"}`}
            >
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <div className={`${status.type === "success" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"} border rounded-lg px-4 py-3 transition-opacity duration-500`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div>
          {/* Contact Details */}
          <div className="bg-gradient-to-br from-blue-900 to-emerald-600 rounded-2xl shadow-lg p-8 text-white mb-8">
            <h2 className="mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-amber-300 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="mb-4">Connect on Social Media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="rounded-xl p-6 bg-slate-900 border border-white/10">
            <h3 className="text-white mb-3">Let's Collaborate!</h3>
            <p className="text-slate-200">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether it's technology,
              climate action, or social innovation - let's make an impact
              together!
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="mt-16">
        <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
          <iframe
            title="LUAWMS University Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.826879331184!2d66.623!3d25.809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLUAWMS%20University!5e=0!3m2!1sen!2sPK!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
