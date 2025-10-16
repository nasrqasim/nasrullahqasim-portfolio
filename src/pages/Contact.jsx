import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue with bundlers like Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Contact = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null); // To hold the map instance
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window === 'undefined' || !mapContainerRef.current) {
      return;
    }

    // Prevent map from initializing more than once
    if (mapRef.current) {
      return;
    }

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }

    // Initialize map with a default view before getting user location
    mapRef.current = L.map(mapContainerRef.current).setView([25.3969, 66.6012], 10); // Default to LUAWMS
    
    // Use a dark theme tile layer from CartoDB
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(mapRef.current);

    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (mapRef.current) {
          mapRef.current.setView([latitude, longitude], 13);
          L.marker([latitude, longitude]).addTo(mapRef.current)
            .bindPopup('📍 You are here')
            .openPopup();
        }
      },
      () => {
        setLocationError('Unable to access your location. Please enable location services.');
        // Show a marker for the default location if user denies permission
        L.marker([25.3969, 66.6012]).addTo(mapRef.current)
            .bindPopup('LUAWMS University, Uthal')
            .openPopup();
      }
    );

    // Cleanup map instance on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-2">Get in Touch</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form below or connect with me on social media.
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="text-amber-400 font-medium">Your Email</label>
                <div className="mt-2">
                  <input type="email" name="email" id="email" placeholder="your.email@example.com" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-amber-400 font-medium">Subject</label>
                <div className="mt-2">
                  <input type="text" name="subject" id="subject" placeholder="What's this about?" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-amber-400 font-medium">Message</label>
                <div className="mt-2">
                  <textarea name="message" id="message" rows="4" placeholder="Tell me about your project or idea..." className="w-full"></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors duration-300"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-medium text-white mb-4">Connect with Me</h3>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-amber-400"><FaLinkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-amber-400"><FaGithub size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-amber-400"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-amber-400"><FaInstagram size={24} /></a>
              </div>
            </div>

            {/* Let's Collaborate Section */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-white mb-3">Let's Collaborate!</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether it's technology, climate action, or social innovation - let's make an impact together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;