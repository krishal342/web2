import React from 'react'

import Title from '../../Title/Title';
import a1 from '../../../assets/image.jpg'

import './About.css'

function About(){

    return(
        <div className='flex w-[80%] mx-auto justify-center gap-10 about-box'>
            <div className='flex-1 flex flex-col justify-center'>
                <Title title="ABOUT" subtitle="My Skills, Work And Vision"/>
                <p className='text-justify mt-5 p1'>My work centers on authenticity, empathy, and collaboration. I believe the best photographs emerge when clients feel comfortable and heard. I focus on creating a relaxed environment, guiding poses with warmth, and capturing candid moments that reveal personality. Every project starts with listening—your goals, your audience, and the emotion you want to evoke—and ends with a curated collection that reflects your voice.</p>
                <p className='text-justify mt-5 p2'>I’m a photographer who believes in honest moments, bold light, and images that outlast trends. I collaborate closely with clients to bring their story to life—one frame at a time.</p>
            </div>
            <div className='flex-1 flex items-center justify-center '>
                <img src={a1} alt="image" className='w-full rounded-lg about-image'  />
            </div>
        </div>
    );
}

export default About