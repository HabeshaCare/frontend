import { CircularProgress } from "@/components/ui/progress";

const CompleteProfile = ({ progress }) => {
  return (
    <>
      <div className="flex items-center bg-[#F0F6FE] mx-6 my-4 h-20 rounded-3xl">
        <div className="mx-4">
          <CircularProgress value={progress} />
        </div>
        <div className="text-md font-semibold">
          {progress === 100 ? "Profile Completed!!" : " Complete Your Profile"}
        </div>
      </div>
    </>
  );
};

const CompleteProfile2 = ({ progress }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-8 bg-[#F0F6FE] h-72 w-64 rounded-3xl">
        <div className="text-md font-semibold pt-4">
          {progress === 100 ? "Profile Completed!!" : " Complete Your Profile"}
        </div>
        <div className="pt-4">
          <CircularProgress value={progress} />
        </div>

        <div className="mt-6 text-sm font-semibold">
          <div className="mt-2">Profile Picture</div>
          <div className="mt-2">General Info</div>
          <div className="mt-2">Specific Info</div>
        </div>
      </div>
    </>
  );
};

export { CompleteProfile, CompleteProfile2 };
