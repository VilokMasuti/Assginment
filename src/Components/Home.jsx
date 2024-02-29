import Navbar from "./Navbar";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import Reuse from "./Reuse";
import Resuse2 from "./Resuse2";
import Footer from "./Footer";
const Home = () => {
  // Resuse data detailes ....
  const data = [
    {
      img: "/assets/w.png",
      builder: "Builder 1",
      lable: "Best Choice",
      title: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites  and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      show: " show more ",
    },

    {
      img: "/assets/w.png",
      builder: "Builder ",
      lable: "Best Value",
      title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White))",
      highlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.8",
      show: " show more ",
    },
    {
      img: "/assets/w.png",
      builder: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites  and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      show: " show more ",
    },
    {
      img: "/assets/w.png",
      builder: "Builder 1",
      title: "CDK Resposive Builder:",
      description:
        "An extensive library of widgets and apps, and detaile step-by-step guide templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      highlights: " Why we love it",

      rating: "9.8",
      show: " show more ",
    },

    // Add more data objects as needed
  ];
  const datas = [
    {
      img: "/assets/w.png",
      off: "20% off",
      time: "  Limited time",
      web: "   Webbuilder 1",
      C: "  Computer Modern clasic with  wix support",

      bill: " $39.96 ",
      bills: "  $49.96 ",
      billss: "  (20% Off) ",
    },
    {
      img: "/assets/w.png",
      off: "20% off",
      time: "  Limited time",
      web: "   Webbuilder 1",
      C: "  Computer Modern clasic with  wix support",

      bill: " $39.96 ",
      bills: "  $49.96 ",
      billss: "  (20% Off) ",
    },
    {
      img: "/assets/w.png",
      off: "20% off",
      time: "  Limited time",
      web: "   Webbuilder 1",
      C: "  Computer Modern clasic with  wix support",

      bill: " $39.96 ",
      bills: "  $49.96 ",
      billss: "  (20% Off) ",
      button: "view",
    },
  ];

  return (
    <main className=" w-full h-full  relative bg-[#FBFCFD]">
      <Navbar />
      <h1 className=" flex items-center justify-center mr-[30%] tracking-wider text-[50px] pt-4 text-xl mt-4 pb-2 pl-1  text-[#2C384A]">
        Best Website builders in the US
      </h1>
      <p className=" border-b-2  border-b-[#E1E4E6] w-[1024px] ml-[10%]  pt-2"></p>
      <div className=" absolute left-[10%] flex justify-between gap-10 pt-3 ">
        <span className=" flex ml-2 text-[#4B5665]">
          <CiCircleCheck size={23} color="#4B5665" className=" pt-1" /> Last
          Updated
        </span>
        <span className=" ml-1 text-[#4B5665]">- February 22, 2020</span>
        <span className=" ml-4 gap-  text-[#4B5665] flex ">
          <IoIosInformationCircleOutline size={23} className=" pt-1" />{" "}
          Advertising Disclosure
        </span>
      </div>
      <span className="  flex  ml-[70%] text-[#4B5665]    pt-1 ">
        <p className=" pb-5   pt-1">Top Relevant </p>
        <FaAngleDown
          size={30}
          color="#4B5665"
          className="  pt-2   absolute left-[76%] "
        />
      </span>
      <p className=" border-b-2  border-b-[#E1E4E6] w-[1024px] ml-[10%]  lg:pt-1 mt-5"></p>
      <div className=" flex justify-between gap-[120px] absolute left-[10%] text-[#4B5665] ml-2 pt-5 ">
        <span className="">Tools </span>
        <span className="">AWS Builder</span>
        <span className="">Start Build</span>
        <span className="">Build Supplies</span>
        <span className="">Tooling</span>
        <span className="">Blue Hosting</span>
      </div>
      <div className="flex justify-between gap-[29px] absolute left-[10%] text-[#727D87]  pt-20  ">
        <span className=" flex  ">
          Home <FaAngleRight className=" pl-5" color="#727D87" size={28} />
        </span>
        <span className=" flex">
          Hosting for all
          <FaAngleRight className="  pl-5" color="#727D87" size={28} />{" "}
        </span>
        <span className=" flex">
          Hosting
          <FaAngleRight className=" pl-4" color="#727D87" size={25} />{" "}
        </span>
        <span className=" flex">
          Hosting6 <FaAngleRight className=" pl-4" color="#727D87" size={25} />
        </span>
        <span className=" flex">
          Hosting5 <FaAngleRight className=" pl-4" color="#727D87" size={25} />
        </span>
      </div>

      <Reuse data={data} />
      <Resuse2 datas={datas} />
      <Footer />
    </main>
  );
};

export default Home;
