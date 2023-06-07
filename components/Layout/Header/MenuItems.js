import LinkAnchor from '@/components/Common/LinkAnchor';
import React, { useEffect } from 'react';

const MenuItems = (props) => {
    const { parentMenu, secondParentMenu } = props;

    let location = {};

    useEffect(() => {
        location = window.location;
    }, []);

    return (
        <React.Fragment>
            <li className={parentMenu === 'home' ? 'rs-mega-menu menu-item-has-children current-menu-item' : 'rs-mega-menu menu-item-has-children'}><LinkAnchor to="/">Home</LinkAnchor>
                <ul className="mega-menu">
                    <li className="mega-menu-container">
                        <div className="single-megamenu">
                            <ul className="sub-menu">
                                <li>
                                    <LinkAnchor to="/" className={location.pathname === "/" ? "active-menu" : ""}>Main Demo</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-2" className={location.pathname === "/home-2" ? "active-menu" : ""}>Online Course</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-3" className={location.pathname === "/home-3" ? "active-menu" : ""}>University 01</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-4" className={location.pathname === "/home-4" ? "active-menu" : ""}>E-Learning</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-5" className={location.pathname === "/home-5" ? "active-menu" : ""}>Distance Learning</LinkAnchor>
                                </li>
                            </ul>
                        </div>
                        <div className="single-megamenu">
                            <ul className="sub-menu">
                                <li>
                                    <LinkAnchor to="/home-6" className={location.pathname === "/home-6" ? "active-menu" : ""}>Personal Demo</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-7" className={location.pathname === "/home-7" ? "active-menu" : ""}>Online Training</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-8" className={location.pathname === "/home-8" ? "active-menu" : ""}>Online Learning</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-10" className={location.pathname === "/home-10" ? "active-menu" : ""}>University 02</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-12" className={location.pathname === "/home-12" ? "active-menu" : ""}>Freelancing Course</LinkAnchor>
                                </li>
                            </ul>
                        </div>
                        <div className="single-megamenu">
                            <ul className="sub-menu">
                                <li>
                                    <LinkAnchor to="/home-14" className={location.pathname === "/home-14" ? "active-menu" : ""}>Courses Archive</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-9" className={location.pathname === "/home-9" ? "active-menu" : ""}>Coming Soon</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-11" className={location.pathname === "/home-11" ? "active-menu" : ""}>Coming Soon</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-13" className={location.pathname === "/home-13" ? "active-menu" : ""}>Coming Soon</LinkAnchor>
                                </li>
                                <li>
                                    <LinkAnchor to="/home-15" className={location.pathname === "/home-15" ? "active-menu" : ""}>Coming Soon</LinkAnchor>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'about' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <LinkAnchor to="#">About</LinkAnchor>
                <ul className="sub-menu">
                    <li>
                        <LinkAnchor to="/about" className={location.pathname === "/about" ? "active-menu" : ""}>About One</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/about-2" className={location.pathname === "/about-2" ? "active-menu" : ""}>About Two</LinkAnchor>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'course' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <LinkAnchor to="#" as="#">Courses</LinkAnchor>
                <ul className="sub-menu">
                    <li>
                        <LinkAnchor to="/course" className={location.pathname === "/course" ? "active-menu" : ""}>Courses One</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/course-2" className={location.pathname === "/course-2" ? "active-menu" : ""}>Courses Two</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/course-3" className={location.pathname === "/course-3" ? "active-menu" : ""}>Courses Three</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/course-4" className={location.pathname === "/course-4" ? "active-menu" : ""}>Courses Four</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/course-5" className={location.pathname === "/course-5" ? "active-menu" : ""}>Courses Five</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/course-6" className={location.pathname === "/course-6" ? "active-menu" : ""}>Courses Six</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/course/course-single" className={location.pathname === "/course/course-single" ? "active-menu" : ""}>Courses Single</LinkAnchor>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'pages' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <LinkAnchor to="#">Pages</LinkAnchor>
                <ul className="sub-menu">
                    <li>
                        <LinkAnchor to="#" className={secondParentMenu === 'team' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Team</LinkAnchor>
                        <ul className="sub-menu">
                            <li>
                                <LinkAnchor to="/team" className={location.pathname === "/team" ? "active-menu" : ""}>Team One</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/team-2" className={location.pathname === "/team-2" ? "active-menu" : ""}>Team Two</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/team/team-single" className={location.pathname === "/team/team-single" ? "active-menu" : ""}>Team Single</LinkAnchor>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkAnchor to="#" className={secondParentMenu === 'event' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Event</LinkAnchor>
                        <ul className="sub-menu">
                            <li>
                                <LinkAnchor to="/event" className={location.pathname === "/event" ? "active-menu" : ""}>Event One</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/event-2" className={location.pathname === "/event-2" ? "active-menu" : ""}>Event Two</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/event-3" className={location.pathname === "/event-3" ? "active-menu" : ""}>Event Three</LinkAnchor>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkAnchor to="#" className={secondParentMenu === 'gallery' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Gallery</LinkAnchor>
                        <ul className="sub-menu">
                            <li>
                                <LinkAnchor to="/gallery" className={location.pathname === "/gallery" ? "active-menu" : ""}>Gallery One</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/gallery-2" className={location.pathname === "/gallery-2" ? "active-menu" : ""}>Gallery Two</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/gallery-3" className={location.pathname === "/gallery-3" ? "active-menu" : ""}>Gallery Three</LinkAnchor>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkAnchor to="#" className={secondParentMenu === 'shop' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Shop</LinkAnchor>
                        <ul className="sub-menu">
                            <li>
                                <LinkAnchor to="/shop" className={location.pathname === "/shop" ? "active-menu" : ""}>Shop</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/shop/shop-single" className={location.pathname === "/shop/shop-single" ? "active-menu" : ""}>Shop Single</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/shop/cart" className={location.pathname === "/shop/cart" ? "active-menu" : ""}>Cart</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/shop/checkout" className={location.pathname === "/shop/checkout" ? "active-menu" : ""}>Checkout</LinkAnchor>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkAnchor to="#" className={secondParentMenu === 'others' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Others</LinkAnchor>
                        <ul className="sub-menu">
                            <li>
                                <LinkAnchor to="/faq" className={location.pathname === "/faq" ? "active-menu" : ""}>FAQ</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/error" className={location.pathname === "/error" ? "active-menu" : ""}>404 Page</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/login" className={location.pathname === "/login" ? "active-menu" : ""}>Login</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/register" className={location.pathname === "/register" ? "active-menu" : ""}>Register</LinkAnchor>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'blog' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <LinkAnchor to="#">Blog</LinkAnchor>
                <ul className="sub-menu">
                    <li>
                        <LinkAnchor to="/blog" className={location.pathname === "/blog" ? "active-menu" : ""}>Blog</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="#" className={secondParentMenu === 'blogSidebar' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Blog Sidebar</LinkAnchor>
                        <ul className="sub-menu">
                            <li>
                                <LinkAnchor to="/blog/blog-left-sidebar" className={location.pathname === "/blog/blog-left-sidebar" ? "active-menu" : ""}>Blog Left Sidebar</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/blog/blog-right-sidebar" className={location.pathname === "/blog/blog-right-sidebar" ? "active-menu" : ""}>Blog Right Sidebar</LinkAnchor>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkAnchor to="#" className={secondParentMenu === 'blogSingle' ? 'menu-item-has-children active-menu' : 'menu-item-has-children'}>Single Post</LinkAnchor>
                        <ul className="sub-menu">
                            <li>
                                <LinkAnchor to="/blog/single-post-left-sidebar" className={location.pathname === "/blog/single-post-left-sidebar" ? "active-menu" : ""}>Post Left Sidebar</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/blog/single-post-right-sidebar" className={location.pathname === "/blog/single-post-right-sidebar" ? "active-menu" : ""}>Post Right Sidebar</LinkAnchor>
                            </li>
                            <li>
                                <LinkAnchor to="/blog/single-post-full-width" className={location.pathname === "/blog/single-post-full-width" ? "active-menu" : ""}>Full Width Post</LinkAnchor>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'contact' ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <LinkAnchor to="#">
                    Contact
                </LinkAnchor>
                <ul className="sub-menu">
                    <li>
                        <LinkAnchor to="/contact" className={location.pathname === "/contact" ? "active-menu" : ""}>Contact One</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/contact-2" className={location.pathname === "/contact-2" ? "active-menu" : ""}>Contact Two</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/contact-3" className={location.pathname === "/contact-3" ? "active-menu" : ""}>Contact Three</LinkAnchor>
                    </li>
                    <li>
                        <LinkAnchor to="/contact-4" className={location.pathname === "/contact-4" ? "active-menu" : ""}>Contact Four</LinkAnchor>
                    </li>
                </ul> 
            </li>
        </React.Fragment>
    );
}

export default MenuItems;