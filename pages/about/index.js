import React from 'react';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import OffWrap from '@/components/Layout/Header/OffWrap';
import SearchModal from '@/components/Layout/Header/SearchModal';
import Newsletter from '@/components/Common/Newsletter';
import SiteBreadcrumb from '@/components/Common/Breadcumb';
import AboutMain from './_AboutMain';

const About = () => {

    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='about'
                headerNormalLogo={`/img/logo/dark-logo.png`}
                headerStickyLogo={`/img/logo/dark-logo.png`}
                CanvasLogo={`/img/logo/dark-logo.png`}
                mobileNormalLogo={`/img/logo/dark-logo.png`}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBar='enable'
                TopBarClass="topbar-area dark-primary-bg hidden-md"
                emailAddress="hello@javalearningcenter.com"
                phoneNumber="+91-8105815599"
            />

            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="About"
                pageName="About"
                breadcrumbsImg={`/img/breadcrumbs/2.jpg`}
            />
            {/* breadcrumb-area-start */}

            {/* About Main */}
            <AboutMain />
            {/* About Main */}

             <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-70"
                titleClass="title mb-0 white-color"
            /> 

            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={`/img/logo/lite-logo.png`}
            /> 
            <SearchModal />
        </React.Fragment>
    );
}

export default About;