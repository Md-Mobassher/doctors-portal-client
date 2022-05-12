import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {

    // const info = [
    //     {
    //         _id: 1,
    //         img: clock,
    //         info:'Opening Hours',
    //         descrption: "Lorem ipsum dolor sit amet."
    //     },
    //     {
    //         _id: 2,
    //         img: marker,
    //         info:'Visit our location',
    //         descrption: "Brooklyn, NY 10036, United States."
    //     },
    //     {
    //         _id: 3,
    //         img: phone,
    //         info:'Contact us now',
    //         descrption: "+000 123 456789"
    //     },       
    // ]


    return (
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12' >
           <InfoCard cardTitle='Opening Hours' img={clock} bgClass='bg-primary text-white'></InfoCard>
           <InfoCard cardTitle='Visit our location' img={marker} bgClass='bg-accent text-white'></InfoCard>
           <InfoCard cardTitle='Contact us now' img={phone} bgClass='bg-primary text-white'></InfoCard>
       </div>
    );
};

export default Info;