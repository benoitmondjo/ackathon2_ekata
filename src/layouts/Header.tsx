import "@/layouts/_header.scss";

import logo from '@/assets/images/logos/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { FaBars } from "react-icons/fa6";
import { useState } from "react";


export default function Header(){
    const [toggle, setToggle] = useState(false)

    return (
        <header className="header">
            <div className="container flex">
                <a href="" className="logo">
                    <img src={logo} alt="logo etaka" />
                </a>

                <nav className={`nav ${toggle ? "active" : ''}`}>
                    <a href="" className="link">acceuil</a>
                    <a href="" className="link">produits</a>
                    <a href="" className="link">producteurs</a>
                    <a href="" className="link">a propos</a>
                    <a href="" className="link">a contact</a>
                </nav>

                <div className="icons">
                    <a href="#">
                        <CiSearch className="icon"/>
                    </a>
                    <a href="#">
                        <FiShoppingCart className="icon"/>
                    </a>
                    <a href="">
                        <FaRegUser className="icon"/>
                    </a>
                </div>

                <div 
                    onClick={()=>setToggle(!toggle)}
                    className="btn-bars" id="btn-bars">
                    <FaBars className="icon" />
                </div>
            </div>
        </header>
    )
}