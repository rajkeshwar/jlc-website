import React from 'react';
import Link from 'next/link';

const TopHeader = (props) => {
	const { topBarClass, emailAddress, phoneNumber, Location } = props;

    return (
        <div className={topBarClass ? topBarClass : "topbar-area home8-topbar hidden-md"}>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-md-7">
                        <ul className="topbar-contact">
                            {emailAddress ? 
                                <li>
                                    <i className="flaticon-email"></i>
                                    <a href={'mailto:' + emailAddress}>{emailAddress}</a>
                                </li> : ""
                            }
                            {phoneNumber ? 
                                <li>
                                    <i className="flaticon-call"></i>
                                    <a href={'tel:+' + phoneNumber}>{phoneNumber}</a>
                                </li> : ""
                            }
                            {Location ? 
                                <li>
                                    <i className="flaticon-location"></i>
                                    {Location}
                                </li> : ""
                            }
                        </ul>
                    </div>
                    <div className="col-md-5 text-end">
                        <ul className="topbar-right">
                            <li className="login-register">
                                <i className="fa fa-sign-in"></i>
                                <Link href="/login">Login</Link> &nbsp;&nbsp;<Link href="/register">Create Free Account</Link>
                            </li>
                            {/* <li className="btn-part">
                                <Link href="/contact">Apply Now</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;