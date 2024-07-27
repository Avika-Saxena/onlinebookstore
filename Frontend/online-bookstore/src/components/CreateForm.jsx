import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function CreateForm() {
    const navigate = useNavigate();
    const [formdata,setformdata] = useState({
        title:'',
        author:'',
        publisheddate:'',
        description:'',
        image: ''
    });
    const [charCount, setCharCount] = useState(0);
    const maxCharLimit = 400;     

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value, files } = e.target;
        if (name === 'description' && value.length > maxCharLimit)
        return;

        setformdata({
            ...formdata,
            [name]: name === 'image' ? files[0] : value
        });

        if (name === 'description') {
            setCharCount(value.length);
        }
    }

    const onsubmitaddBook = async (e) => {
        e.preventDefault();
        try{
            console.log("formdata is :",formdata)
            const response =await axios.post('http://localhost:5000/create',formdata,{
                headers :{
                    'content-type' : 'multipart/form-data'
                }
            });
            console.log(response.data);
            if(response.data.status === "error")
                alert(response.data.message);

            else{
                alert(response.data.message);
                navigate('/')
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
            <h1>Add Book</h1>
            <form onSubmit={onsubmitaddBook} encType="multipart/form-data">
                <label>
                    <span>Title :</span>
                    <input type="text" name="title" onChange={handleInputChange} placeholder="Enter Title" required/>
                </label>
                <label>
                    <span>Author :</span>
                    <input type="text" name="author" onChange={handleInputChange} placeholder="Enter Author Name" required/>
                </label>
                <label>
                    <span>Date :</span>
                    <input type="date" name="publisheddate" onChange={handleInputChange} placeholder="Enter Publishe Date" required />
                </label>
                <label>
                    <span>Image :</span>
                    <input type="file" accept='image/*' name="image" onChange={handleInputChange} placeholder="Enter Image" required />
                </label>
                <label>
                    <span>Description :</span>
                    <textarea name="description" onChange={handleInputChange} maxLength={maxCharLimit} placeholder="Enter upto 300 characters" required></textarea>
                </label>
                <input type="submit" className="submit"/>
            </form>
        </div>
    </div>
    </>
  );
}

export default CreateForm;
