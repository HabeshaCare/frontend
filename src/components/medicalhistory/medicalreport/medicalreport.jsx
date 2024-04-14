const { Input } = require("@/components/ui/input");

const Content = () => {
  return (
    <>
      <div className="shadow-lg p-2 mt-4 rounded-3xl">
        <div className="font-bold mb-4">Monday, 08 March 2024</div>
        <div className="flex justify-center items-center gap-4 w-full">
          <div className="w-10 h-10 rounded-lg bg-gray-300"></div>
          <div className="flex flex-col">
            <p className="text-left font-bold">Dr. Tsedi</p>
            <p className="text-left text-[#B5B5C3]">Infectious disease</p>
          </div>
        </div>
        <div className="mt-8 w-full">
          <div className="flex mb-4 pl-6">
            <p className="w-1/2 text-[#1F555D] font-bold">
              Prescribed Medicine
            </p>
            <p className="w-1/2 text-[#5B5B3C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="flex mb-4 pl-6">
            <p className="w-1/2 text-[#1F555D] font-bold">
              Additional Information
            </p>
            <p className="w-1/2 text-[#5B5B3C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="flex mb-4 pl-6">
            <p className="w-1/2 text-[#1F555D] font-bold">
              Method of treatment
            </p>
            <p className="w-1/2 text-[#5B5B3C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="flex mb-4 pl-6">
            <p className="w-1/2 text-[#1F555D] font-bold">Lab Result</p>
            <p className="w-1/2 text-[#5B5B3C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="flex justify-between px-12">
          <div>
            <p className="text-[#1F555D] font-bold">Height</p>
            <p className="text-[#5B5B3C]">180cm</p>
          </div>
          <div>
            <p className="text-[#1F555D] font-bold">Weight</p>
            <p className="text-[#5B5B3C]">68Kg</p>
          </div>
          <div>
            <p className="text-[#1F555D] font-bold">Blood Pressure</p>
            <p className="text-[#5B5B3C]">120/80</p>
          </div>
          <div>
            <p className="text-[#1F555D] font-bold">Heart Beat</p>
            <p className="text-[#5B5B3C]">70</p>
          </div>
        </div>
      </div>
    </>
  );
};

const MedicalReport = () => {
  return (
    <>
      <div className="mx-12 sm:mx-32 lg:mx-72 mt-8">
        <Input placeholder="Search Your Report" className="h-12" />
      </div>
      <div className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </>
  );
};

export default MedicalReport;
