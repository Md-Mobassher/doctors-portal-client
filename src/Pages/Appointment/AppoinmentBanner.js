import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const AppoinmentBanner = ({date, setDate}) => {

    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}  className='flex'>
            <div class="hero min-h-screen">
                <div class="hero-content   lg:flex-row-reverse  gap-20 flex justify-center">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl"  alt=''/>
                    <div>
                     <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                       
                            />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentBanner;