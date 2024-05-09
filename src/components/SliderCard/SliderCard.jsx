import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


function SliderCard({ children, className }) {



    function customPaging(i) {
        return (

            <div
                style={{
                    backgroundColor: "#E4E3E3",
                    width: "10px",
                    height: "10px",
                    borderRadius: "100%",
                    marginTop: "50px",
                    transition: "background-color 0.3s"
                }}
            >

            </div>

        );
    }
    function appendDots(dots) {
        return (
            <div style={{ textAlign: 'left' }} >
                <ul style={{ margin: "3px" }}> {dots} </ul>
            </div>
        );
    }


    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className={className} customPaging={customPaging} appendDots={appendDots}>
            {children}
        </Slider>
    )
}

export default SliderCard;