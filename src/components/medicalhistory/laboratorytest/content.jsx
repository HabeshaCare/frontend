const Content = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-around items-center w-full">
          <div className="text-base text-[#1F555D] font-bold font-serif pl-2">
            Amin General Lab
          </div>
          <div className="text-base font-semibold">Completed</div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="text-base text-[#1F555D] font-bold font-serif ">
            Booking Number
          </div>
          <div className="text-base font-semibold">34566999</div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="text-base text-[#1F555D] font-bold font-serif">
            Completion Date
          </div>
          <div className="text-base font-semibold">23-02-24</div>
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="text-base text-[#1F555D] font-bold font-serif pr-12">
            Order Date
          </div>
          <div className="text-base font-semibold">20-09-24</div>
        </div>
      </div>
    </>
  );
};
export default Content;
