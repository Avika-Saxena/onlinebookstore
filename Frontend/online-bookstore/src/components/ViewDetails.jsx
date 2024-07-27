import {useLocation} from 'react-router-dom'; 
import Navbar from './Navbar.jsx'
import Footer from './Footer'
function ViewDetails() {
    const location = useLocation();
    const {book} = location.state || {};

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

  return (
    <>
        <Navbar></Navbar>
        <div className="detailfield">
            <div className="detailfield-in">
                <div className="image">
                    <img src={`http://localhost:5000/uploads/${book.image}`} alt="Book Cover" />
                </div>
                <div className="content">
                    <h2>{book.title}</h2>
                    <h4>Author : {book.author}</h4>
                    <h4>Published : {formatDate(book.publisheddate) }</h4>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  );
}

export default ViewDetails;

