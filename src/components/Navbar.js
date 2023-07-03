import "./NavbarStyles.css";
import { Link, useNavigate } from 'react-router-dom';
import { Menuitems } from "./Menuitems";


import React, { useState } from 'react'

const Navbar = () => {

    const navigate = useNavigate();

    const [nav, setNav] = useState(false);

    const onClick = () => {
        setNav(!nav)
    }

    const onlogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <div className="menu-icons" onClick={onClick}>
                    <i className={(nav) ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul onClick={onClick} className={(nav) ? "nav-menu active" : "nav-menu"}>
                    {
                        Menuitems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                                </li>
                            );
                        })
                    }
                    {/* <button>Sign Up</button> */}

                </ul>
                <button onClick={onlogout} >Logout</button>

            </nav>
        </>
    )
}

export default Navbar