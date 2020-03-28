import React from 'react'
import '../stylesheets/resume.scss'
import resume from '../resume.PNG'

export default function Resume() {
    return(
        <div>
            <div>
                <br/>
                <br/>
            </div>
            <div className = 'resume'>
                <img src={resume} alt = 'resume'></img>
            </div>
        </div>
    )
}