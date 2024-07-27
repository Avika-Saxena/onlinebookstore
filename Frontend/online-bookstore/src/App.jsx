import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import ViewDetails from './components/ViewDetails.jsx'
import AddBook from './components/CreateForm'
import EditBook from './components/EditForm'
import Aos from 'aos';
import '../node_modules/aos/dist/aos.css'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    Aos.init({
    duration:1000,
    easing: 'ease-in-out'
    });
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<ViewDetails/>} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/editbook" element={<EditBook/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
