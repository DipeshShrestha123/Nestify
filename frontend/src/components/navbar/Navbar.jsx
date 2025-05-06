import "./Navbar.scss";
import React, { useState } from "react";
import { useAuth } from "../utils/AuthProvider";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

export default function Navbar() {
    const { isLoggedIn, logout } = useAuth();
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="left">
                {/* Hamburger Menu for Mobile */}
                <div className="hamburger-icon">
                    <Hamburger size={24} toggled={open} toggle={setOpen} />
                </div>

                {/* Logo */}
                <Link to="/" className="logo">
                    <img src="/logo.png" className="logoImg" alt="Logo" />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="nav-links">
                    <Link to="/" className="navLink scaletrans">Home</Link>
                    <Link to="/about" className="navLink scaletrans">About</Link>
                    <Link to="/contact" className="navLink scaletrans">Contact</Link>
                    <Link to="/agents" className="navLink scaletrans">Agents</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${open ? "open" : ""}`}>
                <Link to="/" className="logo">
                    <img src="/logo.png" className="logoImg" alt="Logo" />
                </Link>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                <Link to="/agents" onClick={() => setOpen(false)}>Agents</Link>
            </div>

            {/* Mobile Menu Overlay */}
            {open && <div className="menu-overlay" onClick={() => setOpen(false)}></div>}

            {/* Desktop Right Side */}
            <div className="right">
                {isLoggedIn ? (
                    <>
                        <div className="Profile-Btn scaletrans">
                            <Link to="/profile">Profile</Link>
                        </div>
                        <button className="Logoutbtn scaletrans" onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/signin" className="scaletrans Signinbtn">Sign in</Link>
                        <Link to="/signup" className="Signupbtn scaletrans">Sign up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
