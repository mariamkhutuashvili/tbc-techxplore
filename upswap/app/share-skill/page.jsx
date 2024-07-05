"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const topics = [
  "AI",
  "Marketing",
  "Engineering",
  "SAAS",
  "History",
  "C++",
  "Math",
  "DTC",
  "Space",
  "Venture Capital",
];

export default function SkillShare() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("");

  const router = useRouter();
  const inputFileRef = useRef(null);

  const handleThumbnailChange = (e) => {
    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic
    router.push("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#9373b2] to-[#9197f2] text-black px-4 py-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create a New Knowledge Card
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Card name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 block w-full p-2.5 bg-gray-200 text-black border border-gray-300 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              placeholder="Enter your project name"
            />
          </div>
          <div>
            <label
              htmlFor="projectDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Card description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows="4"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="mt-1 block w-full p-2.5 bg-gray-200 text-black border border-gray-300 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              placeholder="Describe your project..."
            ></textarea>
            <p className="text-right text-gray-500">500 words</p>
          </div>
          <div>
            <label
              htmlFor="projectThumbnail"
              className="block text-sm font-medium text-gray-700"
            >
              Card thumbnail
            </label>
            <div className="mt-1 flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg h-32 relative">
              {thumbnail && (
                <Image
                  src={thumbnail}
                  width={150}
                  height={150}
                  alt="Thumbnail"
                  className="h-full rounded-lg"
                />
              )}
              {!thumbnail && (
                <label
                  htmlFor="files"
                  className="absolute cursor-pointer text-black bg-white py-2 px-4 rounded-lg"
                >
                  <span className="text-gray-700">Upload a thumbnail</span>
                </label>
              )}
              <input
                name="file"
                ref={inputFileRef}
                onChange={handleThumbnailChange}
                type="file"
                id="files"
                className="absolute opacity-0 w-full h-full cursor-pointer"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="projectTopic"
              className="block text-sm font-medium text-gray-700"
            >
              Choose a topic
            </label>
            <select
              id="projectTopic"
              name="projectTopic"
              value={selectedTopic}
              onChange={handleTopicChange}
              className="mt-1 block w-full p-2.5 bg-gray-200 text-black border border-gray-300 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            >
              <option value="" disabled>
                Select a topic
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-purple text-white font-semibold rounded-lg hover:bg-blue transition-all"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
