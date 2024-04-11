const Content = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-around w-full mb-4 ">
          <div className="text-center text-lg font-bold text-[#1F555D] mr-4">
            Method of Treatment
          </div>
          <div>
            <p className="text-center text-lg font-bold text-[#1F555D]">
              Hospital
            </p>
            <p className="text-center text-lg font-normal">
              Amin General Hospital
            </p>
          </div>
        </div>

        <div className="flex w-full">
          <div className="text-center text-lg font-bold text-[#1F555D] w-1/2">
            Additional Information
          </div>
          <div className="w-1/3 flex-grow text-center text-md font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </>
  );
};
export default Content