import React from 'react';
import './product-spec.scss';
import PropTypes from 'prop-types';
import Tabs from "../tabs";

const ProductSpec = ({description, features}) => {
    return (
        <div className='product__specifications'>
            <Tabs>
                <div label='overview'>
                    <div className="product__description">
                        {description}
                    </div>
                </div>
                <div label='features'>
                    <ul className="product__description">
                        {
                            features.map((item, idx) => {
                                return (
                                    <li key={idx}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Tabs>
        </div>
    )
};

ProductSpec.propTypes = {
    description: PropTypes.string,
    features: PropTypes.array,
};

export default ProductSpec;