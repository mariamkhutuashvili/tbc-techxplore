"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faBell,
  faHome,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentSidebarTab, setCurrentSidebarTab] = useState(null);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setIsSidebarOpen(false);
      }
    }

    function handleClickOutside(event) {
      if (
        !event.target.closest(".sidebar") &&
        !event.target.closest(".profile-nav-button")
      ) {
        setIsSidebarOpen(false);
        setCurrentSidebarTab(null);
      }
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  function toggleSidebarTab(tab) {
    if (currentSidebarTab === tab) {
      setIsSidebarOpen(false);
      setCurrentSidebarTab(null);
    } else {
      setIsSidebarOpen(true);
      setCurrentSidebarTab(tab);
    }
  }

  return (
    <div className="fixed left-0 top-0 h-screen z-30 sidebar">
      <div className="flex flex-shrink-0 transition-all">
        <div
          onClick={() => {
            setIsSidebarOpen(false);
            setCurrentSidebarTab(null);
          }}
          className={`fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`fixed inset-y-0 z-10 w-16 bg-black ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        ></div>

        {/* user nav */}
        <nav
          aria-label="Options"
          className="fixed inset-x-0 bottom-0 flex flex-row-reverse items-center justify-between px-4 py-2 bg-black sm:hidden shadow-t rounded-t-3xl"
        >
          <button
            onClick={() => toggleSidebarTab("linksTab")}
            className={`p-2 transition-colors rounded-lg shadow-md hover:bg-blue hover:text-white focus:outline-none focus:ring focus:ring-blue focus:ring-offset-white focus:ring-offset-2 ${
              isSidebarOpen && currentSidebarTab === "linksTab"
                ? "text-white bg-blue"
                : "text-gray-500 bg-white"
            }`}
          >
            <span className="sr-only">Toggle sidebar</span>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <a href="#">
            <Image
              className="w-10 h-auto"
              src="/assets/logo-2.png"
              width={150}
              height={150}
              alt="UpSwap"
            />
          </a>

          <div className="relative flex items-center flex-shrink-0 p-2 profile-nav-button">
            <button
              onClick={() => setIsUserProfileOpen(!isUserProfileOpen)}
              className="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-white focus:ring-offset-2"
            >
              <Image
                className="w-8 h-8 rounded-lg shadow-md"
                src="https://vbj9erj7k96w1n9u.public.blob.vercel-storage.com/110291015-7WRsQwH6dzdtXgHc3KkL5QQd38zKgc.jpeg"
                width={150}
                height={150}
                alt="Ahmed Kamel"
              />
              <span className="sr-only">User menu</span>
            </button>
            <div
              className={`absolute w-48 py-1 mt-2 origin-bottom-left bg-white rounded-md shadow-lg left-10 bottom-14 focus:outline-none ${
                isUserProfileOpen ? "block" : "hidden"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-label="user menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </nav>

        {/* narrow nav */}
        <nav
          aria-label="Options"
          className="z-20 h-screen flex-col items-center flex-shrink-0 hidden w-16 py-4 bg-black border-r-2 border-indigo-100 shadow-md sm:flex rounded-tr-3xl rounded-br-3xl sidebar"
        >
          <div className="flex-shrink-0 py-4">
            <a href="/">
              <Image
                className="w-10 h-auto"
                src="/assets/logo-2.png"
                width={150}
                height={150}
                alt="UpSwap"
              />
            </a>
          </div>
          <div className="flex flex-col items-center flex-1 p-2 space-y-4">
            <button
              onClick={() => toggleSidebarTab("linksTab")}
              className={`p-2 transition-colors rounded-lg shadow-md hover:bg-blue hover:text-white focus:outline-none focus:ring focus:ring-blue focus:ring-offset-white focus:ring-offset-2 ${
                isSidebarOpen && currentSidebarTab === "linksTab"
                  ? "text-white bg-blue"
                  : "text-gray-500 bg-white"
              }`}
            >
              <span className="sr-only">Toggle sidebar</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button
              onClick={() => toggleSidebarTab("messagesTab")}
              className={`p-2 transition-colors rounded-lg shadow-md hover:bg-blue hover:text-white focus:outline-none focus:ring focus:ring-blue focus:ring-offset-white focus:ring-offset-2 ${
                isSidebarOpen && currentSidebarTab === "messagesTab"
                  ? "text-white bg-blue"
                  : "text-gray-500 bg-white"
              }`}
            >
              <span className="sr-only">Toggle message panel</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button
              onClick={() => toggleSidebarTab("notificationsTab")}
              className={`p-2 transition-colors rounded-lg shadow-md hover:bg-blue hover:text-white focus:outline-none focus:ring focus:ring-blue focus:ring-offset-white focus:ring-offset-2 ${
                isSidebarOpen && currentSidebarTab === "notificationsTab"
                  ? "text-white bg-blue"
                  : "text-gray-500 bg-white"
              }`}
            >
              <span className="sr-only">Toggle notifications panel</span>
              <FontAwesomeIcon icon={faBell} />
            </button>
          </div>

          <div className="relative flex items-center flex-shrink-0 p-2 profile-nav-button">
            <button
              onClick={() => setIsUserProfileOpen(!isUserProfileOpen)}
              className="transition-opacity rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring focus:ring-blue focus:ring-offset-white focus:ring-offset-2"
            >
              <Image
                className="w-10 h-10 rounded-lg shadow-md"
                src="https://vbj9erj7k96w1n9u.public.blob.vercel-storage.com/110291015-7WRsQwH6dzdtXgHc3KkL5QQd38zKgc.jpeg"
                width={150}
                height={150}
                alt="user"
              />
              <span className="sr-only">User menu</span>
            </button>
            <div
              className={`absolute w-48 py-1 mt-2 origin-bottom-left bg-white rounded-md shadow-lg left-10 bottom-14 focus:outline-none ${
                isUserProfileOpen ? "block" : "hidden"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-label="user menu"
            >
              <a
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                My Profile
              </a>
              <a
                href="/my-card"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                My Card
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </nav>

        <div
          className={`fixed h-screen inset-y-0 left-0 z-10 flex-shrink-0 w-64 bg-black shadow-lg sm:left-16 rounded-tr-3xl rounded-br-3xl sm:w-72 lg:static lg:w-64 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sidebar`}
        >
          {/* first nav */}
          <nav
            aria-label="Main"
            className={`flex flex-col h-full ${
              currentSidebarTab === "linksTab" ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-center flex-shrink-0 py-10">
              <a>
                <Image
                  className="w-24 h-auto"
                  src="/assets/logo-2.png"
                  width={150}
                  height={150}
                  alt="UpSwap"
                />
              </a>
              <p className="text-white text-[30px]">UpSwap</p>
            </div>

            <div className="flex-1 flex flex-col justify-between px-4 space-y-2 gap-7 overflow-hidden hover:overflow-auto">
              <div className="flex flex-col gap-2">
                <a
                  href="/discover"
                  className="flex items-center space-x-2 text-white bg-blue rounded-lg group"
                >
                  <span
                    aria-hidden="true"
                    className="p-2 text-white bg-blue rounded-lg group-hover:opacity-80 transition-opacity"
                  >
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  <span className="group-hover:opacity-80 transition-opacity">
                    Discover
                  </span>
                </a>
                <a
                  href="/courses"
                  className="flex items-center space-x-2 text-white bg-blue rounded-lg group"
                >
                  <span
                    aria-hidden="true"
                    className="p-2 text-white bg-blue rounded-lg group-hover:opacity-80 transition-opacity "
                  >
                    <FontAwesomeIcon icon={faFile} />
                  </span>
                  <span className="group-hover:opacity-80 transition-opacity">
                    Courses
                  </span>
                </a>
              </div>
              <a
                href="https://www.apple.com/app-store/"
                className="flex justify-center"
              >
                <Image
                  className="w-[130px] h-auto"
                  src="/assets/ios.webp"
                  width={150}
                  height={150}
                  alt="IOS"
                />
              </a>
            </div>
            <div className="flex-shrink-0 p-4 mt-5">
              <div className="hidden p-2 space-y-6 bg-gray-100 rounded-lg md:block">
                {/* <Image
                  aria-hidden="true"
                  className="-mt-10"
                  src="https://raw.githubusercontent.com/kamona-ui/dashboard-alpine/52b4b4abb92ef251f6610be416038b48209d7a81/public/assets/images/undraw_web_developer_p3e5.svg"
                  width={150}
                  height={150}
                  alt="picture"
                /> */}
                <p className="text-sm text-blue">
                  Use our <span className="text-base text-purple">Premium</span>{" "}
                  features now! <br />
                </p>
                <button className="w-full px-4 py-2 text-center text-white transition-opacity bg-blue rounded-lg hover:opacity-80 focus:outline-none focus:ring focus:ring-blue focus:ring-offset-2 focus:ring-offset-gray-100">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </nav>

          {/* second nav */}
          <section
            className={`px-4 py-6 ${
              currentSidebarTab === "messagesTab" ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl text-white text-center">Messages</h2>
          </section>

          {/* third nav */}
          <section
            className={`px-4 py-6 ${
              currentSidebarTab === "notificationsTab" ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl text-white text-center">Notifications</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
