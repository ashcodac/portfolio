const timelineData = [
    {
      year: "2025 - Present",
      title: "Project Manager",
      company: "LetsTute",
      description: "Managing 20+ professionals in EdTech content creation.",
    },
    {
      year: "2023 - 2024",
      title: "Software Developer",
      company: "Aktines Consulting",
      description:
        "Built a real-time activity tracker using React & ASP.NET. Integrated secure JWT authentication.",
    },
    {
      year: "2018 - 2023",
      title: "B.E. in Information Technology",
      company: "Thakur College of Engineering & Tech",
      description: "Specialized in Web Dev, Data Science, & AWS Cloud.",
    },
    {
      year: "🚀 Projects",
      title: "Activity Tracking Software",
      company: "",
      description: "Used by teams for real-time monitoring.",
    },
    {
      year: "",
      title: "Cryptocurrency Tracker",
      company: "",
      description: "Fetches live crypto prices & displays charts.",
    },
    {
      year: "",
      title: "Educational Workflow System",
      company: "",
      description: "Managed 129+ learning materials.",
    },
  ];
  
  const Timeline = () => {
    return (
      <section id="timeline" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">My Journey</h2>
        <div className="container mx-auto px-6 md:px-12">
          <div className="border-l-4 border-blue-600 pl-6 space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-7 w-5 h-5 bg-blue-600 rounded-full"></div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {item.company && <p className="text-gray-500">{item.company}</p>}
                <p className="text-sm text-gray-600">{item.year}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Timeline;
  