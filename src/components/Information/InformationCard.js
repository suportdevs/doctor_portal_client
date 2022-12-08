import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InformationCard = ({icon, className, children}) => {
    return (
        <div>
            <div className={`${className}`}>
                    <div className="grid grid-cols-4 gap-2 flex items-center">
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