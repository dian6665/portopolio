import React from "react";

export default function gallery() {

    const data = [
        {
            imgaeLink: "img/cover epicaroma.jpg"
        },
        {
            imgaeLink: "img/cover thunderstrike.jpg"
        },
        {
            imgaeLink: "img/cover travelos.jpg"
        },
        {
            imgaeLink: "img/cover vrportal.jpg"
        }
    ];

    const [active, setActive] = React.useState(
        "/img/cover epicaroma.jpg",
    );

    return (
        <div className="project flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[15px]">
                <h2 className="font-bold text-4xl"> Project yang pernah dibuat</h2>
                <div className="w-[25px] h-[2px] bg-yellow-400"></div>

            </div>
            <div className="flex gap-[10px] w-[100%] pr-[20px]">
                <div className="flex flex-col gap-[10px]  w-[40%]">
                    <p>ini merupakan sebuah project yang perna saya buat di waktu kerja maupun di luar kerja atau projek biasa yaitu sebuah website yang di buat dengan menggunakan wordpress elementor yang di masukan kedalam sebuah marketplace webstie yaitu themefores.</p>
                    <img src={active} alt="" />
                </div>
                <div className="flex flex-row-2 flex-wrap gap-[10px] justify-center w-[60%]">
                    {data.map(({ imgaeLink }, index) => (
                        <div key={index} className="w-[49%]">
                            <img onClick={() => setActive(imgaeLink)} src={imgaeLink} alt="" />
                        </div>
                    ))}
                </div>
                {/* <div className="flex gap-[5px] flex-row flex-wrap">
                </div> */}
            </div>

        </div>
        // <div className="flex gap-[20px] flex-row">
        //     <div className=" w-[50%]"> <img src={active} alt="" /></div>
        //     {data.map(({ imgaeLink }, index) => (
        //         <div key={index} className="flex flex-row ">
        //             <img
        //                 onClick={() => setActive(imgaeLink)}
        //                 src={imgaeLink}
        //                 className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
        //                 alt="gallery-image"
        //             />
        //         </div>
        //     ))}
        // </div>
    );
}