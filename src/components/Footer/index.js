import React from 'react';

const Footer = ({expanded}) => {
    return (
        <>
            {expanded && <div className='footer'>
                <div className='footer-list'>Language</div>
                <div className='footer-list'>Get HELP</div>
                <div className='footer-list'>EXIT</div>
            </div>}
        </>
    );
};

export default Footer;