import React from 'react'
import '../stylesheets/homepage.scss'
import resume from '../resume.pdf'
import { Document } from 'react-pdf'


export default function Homepage() {
    console.log(resume)
    return(
        <Document file={resume}/>
    )
}