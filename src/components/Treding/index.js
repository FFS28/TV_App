import React from 'react';

const Treding = ({data}) => {
    return (
        <div className='treding'>
            {
                data.map(el => {
                    return (
                        <div className='treding-img'>
                            <img src={require(`./../../assets/${el.CoverImage}`)} />
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Treding;