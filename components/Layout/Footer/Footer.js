import React from 'react';
import Link from 'next/link';
import FooterBottom from './FooterBottom';
 
const Footer = (props) => {
    const { footerLogo, footerClass, footerTopClass } = props;
    return (
        <footer className={footerClass ? footerClass : 'rs-footer'}>
            <div className={`footer-top ${footerTopClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <div className="footer-logo mb-30">
                                <Link href="/">
                                    <img src={footerLogo ? footerLogo : `img/logo/logo.png`} alt="Logo" />
                                </Link>
                            </div>
                            <div className="textwidget pr-60 md-pr-14">
                                <p>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque denounce with illo inventore veritatis</p>
                            </div>
                            <ul className="footer_social">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-pinterest"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget md-mb-50">
                            <h3 className="widget-title">Address</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">374 William S Canning Blvd, River MA 2721, USA</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc"><a href="tel:(+880)155-69569">(+880)155-69569</a></div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc"><a href="mailto:support@rstheme.com">support@rstheme.com</a></div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pl-50 md-pl-14 footer-widget md-mb-50">
                            <h3 className="widget-title">Courses</h3>
                            <ul className="site-map">
                                <li><Link href="/course">Courses</Link></li>
                                <li><Link href="/course-2">Course Two</Link></li>
                                <li><Link href="/course/course-single">Single Course</Link></li>
                                <li><Link href="/shop/my-account">Profile</Link></li>
                                <li><Link href="/login">Login</Link>/<Link href="/register">Register</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                            <h3 className="widget-title">Recent Posts</h3>
                            <div className="recent-post mb-20">
                                <div className="post-img">
                                    <img src={`img/blog/post1.jpg`} alt="blog image" />
                                </div>
                                <div className="post-item">
                                    <div className="post-desc">
                                        <Link href="/blog/single-post-right-sidebar">High school program starting soon 2021</Link>
                                    </div>
                                    <span className="post-date">
                                        <i className="fa fa-calendar-check-o"></i>
                                        October 15, 2020
                                    </span>
                                </div>
                            </div>
                            <div className="recent-post mb-20">
                                <div className="post-img">
                                    <img src={`img/blog/post2.jpg`} alt="blog image" />
                                </div>
                                <div className="post-item">
                                    <div className="post-desc">
                                        <Link href="/blog/single-post-right-sidebar">Shutdown of schools extended to Aug 31 </Link>
                                    </div>
                                    <span className="post-date">
                                        <i className="fa fa-calendar-check-o"></i>
                                        April 25, 2020
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;