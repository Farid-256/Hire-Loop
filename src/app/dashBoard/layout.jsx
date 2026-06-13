import { DashBoardSideBar } from "@/components/DashBoard/DashBoardSideBar";


const DashBoardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <DashBoardSideBar></DashBoardSideBar>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default DashBoardLayout