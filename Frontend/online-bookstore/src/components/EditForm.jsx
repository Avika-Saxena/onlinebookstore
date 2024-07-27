import {useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';

function  EditForm() {

    const navigate = useNavigate();
    const location = useLocation();
    const {book} = location.state || {};

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

     const [formdata, setformdata] = useState({
        title:book.title || '',
        author:book.author || '',
        publisheddate:book.publisheddate  ||'',
        image:book.image || '',
        description:book.description ||''
    });

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name,value,files} = e.target;  

        setformdata({
            ...formdata,
            [name] : name === 'image' ? files[0] : value
        });
    }

    const onsubmiteditBook = async (bookid,e) => {
        e.preventDefault()
        try{
             console.log("formdata is :",formdata)
            const response = await axios.post(`http://localhost:5000/update/${bookid}`,formdata,{
                headers : {
                    'content-type' : 'multipart/form-data'
                }
            });
            console.log(response.data);
            if(response.data.status === "error")
                alert(response.data.message);
            else
            {
                alert(response.data.message);
                navigate('/');
            }
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <>
    <div className="formbox">
        <div className="formbox-in">
            <h1>Edit Book</h1>
            <form onSubmit={(e) => {onsubmiteditBook(book._id,e)}} encType ='multipart/form-data'>
                <label>
                    <span>Title :</span>
                    <input type="text" name="title" value={formdata.title} onChange={handleInputChange} />
                </label>
                <label>
                    <span>Author :</span>
                    <input type="text" name="author" value={formdata.author} onChange={handleInputChange}/>
                </label>
                <label>
                    <span>Date :</span>
                    <input type="text" name="publisheddate" value={formatDate(formdata.publisheddate)} onChange={handleInputChange}/>
                </label>
                <label>
                    <span>Date :</span>
                    <input type="file" accept='image/*' name="image" onChange={handleInputChange}/>
                </label>
                <label>
                    <span>Description :</span>
                    <textarea name="description" onChange={handleInputChange}>{book.description}</textarea>
                </label>
                <input type="submit" className="submit"/>
            </form>
        </div>
    </div>
    </>
  );
}

export default  EditForm;
