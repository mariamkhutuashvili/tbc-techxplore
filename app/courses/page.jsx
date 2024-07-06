import Sidebar from "../../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faPython,
  faJava,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faDatabase,
  faGitAlt,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

export const metadata = {
  title: "Share your knowledge",
  description: "Start your journey of learning and teaching.",
};

const courses = [
  {
    name: "React Development",
    description:
      "Learn the fundamentals of React and build powerful web applications.",
    icon: faReact,
  },
  {
    name: "JavaScript Mastery",
    description: "Master JavaScript and become proficient in web development.",
    icon: faJsSquare,
  },
  {
    name: "Python for Data Science",
    description: "Explore data science concepts and tools using Python.",
    icon: faPython,
  },
  {
    name: "Java Programming",
    description: "Understand the core concepts of Java programming.",
    icon: faJava,
  },
  {
    name: "HTML5 & CSS3",
    description: "Learn the essentials of HTML5 and CSS3 for web development.",
    icon: faHtml5,
  },
  {
    name: "Advanced CSS",
    description: "Dive deep into advanced CSS techniques.",
    icon: faCss3Alt,
  },
  {
    name: "Node.js Essentials",
    description: "Learn how to build server-side applications with Node.js.",
    icon: faNodeJs,
  },

  {
    name: "Version Control with Git",
    description: "Master version control and collaboration with Git.",
    icon: faGitAlt,
  },
];

export default function Courses() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col items-center h-screen p-10 ">
        <h1 className="text-black mb-5 text-shadow font-semibold text-2xl uppercase ">
          Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-card rounded-[20px] text-center"
            >
              <FontAwesomeIcon
                icon={course.icon}
                className="w-12 h-12 text-blue-500 mb-4"
              />
              <h3 className="font-semibold text-xl text-black mb-2">
                {course.name}
              </h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <button className="bg-blue-500 text-black px-4 py-2 rounded-full shadow hover:bg-blue hover:text-white transition duration-300">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
