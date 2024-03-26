const Avatar = () => {
  return (
    <div className="flex relative bg-red-500">
      <div className="w-12 h-12 bg-black rounded-full absolute top-0 left-28" />
      <img
        className="w-12 h-12 rounded-full absolute top-0 left-20"
        src="../src/assets/dp.svg"
        alt=""
      />
      <img
        className="w-12 h-12 rounded-full absolute top-0 left-10"
        src="../src/assets/Bitmap (2).svg"
        alt=""
      />
      <img
        className="w-12 h-12 rounded-full absolute top-0 left-0"
        src="../src/assets/Bitmap (1).svg"
        alt=""
      />
    </div>
  );
};

export default Avatar;
