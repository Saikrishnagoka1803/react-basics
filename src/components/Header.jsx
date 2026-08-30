import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "./utils/useOnlineStatus.js";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnlineStatus();

    return (
        <div id="header">
            <div id="logo">
                <img
                    src={
                        "https://s3.amazonaws.com/images.seroundtable.com/google-paint-brusges-1531914263.jpg"
                    }
                ></img>
            </div>
            <div id="nav-items">
                <ul className="nav-items-list">
                    <li>{isOnline ? "🟢 Online" : "🔴 Offline"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li onClick={() => setIsLoggedIn(!isLoggedIn)}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Header;