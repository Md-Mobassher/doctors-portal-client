import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from './Reviews';


const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];


    return (
       <section className='my-28 px-12 mx-auto'>
           <div  className='flex justify-between'>
               <div>
                    <h3 className='text-xl font-bold text-primary'>Testimonials</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
               </div>
               <div>
                    <img className="w-24 lg:w-48" src={quote} alt="" />
               </div>
           </div>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12'>
                {
                    reviews.map(review => <Reviews 
                      key={review._id}
                      review={review}
                    ></Reviews>)
                }
           </div>
       </section>
    );
};

export default Testimonial;