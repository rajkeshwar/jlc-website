import React from 'react';
// import { Helmet } from 'react-helmet'
import Header from '@/components/Layout/Header/Header';
import OffWrap from '@/components/Layout/Header/OffWrap';
import FooterStyleTwo from '@/components/Layout/Footer/FooterStyleTwo';
import SearchModal from '@/components/Layout/Header/SearchModal';
import HomeTwoMain from './HomeTwoMain';

import favIcon from '@/assets/img/fav.png';
import Logo from '@/assets/img/logo/logo-dark.png';
import stickyLogo from '@/assets/img/logo/logo-dark.png';
import mobileLogo from '@/assets/img/logo/logo-dark.png';
import canvasLogo from '@/assets/img/logo/logo-dark.png';

const Hi = () => {
    return (<h1>Hi React</h1>  );
}
 

const HomeTwo = () => {
    return (
        <React.Fragment>
            {/* <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet> */}
            <OffWrap />
            <Header
                parentMenu='home'
                headerNormalLogo={`img/logo/logo-dark.png`}
                headerStickyLogo={`img/logo/logo-dark.png`}
                mobileNormalLogo={`img/logo/logo-dark.png`}
                CanvasLogo={`img/logo/logo-dark.png`}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home1-modifiy"
                TopBar='enable'
                TopBarClass="topbar-area dark-primary-bg hidden-md"
                emailAddress='support@website.com'
                Location='374 William S Canning Blvd, MA 2721, USA '
            />
            <HomeTwoMain />
            <FooterStyleTwo />
            <SearchModal />
        </React.Fragment>
    );
}


export default HomeTwo;

