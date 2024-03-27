const Avatar = () => {
  return (
    <div>
      <div className="w-10 h-10 bg-gradient-to-r from-[#3D29D0] to-[#C25FFF] text-[#ffffff] rounded-full absolute top-14 left-64 text-center">
        +4
      </div>
      <img
        className="w-12 h-12 rounded-full absolute top-12 left-56 border-2 border-[#9E8CC741]"
        src="../src/assets/dp.svg"
        alt=""
      />
      <img
        className="w-12 h-12 rounded-full absolute top-12 left-48 border-2 border-[#9E8CC741]"
        src="../src/assets/Bitmap (2).svg"
        alt=""
      />
      <img
        className="w-12 h-12 rounded-full absolute top-12 left-40 border-2 border-[#9E8CC741]"
        src="../src/assets/Bitmap (1).svg"
        alt=""
      />
        <img
        className="absolute top-40 left-48 border-2 border-[#9E8CC741]"
        src="../src/assets/Rectangle 266.svg"
        alt=""
      />
    </div>
  );
};

export default Avatar;
