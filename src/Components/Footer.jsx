import { CiCircleChevDown } from "react-icons/ci";
const Footer = () => {
  return (
    <div className=" w-full h-[250px] bg-[#212731] flex items-center justify-center gap-[20%]  ">
      <div className=" flex flex-col pb-5 gap-3 ">
        <h1 className=" text-xl text-[#FFFFFF] pt-2">Categories </h1>

        <span className=" text-[#B6BDC4]">Web Builder</span>
        <span className=" text-[#B6BDC4]">Hosting</span>
        <span className=" text-[#B6BDC4]">Data Center</span>
        <span className=" text-[#B6BDC4]">Robotic-Automation</span>
      </div>
      <div className=" flex flex-col pt-2 gap-3 ">
        <h1 className=" text-xl  text-[#FFFFFF]">Contact </h1>
        <span className=" text-[#B6BDC4]">Contact</span>
        <span className=" text-[#B6BDC4]">Privacy Policy</span>
        <span className=" text-[#B6BDC4]">Terms Of Service</span>
        <span className=" text-[#B6BDC4]">Categories</span>
        <span className=" text-[#B6BDC4]">About</span>
      </div>
      <h1 className=" flex  text-[#B6BDC4]">
        United States <CiCircleChevDown size={26} className="  flex" />
      </h1>
    </div>
  );
};

export default Footer;
