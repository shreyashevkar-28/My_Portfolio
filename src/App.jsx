import { useState } from "react"
import { Link } from "react-scroll"

import profile from "./assets/profile.jpeg"
import project1 from "./assets/project1.jpg"
import project2 from "./assets/project1.jpg"
import cert1 from "./assets/cert1.jpg"
import cert2 from "./assets/cert2.jpg"
import cert3 from "./assets/cert3.png"

function App(){

const [dark,setDark]=useState(true)
return(

<div className={dark ? "dark":""}>
<div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition duration-500 scroll-smooth">


{/* NAVBAR */}

<nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

<h1 className="font-bold text-xl">
Shreya Shevkar
</h1>

<div className="space-x-6">

<Link activeClass="text-blue-500 border-b-2 border-blue-500"
to="home" smooth duration={500} offset={-80} spy
className="cursor-pointer hover:text-blue-500 pb-1">
Home
</Link>

<Link activeClass="text-blue-500 border-b-2 border-blue-500"
to="about" smooth duration={500} offset={-80} spy
className="cursor-pointer hover:text-blue-500 pb-1">
About
</Link>

<Link activeClass="text-blue-500 border-b-2 border-blue-500"
to="skills" smooth duration={500} offset={-80} spy
className="cursor-pointer hover:text-blue-500 pb-1">
Skills
</Link>

<Link activeClass="text-blue-500 border-b-2 border-blue-500"
to="projects" smooth duration={500} offset={-80} spy
className="cursor-pointer hover:text-blue-500 pb-1">
Projects
</Link>

<Link activeClass="text-blue-500 border-b-2 border-blue-500"
to="certifications" smooth duration={500} offset={-80} spy
className="cursor-pointer hover:text-blue-500 pb-1">
Certificates
</Link>

<Link activeClass="text-blue-500 border-b-2 border-blue-500"
to="contact" smooth duration={500} offset={-80} spy
className="cursor-pointer hover:text-blue-500 pb-1">
Contact
</Link>
</div>

<button
onClick={()=>setDark(!dark)}
className="bg-blue-500 text-white px-3 py-1 rounded">
{dark ? "Light":"Dark"}
</button>

</div>
</nav>


{/* HOME */}

<section
  id="home"
  className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-20 px-6 pt-20 pb-16 text-center md:text-left">

<img
  src={profile}
  className="w-80 rounded-2xl border-4 border-blue-500 shadow-xl"/>

<div className="max-w-xl">

<h1 className="text-5xl font-bold">
Shreya Sunil Shevkar
</h1>

<p className="text-xl text-blue-500 mt-3">
Computer Engineering Student
</p>

<p className="mt-4 text-gray-600 dark:text-gray-300">
Aspiring software developer passionate about building modern web applications
and solving real-world problems through technology.
</p>
</div>
</section>


{/* ABOUT */}

<section id="about" className="max-w-7xl mx-auto flex px-9 py-10">
<div className="w-[100%]">

<h2 className="text-3xl font-bold mb-6">
About Me
</h2>

<p className="mb-4">
👋 Hi, I'm Shreya Sunil Shevkar — a Computer Engineering student passionate about building impactful technology.
</p>

<p>
🎓 Currently, I am pursuing B.Tech in Computer Science & Engineering at COEP Technological University, Pune.
</p>

<p>
💻 I enjoy working with technologies like C, C++, Java, Web Development while strengthening my understanding of AI, Data Structures, Algorithms, and Software Development.
</p>

<p>
🚀 My current focus is on improving problem-solving skills, building meaningful projects, and exploring fields such as Artificial Intelligence, research, and innovative software systems. I believe technology has the power to bridge inequality and solve real-world problems. My goal is to create intelligent systems that generate meaningful human impact.
</p>
</div>
</section>


{/* SKILLS */}

<section id="skills" className="max-w-7xl mx-auto px-10 py-10">
<h2 className="text-3xl font-bold mb-7">
Skills
</h2>

<div className="grid grid-cols-2 gap-8">

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
<h3 className="font-bold mb-2">Languages</h3>
<p>C, C++, Java, Python</p>
</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
<h3 className="font-bold mb-2">Web Development</h3>
<p>HTML, CSS, JavaScript, React, Node.js</p>
</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
<h3 className="font-bold mb-2">Frameworks & IDEs</h3>
<p>VS Code, IntelliJ IDEA, MySQL, MongoDB</p>
</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
<h3 className="font-bold mb-2">Professional Skills</h3>
<p>Communication, Leadership, Teamwork, Project Management, Critical Thinking</p>
</div>
</div>
</section>


{/* PROJECTS */}

<section id="projects" className="max-w-7xl mx-auto px-10 py-10">

<h2 className="text-3xl font-bold mb-10">
Projects
</h2>

<div className="grid grid-cols-1 gap-8">

<a href="https://github.com"
target="_blank"
className="flex bg-white dark:bg-gray-800 rounded shadow hover:scale-[1.02] transition p-4 gap-6"
>

<img src={project1} className="w-48 rounded object-cover"/>
<div>

<h3 className="text-xl font-bold mb-2">
Smart Code Search 
</h3>

<p className="text-gray-600 dark:text-gray-300">
A system designed to manage student records, grades and academic
performance efficiently using modern programming practices.
</p>
</div>
</a>

<a href="https://github.com"
target="_blank"
className="flex bg-white dark:bg-gray-800 rounded shadow hover:scale-[1.02] transition p-4 gap-6"
>

<img src={project2} className="w-48 rounded object-cover"/>
<div>

<h3 className="text-xl font-bold mb-2">
Personal Portfolio Website
</h3>

<p className="text-gray-600 dark:text-gray-300">
A responsive portfolio website developed using React and Tailwind CSS
to showcase projects, skills and certifications.
</p>

</div>
</a>

</div>
</section>


{/* CERTIFICATES */}

<section id="certifications" className="max-w-7xl mx-auto px-10 py-10">

<h2 className="text-3xl font-bold mb-10">
Certificates
</h2>

<div className="grid grid-cols-3 gap-20">
<div className="bg-white dark:bg-gray-800 rounded shadow p-4 text-center">

<img src={cert1} className="mb-4 rounded"/>

<p className="mb-3 font-medium">
Python Programming Certification
</p>

<a href={cert1}
target="_blank"
className="text-blue-500 underline">
View Certificate
</a>

</div>

<div className="bg-white dark:bg-gray-800 rounded shadow p-4 text-center">
<img src={cert2} className="mb-4 rounded"/>

<p className="mb-3 font-medium">
Web Development Certification
</p>

<a href={cert2}
target="_blank"
className="text-blue-500 underline">
View Certificate
</a>
</div>

<div className="bg-white dark:bg-gray-800 rounded shadow p-4 text-center">
<img src={cert3} className="mb-4 rounded"/>

<p className="mb-3 font-medium">
Java Programming Certification
</p>

<a href={cert3}
target="_blank"
className="text-blue-500 underline">
View Certificate
</a>

</div>
</div>
</section>


{/* CONTACT */}

<section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">

<h2 className="text-3xl font-bold mb-8">
Contact
</h2>

<div className="space-y-3 text-lg">
<p>Email : shreyashevkar@gmail.com</p>
<p>Phone : +91 9423003820</p>

<p>
  LinkedIn :
  <a href="https://www.linkedin.com/in/shreya-shevkar-908b11340/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline ml-2"
  >
    linkedin.com/in/shreyashevkar
  </a>
</p>

<p>
  GitHub :
  <a href="https://github.com/shreyashevkar-28"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline ml-2"
  >
    github.com/shreyashevkar
  </a>
</p>

</div>
</section>

<footer className="text-center py-6 border-t">
© 2026 Shreya Shevkar
</footer>

</div>
</div>
)
}

export default App