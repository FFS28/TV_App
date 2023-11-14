import React from 'react';
import titleImage from './../../assets/FeaturedTitleImage.png'

const MovieInfo = ({data}) => {
    return (
        <div className='movie-info'>
            <h4>{data.Category.toUpperCase()}</h4>
            <img src={require(`./../../assets/${data.TitleImage}`)} />
            <p>{data.ReleaseYear} {data.MpaRating} {Math.floor(parseInt(data.Duration) / 3600)}h {Math.floor((parseInt(data.Duration) / 60) % 60)}m</p>
            <p>
               {data.Description}
            </p>
            <div className='btn-group'>
                <div class="play">Play</div>
                <div class="more">More Info</div>
            </div>
        </div>
    );
};

export default MovieInfo;