import React from 'react'
import Whitespace from '../layout-components/whitespace'

const MediaPage = (transition) =>{
    return(
        <div style={transition && transition.style} className="container min-height--vh">
            <Whitespace height={160}/>
            <h1>Youtube channel comming soon</h1>
        </div>
    )
}

export default MediaPage