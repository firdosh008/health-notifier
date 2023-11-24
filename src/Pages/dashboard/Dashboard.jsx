import PastReports from "../../component/PastReports/PastReports";
import Form from "../../component/form/Form";
import Profile from "../../component/Profile/Profile";
import Disease from "../../component/Disease/Disease";
import React from "react";
import Navbar from "../../component/navbar/Navbar";

const dashboard = () => {
    return (
        <div>
        <Navbar/>
        <div className="grid grid-cols-4 grow">
        <PastReports/>
        <div className="col-span-2">
          <Form/>
        </div>
        <div className="col-span-1 flex flex-col justify-between shadow-lg shadow-neutral-800 px-2 gap-6">
          <Profile/>
          <Disease/>
        </div>
      </div>
    </div>
    );
}

export default dashboard;   