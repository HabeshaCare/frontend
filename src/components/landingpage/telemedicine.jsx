import { Button } from "@/components/ui/button";
import Telemed from "@/public/img/doctors.png";
import { useNavigate } from "react-router";

const Telemedicine = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="flex ml-8 h-screen  items-center">
        <div className="flex flex-col w-1/2 md:mt-12">
          <div className="text-[#1F555D] text-3xl font-bold font-serif mt-12 mb-4 md:text-4xl">
            Enhancing Care Through Expertise and Collaboration.
          </div>

          <div className=" font-light text-xl md:text-3xl">
            Efficiently manage your patients and provide exceptional care.
            Streamline patient management, deliver exceptional care. Make
            informed decisions with comprehensive tools.
          </div>
          <div className="mb-4">
            <Button
              className="font-medium text-white w-56 h-16 mt-8 bg-[#1F555D] text-xl"
              onClick={handleNavigation}
            >
              Register As a Doctor
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex items-center">
          <img src={Telemed} alt="Telemedicine" />
        </div>
      </div>
    </>
  );
};

export default Telemedicine;
