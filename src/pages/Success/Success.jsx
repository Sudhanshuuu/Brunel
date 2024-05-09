import React, { useEffect, useState } from "react";
import Tick from "../../assets/Tick.png";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Success() {
    let navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            navigate("/");
        }
    }, [countdown, navigate]);



    return (
        <div className="relative h-[90vh] w-[100vw]">
            <div className="absolute m-[2%]  py-[2%] px-[3%]"><img src={logo} alt="logo" /></div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center font-Manrope w-[80%] sm:w-auto">
                <div><img src={Tick} alt="Tick" /></div>
                <div className="text-[#2DA950] font-Grace text-2xl mt-[5%]">Success Submitted</div>
                <div className=" font-Manrope text-4xl font-semibold py-[1%]">Congratulations</div>
                <div className="text-center text-[#727272] text-xl w-[70%]">Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates</div>
            </div>
            <div className="font-Manrope text-center w-[100%] absolute bottom-0  text-[#727272]">Redirecting you to Homepage in <span className="font-black">{countdown} Seconds</span> </div>
        </div>
    );
}

export default Success;
