
import React from 'react';
import { Helmet } from 'react-helmet';
import BlogMain from './_BlogMain';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import Newsletter from '@/components/Common/Newsletter';
import ScrollToTop from '@/components/Common/ScrollTop';
import OffWrap from '@/components/Layout/Header/OffWrap';
import SiteBreadcrumb from '@/components/Common/Breadcumb';
import SearchModal from '@/components/Layout/Header/SearchModal';

// Image
const favIcon = '/img/fav-orange.png';
const Logo = '/img/logo/dark-logo.png';
const footerLogo = '/img/logo/lite-logo.png';
const bannerbg = '/img/breadcrumbs/2.jpg';

const Blog = () => {
    return (
        <React.Fragment>
            {/* <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet> */}
            <OffWrap />
            <Header
                parentMenu='blog'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar='enable'
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA'
            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Blog"
                pageName="Blog"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-End */}

            {/* Blog Main */}
            <BlogMain />
            {/* Blog Main End */}

            <Newsletter
                sectionClass="rs-newsletter style1 orange-style mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}

            {/* <SearchModal /> */}
        </React.Fragment>
    );
}


export default Blog;

