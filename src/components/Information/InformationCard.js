import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InformationCard = ({icon, className, children}) => {
    return (
        <div>
            <div className={`${className}`}>
                    <div className="md:grid md:grid-cols-4 md:gap-2 md:flex text-center md:text-left items-center">
                        <div>
                            <FontAwesomeIcon icon={icon} className="text-7xl"/>
                        </div>
                        <div className='col-span-3'>
                            {children}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default InformationCard;