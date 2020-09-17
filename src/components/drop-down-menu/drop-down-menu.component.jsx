import React from 'react'

import './drop-down.styles.css'

const DropDown = ({options, onClick}) => {
    console.log(options)
    console.log(onClick)
    return(
        options.map( option => {
            onClick = onClick(option)
            return(
                
                    
                    <li className="option" key={option.url} onClick={onClick}>{option.header.toUpperCase()}</li>
    )})
    )
}

export default DropDown