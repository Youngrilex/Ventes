import Avatar from "./Avatar";

const TeamTarget = () => {
  return (
    <div>
      <img
        className="absolute top-0 left-0 opacity-20"
        src="/image 1.svg"
        alt=""
      />
      <div className="">
        <div className="text-[#ffffff] p-8">
          <h1 className="text-[16px]">Sales team target</h1>
          <h1 className="text-[34px] font-bold">82%</h1>
          <h1 className="text-[16px]">Achieved</h1>
          <h1 className="text-[16px] mt-8">Cleared queue</h1>
          <h1 className="text-[34px] font-bold">1.4K</h1>
          <h1 className="text-[16px]">No. of Bills</h1>
        </div>
        <div className="mx-24">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default TeamTarget;
