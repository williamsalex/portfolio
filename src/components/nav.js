import React from 'react'
import '../stylesheets/homepage.scss'
import { Link } from 'react-router-dom'

export default function Homepage() {
    return(
        <div className = 'nav'>
            <Link to = '/' className = 'item' style = {{textDecoration: 'none'}} > HOME </Link>
            <h4 className = 'divider'>/</h4>
            <Link to = '/resume' className = 'item' style = {{textDecoration: 'none'}} > RESUME </Link>
            <h4 className = 'divider'>/</h4>
            <Link to = '/projects' className = 'item' style = {{textDecoration: 'none'}} > PROJECTS </Link>
            <h4 className = 'divider'>/</h4>
            <Link to = '/about' className = 'item' style = {{textDecoration: 'none'}} > ABOUT </Link>
            <h4 className = 'divider'>/</h4>
        </div>
    )
}