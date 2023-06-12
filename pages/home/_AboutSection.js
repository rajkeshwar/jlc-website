import React from 'react';

const About = () => {

    return (
        <div id="rs-about" className="rs-about style1 pb-100 md-pb-70">
            <div className="container">
            <div className="row">
                    <div className="col-lg-4 order-last">
                        <div className="notice-bord style1">
                            <h4 className="title">Notice Board</h4>
                            <ul>
                                <li>
                                    <div className="date"><span>2nd</span>July</div>
                                    <div className="desc">Free Master Class <br/> Timings 9.00A.M - 1.30P.M</div>
                                </li>
                                <li>
                                    <div className="date"><span>9th</span>July</div>
                                    <div className="desc">Free Master Class <br/> Timings 9.00A.M - 1.30P.M</div>
                                </li>
                                <li>
                                    <div className="date"><span>13th</span>July</div>
                                    <div className="desc">New Java Full Stack Batch Starts <br/> Timings 3.00P.M - 8.30P.M</div>
                                </li>
                                <li>
                                    <div className="date"><span>5th</span>Aug</div>
                                    <div className="desc">Free Master Class <br/> Timings 9.00A.M - 1.30P.M</div>
                                </li>
                                <li>
                                    <div className="date"><span>13th</span>Aug</div>
                                    <div className="desc">Free Master Class <br/> Timings 9.00A.M - 1.30P.M</div>
                                </li>
                                <li>
                                    <div className="date"><span>21st</span>Aug</div>
                                    <div className="desc">New Java Full Stack Batch Starts <br/> Timings 9.00A.M - 1.30P.M</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 pr-50 md-pr-14">
                        <div className="about-part">
                            <div className="sec-title mb-40">
                                <div className="sub-title primary">About Us</div>
                                <h2 className="title">Learn Industry Relevant Real-World Programming Skills with Best Trainer &nbsp; - Srinivas Dande</h2>
                                <div className="desc">Srinivas Dande having 18+ Years of Industry Experience in Software Design , development and Training. </div>
                                <div className="desc">Trained 25,000+ Students since 2005 on various skills - Java Full Stack, MERN Stack MEAN Stack, AWS , DevOPs, Python, Big Data and Hadoop, Sprak and Scala MicroServices, Data Structures and Algorithms</div>
                                <div className="desc">One and Only One Trainer at JLC to train all courses so that You can learn all coursrs in the same pace.. </div>
                            </div>
                            <div className="sign-part">
                                <div className="img-part">
                                    <img src="img/about/ceo.png" alt="CEO Image" />
                                </div>
                                <div className="author-part">
                                    <span className="sign mb-10">
                                        <img src="img/about/sign.png" alt="Sign" />
                                    </span>
                                    <span className="post">Training Architect</span>
                                    <span className="post">@ Java Learning Center</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default About;