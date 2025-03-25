const About = () => {
    return (
      <section
        id="about" // ✅ Added ID for scrolling
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-20 py-20 space-y-10 md:space-y-0 md:space-x-10"
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Ashish Sharma</h1>
          <p className="text-lg text-gray-600 mt-4">
            Building modern web experiences.
          </p>
  
          {/* ✅ Wrapped button in <a> with href to #about */}
          <a href="#about">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              View My Work
            </button>
          </a>
        </div>
      </section>
    );
  };
  
  export default About;
  