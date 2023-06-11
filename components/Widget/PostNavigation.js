import React from 'react';
import Link from 'next/link';

const PostNavigation = ({ }) => {
    return (
        <div className="ps-navigation">
            <ul>
                <li><Link href="/"><span className="next-link">Next<i className="flaticon-next"></i></span></Link></li>
                <li><Link href="/"><span className="link-text">Soundtrack filma Lady Exclusive Music </span></Link></li>
            </ul>
        </div>
    )
}

export default PostNavigation;