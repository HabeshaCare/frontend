const Content = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-around items-center w-full">
          <div className="text-base text-[#1F555D] font-bold font-serif ">
            Starting Date
          </div>
          <div className="text-base pr-14 font-semibold">20-02-24</div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="text-base text-[#1F555D] font-bold font-serif">
            Ending Date
          </div>
          <div className="text-base pr-14 font-semibold">23-02-24</div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className=" text-center text-base text-[#1F555D] font-bold font-serif pr-16 w-1/2">
            Description
          </div>
          <div className="text-base font-semibold w-1/3">
            Take 1 tablet by mouth twice daily by 10 hours gap.
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
