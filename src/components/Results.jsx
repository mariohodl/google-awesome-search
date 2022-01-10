import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../contexts/ResultsContextProvider'
import { Loading } from './Loading'

export function Results() {
    const { results, isloading, getResults, searchTerm } = useResultContext()
    const location = useLocation()

    if(isloading) return <Loading/>
    console.log(location.pathname)
    switch (location.pathname) {
        case '/search':
            return 'SEARCH';
        case '/videos':
            return 'VIDEOS';
        case '/news':
            return 'NEWS';
        case '/images':
            return 'IMAGES';
        default:
            return 'error';
    }
}
