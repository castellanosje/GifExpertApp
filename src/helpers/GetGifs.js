import React from 'react';

export const getGifs = async (category) =>{
    const url = "https://api.giphy.com/v1/gifs/search?";
    const query = category;
    const limit = "5";
    const apiKey = "EfDOLlnpramCKIbbsr3Da2liVucCc6a9";
    const resp = await fetch(`${url}api_key=${apiKey}&q=${query}&limit=${limit}`);
    const { data } = await resp.json();
    
    const gifs = data.map(gif => {
        
        return {
            id:gif.id,
            title: gif.title,
            url: gif.images.original.url
        }

    });
    return gifs;
};