import React from "react"

import p1 from "../../../assets/nikon.jpg"
import p2 from "../../../assets/canon.jpg"
import p3 from "../../../assets/sony2.jpg"

import Box from "./Box"
import Title from "../../Title/Title"
import './SectionOne.css'


function Programs(){

    return(
        <div>
            <Title title="SOME CAMERA" subtitle="Here is some camera with description."/>
    
        <div className="flex mx-auto my-5 justify-center gap-10 w-[70%] SectionOne-box">
            <Box image={p1} h1="Nikon Z6 III" p="This is considered the best modern full-frame hybrid camera for all-around use. It features a partially stacked sensor, outstanding autofocus, fast burst rates, and impressive 6K/60p video capabilities, making it excellent for both photo and video creatives." />

            <Box image={p2} h1=" Canon EOS R10" p="n ideal camera for beginners and enthusiasts looking for a lightweight, compact system. It features an APS-C sensor, modern autofocus, 24.2MP resolution, and can shoot 4K video, providing exceptional value and great performance in a small body" />

            <Box image={p3} h1="Sony A7R V" p="A powerhouse for professional photographers who demand the highest resolution. It boasts a massive 61MP full-frame sensor and is renowned for its groundbreaking AI-based autofocus system, which provides superior subject recognition and tracking, alongside 8K video capture." />
        </div>
        </div>
    );
}
export default Programs