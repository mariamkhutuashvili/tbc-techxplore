import Swiper from "../../components/Swiper";
import Sidebar from "../../components/Sidebar";

export default function Discover() {
  return (
    <>
      <Sidebar />
      <div className="relative flex flex-col w-full min-w-0 sm:max-w-[500px] md:max-w-[1000px] items-center mx-auto break-words bg-light/30 draggable">
        <Swiper />{" "}
      </div>
    </>
  );
}
