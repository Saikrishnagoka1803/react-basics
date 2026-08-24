
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
                <li>Home</li>
                <li>Login</li>
                <li>Cart</li>
                <li>Add</li>
            </ul>
        </div>
    </div>
);

export default Header;