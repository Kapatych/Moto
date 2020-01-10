import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='spinner'>
            <div className='header__logo logo'>moto.</div>
            <div className="lds-css ng-scope">
                <div className="lds-double-ring">
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Spinner;