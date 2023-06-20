import React from 'react';
import { Helmet } from 'react-helmet'
import FooterStyleTwo from '@/components/Layout/Footer/FooterStyleTwo';
import Header from '@/components/Layout/Header/Header';
import OffWrap from '@/components/Layout/Header/OffWrap';
import SearchModal from '@/components/Layout/Header/SearchModal';
import HomeTwoMain from './_HomeTwoMain';
import fetch from 'node-fetch';
import { API_URL } from '@/utils/ssr';

const Home = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href="Blogs" />
            </Helmet>
            <OffWrap />
            <Header
                parentMenu='home'
                headerNormalLogo={`/img/logo/logo-dark.png`}
                headerStickyLogo={`/img/logo/logo-dark.png`}
                mobileNormalLogo={`/img/logo/logo-dark.png`}
                CanvasLogo={`/img/logo/logo-dark.png`}
                CanvasClass="right_menu_togle hidden-md"
                headerClass="full-width-header header-style1 home1-modifiy"
                TopBar='enable'
                TopBarClass="topbar-area dark-primary-bg hidden-md"
                emailAddress="hello@javalearningcenter.com"
                phoneNumber="+91-8105815599"
            />
            <HomeTwoMain {...props}/>
            <FooterStyleTwo />
            <SearchModal />
        </React.Fragment>
    );
}


export default Home;


export async function getStaticProps() {

    const coursesResp = await fetch(API_URL + '/myapi/mycourses');
    const courses = await coursesResp.json();
  
    const categoriesResp = await fetch(API_URL + '/myapi/mycategories');
    const categories = await categoriesResp.json();
  
    return { props: { courses, categories } };
  }
  