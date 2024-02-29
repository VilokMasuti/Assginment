const Resuse2 = ({ datas }) => {
  return (
    <>
      <main className="w-full h-screen mt-44 relative flex flex-row">
        <h1 className="font-semibold tracking-wide text-[#2C384A] ml-20 text-[32px] leading-[44px]">
          Related deals you might like for
        </h1>
        {datas.map((item, index) => (
          <div key={index} className="  ml-[-250px] flex flex-1 mt-[10%] ">
            <div className="flex flex-col w-[70%] h-[50vh]">
              <img src={item.img} alt="" className="w-[141px] h-[103px] mt-3" />
              <div className="mt-3">
                <span className="text-[#074786] p-1 shadow-md rounded bg-[#fffff]">
                  {item.off}
                </span>
                <span className="text-[#074786] p-1 ml-3 shadow-md rounded bg-[#ffffff]">
                  {item.time}
                </span>
                <p className="text-[#626E79] font-semibold mt-3">{item.web}</p>
                <p className="text-[#626E79] mt-3">{item.C}</p>
                <div className="flex items-center mt-3">
                  <p className="text-[#074786] font-semibold">{item.bill}</p>
                  <p className="text-[#9FA9B3] text-sm ml-1">{item.bills}</p>
                  <p className="text-[#EF4C5D] text-sm ml-1">{item.billss}</p>
                </div>
                <button
                  className={"w-[250px] mt-3 h-[48px] bg-[#1B88F4] rounded-lg"}
                >
                  {`${index === 1 || index === 2 ? item.button || "View" : ""}`}
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className=" ">
          <h1 className=" absolute left-[20%] top-[80%] text-2xl text-[#5C6874]">
            Sign up and get exclusive <br /> special deals
          </h1>
          <button className=" absolute top-[80%] left-[76%] w-[76px] h-[36px] rounded-r-lg bg-[#1B88F4]  text-white">
            Sign Up
          </button>
        </div>
      </main>
    </>
  );
};

export default Resuse2;
