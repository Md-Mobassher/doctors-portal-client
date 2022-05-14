import React from 'react';
import Footer from '../../Shared/Footer';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;