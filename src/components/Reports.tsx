 import { BsArrowUpRightCircleFill, BsBookmarkDashFill, BsFillArrowDownLeftCircleFill } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi"
import { IoCartOutline } from "react-icons/io5"
import { PiChartLineUpBold } from "react-icons/pi"

const Reports = () => {
  return (
    <div className="w-full flex gap-6 mx-8">
    <div className="w-1/4 rounded-2xl border-[1px] flex items-center p-4 gap-4">
      <div className="w-1/2">
        <h1>Product Sold</h1>
        <h1 className="text-[32px] font-bold">25.1k</h1>
        <h1 className="text-[#6AD2A0] flex items-center"><BsArrowUpRightCircleFill /> +15%</h1>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <h1><IoCartOutline /></h1>
        <h1 className="text-[#5041BC] mt-4">View Report</h1>
      </div>
    </div>
    <div className="w-1/4 rounded-2xl border-[1px] flex items-center p-4 gap-4">
      <div className="w-1/2">
        <h1>Total Profit</h1>
        <h1 className="text-[32px] font-bold">$2,435k</h1>
        <h1 className="text-[#EA8F95] flex items-center"><BsFillArrowDownLeftCircleFill /> -3.5% </h1>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <h1><PiChartLineUpBold /></h1>
        <h1 className="text-[#5041BC] mt-4">View Report</h1>
      </div>
    </div>
    <div className="w-1/4 rounded-2xl border-[1px] flex items-center p-4 gap-4">
      <div className="w-1/2">
        <h1>Total No. of Claim</h1>
        <h1 className="text-[32px] font-bold">3.5M</h1>
        <h1 className="text-[#6AD2A0] flex items-center"><BsArrowUpRightCircleFill /> +15% </h1>
      </div>
      <div className="w-1/2 flex flex-col items-center ">
        <h1><BsBookmarkDashFill /></h1>
        <h1 className="text-[#5041BC] mt-4">View More</h1>
      </div>
    </div>
    <div className="w-1/4 rounded-2xl border-[1px] flex items-center p-4">
      <div className="w-1/2">
        <h1>New Customer</h1>
        <h1 className="text-[32px] font-bold">43.5K</h1>
        <h1 className="text-[#6AD2A0] flex items-center"><BsArrowUpRightCircleFill /> +10%</h1>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <h1><HiOutlineUsers /></h1>
        <h1 className="text-[#5041BC] mt-4">View More</h1>
      </div>
    </div>
  </div>
  )
}

export default Reports
