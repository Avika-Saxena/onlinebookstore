import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import '../css-files/style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

function Navbar() {

  const [listboxappear,setlistboxappear] = useState(false);

  const listbox = (e) => {
    e.preventDefault();
    setlistboxappear((prev) => !prev);
  }
  return (
    <>
        <nav>
            <span className="logo">
              <Link to="/" smooth={true} duration={500}>BookStore</Link>
            </span>
            <div className="barbox" onClick = {listbox}>
              <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>
              <div className="listbox" style={{display : listboxappear ? 'flex' : 'none'}}>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                  <li><ScrollLink to="books" smooth={true} duration={500}>Books</ScrollLink></li>
                  <li><ScrollLink to="whatwehave" smooth={true} duration={500}>What We have</ScrollLink></li>
                  <li><ScrollLink to="contactus" smooth={true} duration={500}>ContactUs</ScrollLink></li>
                  <li><Link to="/addbook" smooth={true} duration={500}>AddBook</Link></li>
                </ul>
              </div>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                <li><ScrollLink to="books" smooth={true} duration={500}>Books</ScrollLink></li>
                <li><ScrollLink to="whatwehave" smooth={true} duration={500}>What We have</ScrollLink></li>
                <li><ScrollLink to="contactus" smooth={true} duration={500}>ContactUs</ScrollLink></li>
                <li><Link to="/addbook" smooth={true} duration={500}>AddBook</Link></li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
