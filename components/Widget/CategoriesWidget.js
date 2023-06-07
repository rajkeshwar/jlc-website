import React from 'react';
import Link from 'next/link';

const CategoriesWidget = () => {
    return (
        <div className="widget-archives mb-50">
            <h3 className="widget-title">Categories</h3>
            <ul>
                <li><Link href="/blog">College</Link></li>
                <li><Link href="/blog">High School</Link></li>
                <li><Link href="/blog">Primary</Link></li>
                <li><Link href="/blog">School</Link></li>
                <li><Link href="/blog">University</Link></li>
            </ul>
        </div>
    )
}

export default CategoriesWidget;