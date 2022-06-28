import React, { useState } from "react";
import "./Navbar.css"
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {IoTriangleSharp} from "react-icons/io5"

export default function Navbar(props){
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const NavItem = ({item}) => (
        <a key={item.title} href={item.link} className="nav-item" >
            {item.title}
        </a>
    );
    const Dropdown = ({item}) => (
        <div className="dropdown">
            <NavItem item={item} />
            <div className="dropdown-content">
                {item.dropdown.map(item => <NavItem item={item} key={item.title} /> )}
            </div>
        </div>
    );

    return(
        <nav className="navbar" style={props.style} >
            <button className="hamburger" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
                {isHamburgerOpen
                ? <HiOutlineX />
                : <HiMenu />
                }
            </button>
            {isHamburgerOpen ? <IoTriangleSharp className="triangle"/> : null}
            <div className={`items-container ${isHamburgerOpen ? "hamburgerOpen" : ""}`}>
               
                <a href="#top" className={props.showTopButton === true ? "nav-item toTopButton active" : "nav-item toTopButton"}>🡅</a>
                {props.items.map(item => {
                    if("dropdown" in item)
                        return <Dropdown item={item} key={item.title} />
                    else return <NavItem item={item} key={item.title} />
                })}
            </div>
        </nav>
    );
}