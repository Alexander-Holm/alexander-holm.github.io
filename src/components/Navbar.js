import React, { useState } from "react";
import "./Navbar.css"
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {IoTriangleSharp} from "react-icons/io5"
import {BsTriangleFill} from "react-icons/bs"

export default function Navbar(props){
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const NavItem = ({href, className, children}) => (
        <a href={href} className={className} onClick={() => setIsHamburgerOpen(false)} >
            {children}
        </a>
    );
    const Dropdown = ({item}) => (
        <div className="dropdown">
            <NavItem href={item.link} >
                <span>{item.title}</span>
                <BsTriangleFill className="dropdown-arrow" />
            </NavItem>
            <div className="dropdown-content">
                {item.dropdown.map(item => <NavItem href={item.link} key={item.title}>{item.title}</NavItem> )}
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
            {isHamburgerOpen && <IoTriangleSharp className="triangle"/> }
            <div className={`items-container ${isHamburgerOpen ? "hamburgerOpen" : ""}`} >
               
                <NavItem href="#" className={`toTopButton ${props.showTopButton ? "active" : ""}`}>🡅</NavItem>
                {props.items.map(item => {
                    if("dropdown" in item)
                        return <Dropdown item={item} key={item.title} />
                    else return <NavItem href={item.link} key={item.title}>{item.title}</NavItem>
                })}
            </div>
        </nav>
    );
}