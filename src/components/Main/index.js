import React from 'react';

import MovieInfo from './MovieInfo';
import Treding from '../Treding';

import json_data from './../../assets/data.json'

const Main = () => {
    return (
        <div className='Main'>
            <div className='movie'>
                <div className='background'>
                    <img src={require(`./../../assets/${json_data.Featured.CoverImage}`)} />
                    <MovieInfo data={json_data.Featured}/>
                </div>
                This is test
            </div>
            <Treding data={json_data.TendingNow} />
        </div>
    );
};

export default Main;