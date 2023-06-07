import React from 'react';
import SinglePostSidebar from './_SinglePostSidebar';
import SinglePostSix from '@/components/Blog/SinglePostSix';

const blogImg1 = '/img/blog/inner/1.jpg'
const blogImg2 = '/img/blog/inner/2.jpg'
const blogImg3 = '/img/blog/inner/3.jpg'
const blogImg4 = '/img/blog/inner/4.jpg'
const blogImg5 = '/img/blog/inner/5.jpg'
const blogImg6 = '/img/blog/inner/6.jpg'
const blogImg7 = '/img/blog/inner/7.jpg'
const blogImg8 = '/img/blog/inner/8.jpg'

const BlogMain = () => {

    return (
        <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 order-last">
                        <div className="widget-area">
                            <SinglePostSidebar />
                        </div>
                    </div>

                    <div className="col-lg-8 pr-50 md-pr-16">
                        <div className='row'>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage={blogImg1}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='University while the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage={blogImg2}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='High school program starting soon 2021'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage={blogImg3}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='Modern School the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage={blogImg4}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='While the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage={blogImg5}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='This is a great source of content for anyone…'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage={blogImg6}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='While the lovely valley team work'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12 mb-70 md-mb-50'>
                                <SinglePostSix
                                    blogImage={blogImg7}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='The Expenses You Are Thinking'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                            <div className='col-lg-12'>
                                <SinglePostSix
                                    blogImage={blogImg8}
                                    blogAuthor='Admin'
                                    blogCategory='University'
                                    blogPublishedDate='January 21, 2022'
                                    blogTitle='This is a great source of content for anyone…'
                                    blogDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '
                                    blogButtonClass='blog-button'
                                    blogButtonText='Continue Reading'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogMain;