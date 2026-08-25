
const Header = () => (
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
                <li><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
        </div>
    </div>
);

export default Header;