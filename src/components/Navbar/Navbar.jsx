import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>

            <div className='navbarContainer'>
                <div className='topNav'>
                    <div className='left'>
                        <div>GLOBAL SHOP</div>
                        <div>ELDER</div>
                        <div>ABOUT US</div>
                        <div>STORE</div>
                    </div>
                    <div className='middle'>
                        HELIOS
                    </div>
                    <div className='right'>
                        <div>
                            icon
                        </div>
                        <div>
                            icon
                        </div>
                        <div>
                            icon
                        </div>
                    </div>
                </div>

                <div className='bottomNav'>
                    <div>JEWELRY</div>
                    <div>NOEL GIFT</div>
                    <div>COLLECTIONS</div>
                    <div>ACCESSORIES</div>
                    <div>EYEWEAR</div>
                    <div>SALE OFF</div>
                </div>

            </div>
        </>


    );
}

export default Navbar;
