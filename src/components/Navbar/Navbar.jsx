import React from "react";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {

    let navigate = useNavigate();

    function handleClick() {
        navigate("/login");
    }

    return (<div className="bg-white w-[95%] mb-[3%] flex justify-between mx-auto sm:border sm:border-gray-200 px-[1%] py-[1%] rounded-full ">
        <div className="flex items-center w-[15%] ml-[30px] sm:w-auto">
            <img src={Logo} alt="Logo" className=" transform scale-90" />
        </div>
        <div className="flex flex-row-reverse mr-[3%] w-[90%] text-[#1C1C1C] font-Manropes sm:w-[50%]">
            <button className="mr-[5%] text-xs font-normal border border-gray-200 px-[5%] py-[2%] rounded-full  bg-black text-white transition duration-200 hover:bg-[#4E4E4E] sm:text-base">OnBoard Talent</button>
            <button className="mr-[3%] text-xs font-normal border border-gray-200 px-[5%] py-[2%] rounded-full transition duration-200 hover:bg-[#F1F1F1] sm:text-base" onClick={handleClick}>Get Projects</button>
        </div>
    </div>) 
}

export default Navbar;