import React from 'react';

import avatar from './../../assets/avatar/temp.png'

const Avatar = ({expanded}) => {
    return (
        <div className='avatar'>
            {expanded && <>
                <div className='avatar-img'>
                    <img src={avatar} />
                </div>
                <p>Daniel</p>
            </>}
        </div>
    );
};

export default Avatar;