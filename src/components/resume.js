import React from 'react'
import '../stylesheets/resume.scss'
import resume from './resume.PNG'

export default function Homepage() {
    return(
        <div className = 'resume'>
            <img src={resume}></img>
        </div>
    )
}