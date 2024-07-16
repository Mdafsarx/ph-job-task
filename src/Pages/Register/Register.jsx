import axios from "axios";
import toast from "react-hot-toast";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {


    const register = function (e) {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const pin = e.target.pin.value;
        if(isNaN(number))return toast.error('Mobile number must be number')
        if(isNaN(pin))return toast.error('Pin must be number')
        if(pin.length<5)return toast.error('Pin number must be above five')
        const role = e.target.role.value;  
        const status = 'pending';
        const userInfo = { name, email, number, pin, role, status };
        axios.post('http://localhost:1000/Register', userInfo)
            .then(data => {
                if(data.data.insertedId){
                    toast.success('registration done')
                    e.target.reset()
                }
            })
            .catch(error =>toast.error(error.message))
    }




    return (
        <div>

            <section className="p-6 bg-gray-900">

                <form onSubmit={register} className="max-w-2xl flex flex-col justify-center min-h-[93.57vh] mx-auto space-y-4 text-black">

                    <div className="text-white text-center space-y-2 ">
                        <h2 className="text-3xl text-[#83B4FF] uppercase">Create Your Profile & Start Saving!</h2>
                        <p className="text-balance">Get started on your financial journey with our simple and secure registration process. <br /> By creating an account, you unlock a world of convenient financial services tailored <br /> to your needs to your needs and preferences.</p>
                    </div>

                    <fieldset className="grid grid-cols-2 gap-6 rounded-md shadow-sm ">

                        <div className="grid grid-cols-6 gap-4 col-span-full ">

                            <div className="col-span-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                    <input type="text" name="name" className="grow" placeholder="Enter your name" required/>
                                </label>
                            </div>

                            <div className="col-span-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path
                                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input type="email" name="email" className="grow" placeholder="Enter your email " required/>
                                </label>
                            </div>

                            <div className="col-span-3">
                                <label className="input input-bordered flex items-center gap-2">
                                    <FaPhone />
                                    <input type="text" name="number" className="grow" placeholder="Enter your mobile number" required/>
                                </label>
                            </div>

                            <div className="col-span-3">
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
                                    <input name="pin" type="password" className="grow" placeholder="Enter your pin number" required/>
                                </label>
                            </div>

                            <div className="col-span-3">
                                <select className="select select-bordered w-full" name="role" required>
                                    <option value={'User'}>User</option>
                                    <option value={'Agent'}>Agent</option>
                                </select>
                            </div>

                            <div className="col-span-3">
                                <button className="btn btn-block bg-[#9290C3] border-0 text-white">Register</button>
                            </div>

                        </div>

                    </fieldset>


                    <div className="flex justify-center items-center pt-4 space-x-1 text-base text-white">
                        <p className="">Already have a account?</p>
                        <Link to={'/login'} className="text-[#4163EB] hover:underline">Login</Link>
                    </div>

                </form>

            </section>

        </div>
    );
};

export default Register;