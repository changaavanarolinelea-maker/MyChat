import Footer from "./footer"
import HeaderLog from "./HeaderLog"
import LogImg from "../../images/login.png"
function Login (){

    return <>
        <div>
            <HeaderLog/>
        </div>
        <main className="flex items-center justify-center w-screen h-full max-sm:p-6">
            <div className="container ">
                <div className="flex justify-center items-center w-full max-sm:mx-auto">
                    <div className="max-sm:hidden shadow-md h-[47vh]">
                        <img src={LogImg} alt="sign-up-image" width="500px" className="py-10 px-4"/>
                    </div>
                    <form action="" className="px-8 py-14 bg-white rounded-sm shadow w-[500px] max-sm:h-[78vh]  max-sm:py-1">
                        
                        <h2 className="text-center font-semibold py-6 max-sm:py-1">Sign In</h2>
                        <p className="p-2 text-center text-gray-400 text-sm"> Enter your credential to get access</p>
                       
                        <div className=" flex flex-col">
                            <label htmlFor="email" className="p-2 text-sm">Email</label>
                            <input type="email" name="" id="email" placeholder="Enter email"  className=" border-gray-300 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-blue-500 p-2" />
                        </div>
                        <div className=" flex flex-col ">
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="p-2 text-sm">Password</label>
                                <a href="" className="hover:underline text-sm">forget password?</a>
                            </div>
                            <input type="password" name="" id="password" placeholder="Enter password"  className=" border-gray-300 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-blue-500 p-2" />
                        </div>
                       
                        <div className=" flex p-2 gap-2">
                            <input type="checkbox" name="" id="check"  className="" />
                            <label htmlFor="check" className="p-2 text-sm "> I have read the agreement</label>
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-[#646CFF] text-white">Sign In</button>
                        </div>
                        <div>
                            <a href="">
                                <i class="fa-brands fa-google bg-red-200 p-3 rounded-full text-red-400 hover:bg-red-500 hover:text-white"></i>
                            </a>
                            <a href="">
                                <i class="fa-brands fa-facebook bg-blue-200 p-3 rounded-full text-blue-400 hover:bg-blue-500 hover:text-white"></i>
                            </a>
                        </div>
                        <div className="flex justify-center items-center gap-2 max-sm:p-2">
                            <p className=" text-sm text-gray-400">Don't have an account?</p>
                            <a href="/Login.jsx" className="text-sm ">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>

        <div>
            <Footer/>
        </div>
    
    </>

}

export default Login