import React from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
type FooterType = {
  name: string;
  to: string;
};
const Footer: React.FC = () => {
  const links: FooterType[] = [
    { name: "FAQ", to: "/" },
    { name: "Investor Relations", to: "/" },
    { name: "Privacy", to: "/" },
    { name: "Speed Test", to: "/" },
  ];

  const helpLinks: FooterType[] = [
    { name: "Help Center", to: "/" },
    { name: "Jobs", to: "/" },
    { name: "Cookie Preferences", to: "/" },
    { name: "Legal Notices", to: "/" },
  ];

  const accountLinks: FooterType[] = [
    { name: "Account", to: "/" },
    { name: "Ways to Watch", to: "/" },
    { name: "Corporate Information", to: "/" },
    { name: "Only on Netflix", to: "/" },
  ];

  const mediaLinks: FooterType[] = [
    { name: "Media Center", to: "/" },
    { name: "Terms of Use", to: "/" },
    { name: "Contact Us", to: "/" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      {/* Top Section with Links */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col">
          {links.map(({ name, to }, index) => (
            <NavLink key={index} to={to} className="mb-2 hover:text-white">
              {name}
            </NavLink>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          {helpLinks.map(({ name, to }, index) => (
            <NavLink key={index} to={to} className="mb-2 hover:text-white ">
              {name}
            </NavLink>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          {accountLinks.map(({ name, to }, index) => (
            <NavLink key={index} to={to} className="mb-2 hover:text-white">
              {name}
            </NavLink>
          ))}
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          {mediaLinks.map(({ name, to }, index) => (
            <NavLink key={index} to={to} className="mb-2 hover:text-white">
              {name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Social Icons (if needed) */}
      <div className="container mx-auto mt-8 flex justify-center space-x-4">
        <a href="/" className="text-gray-400 hover:text-blue-400">
          <i className="fab fa-facebook-f fa-2x"></i>
        </a>
        <a href="/" className="text-gray-400 hover:text-blue-300">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="/" className="text-gray-400 hover:text-purple-400">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a href="/" className="text-gray-400 hover:text-red-600">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto mt-8 text-center">
        <p className="text-sm text-gray-500">© 2024 Movie Fetcher, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
