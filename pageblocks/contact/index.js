import Newsletter from '@/components/Common/Newsletter';
import ScrollToTop from '@/components/Common/ScrollTop';
import Footer from '@/components/Layout/Footer/Footer';
import Header from '@/components/Layout/Header';
import OffWrap from '@/components/Layout/Header/OffWrap';
import React from 'react';
import ContactMain from './_ContactMain';

const Contact = () => {
    return (
        <React.Fragment>
            <OffWrap />
            {/* Header */}
            {/* <Helmet>
                <link rel="icon" href={`/img/fav-orange.png`} />
            </Helmet> */}
            <Header
                parentMenu='contact'
                headerNormalLogo={`/img/logo/dark-logo.png`}
                headerStickyLogo={`/img/logo/dark-logo.png`}
                CanvasLogo={`/img/logo/dark-logo.png`}
                mobileNormalLogo={`/img/logo/dark-logo.png`}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home8-style4"
                TopBarClass="topbar-area home8-topbar"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />
            {/* Header */}

            {/* ContactMain Section Start */}
            <ContactMain />
            {/* ContactMain Section End */}

            {/* Newsletter Section Start */}
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color event-bg mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />
            {/* Newsletter Section End */}

            {/* Footer */}
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={`/img/logo/lite-logo.png`}
            />
            {/* Footer */}

            {/* scrolltop-start */}
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
            {/* scrolltop-end */}
        </React.Fragment>

    );
}


export default Contact;