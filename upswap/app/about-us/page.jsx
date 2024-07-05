import Image from "next/image";
import Header from "../../components/Header";

export const metadata = {
  title: "About Us - Learn More About Our Company",
  description:
    "Discover the story behind our company, our mission and values. Get to know us better and learn why we are passionate about what we do.",
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-purple-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Welcome to UpSwap!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            At UpSwap, we believe in the power of sharing and trading skills.
            Our platform is dedicated to connecting individuals who want to
            teach what they know and learn something new in return. Whether you
            have expertise in programming, art, languages, or any other skill,
            UpSwap is the perfect place for you.
          </p>

          <div className="flex justify-center mb-8">
            <Image
              src="/assets/about-us.png"
              width={150}
              height={150}
              alt="About Us"
              className="rounded-lg w-[300px]"
            />
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What We Offer:
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li className="mb-2">
              <strong>Skill Trading:</strong> Exchange your skills with others.
              For example, if you know Python and want to learn drawing, you can
              find someone to teach you drawing in exchange for Python lessons.
            </li>
            <li className="mb-2">
              <strong>Diverse Expertise:</strong> Connect with a community of
              individuals with diverse skills and knowledge. There is something
              for everyone, from technical skills like programming and graphic
              design to creative arts and language learning.
            </li>
            <li className="mb-2">
              <strong>Interactive Learning:</strong> Engage in hands-on learning
              experiences through one-on-one sessions, workshops, and
              collaborative projects.
            </li>
            <li className="mb-2">
              <strong>Community Support:</strong> Participate in community
              discussions, ask questions, and get support from fellow learners
              and teachers.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission:
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to create a dynamic community where knowledge and
            skills are freely exchanged, empowering individuals to learn and
            grow through mutual support. We aim to make learning a collaborative
            and rewarding experience for everyone involved.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Join Us:
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Become a part of the UpSwap community today and start your journey
            of learning and teaching. Together, we can build a world where
            everyone has the opportunity to share their expertise and gain new
            skills.
          </p>

          <div className="text-center">
            <button className="bg-blue-600 mt-4 text-white py-3 px-8 bg-black rounded-full hover:bg-blue-700 transition duration-300">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
