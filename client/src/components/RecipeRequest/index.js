import React from 'react'

import axios from 'axios';


import { useState } from 'react';


export default function RecipeRequest() {
    const [ingredients, setIngredients] = useState(['tomato', 'potato']);
    const [recipe, setRecipe] = useState("");
    const [loading, isLoading] = useState("");
    const [image, setImage] = useState('');



    const gp3RequestHandler = async () => {
        const response = await axios.post('http://localhost:5000/api/recipe', {
            Method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: ingredients
        }).then((response) => {

            console.log(response.data)
            const recipe = response.data
            setRecipe(recipe)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (

        <div>

            <button onClick={gp3RequestHandler}>Call api with post request</button>
            <label htmlFor="prompt">
                <p>List your ingredients:</p>
                <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </label>

            <div dangerouslySetInnerHTML={{ __html: recipe }}>
            </div>
        </div>
    )
}
