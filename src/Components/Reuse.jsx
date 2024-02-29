import { CiCircleCheck } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";

const Reuse = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[990px] h-[300px] shadow-full border-r-orange-500 mt-[13%] ml-[10%] relative"
        >
          {index === 0 || index === 1 ? (
            <span className="  absolute left-1 top-[-11%] py-2 px-9 bg-[#FF7724] text-white rounded-r-full">
              {item.lable}
            </span>
          ) : null}

          <span
            className={`text-[#626E79] ${
              index === 0
                ? ""
                : "rounded-full w-[44px] pl-4 pt-2 h-[44px] bg-[#ffffff] shadow-sm"
            } absolute left-[-2%] top-5`}
          >
            {index + 1}
          </span>

          <div className="relative flex items-center justify-between">
            <img
              className="w-[141px] h-[103px] mt-20"
              src={item.img}
              alt="im"
            />
            <div className="content">
              <p className="absolute mt-[135px] pt-1 pl-2  left-7 text-[#626E79]">
                {item.builder}
              </p>
              <p className="break-words leading-snug overflow-hidden pt-7 absolute left-[20%] top-[-10%] tracking-wide text-balance">
                <span className="text-[#4B5665] font-semibold">
                  {item.title}
                </span>
                <span className="   text-center tracking-tighter">
                  {item.description}
                </span>
              </p>
              <div className="text-black mt-[-2%] font-semibold absolute left-[20%] ">
                Main highlights
                <div
                  className={`${
                    index === 3
                      ? "w-[600px] rounded-lg  pl-3 pt-1 h-[20vh] bg-[#FFF4ED] flex flex-col gap-2 mt-2"
                      : ""
                  }`}
                >
                  {index === 3 ? (
                    <>
                      <div className="flex gap-2">
                        <span className="text-[#1B88F4] p-1 bg-[#ffffff]">
                          9.9
                        </span>
                        <span className="text-[#626E79]">
                          building responsive
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#1B88F4] p-1 bg-[#ffffff]">
                          9.9
                        </span>
                        <span className="text-[#626E79]">
                          building responsive
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[#1B88F4] p-1 bg-[#ffffff]">
                          9.9
                        </span>
                        <span className="text-[#626E79]">
                          building responsive
                        </span>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>

              <div
                className={` ${
                  index != 3
                    ? "absolute left-[20%] top-32 text-[#4B5665] text-balance overflow-hidden "
                    : " absolute left-[20%]  bottom-[-54%] pl-3 flex flex-col"
                }`}
              >
                {index == 3 ? (
                  <div className=" absolute top-10 ">
                    <div className="flex gap-2">
                      <span className="text-[#1B88F4] p-1 bg-[#ffffff]">
                        <CiCircleCheck size={23} className=" " />
                      </span>
                      <span className="text-[#626E79]">Documentation</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#1B88F4] p-1 bg-[#ffffff]">
                        <CiCircleCheck size={23} className=" " />
                      </span>
                      <span className="text-[#626E79]">Cool</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#1B88F4] p-1 bg-[#ffffff]">
                        <CiCircleCheck size={23} className=" " />
                      </span>
                      <span className="text-[#626E79]">Cool</span>
                    </div>
                  </div>
                ) : null}

                {item.highlights}
              </div>

              <div className="flex flex-col p-3 absolute top-[2%]  ml-[-12%] rounded-md gap-1 bg-slate-100 ">
                <span className="text-[#074786] pl-7 ">{item.rating}</span>
                <span className="text-[#074786] "> Exceptional</span>
                <span> ⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
          <p className=" flex text-blue-300 ml-[20%]">
            {item.show} <CiCircleChevDown size={26} className=" pl-1" />
          </p>
          <button className="flex float-end mr-[-5%] bg-blue-500 px-4 py-2 w-[20%] rounded-lg h-[13%]">
            <span className="text-white pl-[65px] mt-[-4px]">view</span>
          </button>
        </div>
      ))}
    </>
  );
};

export default Reuse;
