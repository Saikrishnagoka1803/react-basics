import AboutCls from './AboutCls.jsx';
import User from './User.jsx';

const About = () => {
    return (
        <>
            <div id="about">
                <User userInfo={{ name: "John Doe", location: "New York", contact: "123-456-7890" }} />
                <h1>About Us</h1>
                <p>
                    Welcome to our restaurant! We are passionate about serving delicious food and providing a memorable dining experience. Our team of talented chefs uses the freshest ingredients to create a diverse menu that caters to all tastes. Whether you're looking for a quick bite or a leisurely meal, we have something for everyone. Join us and indulge in the flavors of our culinary creations!
                </p>
            </div>
            <AboutCls />
        </>
    );
}

export default About;