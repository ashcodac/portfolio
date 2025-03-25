import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // ✅ Import About section
import Projects from "./components/Projects"; // ✅ Import Projects
import Timeline from "./components/Timeline"; // ✅ Import Timeline
import Contact from "./components/Contact"; // ✅ Import Contact Section
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Hero Section */}
      <Hero />
    
      {/* ✅ About Section */}
      <About />

      {/* ✅ Projects Section */}
      <Projects />

      {/* ✅ Timeline Section */}
      <Timeline />

      {/* ✅ Contact Section */}
      <Contact />

      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600">Tailwind is working!</p>

        {/* ✅ Logo Section */}
        <div className="flex space-x-10">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-24 h-24" alt="React logo" />
          </a>
        </div>

        <h2 className="text-3xl font-semibold">Vite + React</h2>

        {/* ✅ Counter Section */}
        <div className="bg-blue-500 text-white p-4 rounded-md">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;