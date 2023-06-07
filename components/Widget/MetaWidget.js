import React from 'react';
import Link from 'next/link';

const MetaWidget = () => {
    return (
        <div className="recent-posts mb-50">
            <h3 className="widget-title">Meta</h3>
            <ul>
                <li><Link href="/login">Log in</Link></li>
                <li><Link href="#">Entries feed</Link></li>
                <li><Link href="#">Comments feed</Link></li>
                <li><Link href="#">WordPress.org</Link></li>
            </ul>
        </div>
    )
}

export default MetaWidget;