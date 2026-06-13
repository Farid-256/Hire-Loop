import { FaCheckCircle } from "react-icons/fa";
import { FaHeartCircleCheck, FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";


const DashBoardStatsCards = () => {
    return (
        <section className="flex items-center justify-around">
            <div className="border border-gray-800 rounded-3xl flex flex-col items-center gap-2 p-10 bg-emerald-900">
                <IoPeople />
                <h3 className="text-xl">Totle Applicants:</h3>
                <h3 className="text-xl">1250</h3>
            </div>

            <div className="border border-gray-800 rounded-3xl flex flex-col items-center gap-2 p-10 bg-emerald-900">
                <FaHouseMedicalCircleCheck />
                <h3 className="text-xl">Totle Job Post:</h3>
                <h3 className="text-xl">48</h3>
            </div>

            <div className="border border-gray-800 rounded-3xl flex flex-col items-center gap-2 p-10 bg-emerald-900">
                <FaHeartCircleCheck />
                <h3 className="text-xl">Active Jobs:</h3>
                <h3 className="text-xl">23</h3>
            </div>

            <div className="border border-gray-800 rounded-3xl flex flex-col items-center gap-2 p-10 bg-emerald-900">
                <FaCheckCircle />
                <h3 className="text-xl">Job Close:</h3>
                <h3 className="text-xl">48</h3>
            </div>
        </section>
    );
};

export default DashBoardStatsCards;