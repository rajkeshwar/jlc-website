import React from 'react';
// import { Helmet } from 'react-helmet';
import BlogDetails from './_BlogDetails';
import SinglePostSidebar from './_SinglePostSidebar';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import OffWrap from '../../components/Layout/Header/OffWrap';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SearchModal from '../../components/Layout/Header/SearchModal';

// Image
// import favIcon from '../../assets/img/fav-orange.png';
import Logo from '../../assets/img/logo/dark-logo.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

// Breadcrumbs Background Image
import bannerbg from '../../assets/img/breadcrumbs/6.jpg';

const SinglePostFullWidth = () => {

    return (
        <React.Fragment>
            {/* <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet> */}
            <OffWrap />
            <Header
                parentMenu='blog'
                secondParentMenu='blogSingle'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
                CanvasLogo={Logo}
                mobileNormalLogo={Logo}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar='enable'
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />

            <SiteBreadcrumb
                pageTitle="Single Post Full Width"
                pageName="Blog"
                breadcrumbsImg={bannerbg}
            />

            {/* Blog Details Start */}
            <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <BlogDetails />
                </div>
            </div>
            {/* Blog Details End */}

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
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

            <SearchModal />
        </React.Fragment>
    );
}


export default SinglePostFullWidth;



