
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Header/Blog/Blog';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Sevices/Services';

function App() {
  return (
    <div >
     <Header></Header>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/contact' element={ 
               <Contact></Contact>

          }></Route>
         
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
