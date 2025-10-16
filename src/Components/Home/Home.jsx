
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SectionOne from "./SectionOne/SectionOne"
import './Home.css'
import About from "./About/About";
import React from "react";
import Gallary from "./Gallary/Gallary";
import Title from "../Title/Title";

function Home() {

    const [navBgColor, setnavBgColor] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setnavBgColor(true) : setnavBgColor(false);
        })
    }, [])

    let [wildLife,setWildLife] = React.useState([]);
    let [scenery,setScenery] = React.useState([]);


    React.useEffect(()=>{
        fetch("images.json")
            .then(res => res.json())
            .then(data => {
                setWildLife(data.wildLife);
                setScenery(data.scenery);
            })
            .catch(err => {
                console.error(err);
            });
    },[])

    window.addEventListener("resize",()=>{
        console.log(window.innerHeight,window.innerWidth);
    })



    return (
        <div className="">
            <div className={`z-10 absolute w-full fixed ${navBgColor ? "bg-black" : ""}`}>
                <NavBar />
            </div>
            <div className="hero">
                <div className="flex flex-col justify-center items-center h-[80vh] w-[50%] gap-5">

                    <h1 className="text-2xl font-bold text-center">"Photography is the art of translating light into memory, one frame at a time."</h1>
                    <p className="text-center p1">Photography is the art of translating light into memory. We approach each shoot with a disciplined process: pre-visualization, deliberate composition, and precise editing to deliver images that are clean, timeless, and true to the moment.</p>
                    <p className="text-center p2">At its heart, photography is storytelling through frames. Every image aims to evoke emotion, reveal context, and capture the subtle interactions between subject, light, and environment.</p>
                </div>
            </div>
            <Gallary images = {wildLife} title = " WILDLIFE" subtitle="Some wildlife photo"/>
            <About />
            <Gallary images = {scenery} title = " SCENERY" subtitle="Some Scenery Photo"/>
            <SectionOne />

            <Footer />


        </div>
    );
}

export default Home