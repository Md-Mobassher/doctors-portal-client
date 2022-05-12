import React from 'react';

const InfoCard = ({img,bgClass,cardTitle}) => {
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgClass}  p-5 flex sm:flex-column`}>
            <figure>
                <img className='' src={img} alt="Movie"/>
            </figure>
            <div className="card-body w-80">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;