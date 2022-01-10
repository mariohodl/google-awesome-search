import React, { useState } from 'react'

import { NavBar } from './components/NavBar'
import { Routes } from './components/Routes'
import { Footer } from './components/Footer'

export default function App() {
    const [darkTheme, setDarkTheme] = useState(false)
    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100 min-h-screen  dark:bg-gray-900 dark:text-gray-100">
               <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
               <Routes />
               <Footer />
                
            </div>
        </div>
    )
}
