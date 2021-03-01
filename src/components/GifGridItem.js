import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated  animate__fadeIn animate__delay-s">
            <img src={url} title={title} id={id}/>
            <p>{title}</p>
        </div>
    )
}
