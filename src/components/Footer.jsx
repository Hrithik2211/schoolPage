import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="bg-gray-800 py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            SUBSCRIBE OUR
            <span className="text-red-500"> NEWSLETTER</span>
          </h2>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow p-2 border border-gray-300 rounded-l"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">
              About US
            </h3>
            <p className="text-sm">
              SchoolAura Smart Education Platform is a step towards making
              learning better and effective for the students and help to
              acheiving their goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About Us', 'Benefits', 'Blogs', 'Testimonials', 'Featurs'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-red-500">
                      › {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">
              Help & Support
            </h3>
            <ul className="space-y-2">
              {[
                'Services',
                'Support',
                'Terms & condition',
                'Privacy Policy',
                'Sitemap',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-red-500">
                    › {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-500">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full">
                <Facebook size={24} color="white" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full">
                <Instagram size={24} color="white" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full">
                <Twitter size={24} color="white" />
              </a>
              <a href="#" className="bg-green-500 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-navy-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="mr-4" />
              <div>
                <h4 className="font-semibold text-red-500">CaLL US</h4>
                <p>+91-9540349392</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4" />
              <div>
                <h4 className="font-semibold text-red-500">MAIL US</h4>
                <p>contact@schoolaura.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-4" />
              <div>
                <h4 className="font-semibold text-red-500">
                  Office Address
                </h4>
                <p>
                  E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New
                  Delhi, Delhi 110020, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-navy-900 text-white py-4 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>2021 © SchoolAura. All Right Reserved</p>
          <p>
            Design & Development by{' '}
            <a href="#" className="text-blue-400">
              Insoftlink Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
