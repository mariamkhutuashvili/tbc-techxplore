"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function Topics() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const router = useRouter();

  function handleTopicClick(topic) {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else if (selectedTopics.length < 2) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  }

  function isSelected(topic) {
    return selectedTopics.includes(topic);
  }

  function handleNextClick() {
    if (selectedTopics.length === 2) {
      router.push("/share-skill");
    }
  }

  function handleSkipClick() {
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold text-center mb-2">
          Choose your topics of interest
        </h1>
        <p className="text-center mb-8">Choose exactly 2 options</p>
        <div className="grid grid-cols-4 gap-4">
          {topics.map((topic) => (
            <div
              key={topic}
              className={`flex items-center justify-center p-4 rounded-full cursor-pointer transition-all 
                          ${
                            isSelected(topic)
                              ? "bg-purple-700"
                              : "bg-white text-black"
                          }`}
              onClick={() => handleTopicClick(topic)}
            >
              {topic}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8">
          <button
            className={`px-6 py-3 bg-purple-700 text-white font-semibold rounded-full 
                        ${
                          selectedTopics.length !== 2
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
            disabled={selectedTopics.length !== 2}
            onClick={handleNextClick}
          >
            Next
          </button>
          <button className="text-white underline" onClick={handleSkipClick}>
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
