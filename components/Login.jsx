"use client";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Login({ open, setOpen }) {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setActiveTab("login");
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted");
    handleClose();
    router.push("/topics");
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("Register submitted");
    handleClose();
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1899 }, (_, i) => 1900 + i);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex items-center justify-center"
    >
      <div className="bg-white text-black rounded-lg shadow-lg p-8 w-[600px] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "login" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "register" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {activeTab === "login" && (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <div className="flex items-center bg-gray-200 p-2 rounded">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <div className="flex items-center bg-gray-200 p-2 rounded">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue text-white rounded mt-4"
            >
              Login
            </button>
          </form>
        )}

        {activeTab === "register" && (
          <form onSubmit={handleRegisterSubmit} className="overflow-auto">
            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <div className="flex items-center bg-gray-200 p-2 rounded">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <div className="flex items-center bg-gray-200 p-2 rounded">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Phone Number</label>
              <div className="flex items-center bg-gray-200 p-2 rounded">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <div className="flex items-center bg-gray-200 p-2 rounded">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Confirm Password</label>
              <div className="flex items-center bg-gray-200 p-2 rounded">
                <FontAwesomeIcon icon={faLock} className="mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="w-full bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Birth Date</label>
              <div className="flex justify-between gap-2">
                <select
                  name="day"
                  className="w-full bg-gray-200 p-2 rounded text-black placeholder-gray-500"
                >
                  <option className="bg-gray-200">Day</option>
                  {days.map((day) => (
                    <option key={day} className="bg-gray-200">
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  name="month"
                  className="w-full bg-gray-200 p-2 rounded text-black placeholder-gray-500"
                >
                  <option className="bg-gray-200">Month</option>
                  {months.map((month, index) => (
                    <option key={index} className="bg-gray-200">
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  className="w-full bg-gray-200 p-2 rounded text-black placeholder-gray-500"
                >
                  <option className="bg-gray-200">Year</option>
                  {years.map((year) => (
                    <option key={year} className="bg-gray-200">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue text-white rounded mt-4"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
}
