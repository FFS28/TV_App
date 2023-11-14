import React, { useCallback, useEffect, useState } from 'react';

import Avatar from './../Avatar'

import searchIcon from './../../assets/icons/search.png'
import homeIcon from './../../assets/icons/home.png'
import laterIcon from './../../assets/icons/later.png'
import genresIcon from './../../assets/icons/genres.png'
import movieIcon from './../../assets/icons/movie.png'
import filmIcon from './../../assets/icons/film.png'
import SideBarItem from './SideBarItem';
import Footer from '../Footer';


const sideItemList = [
    {
        title: "Search",
        image: searchIcon
    },
    {
        title: "Home",
        image: homeIcon
    },
    {
        title: "TV Shows",
        image: filmIcon
    },
    {
        title: "Movies",
        image: movieIcon
    },
    {
        title: "Genres",
        image: genresIcon
    },
    {
        title: "Watch Later",
        image: laterIcon
    }
]

const SideBar = () => {

    const [expanded, setExpanded] = useState(false)

    const handleMouseLeave = useCallback(() => {
        setExpanded(false)
    }, [expanded])

    const handleMouseFocus = useCallback(() => {
        setExpanded(true)
    }, [expanded])

    return (
        <div className={`SideBar ${expanded ? "expanded" : ""}`} onMouseLeave={handleMouseLeave}>
            <Avatar expanded={expanded}/>
            {
                sideItemList.map((el, index) => <SideBarItem key={index} item={el} expanded={expanded} callback={handleMouseFocus} />)
            }
            <Footer expanded={expanded} />
        </div>
    );
};

export default SideBar;