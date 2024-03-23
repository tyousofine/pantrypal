import React from 'react'
import { useState } from 'react';


import IngredientsForm from '../../components/IngredientsForm'
import NavBar from '../../components/NavBar'
import RecipeRequest from '../../components/RecipeRequest'

export default function InputPage() {
    const [formData, setFormData] = useState('');
    console.log({ formData })

    const handleData = (data) => {
        setFormData(data);
    };

    return (
        <>  <NavBar />

            <IngredientsForm onDataSubmit={handleData} />
            <RecipeRequest ingredients={formData} />
        </>
    )
}
