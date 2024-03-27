import { BsBellFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import Search from "./Search";

const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };
  return (
    <div className="flex items-center gap-32 justify-around mx-12">
          <div className="text-[32px] font-semibold">Overview</div>
          <div className="flex items-center gap-6">
            <div className="container mx-auto p-4">
              <Search onSearch={handleSearch} />
            </div>
            <BsBellFill className="w-[32px] h-[28px] text-[#5041BC]" />
            <img
              className="w-12 h-12 rounded-full"
              src="../src/assets/dp.svg"
              alt=""
            />
            <div className="min-w-[130px]">Danielle Campbell</div>
            <IoMdArrowDropdown className="text-[#5041BC] w-8 h-8" />
          </div>
        </div>
  )
}

export default Header