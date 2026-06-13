'use client'
import DashBoardStatsCards from "@/components/DashBoard/DashBoardStatsCards";
import RecentJobsTable from "@/components/DashBoard/RecentJobsTable";
import { useSession } from "@/lib/auth-client";


const Recruiterpage = () => {
    const {data:sesson, isPending} = useSession()

    const user = sesson?.user

    if(isPending){
        <h2 className="text-5xl text-center text-blue-800">Loading...</h2>
    }
    return (
        <div>
            <h3 className="text-xl text-center py-5">Welcome Back, {user.name}</h3>

            <DashBoardStatsCards></DashBoardStatsCards>

            <RecentJobsTable></RecentJobsTable>
        </div>
    );
};

export default Recruiterpage