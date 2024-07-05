"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header setOpen={setOpen} />
      <main className="w-full flex flex-1 items-center justify-between p-5">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold mb-10 text-center leading-tight">
            Exchange Knowledge
          </h1>
          <button
            className="hover-fill-gradient relative z-10 px-4 py-2 bg-black text-white rounded-full"
            onClick={() => setOpen(true)}
          >
            Start Exploring
          </button>
        </div>
        <div className="video-container w-1/2">
          <video
            src="/assets/banner Animation.mp4"
            className="w-full h-auto rounded-full"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </main>
      <Footer />
      <Login open={open} setOpen={setOpen} />
    </>
  );
}
