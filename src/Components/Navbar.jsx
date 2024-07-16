import { Link } from "react-router-dom"
import img from "../assets/icons8-payment-64.png"

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-[#83B4FF bg-gradient-to-t from-[#83B4FF4D] to-[#83B4FF] px-5">
                <div className="navbar-start">

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            a
                        </ul>
                    </div>

                    <div className="flex items-center gap-0">
                        <p className="text-2xl text-[#9B86BD]  font-thin">Paygun</p>
                        <img src={img} className="size-7" /></div>
                </div>

                <div className="navbar-center hidden lg:flex">

                </div>

                <div className="navbar-end flex items-center gap-4">
                    <Link to={'/login'}  className="text-lg font-thin text-[#9B86BD] cursor-pointer hover:text-white">Login</Link>
                    <Link to={'/register'} className="text-lg font-thin text-[#9B86BD] cursor-pointer hover:text-white">Register</Link>
                </div>

                {/* <div className="navbar-end flex items-center gap-4">
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                            <span className="text-xs">UI</span>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}
