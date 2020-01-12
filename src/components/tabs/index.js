import React from 'react';
import PropTypes from 'prop-types';
import './tabs.scss';

const Tabs = ({children}) => {
    const [active, setActive] = React.useState(0);

    const openTab = (e) => setActive(+e.target.dataset.index);

    return (
        <div className='tabs'>
            <div className="tabs__labels">
                {children.map((child, index) => (
                    <button
                        key={index}
                        className={`tabs__link ${index === active ? 'tabs__link_active' : ''}`}
                        onClick={openTab}
                        data-index={index}
                    >{child.props.label}</button>
                ))}
            </div>
            <div className="tabs__content">
                {children[active].props.children}
            </div>
        </div>
    )
};

Tabs.propTypes = {
    children: PropTypes.array
};

export default Tabs;
