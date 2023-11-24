import React from 'react'
import { FaFilter } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

function PastReports() {
  return (
    <div className="col-span-1 flex flex-col shadow-lg shadow-neutral-800 gap-6 p-2">
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
  )
}

export default PastReports
