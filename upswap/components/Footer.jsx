import Link from "next/link";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="w-full px-10 py-8">
      <div className="w-full max-w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0">
          <div className="w-full flex flex-row justify-center gap-5 text-[14px] leading-[25px] ">
            <Link
              href="#"
              className="hover:text-orange transition-all transform duration-300 ease-linear"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-orange transition-all transform duration-300 ease-linear"
            >
              Terms and Conditions
            </Link>
            <span>&copy; {currentYear} UpSwap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
