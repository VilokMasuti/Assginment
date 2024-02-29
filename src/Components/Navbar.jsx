import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="w-full relative lg:h-[60px] h-[100px] justify-between bg-[#212731]">
      {/* Search bar */}
      <div className={" lg:absolute lg:left-[30%] ml-28 "}>
        <input
          type="text"
          className="lg:w-[240px] w-[220px] lg:rounded-md lg:pl-8 lg:pt-1 lg:mt-2 lg:ml-23 ml-[-30%]"
        />
        <CiSearch
          size={21}
          className="lg:absolute lg:top-2 lg:left-4 lg:ml-[-35%] lg:text-gray-500 text-[#9d9d9d] absolute top-[2%] left-8"
        />
      </div>

      {/* Span elements */}
      <div
        className={
          "lg:absolute lg:left-[50%] top-[-140%] flex   gap-2  mt-[4%]  pt-2 text-[#D1D6DA] lg:gap-3 text-sm"
        }
      >
        <span className="mt-6 ml-2">Categories </span>
        <span className=" lg:mt-6 ml-[-1%]  ">Website Builders</span>
        <span className="lg:ml-10 mt-6 ml-[-4%]">Today's deals</span>
      </div>
    </nav>
  );
};

export default Navbar;
