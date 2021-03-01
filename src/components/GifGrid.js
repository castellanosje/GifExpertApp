import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGifs(category);
  
    return (
        <>
            <h3>{ category }</h3>

            {loading && <p className="animate__flash">Loading...</p>}

            <div className="cardGrid">
            {
                images.map(img => {
                    return <GifGridItem {...img}  key={img.id}/>
                })
            }
            </div>
        </>
        
    )
}
