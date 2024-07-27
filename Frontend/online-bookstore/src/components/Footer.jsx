import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import '../css-files/style.css'
function Footer() {
  return (
    <>
        <footer id="footer" data-aos="fade-up">
            <div className="boxs">
                <div className="box-in">
                    <span className="logo">
                        <Link to="/" smooth={true} duration={500}>BookStore</Link>
                    </span>
                    <span>Contact us </span>
                    <p>Feel free to contact us and ask queries </p>
                    <div className="socialmedia"></div>
                </div>
                <div className="box-in">
                    <h2>Explore</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                        <li><ScrollLink to="contactus" smooth={true} duration={500}>ContactUs</ScrollLink></li>
                        <li><ScrollLink to="books" smooth={true} duration={500}>Books</ScrollLink></li>
                        <li><ScrollLink to="whatwehave" smooth={true} duration={500}>What We have</ScrollLink></li>
                    </ul>
                </div>
                <div className="box-in">
                    <h2>Categories</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">ContactUs</Link></li>
                        <li><Link to="/">Books</Link></li>
                        <li><Link to="/">Categories</Link></li>
                    </ul>
                </div>
                <div className="box-in">
                    <h2>ContactUs</h2>
                    <p>Feel Free to contact us </p>
                    <button>Subscribe Now</button>
                </div>
            </div>
            <div className="copyright">
                <Link>c@copyright@Bookstore</Link>
            </div>
        </footer>
    </>
  );
}

export default Footer;
