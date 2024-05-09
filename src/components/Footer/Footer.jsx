import React from "react";

function Footer(){
    return(<div className="bg-[#F5F5F5] w-[95%] rounded-3xl mb-[3%] flex justify-between mx-auto py-[3%] ">
             <div className="text-[#1C1C1C] font-Manrope font-semibold ml-[3%] hidden sm:block">
          &copy; Talup 2023.All rights reserved
             </div>
             <div className="flex flex-row-reverse mr-[3%] w-[85%] text-[#1C1C1C] font-Manropes sm:w-[50%]">
                <a href="/" className="mr-[3%] font-normal border-b">Privacy Policy</a>
                <a href="/" className="mr-[5%] font-normal border-b">Terms & Conditions</a>
             </div>
    </div>)
}

export default Footer;