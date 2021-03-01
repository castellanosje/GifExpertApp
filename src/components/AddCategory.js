import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setInputValue] = useState('');   
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    };

    const handlesubmit = (e) =>{
        e.preventDefault();
        if( inputValue.trim().length > 1){
            setCategories(categories => [inputValue,...categories]);
            setInputValue('');
        }
    };

    return (
            <form onSubmit = {handlesubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    placeholder = "Hola mundo"
                    onChange={ handleInputChange }
                />
            </form>
        );
}

AddCategory.propTypes = { 
    setCategories: PropTypes.func.isRequired
}