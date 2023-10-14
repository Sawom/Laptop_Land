import React from 'react';
import Logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../Authentication/useAuth/useAuth';

const Header = () => {
    const {user, logoutUser} = useAuth();

    // use firebase theke ashche
    const logoutFunction =() =>{
        logoutUser();
    }

    return (
        <div>
            {/* 1st part */}
            <div className='container mx-auto' >
                <div className="navbar">
                    {/* nav start */}
                    <div className="flex navbar-start">
                        <img style={{width: '60px'}} src={Logo} alt="" />
                        <p className="font-bold normal-case lg:text-3xl md:text-3xl text-xl">Laptop Land</p>
                    </div>
                </div>
            </div>
            {/* 2nd part */}
            <div className='backgroundstyle'>
                <div className='container mx-auto '>
                <div className="navbar ">
                {/* start */}
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* responsive menu part */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-bold' > <Link to='/home'>Home</Link> </li>
                        <li className='font-bold' > <Link to='/laptops'>Laptops</Link> </li>
                        {/* submenu */}
                       <li tabIndex={0}>
                            <details>
                            <summary className='font-bold'>Features</summary>
                            <ul className="p-2 font-bold">
                                <li> <Link to='/about' >About</Link> </li>
                                <li> <Link to='/faq' >FAQS</Link> </li>
                                <li> <Link to='/terms' >Terms & Condition</Link> </li>
                                {/* <li>  <button className='font-bold'>Logout</button>  </li> */}
                            </ul>
                            </details>
                        </li>
                        {/* user wise will be changed logout dashboard */}
                            {
                                user?.email  ?
                                <ul>
                                    <li className='mx-2'><Link  className="btn btn-sm btn-ghost mx-2" > <span className='text-white'>Dashboard</span> </Link></li>
                                    <li>  <button onClick={logoutFunction}  className='font-bold'>Logout</button>  </li>
                                </ul> 
                                :
                                <li> <Link to='/login' className="btn btn-sm btn-ghost mx-2"> <span className='text-white'>Login</span> </Link> </li>
                            }
                    </ul>
                    </div>
                </div>
                {/* mid side */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold'> <Link to='/home'> <span className='text-white' > Home </span> </Link> </li>
                        <li className='font-bold'> <Link to='/laptops'> <span className='text-white'> Laptops </span> </Link> </li>
                        {/* submenu */}
                        <li tabIndex={0}>
                                <details className='dropdown '>
                                <summary className='font-bold text-white active'> <span className='text-white'>Features</span> </summary>
                                <ul className="p-2 font-bold menu dropdown-content z-[1]">
                                    <li> <Link to='/about' > About </Link> </li>
                                    <li> <Link to='/faq' >FAQS</Link> </li>
                                    <li> <Link to='/terms' >Terms & Condition</Link> </li>
                                </ul>
                                </details>
                        </li>
                    </ul>
                </div>

                {/* nav end */}
                {/* user wise will be changed */}
                <div className='lg:navbar-end hidden lg:flex' >
                        <ul className="menu menu-horizontal  px-1">
                            {
                                user?.email  ?
                                <div>
                                    <li className='mx-2'><Link  className="btn btn-sm btn-ghost mx-2" > <span className='text-white'>Dashboard</span> </Link></li>
                                    <li> <button onClick={logoutFunction} className="btn btn-sm btn-ghost mx-2 "> <span className='text-white'>Logout</span> </button> </li>
                                </div> 
                                :
                                <li> <Link to='/login' className="btn btn-sm btn-ghost mx-2"> <span className='text-white'>Login</span> </Link> </li>
                            }
                            
                        </ul>
                </div>
                
                </div>
            </div>
            </div>
            
            
        </div>
    );
};

export default Header;