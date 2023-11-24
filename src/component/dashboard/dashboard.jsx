import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const dashboard = () => {
    return (
        <div className="w-5/6 grid grid-cols-6 grid-rows-6 justify-between min-h-screen bg-green-200 text-black gap-4 p-2">
            <div className="col-span-2 row-span-2 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100 flex flex-col p-4">
                <p className="text-2xl font-semibold text-neutral-800">Progress for Today</p>
                <div></div>
            </div>

            <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100 gap-6 p-4">
                <div className="col-span-1 row-span-1 flex flex-col justify-center">
                    <p className="text-xl font-semibold text-neutral-500">Steps</p>
                    <p className="text-4xl font-semibold text-neutral-800">24980</p>
                </div>
                <div className="col-span-1 row-span-1 flex flex-col justify-center">
                    <p className="text-xl font-semibold text-neutral-500">Distance</p>
                    <div className="flex flex-row gap-2 text-4xl font-semibold text-neutral-800">
                        <p className="text-4xl font-semibold text-neutral-800">11.3</p>
                        km
                    </div>
                </div>
                <div className="col-span-1 row-span-1 flex flex-col justify-center">
                    <p className="text-xl font-semibold text-neutral-500">Heart Rate</p>
                    <div className="flex flex-row gap-2 text-4xl font-semibold text-neutral-800">
                        <p className="text-4xl font-semibold text-neutral-800">108</p>
                        bpm
                    </div>
                </div>
                <div className="col-span-1 row-span-1 flex flex-col justify-center">
                    <p className="text-xl font-semibold text-neutral-500">Water</p>
                    <div className="flex flex-row gap-2 text-4xl font-semibold text-neutral-800">
                        <p className="text-4xl font-semibold text-neutral-800">2.3</p>
                        l
                    </div>
                </div>
            </div>

            <div className="col-span-2 row-span-2 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100 p-4">
                <p className="text-xl font-semibold text-neutral-800">Calories</p>
                <div className="flex flex-row justify-between gap-2">
                    <div>

                    </div>

                    <div className="flex flex-col justify-between gap-6 text-xl">
                        <div className="flex flex-row justify-between gap-2">
                            <div className="flex flex-row items-center text-orange-500">
                                <GoDotFill/>
                                Protein
                            </div>
                            <div>
                                43%
                            </div>
                        </div>
                        <div className="flex flex-row justify between gap-2">
                            <div className="flex flex-row items-center text-green-500">
                                <GoDotFill/>
                                Carbs
                            </div>
                            <div>
                                43%
                            </div>
                        </div>
                        <div className="flex flex-row justify between gap-2">
                            <div className="flex flex-row items-center text-neutral-500">
                                <GoDotFill/>
                                Fats
                            </div>
                            <div>
                                43%
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center text-green-500">
                    <p>Go to health for more</p>
                    <IoIosArrowForward/>
                </div>
            </div>

            <div className="col-span-1 row-span-3 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100">

            </div>

            <div className="col-span-3 row-span-3 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100">

            </div>

            <div className="col-span-2 row-span-3 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100">

            </div>

            <div className="col-span-1 row-span-1 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100">

            </div>

            <div className="col-span-2 row-span-1 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100">

            </div>

            <div className="col-span-3 row-span-1 shadow-lg rounded-xl shadow-neutral-600 bg-neutral-100">

            </div>
        </div>
    );
}

export default dashboard;   