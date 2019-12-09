import React from 'react';
import './product-spec.scss';
import Tabs from "../tabs";

const ProductSpec = ({preferences, description, features}) => {
    return (
        <div className='product__specifications'>
            <Tabs>
                <div label='overview'>
                    <div className="product__preferences">
                        {
                            preferences.map((item, idx) => {
                                return (
                                    <div key={idx} className='product__preference-item'>
                                        <img src={item.icon} alt=""/>
                                        <div>{item.name}</div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="product__description">
                        {description}
                        <ul>
                            {
                                features.map( (item, idx) => {
                                    return(
                                        <li key={idx}>{item}</li>
                                    )
                                } )
                            }
                        </ul>
                    </div>
                </div>
                <div label='features'>
                    <ul>
                        {
                            features.map( (item, idx) => {
                                return(
                                    <li key={idx}>{item}</li>
                                )
                            } )
                        }
                    </ul>
                </div>
            </Tabs>
        </div>
    )
};

export default ProductSpec;