import React from "react";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-200 overflow-auto">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-zinc-800">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 md:px-6 h-16">
          <h1 className="text-xl font-bold text-white">Ankita Soni</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#coding" className="hover:text-white">Coding</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Layout */}
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-6 md:gap-10">
        
        {/* Sidebar */}
        <aside className="lg:top-24 self-start space-y-6">
          {/* About */}
          <section id="about" className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-2">About Me</h2>
            <p className="text-sm text-zinc-400">
              Hi! I’m Ankita Soni, a Computer Science student passionate about building scalable and user-friendly solutions. 
              I have strong foundations in HTML, CSS, JavaScript, DSA, and core CS subjects, along with hands-on experience 
              in SQL, React, and Node.js.
              <br /><br />
              I was a semi-finalist in Flipkart GRiD 7.0 and have actively participated in multiple hackathons, gaining 
              practical exposure to real-world problem solving and teamwork. My goal is to combine clean design, efficient 
              code, and logical problem-solving to deliver impactful projects.
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-2">Skills</h2>
            <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
              <li>💻 Programming Skills: C++, JavaScript, Java</li>
              <li>⚡ Libraries and Frameworks: React, Node.js, Express</li>
              <li>🗄️ Databases: SQL, MongoDB</li>
              <li>🌐 Development Tools: Git, GitHub, REST APIs</li>
              <li>🤖 Technical Skills: Data Structures, Algorithms, OOPS, DBMS, OS, CN</li>
              <li>🧠 Soft Skills: Problem Solving, Time Management, Leadership, Adaptability</li>
            </ul>
          </section>

          {/* Coding Platforms */}
     <section id="coding" className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
  <h2 className="text-lg font-semibold text-white mb-2">Coding Platforms</h2>
  <ul className="text-sm text-zinc-400 space-y-2 list-disc list-inside">
    <li>
      <strong>LeetCode:</strong>{" "}
      <a
        href="https://leetcode.com/ankitaa_001/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        ankitaa_001
      </a>{" "}
      | <span className="text-white">350+ problems solved</span>
    </li>
    <li>
      <strong>GeeksforGeeks:</strong>{" "}
      <a
        href="https://auth.geeksforgeeks.org/user/ankitast48jk/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        ankitast48jk
      </a>{" "}
      | <span className="text-white">100+ problems solved</span>
    </li>
  </ul>
</section>
 
        </aside>

        {/* Main Content */}
        <section className="space-y-10">
          {/* Projects */}
          <div id="projects" className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
            <ul className="space-y-4 text-sm text-zinc-300 list-none">
              <li>
                <strong>🔐 SecureWay:</strong> A real-time route optimization web app using live crime data & Google Maps API.
                <ul className="list-disc ml-6">
                  <li>Designed an inclusive, accessibility-focused interface for secure navigation.</li>
                  <li>Suggested safest & fastest routes with live updates.</li>
                </ul>
              </li>

              <li>
                <strong>⚖️ NyaySutra:</strong> A full-stack AI-powered legal aid platform.
                <ul className="list-disc ml-6">
                  <li>Integrated AI chatbot for instant legal query resolution.</li>
                  <li>Enabled quick document generation with responsive UI.</li>
                </ul>
              </li>

              <li>
                <strong>🛍️ StyleTrader:</strong> A modern fashion e-commerce platform.
                <ul className="list-disc ml-6">
                  <li>Developed trend-based product categorization with responsive design.</li>
                  <li>Implemented secure cart & checkout system for better user experience.</li>
                </ul>
              </li>

              <li>
                <strong>☁️ Weather App:</strong> A responsive weather application.
                <ul className="list-disc ml-6">
                  <li>Provides real-time weather updates.</li>
                  <li>Deployed seamlessly using GitHub Pages.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Experience */}
      {/* Experience */}
<div id="experience" className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
  <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>
  <ul className="text-sm text-zinc-400 space-y-3 list-disc list-inside">
    <li>👩‍💻 Worked on full-stack projects involving frontend (React, Tailwind), backend (Node.js, Express), and databases (SQL, MongoDB).</li>
    <li>🏆 Participated in multiple hackathons including Flipkart GRiD 7.0 (Semi-finalist), IIIT HackFest, and Deloitte Hackathon, gaining hands-on problem-solving and teamwork experience.</li>
    <li>📚 Exploring emerging technologies such as Machine Learning and Generative AI to expand technical skills.</li>
    <li>🤝 Active member of NSS (National Service Scheme), contributing to social initiatives and community service.</li>
    <li>🎭 Member of college Drama Club, improving teamwork, creativity, and communication skills.</li>
  </ul>
</div>


          {/* Contact */}
          <div id="contact" className="bg-zinc-900/40 rounded-2xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-sm text-zinc-400 mb-2">📧 ankitasonii0123@gmail.com</p>
            <p className="text-sm text-zinc-400 mb-2">🌐 <a href="https://github.com/infinityy18" className="hover:text-white">github.com/infinityy18</a></p>
            <p className="text-sm text-zinc-400 mb-2">💼 <a href="https://www.linkedin.com/in/ankita-soni-674123258/" className="hover:text-white">linkedin.com/in/ankita-soni-674123258</a></p>
            <p className="text-sm text-zinc-400">📞 +91 9569831971</p>
          </div>
        </section>
      </main>
    </div>
  );
}
