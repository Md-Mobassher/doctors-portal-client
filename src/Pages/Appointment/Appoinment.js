import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';


const Appoinment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <section>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
        </section>
    );
};

export default Appoinment;