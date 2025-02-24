'use client'

import { useState } from "react";
import { text } from "stream/consumers";
import Galleri from "./galleri";
import Skill from "./skill";

export default function about() {

    const [index, setIndex] = useState(0);

    const slides = [
        { id: 1, kantor: "Shifthink", img: "img/shifthink.png", text1: "Magang Juli 2022 - Desember 2022", text: "Magang pada saat kuliah di perusahaan Shiftink sebagai Programmer Front-End dalam membuaat sebuah tampilan aplikasi mobile dan website." },
        { id: 2, kantor: "creedcreative", img: "img/creative.png", text1: "Freelancer Desember 2023 - Juli 2024", text: "Bekerja sebagai UI/UX Desainer dan Web Develover dalam membuat sebuah website yang akan di jual ke marketplace (Themeforest)" },

    ];

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="flex gap-[30px] flex-col w-[85%] overflow-auto h-screen pt-[20px] pb-[40px]">

            {/* tentang saya */}
            <div className="flex gap-[15px] flex-col about-me pt-[10px]">
                <h1 className="text-5xl font-bold">Tetang Saya</h1>
                <div className="w-[25px] h-[2px] bg-yellow-400"></div>
                <p className="pr-[23px] text-justify">Lulusan Teknik Informatika dari STMIK Amik Riau dengan keahlian
                    di bidang UI/UX Design, Front-End Development, dan Microsoft
                    Office. Berpengalaman dalam merancang antarmuka pengguna
                    yang fungsional dan menarik secara visual, serta membangun
                    halaman web yang responsif menggunakan HTML, CSS, dan
                    JavaScript. Selain programmer saya juga mempunyai keahlian di
                    bidang microsoft untuk membuat dokumen dan meninput sebuah
                    data. Mampu mengoptimalkan pengalaman pengguna serta
                    memiliki pemahaman mendalam tentang prinsip desain interaksi.
                    Terbiasa bekerja dengan tim lintas fungsi dan memiliki
                    keterampilan manajemen proyek yang baik. Siap berkontribusi
                    dalam pengembangan produk digital yang inovatif</p>
            </div>

            {/* keahlian */}
            <div className="skill flex gap-[15px] flex-col">
                <h2 className="font-bold text-4xl"> Keahlian Saya </h2>
                <div className="w-[25px] h-[2px] bg-yellow-400"></div>
                <div className="skill-me flex gap-[20px] flex-row-2 flex-wrap">
                    <div className="skill-one border-solid border-[2px] p-[20px] rounded-xl w-[48%]">
                        <div className="icon-skill flex gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[40px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                            </svg>
                            <div className="flex flex-col">
                                <h4 className="text-3xl font-bold">Web Development</h4>
                                <p>Membuat dan mendesain website yang bagus, serta responsif</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-two border-solid border-[2px] p-[20px] rounded-xl w-[48%]">
                        <div className="icon-skill flex gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[40px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <div className="flex flex-col">
                                <h4 className="text-3xl font-bold">Mobile Development</h4>
                                <p>Membuat dan mendesain sebuah aplikasi yang menarik dengan menggunakan framework flutter</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-three border-solid border-[2px] p-[20px] rounded-xl w-[48%]">
                        <div className="icon-skill flex gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[50px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>

                            <div className="flex flex-col">
                                <h4 className="text-3xl font-bold">Desain Editing</h4>
                                <p>Saya bisa Adobe Photoshop, Figma, dan WordPress Elementor untuk menciptakan desain yang menarik.</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-four border-solid border-[2px] p-[20px] rounded-xl w-[48%]">
                        <div className="icon-skill flex gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[60px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>

                            <div className="flex flex-col">
                                <h4 className="text-3xl font-bold">Microsoft Office</h4>
                                <p>Menguasai Microsoft Word, Excel, dan PowerPoint untuk pengolahan dokumen, data secara profesional.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* pengalaman kerja */}
            <div className="experience flex flex-col gap-[15px] ">
                <h2 className="font-bold text-4xl"> Pengalaman Kerja </h2>
                <div className="w-[25px] h-[2px] bg-yellow-400"></div>
                <div className="experience-me flex gap-[20px]">
                    {slides.map((slides) =>
                        <div key={slides.id} className="experience-one border-solid items-center flex gap-[20px] border-[2px] p-[20px] rounded-xl w-[48%]">
                            <div className="icon-skil flex flex-col items-center gap-[5px]">
                                <img src={slides.img} alt="" className="w-[80%]" />
                                <h5 className="font-bold text-4xl">{slides.kantor}</h5>
                            </div>
                            <div className="flex gap-[10px] flex-col">
                                <h4 className="text-3xl font-bold">{slides.text1}</h4>
                                <p>{slides.text}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* project */}
            <Galleri />
            <Skill />
        </div>
    );
}