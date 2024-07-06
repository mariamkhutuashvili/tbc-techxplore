import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "My Profile - Manage Your Account",
  description:
    "View and update your personal information, manage your account settings, and customize your profile. Keep your details up to date and secure.",
};

export default function Profile() {
  return (
    <>
      <Sidebar />
      <div className="relative flex flex-col w-full min-w-0 sm:max-w-[500px] md:max-w-[1000px] mt-10 items-center mx-auto mb-6 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
        <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
          <div className="flex flex-wrap mb-6 xl:flex-nowrap">
            <div className="mb-1 mr-5">
              <div className="relative inline-block shrink-0 rounded-2xl">
                <Image
                  className="inline-block shrink-0 rounded-2xl w-[110px] h-[110px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px]"
                  src="https://vbj9erj7k96w1n9u.public.blob.vercel-storage.com/110291015-7WRsQwH6dzdtXgHc3KkL5QQd38zKgc.jpeg"
                  width={300}
                  height={300}
                  alt="user"
                />
              </div>
              <div className="flex justify-center mt-5 space-x-5">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">X</span>
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-6 h-6 text-black hover:text-gray-100"
                  />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">GitHub</span>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-6 h-6 text-black hover:text-gray-100"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-6 h-6 text-black hover:text-gray-100"
                  />
                </a>
              </div>
            </div>
            <div className="grow">
              <div className="flex flex-wrap items-start justify-between mb-2">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <a
                      className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                      href="javascript:void(0)"
                    >
                      {" "}
                      Mariam Khutuashvili{" "}
                    </a>
                  </div>
                  <div className="flex flex-wrap pr-2 mb-4 font-medium">
                    <a
                      className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                      href="javascript:void(0)"
                    >
                      <span className="mr-1">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="w-5 h-5"
                        />
                      </span>{" "}
                      Tbilisi, Georgia{" "}
                    </a>
                    <a
                      className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                      href="javascript:void(0)"
                    >
                      <span className="mr-1">
                        <FontAwesomeIcon
                          icon={faPhoneAlt}
                          className="w-5 h-5"
                        />
                      </span>{" "}
                      +995 (598) 434473{" "}
                    </a>
                  </div>
                  <div className="flex flex-wrap pr-2 mb-4 font-medium">
                    <a
                      className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                      href="javascript:void(0)"
                    >
                      <span className="mr-1">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="w-5 h-5"
                        />
                      </span>{" "}
                      khutuashvilimariami@tbcacademy.edu.ge{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <a
                    href="javascript:void(0)"
                    className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    {" "}
                    10 Matches{" "}
                  </a>

                  <a
                    href="javascript:void(0)"
                    className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    {" "}
                    8 Exchanges{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ul
            nav-tabs
            className="group flex flex-wrap items-stretch text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments"
          >
            <li className="flex mt-2 -mb-[2px] w-full sm:w-auto">
              <a
                aria-controls="summary"
                className="relative py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary text-xl w-full sm:w-auto block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
                href="javascript:void(0)"
              >
                {" "}
                About Me{" "}
              </a>
            </li>
            <li className="flex mt-2 -mb-[2px] w-full sm:w-auto">
              <a
                aria-controls="assignments"
                className="relative py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary text-xl w-full sm:w-auto block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
                href="javascript:void(0)"
              >
                {" "}
                Skills{" "}
              </a>
            </li>
            <li className="flex mt-2 -mb-[2px] w-full sm:w-auto">
              <a
                aria-controls="history"
                className="relative py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary text-xl w-full sm:w-auto block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
                href="javascript:void(0)"
              >
                {" "}
                Experience{" "}
              </a>
            </li>
            <li className="flex mt-2 -mb-[2px] w-full sm:w-auto">
              <a
                aria-controls="marketing"
                className="relative py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary text-xl w-full sm:w-auto block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
                href="javascript:void(0)"
              >
                {" "}
                Reviews{" "}
              </a>
            </li>

            <li className="flex mt-2 -mb-[2px] w-full sm:w-auto">
              <a
                aria-controls="followers"
                className="relative py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary text-xl w-full sm:w-auto block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
                href="javascript:void(0)"
              >
                {" "}
                Free Times{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
