import React, { useState, useEffect } from 'react';
import MenuItems from './MenuItems';
import RSMobileMenu from './RSMobileMenu';
import CanvasMenu from './CanvasMenu';
import TopHeader from './TopBar';
import Link from 'next/link';

const normalLogo = '/img/logo/lite-logo.png';
const darkLogo = '/img/logo/dark-logo.png';

const productImg1 = '/img/shop/1.jpg';
const productImg2 = '/img/shop/2.jpg';


const Header = (props) => {
	const { headerClass, parentMenu, secondParentMenu, activeMenu, headerNormalLogo, headerStickyLogo, mobileNormalLogo, mobileStickyLogo, TopBar, TopBarClass, emailAddress, phoneNumber, Location, CanvasLogo, CanvasClass } = props;
	const [menuOpen, setMenuOpen] = useState(false)

	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const searchModalAdd = () => {
		document.body.classList.add('modal-open');
	};

	const canvasMenuAdd = () => {
		document.body.classList.add('nav-expanded');
	};

	return (
		<React.Fragment>
			<div className={headerClass ? headerClass : 'full-width-header home8-style4 main-home'}>
				<header id="rs-header" className='rs-header'>
					{
						TopBar ? <TopHeader topBarClass={TopBarClass} emailAddress={emailAddress} phoneNumber={phoneNumber} Location={Location} /> : ""
					}

					<div className={isVisible ? 'menu-area menu-sticky sticky' : 'menu-area menu-sticky'}>
						<div className="container">
							<div className="row y-middle">
								<div className="col-lg-2">
									<div className="logo-area hidden-md">
										<Link href="/">
											<img className="normal-logo" src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" />
											<img className="sticky-logo" src={headerStickyLogo ? headerStickyLogo : darkLogo} alt="" />
										</Link>
									</div>
								</div>
								<div className="col-lg-8 text-end">
									<div className="rs-menu-area">
										<div className="main-menu">
											<div className="mobile-menu md-display-block">
												<Link href="/" className="mobile-normal-logo"><img className="normal-logo" src={mobileNormalLogo ? mobileNormalLogo : normalLogo} alt="" /></Link>
												<Link href="/" className="mobile-sticky-logo"><img src={mobileNormalLogo ? mobileNormalLogo : darkLogo} alt="logo" /></Link>
												<Link href="#" className="rs-menu-toggle" onClick={() => {
													setMenuOpen(!menuOpen)
												}}>
													<i className="fa fa-bars"></i>
												</Link>
											</div>
											<nav className="rs-menu hidden-md">
												<ul className="nav-menu">
													<MenuItems
														parentMenu={parentMenu}
														secondParentMenu={secondParentMenu}
														activeMenu={activeMenu}
													/>
												</ul>
											</nav>
										</div>
									</div>
								</div>
								<div className="col-lg-2 relative text-end hidden-md">
									<div className="expand-btn-inner search-icon">
										<ul className="expand-items">
											<li className="sidebarmenu-search">
												<Link href="#" onClick={searchModalAdd} className="rs-search" >
													<i className="flaticon-search"></i>
												</Link>
											</li>
											<li className="user-icon cart-inner no-border mini-cart-active">
												<Link href="#"><i className="fa fa-shopping-bag"></i></Link>
												<div className="woocommerce-mini-cart text-left">
													<div className="cart-bottom-part">
														<ul className="cart-icon-product-list">
															<li className="display-flex">
																<div className="icon-cart">
																	<Link href="#"><i className="fa fa-times"></i></Link>
																</div>
																<div className="product-info">
																	<Link href="/shop/cart">Law Book</Link><br />
																	<span className="quantity">1 × $30.00</span>
																</div>
																<div className="product-image">
																	<Link href="/shop/cart"><img src={productImg1} alt="Product Image" /></Link>
																</div>
															</li>
															<li className="display-flex">
																<div className="icon-cart">
																	<Link href="#"><i className="fa fa-times"></i></Link>
																</div>
																<div className="product-info">
																	<Link href="/shop/cart">Spirit Level</Link><br />
																	<span className="quantity">1 × $30.00</span>
																</div>
																<div className="product-image">
																	<Link href="/shop/cart"><img src={productImg2} alt="Product Image" /></Link>
																</div>
															</li>
														</ul>

														<div className="total-price text-center">
															<span className="subtotal">Subtotal:</span>
															<span className="current-price">$85.00</span>
														</div>

														<div className="cart-btn text-center">
															<Link className="crt-btn btn1" href="/shop/cart">View Cart</Link>
															<Link className="crt-btn btn2" href="/shop/checkout">Check Out</Link>
														</div>
													</div>
												</div>
											</li>
											<li className="user-icon last-icon hidden-lg">
												<Link href="/shop/my-account"><i className="fa fa-user-o" aria-hidden="true"></i></Link>
											</li>
											<li>
												<a onClick={canvasMenuAdd} id="nav-expander" className="nav-expander" href="#">
													<span className="dot1"></span>
													<span className="dot2"></span>
													<span className="dot3"></span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<RSMobileMenu 
						menuOpen={menuOpen} 
						setMenuOpen={setMenuOpen} 
						parentMenu={parentMenu} 
						secondParentMenu={secondParentMenu}
					/>
					<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
				</header>
				<CanvasMenu
					canvasClass={CanvasClass ? CanvasClass : "right_menu_togle orange_color hidden-md"}
					canvasLogo={CanvasLogo ? CanvasLogo : darkLogo}
				/>
			</div>
		</React.Fragment>
	);
}

export default Header;