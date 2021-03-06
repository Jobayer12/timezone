import React, {Component} from 'react';
import Logo from '../../../assets/img/logo/logo.png';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header-area">
                        <div className="main-header header-sticky">
                            <div className="container-fluid">
                                <div className="menu-wrapper">
                                    <div className="logo">
                                        <a href="/"><img src={Logo} alt=""/></a>
                                    </div>
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><a href="/">Home</a></li>
                                                <li><a href="#">shop</a></li>
                                                <li><a href="#">about</a></li>
                                                <li className="hot"><a href="#">Latest</a>
                                                    <ul className="submenu">
                                                        <li><a href="#"> Product list</a></li>
                                                        <li><a href="#"> Product Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="#">Blog</a></li>
                                                        <li><a href="#">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Pages</a>
                                                    <ul className="submenu">
                                                        <li><a href="#">Login</a></li>
                                                        <li><a href="#">Cart</a></li>
                                                        <li><a href="#">Element</a></li>
                                                        <li><a href="#">Confirmation</a></li>
                                                        <li><a href="#">Product Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-right">
                                        <ul>
                                            <li>
                                                <div className="nav-search search-switch">
                                                    <span className="flaticon-search"/>
                                                </div>
                                            </li>
                                            <li><a href="/"><span className="flaticon-user"/></a></li>
                                            <li><a href="/"><span className="flaticon-shopping-cart"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;