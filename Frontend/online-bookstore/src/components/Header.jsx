import {Link as ScrollLink} from 'react-scroll';
import '../css-files/style.css'
import HeaderImage from '../images/headerimage.jpg'
function Header() {
  return (
    <>
        <header>
            <div className="content">
                <h1 className="logo">BookStore</h1>
                <h2>Welcome to our Online Bookstore</h2>
                <p>"Discover a world of stories at your fingertips with our online bookstore."</p>
                <button><ScrollLink to="about" smooth={true} duration={500}>Explore Now</ScrollLink></button>
            </div>
            <div className="image">
                <img src={HeaderImage} alt="image1" />
            </div>
        </header>
    </>
  );
}

export default Header;
