const projects = [
    {
      title: "Portfolio Website",
      description: "A sleek, modern portfolio built with React & Tailwind CSS.",
      image: "/images/portfolio.jpg", // ✅ Updated to .jpg
      github: "https://github.com/ashcodac/portfolio",
      demo: "https://ashcodac.github.io/",
    },
    {
      title: "E-Commerce App",
      description: "An online shopping platform with cart & payment integration.",
      image: "/images/ecommerce.jpg", // ✅ Updated to .jpg
      github: "https://github.com/ashcodac/ecommerce-app",
      demo: "https://ecommerce-demo.vercel.app/",
    },
    {
      title: "Weather App",
      description: "A real-time weather app using OpenWeather API.",
      image: "/images/weather.jpg", // ✅ Updated to .jpg
      github: "https://github.com/ashcodac/weather-app",
      demo: "https://weatherapp-demo.vercel.app/",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = "/images/fallback.jpg")} // ✅ Updated fallback path
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  