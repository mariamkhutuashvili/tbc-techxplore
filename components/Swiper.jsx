"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import TinderCard from "react-tinder-card";

const db = [
  {
    name: "Richard Hendricks",
    profession: "Software Engineer",
    age: 33,
    courseTitle: "Advanced Software Engineering",
    description:
      "Richard is a software engineer with a strong background in algorithms and data structures.",
    url: "/assets/user8.jpg",
  },
  {
    name: "Bella Bachman",
    profession: "Entrepreneur",
    age: 24,
    courseTitle: "Startup Funding",
    description:
      "Erlich is an entrepreneur with extensive experience in launching and scaling startups.",
    url: "/assets/user7.jpg",
  },
  {
    name: "Monica Hall",
    profession: "Product Manager",
    age: 27,
    courseTitle: "Product Management 101",
    description:
      "Monica is a product manager who has successfully led several tech products from ideation to launch.",
    url: "/assets/user6.jpg",
  },
  {
    name: "Jared Dunn",
    profession: "Operations Manager",
    age: 35,
    courseTitle: "Effective Operations Management",
    description:
      "Jared is an operations manager with expertise in streamlining business processes.",
    url: "/assets/user5.jpg",
  },
  {
    name: "Sarah Johnson",
    profession: "Data Scientist",
    age: 32,
    courseTitle: "Data Science for Beginners",
    description:
      "Sarah is an experienced data scientist specializing in machine learning and big data analytics.",
    url: "/assets/user4.jpg",
  },
  {
    name: "Michael Williams",
    profession: "Full Stack Developer",
    age: 30,
    courseTitle: "Full Stack Web Development",
    description: "Michael has over 15 years of experience in web development.",
    url: "/assets/user3.jpg",
  },
  {
    name: "Emily Davis",
    profession: "UX/UI Designer",
    age: 29,
    courseTitle: "User Experience Design Fundamentals",
    description:
      "Emily is a passionate UX/UI designer with a knack for creating intuitive and user-friendly designs.",
    url: "/assets/user2.jpg",
  },
  {
    name: "James Brown",
    profession: "Cybersecurity Expert",
    age: 25,
    courseTitle: "Introduction to Cybersecurity",
    description:
      "James is a cybersecurity expert with over 20 years of experience in the field.",
    url: "/assets/user1.jpg",
  },
];

export default function Swiper() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current?.restoreCard();
  };

  return (
    <div className="flex flex-col *:justify-center items-center h-[80%] m-10 p-7 border border-dashed bg-clip-border rounded-2xl border-stone-200">
      <h1 className="text-black mb-5 text-shadow font-semibold text-2xl uppercase ">
        Knowledge Exchange Card
      </h1>
      <div className="w-[90vw] max-w-[380px] h-[580px]">
        {currentIndex >= 0 ? (
          db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="absolute"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div className="bg-white w-[80vw] max-w-[380px] h-[580px] shadow-card rounded-[20px] bg-cover bg-center overflow-hidden">
                <div className="w-full h-[350px] max-h-[350px]">
                  <Image
                    src={character.url}
                    alt="logo"
                    width={150}
                    height={150}
                    style={{ pointerEvents: "none" }}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="m-[10px] font-semibold uppercase text-black">
                  {character.name} ({character.age} years old)
                </h3>
                <p className="m-[10px] text-black">{character.profession}</p>
                <p className="m-[10px] text-black bg-gray-200 shadow-red-50 shadow-sm rounded-3xl text-center p-2">
                  {character.courseTitle}
                </p>
                <p className="m-[10px] text-black">{character.description}</p>
              </div>
            </TinderCard>
          ))
        ) : (
          <div className="flex items-center justify-center h-full text-xl text-red-600">
            There is no new offer around you.
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center mt-[20px]">
        <button
          className={`flex-shrink-0 p-5 rounded-full border-none text-red-500 text-[18px] font-bold shadow-button w-fit transition-transform duration-200 m-[10px] ${
            !canSwipe ? "bg-[#c3c4d3]" : "bg-white hover:scale-[1.05]"
          }`}
          onClick={() => swipe("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
            />
          </svg>
        </button>
        <button
          className={`flex-shrink-0 p-5 rounded-full border-none text-orange-400 text-[18px] font-bold shadow-button w-fit transition-transform duration-200 m-[10px] ${
            !canGoBack ? "bg-[#c3c4d3]" : "bg-white hover:scale-[1.05]"
          }`}
          onClick={() => goBack()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
            style={{ transform: "rotate(90deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
            />
          </svg>
        </button>
        <button
          className={`flex-shrink-0 p-5 rounded-full border-none text-green-500 text-[18px] font-bold shadow-button w-fit transition-transform duration-200 m-[10px] ${
            !canSwipe ? "bg-[#c3c4d3]" : "bg-white hover:scale-[1.05]"
          }`}
          onClick={() => swipe("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
        </button>
      </div>
      {lastDirection ? (
        <h2
          key={lastDirection}
          className="text-white flex justify-center animate-popup"
        >
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="text-white flex justify-center animate-popup">
          Swipe a card or press Like / Dislike button to get Restore Card button
          visible!
        </h2>
      )}
    </div>
  );
}
