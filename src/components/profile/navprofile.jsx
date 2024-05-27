import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch} from "react-redux";
import { logout as logoutAction } from "@/redux/authSlice";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {

  const { toast } = useToast();
  const dispatch = useDispatch();
 
  const handleLogout = () => {
    dispatch(logoutAction());
    toast({
      title: "Success!",
      description: "You have logged out successfully.",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex justify-center items-center gap-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32.8609" cy="31.9038" r="31.9038" fill="#095FAF" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.1342 25.9956C28.1342 24.742 28.6322 23.5398 29.5186 22.6534C30.4049 21.767 31.6071 21.2691 32.8607 21.2691C34.1142 21.2691 35.3164 21.767 36.2028 22.6534C37.0892 23.5398 37.5872 24.742 37.5872 25.9956C37.5872 27.2491 37.0892 28.4513 36.2028 29.3377C35.3164 30.2241 34.1142 30.7221 32.8607 30.7221C31.6071 30.7221 30.4049 30.2241 29.5186 29.3377C28.6322 28.4513 28.1342 27.2491 28.1342 25.9956ZM28.1342 33.0853C26.5673 33.0853 25.0645 33.7078 23.9565 34.8158C22.8485 35.9237 22.2261 37.4265 22.2261 38.9934C22.2261 39.9336 22.5996 40.8352 23.2643 41.5C23.9291 42.1648 24.8308 42.5383 25.7709 42.5383H39.9504C40.8906 42.5383 41.7922 42.1648 42.457 41.5C43.1218 40.8352 43.4953 39.9336 43.4953 38.9934C43.4953 37.4265 42.8728 35.9237 41.7649 34.8158C40.6569 33.7078 39.1541 33.0853 37.5872 33.0853H28.1342Z"
              fill="white"
            />
          </svg>
          <div className="">
            {/* {props.firstName} {props.lastName} */}
            Yeabsira Nigusse
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel></DropdownMenuLabel>
        <a href="#" className="cursor-pointer">
          <DropdownMenuItem className="flex  items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32.8609" cy="31.9038" r="31.9038" fill="#095FAF" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1342 25.9956C28.1342 24.742 28.6322 23.5398 29.5186 22.6534C30.4049 21.767 31.6071 21.2691 32.8607 21.2691C34.1142 21.2691 35.3164 21.767 36.2028 22.6534C37.0892 23.5398 37.5872 24.742 37.5872 25.9956C37.5872 27.2491 37.0892 28.4513 36.2028 29.3377C35.3164 30.2241 34.1142 30.7221 32.8607 30.7221C31.6071 30.7221 30.4049 30.2241 29.5186 29.3377C28.6322 28.4513 28.1342 27.2491 28.1342 25.9956ZM28.1342 33.0853C26.5673 33.0853 25.0645 33.7078 23.9565 34.8158C22.8485 35.9237 22.2261 37.4265 22.2261 38.9934C22.2261 39.9336 22.5996 40.8352 23.2643 41.5C23.9291 42.1648 24.8308 42.5383 25.7709 42.5383H39.9504C40.8906 42.5383 41.7922 42.1648 42.457 41.5C43.1218 40.8352 43.4953 39.9336 43.4953 38.9934C43.4953 37.4265 42.8728 35.9237 41.7649 34.8158C40.6569 33.7078 39.1541 33.0853 37.5872 33.0853H28.1342Z"
                fill="white"
              />
            </svg>
            <div href="/patient/profile" className="ml-2">
              Profile
            </div>
          </DropdownMenuItem>
        </a>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path d="M1.3 3.75h5.88V2.5H1.3A1.25 1.25 0 0 0 .05 3.75v8.5A1.25 1.25 0 0 0 1.3 13.5h5.88v-1.25H1.3z" />
            <path d="m15.4 7-4-2.74-.71 1 3.08 2.1H4.71v1.26h9.07l-3.08 2.11.71 1L15.4 9a1.24 1.24 0 0 0 0-2z" />
          </svg>
          <div className="ml-2 my-2">Log out</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
