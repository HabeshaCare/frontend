import { Button } from "@/components/ui/button";
import Telemed from "@/public/img/pharmacist.png";

const Pharmacy = () => {
  return (
    <>
      <div className="flex ml-8 h-screen  items-center">
        <div className="flex flex-col w-3/4 md:mt-12">
          <div className="text-[#1F555D] text-3xl font-bold font-serif mt-12 mb-4 md:text-4xl">
            Empowering Your Pharmacy Operations.
          </div>

          <div className=" font-light text-xl md:text-3xl">
            Optimize your pharmacy's workflow with ease. Efficiently manage
            prescriptions, track inventory, and connect with healthcare
            professionals to ensure seamless patient care. Enhance your services
            and streamline operations, all in one place.
          </div>
          <div className="mb-4">
            <Button className="font-medium text-white w-64 h-16 mt-8 bg-[#1F555D] text-xl">
              Register Your Pharmacy
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex items-end justify-end">
          <img src={Telemed} alt="Telemedicine" />
        </div>
      </div>
    </>
  );
};

export default Pharmacy;
