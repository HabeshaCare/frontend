import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addSchedule } from "@/redux/scheduleSlice";

const PatientContent = ({
  doctorName,
  doctorContact,
  doctorImageUrl,
  date,
  time,
  status,
  meetingUrl,
  schedule,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleJoin = () => {
    dispatch(addSchedule(schedule));
    navigate(`/videochat?url=${meetingUrl}`);
  };

  return (
    <>
      <div className="flex justify-between mt-8 mx-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img
              src={`http://localhost:5072/${doctorImageUrl}`}
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-left font-bold">{doctorName}</p>
            <p className="text-left text-[#B5B5C3]">Doctor</p>
          </div>
        </div>
        <div>
          <p className="text-[#5B5B3C]">{doctorContact}</p>
        </div>
        <div className="text-[#5B5B3C]">{date}</div>
        <div className="text-[#5B5B3C]">{time}</div>
        <div className="flex flex-col gap-3">
          <div
            className={`flex justify-center items-center rounded-2xl ${
              status === "Waiting"
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {status === "Waiting" ? (
              <Button variant="outline" disabled>
                {status}
              </Button>
            ) : (
              <Button variant="outline" onClick={handleJoin}>
                Join
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientContent;
