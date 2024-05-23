import { Button } from "@/components/ui/button";
import record from "@/public/img/record.png";

const Records = () => {
  return (
    <>
      <div className="flex bg-[#d0eaec]">
        <div className="w-1/2 mt-12">
          <img src={record} alt="Health record" />
        </div>

        <div className="flex flex-col justify-center ml-8 w-1/2 mt-24">
          <div className="text-[#1F555D] text-3xl font-bold font-serif items-center md:text-4xl">
            Transforming Health Center Management.
          </div>

          <div className="my-8 font-light text-xl md:text-3xl">
            Elevate the quality of care at your health center. Coordinate
            patient care, manage appointments, and collaborate with healthcare
            providers. Improve efficiency and patient outcomes with
            comprehensive management tools, all in one platform.
          </div>

          <div className="mb-8">
            <Button className="font-medium text-white w-72 h-16 mt-8 bg-[#1F555D] text-xl">
              Register Your Health Center
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Records;
