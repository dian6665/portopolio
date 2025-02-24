
export default function Home() {
    return (
        <div className="data w-[15%] ml-[20px]">
            <div className="img flex flex-col gap-[10px] p-[30px] items-center">
                <img src="img/img-dian.jpg" alt="" className="p-[20px] bg-red-400 rounded-xl" />
                <h2 className="text-4xl font-bold">Dian saputra</h2>
                <h5 className="text-xl p-[5px] bg-red-300 rounded-md">Front-end Developer</h5>
            </div>
            <div className="bg-white w-1/1 h-[1px] mb-[30px]">               </div>
            <div className="flex gap-[20px] flex-col ">
                <div className="flex gap-[20px] flex-row">
                    <div className="icon content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold ">E-MAIL</h6>
                        <p className="text-base">diansaputra.ds68@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-[20px] flex-row">
                    <div className="icon content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold">TELEPON</h6>
                        <p className="text-base">0813-7175-8325</p>
                    </div>
                </div>
                <div className="flex gap-[20px] flex-row">
                    <div className="icon content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                        </svg>

                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold">KELAHIRAN</h6>
                        <p className="text-base">21 AGUSTUS 2000</p>
                    </div>
                </div>
                <div className="flex gap-[20px] flex-row">
                    <div className="icon content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                    </div>
                    <div className="flex flex-col">
                        <h6 className="text-lg font-bold">ALAMAT</h6>
                        <p className="text-base">Pekanbaru</p>
                        <p className="text-base">Riau</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex gap-[10px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
                        <path d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                            fill="#111827" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
                        <path d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                            fill="#111827" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
                        <path d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                            fill="#111827" />
                    </svg>
                </div>
            </div>
        </div>
    );

}