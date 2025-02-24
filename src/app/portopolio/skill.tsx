"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "img/logo/flutter1.png",
    "img/logo/wordpress.png",
    "img/logo/photoshop.png",
    "img/logo/office.png",
    "img/logo/nextJs.png",
    "img/logo/tailwinds.png",
    "img/logo/logoipsum7.png",


];

const Carousel = () => {
    const settings = {
        infinite: true,
        dot: false,
        arrows: false,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autospeed: 0,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="">
            <div className="flex gap-[15px] flex-col pb-[20px]">
                <h2 className="font-bold text-4xl"> perangkat yang pernah saya pakai </h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio repellendus nemo earum perspiciatis dolore, eligendi unde quidem natus nam reiciendis dolores officia iste modi accusantium ab enim saepe facere molestias.</p>
                <div className="w-[25px] h-[2px] bg-yellow-400"></div>
            </div>
            <Slider {...settings} className="pr-[20px]">
                {images.map((src, index) => (
                    <div key={index} className="">
                        <img src={src} alt={`Slide ${index + 1}`} className="rounded-lg" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
