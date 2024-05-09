import React, { useState } from "react";
import Alert from "../../assets/AlertIcon.png";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate();
    let [username, setUserName] = useState("");
    let [email, setEmail] = useState("");
    let [emailState, setEmailState] = useState(true);

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.endsWith("@abc.com")) {
            setEmailState(false);
            return;
        }

        console.log("Username:", username);
        console.log("Email:", email);
        navigate('/success');

    };

    const handleClose = ()=>{
        navigate("/");
    }

    return (
        <div className="relative mx-auto w-[100vw] h-[100vh]">
            <div
                className="absolute m-[2%] right-0  border rounded-full text-xl py-[2%] px-[3%] text-center transition duration-200 hover:bg-black hover:text-white cursor-pointer md:px-[0.85%] md:py-[0.5%]"
                onClick={handleClose}
            >
                &#10005;
            </div>
            <div className="absolute m-[2%]  py-[2%] px-[3%] transform scale-75"><img src={logo} alt="logo"/></div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col font-Manrope w-[80%] sm:w-auto">
                <div className="text-center">
                    <div className="text-[#2DA950] font-Grace text-3xl">Registration Form</div>
                    <div className="text-5xl font-medium">Start your success<br /> Journey here!</div>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="bg-[#EFEFEF] py-[3%] px-[5%] rounded-full my-2 mt-[10%] focus:bg-[#f5f8ff] focus:border focus:border-[#537FF1]"
                        placeholder="Enter your name"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-[#EFEFEF] py-[3%] px-[5%] rounded-full my-2 focus:bg-[#f5f8ff] focus:border focus:border-[#537FF1]"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <div className={`${emailState ? 'hidden' : ''} flex text-red-500 items-center`}><img src={Alert} alt="Alert" className="mx-1 w-4 h-4" /><div>Enter a valid email address</div></div>
                    <button className={`${username === "" ? 'bg-[#C9C9C9]' : "bg-black"} mt-[10%] py-[3%] px-[5%] rounded-full my-2 text-white`}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
