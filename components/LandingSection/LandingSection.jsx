import React from 'react';
import LandingSectionStyle from "./LandingSection.style";

function LandingSection(props) {
    return (
        <LandingSectionStyle className={"relative w-full  lg:p-28 p-16 bg- primary-bg flex flex-col lg:flex-row"}>
            <div className="heading w-full lg:w-2/3 lg:mt-32">
                <h1 className={"lg:text-7xl text-4xl  mb-5 mt-8 font-medium"}>
                   Ayu's Cake <br/>
                </h1>
                <h2 className="lg:text-2xl text-3xl subtitle font-light">~ Official Ayu Pasteries</h2>

                <button className={"outline-0 text-white text-2xl font-medium px-10 py-2 bg-[#070101] rounded-xl mt-16 "}>Explore Menu</button>
            </div>
            <div className="image w-1/6 hidden lg:block">
                <img className={""} src="/images/cake2.jpg" alt=""/>
            </div>
        </LandingSectionStyle>
    );
}

export default LandingSection;