import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const user = {
  name: "Mariam Khutuashvili",
  profession: "Front End Developer",
  courseTitle: "Advanced Software Engineering",
  description:
    "Mariam is a front-end developer with a strong background in creating responsive and user-friendly web applications.",
  url: "https://vbj9erj7k96w1n9u.public.blob.vercel-storage.com/110291015-7WRsQwH6dzdtXgHc3KkL5QQd38zKgc.jpeg",
};

export default function MyCard() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col items-center h-screen p-10">
        <div className="flex items-center justify-between w-full max-w-[380px] mb-5">
          <h1 className="text-black text-shadow font-semibold text-2xl uppercase ">
            My Card
          </h1>
          <button className="bg-blue-500 opacity-60 text-black px-4 py-2 hover:opacity-100 transition duration-300 ml-4">
            <FontAwesomeIcon icon={faEdit} className="w-5 h-5" />
          </button>
        </div>
        <div className="relative bg-white w-[80vw] max-w-[380px] h-[580px] shadow-card rounded-[20px] bg-cover bg-center overflow-hidden">
          <div className="w-full h-[350px] max-h-[350px]">
            <Image
              src={user.url}
              alt="user profile"
              width={150}
              height={150}
              style={{ pointerEvents: "none" }}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h3 className="m-[10px] font-semibold uppercase text-black">
            {user.name}
          </h3>
          <p className="m-[10px] text-black">{user.profession}</p>
          <p className="m-[10px] text-black bg-gray-200 shadow-red-50 shadow-sm rounded-3xl text-center p-2">
            {user.courseTitle}
          </p>
          <p className="m-[10px] text-black">{user.description}</p>
        </div>
      </div>
    </>
  );
}
