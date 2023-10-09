import React from 'react';
import Logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* 1st */}
            <div className='container mx-auto' >
                <div className="navbar">
                    {/* nav start */}
                    <div className="flex-1 navbar-start">
                        <img style={{width: '60px'}} src={Logo} alt="" />
                        <p className="font-bold normal-case text-3xl">Laptop Land</p>
                    </div>
                    {/* nav end */}
                    <div className="navbar-end flex-none">
                        <ul className="menu menu-horizontal  px-1">
                        <li><Link>Dashboard</Link></li>
                        <li>  </li>
                        <li>
                            <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                            </details>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 2nd */}
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
        </div>
            
            
        </div>
    );
};

export default Header;