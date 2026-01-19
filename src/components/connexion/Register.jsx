import Footer from "./footer"
import HeaderLog from "./HeaderLog"
import SignImg from "../../images/sign-up-2.png"
function Register (){

    return <>
        <div>
            <HeaderLog/>
        </div>
        <main className="flex items-center justify-center w-screen h-full max-sm:p-6">
            <div className="container ">
                <div className="flex justify-center items-center w-full max-sm:mx-auto p-6">
                    <div className="max-sm:hidden shadow-lg h-[54vh]">
                        <img src={SignImg} alt="sign-up-image" width="500px" className="p-6"/>
                    </div>
                    <form action="" className="px-8 py-1 bg-white rounded-sm shadow-lg w-[500px] max-sm:h-[78vh] h-[54vh]  max-sm:py-1 justify-center flex flex-col ">
                        
                        <h2 className="text-center font-semibold py-6 max-sm:py-1">Sign Up</h2>
                        <p className="p-2 text-center text-gray-400 text-sm max-sm:text-xs"> Enter your credential to get access</p>
                        <div className=" flex flex-col ">
                            <label htmlFor="user" className="p-2 text-sm font-semibold">Username</label>
                            <input type="text" name="" id="user" placeholder="Enter username"  className="border  border-gray-100 rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className=" flex flex-col">
                            <label htmlFor="email" className="p-2 text-sm font-semibold">Email</label>
                            <input type="email" name="" id="email" placeholder="Enter email"  className=" border-gray-100 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className=" flex flex-col ">
                            <label htmlFor="password" className="p-2 text-sm font-semibold">Password</label>
                            <input type="password" name="" id="password" placeholder="Enter password"  className=" border-gray-100 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className=" flex flex-col">
                            <label htmlFor="confirm" className="p-2 text-sm font-semibold">Confirm password</label>
                            <input type="password" name="" id="confirm" placeholder="confirm password"  className=" border-gray-100 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className=" flex p-2 gap-2">
                            <input type="checkbox" name="" id="check"  className="" />
                            <label htmlFor="check" className="p-2 text-sm max-sm:text-xs "> I have read the agreement</label>
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-[#3F87F5] text-white sm:p-2">Sign Up</button>
                        </div>
                        <div>
                            <a href="">
                                <i class="fa-brands fa-google sm:p-2 bg-red-200 p-3 rounded-full text-red-400 hover:bg-red-500 hover:text-white"></i>
                            </a>
                        </div>
                        <div className="flex justify-center items-center gap-2 max-sm:p-2 sm:pb-6">
                            <p className=" text-sm text-gray-400 max-sm:text-xs">Already have an account?</p>
                            <a href="/Login" className="text-sm text-[#3F87F5] max-sm:text-xs">Sign in</a>
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

export default Register