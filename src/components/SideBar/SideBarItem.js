import React from 'react';

const SideBarItem = ({item, expanded, callback}) => {
    return (
        <div className='SideBarItem' onMouseMove={callback}>
            <div className='img'>
                <img src={item.image} />
            </div>
            
            {expanded && <p>{item.title}</p>}
        </div>
    );
};

export default SideBarItem;