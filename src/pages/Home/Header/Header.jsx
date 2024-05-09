import React from "react";
import Photo from "../../../assets/Home/Photo.png";
import Frame from "../../../assets/Home/Frame.png";
import Spark from "../../../assets/Home/spark.png";
import SliderCard from "../../../components/SliderCard/SliderCard";
import Navbar from "../../../components/Navbar/Navbar";

function Header() {
    return (<div className="  flex flex-col   bg-bg bg-contain font-Manrope md:h-[100vh]">
        <Navbar />
        <div className="flex flex-col text-center">
            <div className="font-Grace text-[#2DA950] text-xl">Success Stories</div>
            <div className="text-2xl font-Manrope font-semibold lg:text-4xl">
                Every success journey <br />
                we've encountered.
            </div>
        </div>
        <div className="relative  flex justify-center flex-col md:flex-row">
            <div className=" relative mx-auto lg:mx-0 ">
                <div className="absolute top-[22%] left-[2%]  flex flex-col w-[35%] p-[3%] rounded-xl bg-white shadow-lg lg:left-[-16%] ">
                    <img src={Spark} alt="Spark" className="hidden absolute top-[-10px] left-[-10px] w-14 h-14 lg:block" />
                    <div className="text-2xl font-semibold font-sans lg:text-4xl">40%</div>
                    <div className="mt-2 text-xs text-[#828282] sm:text-[0.8rem]">Achieved reduction in project execution time by optimising team availability</div>
                </div>
                <div className="absolute top-[80%]  flex items-center bg-white rounded-3xl shadow-lg p-[1%] lg:left-[-8%]">

                    <img src={Frame} alt="Frame" className="bg-[#F2F9F3] w-10 h-10 p-2 rounded-full" />

                    <div className="mx-2">
                        <div className=" font-sans font-semibold lg:text-xl">10 DAYS</div>
                        <div className="text-sm text-[#828282]">Staff development</div>
                    </div>
                </div>
                <div className="absolute top-[70%] left-[50%] w-[40%] flex flex-col bg-[#002E18] text-white p-[5%] rounded-xl shadow-lg sm:w-[42%]">
                    <div className="text-xl lg:text-4xl lg:font-semibold">$0.5 <span className=" opacity-75 text-base">MILLION</span></div>
                    <div className=" text-xs mt-4  text-[#CCCCCC] sm:text-sm">
                        Reduced client expenses by saving on hiring and employee costs.
                    </div>
                </div>
                <img src={Photo} alt="PhotoPp" className="w-[70%] mx-auto  lg:mx-0" />
            </div>

            <div className="flex flex-col pl-[3%] justify-between items-center mt-[20%] md:mt-[10%] lg:mt-[2%]">
                <SliderCard className="w-[80vw] md:w-[30vw] lg:w-[20vw]">
                    <div className="text-3xl font-semibold">Enhance fortune 50 company’s insights teams research capabilities</div>
                    <div className="text-3xl font-semibold">Enhance fortune 50 company’s insights teams research capabilities</div>
                    <div className="text-3xl font-semibold">Enhance fortune 50 company’s insights teams research capabilities</div>
                </SliderCard>
                <button className="bg-[#1C1C1C] text-white mt-[70px] rounded-3xl transition duration-200 hover:bg-[#4E4E4E] w-[55%] p-[2%] lg:px-[2%] lg:py-[5%]">
                    Explore More &rarr;
                </button>
            </div>
        </div>
    </div>)
}

export default Header;