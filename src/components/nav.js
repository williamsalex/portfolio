import React from 'react'
import '../stylesheets/homepage.scss'

export default function Homepage() {
    return(
        <div className = 'nav'>
            <h4 className = 'item'> HOME </h4>
            <h4 className = 'divider'>/</h4>
            <h4 className = 'item'> RESUME </h4>
            <h4 className = 'divider'>/</h4>
            <h4 className = 'item'> PROJECTS </h4>
            <h4 className = 'divider'>/</h4>
            <h4 className = 'item'> ABOUT </h4>
            <h4 className = 'divider'>/</h4>
        </div>
    )
}