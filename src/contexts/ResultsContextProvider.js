import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()
const baseUrl = ''

export const ResultContextProvider = ({ children })=> {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const getResults = async (type) =>{
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                // 'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search1.p.rapidapi.com',
                'x-rapidapi-key': '333744f0a5msh22cfcdb0e7a4be4p1d9e42jsnc2a00ffcffbd'
              }
        })


        const data = await response.json()

        console.log('data>', data)
        
        setResults(data)
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = () => useContext(ResultContext);