import React from 'react'

function Disease() {
  return (
    <div className="flex flex-col justify-between p-3 shadow-lg shadow-neutral-400 rounded-lg gap-2 my-2">
            <div className="grid grid-cols-2 justify-between gap-2">
              <div className="col-span-1 flex flex-col justify-between gap-2">
                <p className="text-xl font-semibold text-neutral-700">12</p>
                <p className="text-md font-semibold text-neutral-800">Diseases Detected</p>
              </div>
              <div className="col-span-1 flex flex-col justify-between gap-2">
                <p className="text-xl font-semibold text-neutral-700">5</p>
                <p className="text-md font-semibold text-neutral-800">Risks Detected</p>
              </div>
            </div>

            <hr className="w-full border-neutral-400"/>

            <div className="flex flex-col justify-between gap-2">
              <p className="text-xl font-semibold text-neutral-700">Summary</p>
              <div className="h-full p-2 w-full bg-green-200 rounded-lg">
                <p>hello</p>
              </div>
            </div>
            
          </div>
  )
}

export default Disease
