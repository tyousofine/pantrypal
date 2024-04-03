import React from 'react'
import { useState } from 'react';
import './styles.scss';


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
        <>
            <NavBar />
            <div className="container-inputPage">
                {formOn &&
                    <IngredientsForm onDataSubmit={handleData} />
                }
                {!!formButton &&
                    <button onClick={formAndButtonToggleHandler}>form</button>}
                <RecipeRequest ingredients={formData} />
            </div>
        </>
    )
}
