import Home from "../portopolio/home";
import About from "../portopolio/about";
import Footer from "../portopolio/footer";

export default function layout() {
    return (
        <>
            <div className="flex gap-[20px] flex-row px-[5px]">
                <Home />
                <About />

            </div>
            <div>
                <Footer />
            </div>
        </>



    );
}