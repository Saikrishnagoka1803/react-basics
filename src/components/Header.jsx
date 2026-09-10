import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "./utils/useOnlineStatus.js";


const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnlineStatus();

    return (
        <div className=" p-4 flex justify-between border border-gray align-middle bg-green-100 rounded-xl">
            <div className="logo">
                <img className="w-30 h-20" alt="logo"
                    src={
                        "https://s3.amazonaws.com/images.seroundtable.com/google-paint-brusges-1531914263.jpg"
                    }
                ></img>
            </div>
            <div className=" flex justify-between">
                <ul className="flex items-center gap-4">
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