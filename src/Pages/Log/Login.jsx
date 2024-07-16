/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const user=e.target.user.value;
        const pin=e.target.pin.value;
        if(isNaN(pin))return alert('please enter number')

        console.log(user,pin)
        

    }


    return (
        <div className="bg-gray-800">

            <div className="flex items-center justify-center text-center min-h-screen">

                <form onSubmit={handleSubmit} className="w-full max-w-sm rounded space-y-3 ">

                    <div className="text-white text-center space-y-2">
                        <h2 className="text-3xl text-[#83B4FF] uppercase">Login your account</h2>
                        <p className="text-balance">Get start again on your financial journey with our simple and secure 
                            Login process.</p>
                    </div>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" name="user" className="grow" placeholder="email or number" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" name="pin" className="grow" defaultValue={'password'} />
                    </label>

                    <button className="btn btn-block bg-[#9290C3] border-0 text-white">Login</button>

                    <p className="text-base text-center text-white pt-4">Don't have an account?
                        <Link to={'/register'} className="text-[#4163EB] hover:underline"> Register</Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default Login;