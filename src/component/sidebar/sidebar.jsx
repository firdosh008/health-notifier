import { MdDirectionsBike, 
  MdSpaceDashboard,
  MdPeople,
} from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import { IoMdSettings,
  IoMdNotifications,
  IoIosHelpCircle
} from "react-icons/io";





const Sidebar = () => {
  return (
    <div className="w-1/6 flex flex-col justify-between min-h-screen px-2 bg-neutral-900 text-white gap-6">
      {/* upper part */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center">
          {/* profile image  */}
          <div>Hi Sourabh</div>
        </div>
        <div className="flex flex-col gap-2 px-3">
          <div className="flex flex-row justify-between items-center">
            <p>Weight</p>
            <div className="flex flex-row gap-1 items-center">
              <p>73</p>
              <p>Kg</p>44w
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p>Height</p>
            <div className="flex flex-row gap-1 items-center">
              <p>190</p>
              <p>cm</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p>Age</p>
            <div className="flex flex-row gap-1 items-center">
              <p>21</p>
              <p>yrs</p>
            </div>
          </div>
        </div>

        <hr className="w-full"/>

        <div className="flex flex-col">
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <MdDirectionsBike/>
            <p>Trainings</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <MdSpaceDashboard/>
            <p>Dashboard</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <FaHeart/>
            <p>Health</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <MdPeople />
            <p>Team</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <IoChatbubbleSharp/>
            <p>Chat</p>
          </div>
        </div>

      </div>


      {/* lower part */}
      <div className="flex flex-col">
        <hr />
        <div className="flex flex-col justify-between">
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <IoMdSettings/>
            <p>Settings</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <IoMdNotifications />
            <p>Notify</p>
          </div>
          <div className="flex flex-row gap-4 items-center p-2 hover:text-green-500 hover:bg-neutral-700 rounded-lg">
            <IoIosHelpCircle />
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;