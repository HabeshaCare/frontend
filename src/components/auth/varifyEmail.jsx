import { Button } from "../ui/button";

const VarifyEmail = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 px-10">
      <div className="text-xl font-bold">Email Varification</div>
      <p className="text-lg font-sans">
        We have sent you varification link to your registered email. Varify your
        email to complete your registration Process!
      </p>

      <div className="text-lg">
        <Button className="text-lg w-32 text-white bg-[#1F555D]">Varify</Button>
      </div>
    </div>
  );
};

export default VarifyEmail;
