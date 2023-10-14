import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home/Home';
import About from './Pages/Aboutpage/About';
import FAQSPage from './Pages/FAQSPage/FAQSPage';
import TermsPages from './Pages/TermsPages/TermsPages';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Laptops from './Pages/LaptopPage/Laptops/Laptops';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import LaptopDetails from './Pages/LaptopPage/LaptopDetails/LaptopDetails';
import BookingPage from './Pages/BookingPage/BookingPage';
import AuthProvider from './Pages/Authentication/AuthProvider/AuthProvider';
import Register from './Pages/Authentication/Register/Register';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <AuthProvider>
        <QueryClientProvider client={queryClient} >
          <BrowserRouter>
            <Header></Header>
              <Routes>
                <Route path='/' element={ <Home></Home> } ></Route>
                <Route path='/home' element={ <Home></Home> } ></Route>
                <Route path='/about' element={ <About></About> } ></Route>
                <Route path='/faq' element={ <FAQSPage></FAQSPage> } ></Route>
                <Route path='/terms' element={ <TermsPages></TermsPages> } ></Route>
                <Route path='/laptops' element={ <Laptops></Laptops> } ></Route>
                <Route path='laptopinfo/:id' element={ <LaptopDetails></LaptopDetails> } ></Route>
                {/* private route */}
                <Route path='booking/:id' element={ 
                  <PrivateRoute>
                    <BookingPage></BookingPage>
                  </PrivateRoute>
                 } ></Route>
                <Route path='/register' element={ <Register></Register> } ></Route>
                <Route path='/login' element={ <Login></Login> } ></Route>
              </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
       
    </div>
  );
}

export default App;