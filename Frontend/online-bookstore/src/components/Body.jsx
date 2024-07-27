import {Link,useNavigate} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../css-files/style.css'
import Image2 from '../images/image2.png';
import Image3 from '../images/image4.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPen, faEye,faTrash } from '@fortawesome/free-solid-svg-icons';
import {useState,useEffect} from 'react';
import axios from 'axios';

function Body() {

    const [books, setbooks] = useState([]);
    const [visibleRows, setVisibleRows] = useState(1);
    const booksPerRow = 4;
    const navigate = useNavigate();
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    useEffect(() => {
        async function fetchBooks(){
        try {
            const response = await axios.post('http://localhost:5000/readall');
            setbooks(response.data) ;
        } catch (error) {
            console.error(error);
        }
    };
    fetchBooks();
    },[]);

    const loadMore = (e) => {
        e.preventDefault();
        setVisibleRows(prevRows => prevRows + 1);
    };
    const displayedBooks = books.slice(0, visibleRows * booksPerRow);

    const readbook = async (bookid, page) => {
        try{
            const response = await axios.post(`http://localhost:5000/read/${bookid}`);
            if(page === "view")
            navigate('/details',{state : {book : response.data}});

            else
            navigate('/editbook',{state : {book : response.data}});
        }
        catch(err){
            console.log(err);
        }
    }
    const deletebook = async (bookid) =>{
        try{
            const response = await axios.post(`http://localhost:5000/delete/${bookid}`);
            alert(response.data.message);
            navigate('/');
        }
        catch(err){
            console.log(err);
        }
    }


  return (
    <main>
        <div className="aboutus" id="about" data-aos="fade-up" >
            <div className="image">
                <img src={Image2} alt="image2" />
            </div>
            <div className="content">
                <h1 >About Us</h1>
                <h4>"Discover a world of stories at your fingertips with our online bookstore."</h4>
                <p>
                   An online bookstore offers readers the convenience of browsing and purchasing books from home at any time. With a vast       
                   selection spanning various genres, it caters to diverse tastes and needs. Detailed descriptions, reviews, and ratings help 
                   customers make informed choices. Offering formats like eBooks and audiobooks, online bookstores enhance accessibility. The 
                   convenience of home delivery, pre-orders, and finding rare books adds to their appeal. Personalized recommendations and frequent 
                   discounts make buying books online an enjoyable and economical experience, blending the joy of discovering new reads with modern 
                   convenience.
                </p>
                <button><ScrollLink to='books' smooth={true} duration={500}>Explore</ScrollLink></button>
            </div>
        </div>

        <div className="books" id="books" data-aos="fade-up" >
            <div className="heading">
                <h1>Popular Books</h1>
            </div>
            
            <div className="cardsarea">
                {displayedBooks.length > 0 ? (
                        displayedBooks.map((book) => (
                        <div className="cards" key={book.id}>
                            <div className="card-image">
                                <img src={`http://localhost:5000/uploads/${book.image}`} alt={book.title} />
                            </div>
                            <div className="details">
                                <h3>{book.title}</h3>
                                <h4>{book.author}</h4>
                                <h4>Published: {formatDate(book.publisheddate)}</h4>
                                <div className="buttons">
                                    <Link onClick={() => {readbook(book._id , "view")}} ><FontAwesomeIcon icon={faEye} /></Link>
                                    <Link onClick={() => {readbook(book._id , "edit")}} ><FontAwesomeIcon icon={faPen} /></Link>
                                    <Link onClick={() => {deletebook(book._id)}} ><FontAwesomeIcon icon={faTrash} /></Link>
                                </div>
                            </div>
                        </div>
                    ))): (
                <p>No books available.</p>
            )}
            </div>
                {visibleRows * booksPerRow < books.length && (
                <div className="heading">
                    <button onClick={loadMore}>Load More</button>
                </div>
            )}
        </div>

        <div className="whatwehave" id="whatwehave" data-aos="fade-up">
            <div className="content">
                <h1 >What We Have</h1>
                <h4>"Discover a world of stories at your fingertips with our online bookstore."</h4>
                <p>
                   An online bookstore offers readers the convenience of browsing and purchasing books from home at any time. With a vast       
                   selection spanning various genres, it caters to diverse tastes and needs. Detailed descriptions, reviews, and ratings help 
                   customers make informed choices. Offering formats like eBooks and audiobooks, online bookstores enhance accessibility. The 
                   convenience of home delivery, pre-orders, and finding rare books adds to their appeal. Personalized recommendations and frequent 
                   discounts make buying books online an enjoyable and economical experience, blending the joy of discovering new reads with modern 
                   convenience.
                </p>
                <button><ScrollLink to="contactus" smooth={true} duration={500}>Contact Us</ScrollLink></button>
            </div>
            <div className="image">
                <img src={Image3} alt="image3" />
            </div>
        </div>

        <div className="contactus">
            <div className="heading">
                <h1>Contact Us </h1>
            </div>
            <div className="box">
                <div className="box-in">
                    <span>Online bookstore</span>
                    <h1>"Read books here and share your views with us!"</h1>
                    <form>
                        <input type="email" name="email" />
                    </form>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Body;
