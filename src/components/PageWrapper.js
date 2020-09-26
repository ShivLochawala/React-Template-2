import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component{
    render(){
        return(
            <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="canvas-open">
                <i className="icon_menu"></i>
            </div>
            <div className="menu-item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="logo">
                                <Link to="/">
                                    <h3>HR</h3>
                                </Link >
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="nav-menu">
                                <nav className="mainmenu">
                                    <ul>
                                        <li><Link to="/">Home</Link ></li>
                                        <li><Link to="/rooms">Rooms</Link ></li>
                                        <li><Link to="/about-us">About Us</Link ></li>
                                        <li><Link>Pages</Link >
                                            <ul className="dropdown">
                                                <li><Link to="/room-details">Room Details</Link ></li>
                                                <li><Link to="/blog-details">Blog Details</Link ></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/news">News</Link ></li>
                                        <li><Link to="/contact">Contact</Link ></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default PageWrapper;