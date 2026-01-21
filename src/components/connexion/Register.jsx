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
                <div className="flex items-center justify-center w-full p-6 max-sm">
                    <div className="max-sm:hidden shadow-lg h-[54vh] md:h-[70vh] max-md:h-[70vh] flex items-center justify-center">
                        <img src={SignImg} alt="sign-up-image" width="500px" className="p-6"/>
                    </div>
                    <form action="" className="px-8 p-4 max-sm:px-2 bg-white rounded-sm shadow-lg w-[500px] max-sm:h-[78vh] h-[54vh] justify-center flex flex-col border md:h-[70vh] max-md:h-[70vh] ">
                        
                        <h2 className="py-6 font-semibold text-center max-sm:py-1 max-sm:pt-10">Sign Up</h2>
                        <p className="p-2 text-sm text-center text-gray-400 max-sm:text-xs"> Enter your credential to get access</p>
                        <div className="flex flex-col ">
                            <label htmlFor="user" className="p-2 text-sm font-semibold">Username</label>
                            <input type="text" name="" id="user" placeholder="Enter username"  className="border  border-gray-100 rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="p-2 text-sm font-semibold">Email</label>
                            <input type="email" name="" id="email" placeholder="Enter email"  className=" border-gray-100 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="password" className="p-2 text-sm font-semibold">Password</label>
                            <input type="password" name="" id="password" placeholder="Enter password"  className=" border-gray-100 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="confirm" className="p-2 text-sm font-semibold">Confirm password</label>
                            <input type="password" name="" id="confirm" placeholder="confirm password"  className=" border-gray-100 border rounded placeholder:text-gray-400 placeholder:text-sm  outline-none focus:outline-[#3F87F5] p-2" />
                        </div>
                        <div className="flex gap-2 p-2 ">
                            <input type="checkbox" name="" id="check"  className="" />
                            <label htmlFor="check" className="p-2 text-sm max-sm:text-xs "> I have read the agreement</label>
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-[#3F87F5] text-white max-sm:p-2 max-sm:text-sm max-md:p-1 max-md:rounded">Sign Up</button>
                        </div>
                        <div>
                            <a href="">
                                <i class="fa-brands fa-google sm:p-2 bg-red-200 p-3 rounded-full text-red-400 hover:bg-red-500 hover:text-white max-sm:p-1"></i>
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-2 max-sm:p-2 sm:pb-6 max-md:my-4 max-sm:pb-10">
                            <p className="text-sm text-gray-400 max-sm:text-xs">Already have an account?</p>
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