import React from "react";
import Typed from 'react-typed';



const Header = () => {
    return (
        <div className="Header-wraper">
            <div className="main-info">
                <h1>Web development and Websites promotions</h1>
                <Typed className="Typed-text" strings={["Web Design", "Web Development","Facebook","Instagram","Google","8861935066","Vasudev.pikkili@gmail.com"]}
                typeSpeed={40}
                backSpeed={50}
                loop />
                <a href="#" className="btn-main-offer">Connect Me</a>



            </div>
            
        </div>
    )
}

export default Header
