import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-10">
                        <div className="copyright md-mb-0">
                            <p>© 2023 All Rights Reserved. Java Learning Center</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end md-text-left">
                        <ul className="copy-right-menu">
                            <li><Link href="/events" as="/events">Events</Link></li>
                            <li><Link href="/blogs" as="/blogs">Blogs</Link></li>
                            <li><Link href="/contact" as="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;