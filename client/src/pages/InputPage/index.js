import React from 'react'
import { useState } from 'react';


import IngredientsForm from '../../components/IngredientsForm'
import NavBar from '../../components/NavBar'
import RecipeRequest from '../../components/RecipeRequest'

export default function InputPage() {
    const [formData, setFormData] = useState('');
    const [formOn, setFormOn] = useState(true);
    const [formButton, setFormButton] = useState(false);


    const handleData = (data) => {
        setFormData(data);
        setFormOn(false);
        setFormButton(true);
    };

    const formAndButtonToggleHandler = (e) => {
        e.preventDefault();
        setFormOn(true);
        setFormButton(false);
    }



    return (
        <>  <NavBar />
            {formOn &&
                <IngredientsForm onDataSubmit={handleData} />
            }
            {!!formButton &&
                <button onClick={formAndButtonToggleHandler}>test</button>}
            <RecipeRequest ingredients={formData} />
        </>
    )
}
