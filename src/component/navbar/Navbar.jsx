import React from "react";
import logo from "../../assets/images/logo.jpg";

import { IoIosNotifications } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { MdDirectionsBike, MdSpaceDashboard, MdPeople } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleSharp } from "react-icons/io5";
import {
  IoMdSettings,
  IoMdNotifications,
  IoIosHelpCircle,
} from "react-icons/io";

function navbar() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="w-full flex flex-row justify-between items-center px-6 py-4 gap-10">
        <p className="text-green-500 font-semibold text-4xl">zerofit</p>

        <div className="flex flex-row justify-between items-center gap-6 grow shrink bg-neutral-100 shadow-lg shadow-neutral-300 rounded-xl px-6 py-4">
          <div className="flex flex-col justify-start">
            <p className="text-xs">HEALTH BAR</p>
            <div className="p-1 px-[100px] bg-green-500 rounded-full"></div>
          </div>
          <p className="lg:text-lg md:text-md sm:text-sm font-semibold text-neutral-800">
            24 November 2023
          </p>
          <div className="flex flex-row items-center rounded-full p-1.5 bg-green-500">
            <IoIosNotifications />
          </div>
        </div>

        <div className="flex flex-row justify-between items-center gap-2">
          <div className="h-10 w-10 bg-green-500 rounded-full"></div>

          <div className="flex flex-col justify-start">
            <p className="text-xs font-semibold text-neutral-800">
              Sourabh Singh Negi
            </p>
            <p className="text-xs font-base text-neutral-600">
              negiSourabh@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 grow">
        <div className="col-span-1 flex flex-col gap-6 p-2">
          <div className="flex flex-col justify-between items-start gap-2 px-2">
            <p className="text-xl font-semibold text-neutral-800">
              Your Reports
            </p>

            <div className="flex flex-row justify-between items-center gap-2 w-full">
              <div className="h-8 flex-grow flex flex-row justify-between items-center rounded-lg shadow-md shadow-neutral-300">
                <input type="text" />
                <MdOutlineSearch className="h-6 w-6" />
              </div>

              <div className="bg-green-500 h-8 w-8 items-center flex p-2 rounded-full">
                <FaFilter />
              </div>
            </div>
          </div>

          <hr className="w-full border-neutral-400" />

          <div className="flex flex-row justify-between rounded-lg bg-green-200 p-2 gap-2">
            <div className="w-16 rounded-lg"></div>

            <div className="flex flex-col w-full justify-between gap-2">
              <p className="font-semibold">Report Name</p>
              <p>Date</p>
              <div className="w-full p-1 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between rounded-lg bg-green-200 p-2 gap-2">
            <div className="w-16 rounded-lg"></div>

            <div className="flex flex-col w-full justify-between gap-2">
              <p className="font-semibold">Report Name</p>
              <p>Date</p>
              <div className="w-full p-1 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-row justify-between rounded-lg bg-green-200 p-2 gap-2">
            <div className="w-16 rounded-lg"></div>

            <div className="flex flex-col w-full justify-between gap-2">
              <p className="font-semibold">Report Name</p>
              <p>Date</p>
              <div className="w-full p-1 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="col-span-2"></div>

        <div className="col-span-1 flex flex-col justify-between px-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              {/* profile image  */}
              <p className="text-xl font-semibold text-green-500">Hi Sourabh</p>
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
            <div className="w-full py-1 bg-green-500 rounded-lg px-4">
              <p>Last Checkup</p>
            </div>
          </div>

          <div className="flex flex-col">
            bottom part
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
