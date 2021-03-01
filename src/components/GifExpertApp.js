import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = ({/*val*/})=>{
    //const categories =['One punch', 'Samurai X', 'Dragon Ball'];
   const [categories, setCategories] = useState(['One punch']);

/*
    const handleAdd=()=>{
        setCategories([...categories,'yo']);
        //setCategories(prevState => [...prevState, 'yo']);
    }
*/
    

    return  (
                <>
                    <h2>GifExpertApp</h2>
                    <AddCategory 
                        setCategories = { setCategories }
                    />
                    <hr/>
                    
                    {
                        categories.map((el,i) => {
                            return (<GifGrid category = {el} key = {el.toString()} />);
                        })
                     }
                    
                </>
            );
};

export default GifExpertApp;