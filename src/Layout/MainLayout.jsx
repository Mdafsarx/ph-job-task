import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import { NavLink } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { BiHome } from "react-icons/bi";
import { SiMoneygram } from "react-icons/si";
import { FaBalanceScale, FaList } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsSendFill } from "react-icons/bs";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">

                {/* side navigation */}
                <div className="w-auto min-h-[calc(100vh-68px)] bg-black">

                    <div className="p-5 pt-8 relative h-full">
                        <div className="space-y-3">
                            <NavLink to={'/'} className={'font-bold text-[#9290C3] flex items-center gap-0.5'}><BiHome />Home</NavLink>
                            <NavLink to={'/cash-in'} className={'font-bold text-[#9290C3] flex items-center gap-0.5'}><GiReceiveMoney />Cash-in</NavLink>
                            <NavLink to={'/cash-out'} className={'font-bold text-[#9290C3] flex items-center gap-0.5'}><SiMoneygram />Cash-Out</NavLink>
                            <NavLink to={'/send-money'} className={'font-bold text-[#9290C3] flex items-center gap-0.5'}><BsSendFill />Send-Money</NavLink>
                            <NavLink to={'/balance'} className={'font-bold text-[#9290C3] flex items-center gap-0.5'}><FaBalanceScale />Balance</NavLink>
                            <NavLink to={'/history'} className={'font-bold text-[#9290C3] flex items-center gap-0.5'}><FaList />History</NavLink>
                            <button className="flex items-center absolute bottom-5 text-[#9290C3]"><IoMdLogOut className="text-2xl" />Logout</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                    </div>

                </div>

                {/* outlet here */}
                <div className="p-7">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default MainLayout;