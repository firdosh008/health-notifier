import React from 'react'

function Profile() {
  return (
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
    <div className="w-full py-1 bg-green-200 rounded-lg px-4">
      <p>Last Checkup</p>
    </div>
  </div>
  )
}

export default Profile
