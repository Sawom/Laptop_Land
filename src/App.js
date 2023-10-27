import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home/Home';
import About from './Pages/Aboutpage/About';
import FAQSPage from './Pages/FAQSPage/FAQSPage';
import TermsPages from './Pages/TermsPages/TermsPages';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Laptops from './Pages/LaptopPage/Laptops/Laptops';
// tanstack query
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
import DashboardPage from './Pages/Dashboard/DashboardPage/DashboardPage';
import UserHome from './Pages/Dashboard/UserHome/UserHome';
import AdminHome from './Pages/Dashboard/AdminHome/AdminHome';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import AddReviews from './Pages/Dashboard/AddReviews/AddReviews';
import ManageAllProducts from './Pages/Dashboard/ManageAllProducts/ManageAllProducts';
import ManageUsers from './Pages/Dashboard/ManageUsers/ManageUsers';
import Payment from './Pages/Dashboard/Payment/Payment';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AdminRoute from './Pages/Dashboard/AdminRoute/AdminRoute';
import UpdateProduct from './Pages/Dashboard/UpdateProduct/UpdateProduct';
import CustomerReview from './Pages/CustomerReview/CustomerReview';
import ManageReview from './Pages/Dashboard/ManageReview/ManageReview';
import MyBooking from './Pages/Dashboard/MyBooking/MyBooking';
import PaymentHistory from './Pages/Dashboard/PaymentHistory/PaymentHistory';
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
                <Route path='/creview' element={ <CustomerReview></CustomerReview> } ></Route>
                <Route path='laptopinfo/:id' element={ <LaptopDetails></LaptopDetails> } ></Route>

                {/* private route: BookingPage */}
                <Route path='booking/:id' element={ 
                  <PrivateRoute>
                    <BookingPage></BookingPage>
                  </PrivateRoute>
                } ></Route>

                {/* private route & nested route: DashboardPage */}
                <Route path='/dashboard' element={
                  <PrivateRoute>
                      <DashboardPage></DashboardPage>
                  </PrivateRoute>
                }>
                  <Route path='userhome' element={ <UserHome></UserHome> } ></Route>
                  <Route path='addreviews' element={ <AddReviews></AddReviews> } ></Route>
                  <Route path='myorder' element={ <MyOrders></MyOrders> } ></Route>
                  <Route path='mybooking' element={ <MyBooking></MyBooking> } ></Route>
                  <Route path='payment' element={ <Payment></Payment> } ></Route>
                  <Route path='phistory' element={ <PaymentHistory></PaymentHistory> } ></Route>
                  
                  {/* admin route: admin_home */}
                  <Route path='adminhome' element={ 
                    <AdminRoute>
                        <AdminHome></AdminHome>
                    </AdminRoute>
                   } ></Route>

                  {/* admin route: manage all product */}
                  <Route path='manageproduct' element={
                    <AdminRoute>
                      <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                      } ></Route>

                  {/* admin route: add_product */}
                  <Route path='addproduct' element={
                    <AdminRoute>
                        <AddProducts></AddProducts> 
                    </AdminRoute>
                     } ></Route>
                     
                  {/* admin route: manage all review */}
                  <Route path='managereview' element={
                    <AdminRoute>
                      <ManageReview></ManageReview>
                    </AdminRoute>
                  } ></Route>
                  
                  {/* admin route: update product */}
                  <Route path='manageproduct/update/:id' element={
                    <AdminRoute>
                      <UpdateProduct></UpdateProduct>
                    </AdminRoute>
                  } ></Route>

                  {/* admin route: manage user */}
                  <Route path='manageuser' element={ 
                    <AdminRoute>
                      <ManageUsers></ManageUsers>
                    </AdminRoute>
                   } ></Route>
                  
                </Route>
                {/* end dashboard page route */}

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