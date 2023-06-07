import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-10">
                        <div className="copyright md-mb-0">
                            <p>© 2022 All Rights Reserved. Designed By <a href="https://rstheme.com/" target="_blank">RSTheme</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end md-text-left">
                        <ul className="copy-right-menu">
                            <li><Link href="/event" as="/event">Event</Link></li>
                            <li><Link href="/blog" as="/blog">Blog</Link></li>
                            <li><Link href="/contact" as="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;