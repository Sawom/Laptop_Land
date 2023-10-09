import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home/Home';
import About from './Pages/Aboutpage/About';
import FAQSPage from './Pages/FAQSPage/FAQSPage';
import TermsPages from './Pages/TermsPages/TermsPages';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Laptops from './Pages/LaptopPage/Laptops/Laptops';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={ <Home></Home> } ></Route>
          <Route path='/home' element={ <Home></Home> } ></Route>
          <Route path='/about' element={ <About></About> } ></Route>
          <Route path='/faq' element={ <FAQSPage></FAQSPage> } ></Route>
          <Route path='/terms' element={ <TermsPages></TermsPages> } ></Route>
          <Route path='/laptops' element={ <Laptops></Laptops> } ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
