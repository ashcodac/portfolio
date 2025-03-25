import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect Active Section on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "timeline", "contact"];
      const scrollPosition = window.scrollY + 150; // Adjusted for Navbar height

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 transition-all">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* ✅ Brand Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Ashish Sharma</h1>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"} {/* Toggle between Hamburger & Close Icon */}
        </button>

        {/* ✅ Menu Items */}
        <ul
          className={`absolute md:static left-0 top-16 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          {["about", "projects", "timeline", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`block md:inline-block text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                  activeSection === section ? "text-blue-600 font-bold" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
