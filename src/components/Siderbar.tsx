import { FaHeartbeat } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BsBookmarkDashFill, BsFileTextFill } from "react-icons/bs";

const Siderbar = () => {
  return (
    <aside className="bg-[#5041BC] rounded-3xl h-[170vh] sm:h-[200vh] md:h-[200vh] w-[240px] absolute top-0 left-0">
        <img className="w-32 h-12 m-8" src="/VENTES.png" alt="" />
        <div className="w-36 h-[1px] m-8 bg-[#8A7DD0]" />
        <div className="mr-16 mx-4 my-2 mt-8 flex flex-col text-white text-[15px] font-semibold">
          <div className="hover:bg-white hover:text-[#5041BC] px-4 py-2 hover:rounded-xl flex items-center gap-6">
            <div>
              <MdDashboard />
            </div>
            <div>Dashboard</div>
          </div>
          <div className="hover:bg-white hover:text-[#5041BC] px-4 py-2 hover:rounded-xl flex items-center gap-6">
            <div>
            <BsFileTextFill />
            </div>
            <div>Claims</div>
          </div>
          <div className="hover:bg-white hover:text-[#5041BC] px-4 py-2 hover:rounded-xl flex items-center gap-6">
            <div>
            <BsBookmarkDashFill />
            </div>
            <div>Biller-Queue</div>
          </div>
          <div className="hover:bg-white hover:text-[#5041BC] px-4 py-2 hover:rounded-xl flex items-center gap-6">
            <div>
            <FaStar />
            </div>
            <div>Subscription</div>
          </div>
          <div className="hover:bg-white hover:text-[#5041BC] px-4 py-2 hover:rounded-xl flex items-center gap-6">
            <div>
            <FaHeartbeat /> 
            </div>
            <div>Health</div>
          </div>
        </div>
        <div className="rounded-2xl bg-[#ffffff] mx-6 mr-16 mt-12 md:mt-48/ sm:mt-12 max-w-[160px] flex flex-col items-center">
          <img className="w-36 h-28 m-2" src="/icon.png" alt="" />
          <div className="font-semibold text-[14px]">Want to upgrade</div>
          <div className="rounded-full bg-[#FF8057] font-semibold text-[#ffffff] m-2 text-[14px] px-4 text-center">Upgrade now</div>
        </div>
      </aside>
  );
};

export default Siderbar;
