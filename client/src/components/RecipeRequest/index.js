import React from 'react'

import axios from 'axios';
import { useState } from 'react';

//this component is used in ingredientsForm page
export default function RecipeRequest({ ingredients }) {
    const [recipe, setRecipe] = useState("");
    const [loading, isLoading] = useState("");
    const [image, setImage] = useState('');
    let dataForDalle;


    //prepare data for gp3 request
    let dataForGp3 = ingredients.map((item) => {
        return item.name;
    }).toString()


    // gp3 API POST request function
    const gp3RequestHandler = async () => {
        const response = await axios.post('https://pantrypal-server.vercel.app/api/recipe', {
            Method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"

            },
            body: dataForGp3
        }).then((response) => {

            const recipe = response.data
            setRecipe(recipe)

            // Extract recipe title for dalle
            const recipeTitle = recipe.match(/<h2>(.*?)<\/h2>/)[1];
            // prepare data for dall-e
            dataForDalle = [{ ingredients: dataForGp3 }, { title: recipeTitle }]
            return dataForDalle;

        }).catch((error) => {
            console.log(error)
        })
    }

    // dalle-3 POST request function
    const dalleRequestHandler = async (dataForDalle) => {
        const response = await axios.post('https://pantrypal-server.vercel.app/api/image', {
            Method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH"

            },
            body: dataForDalle
        }).then((response) => {
            const data = response.data.photo
            setImage(`data:image/jpeg;base64,${data}`);

        }).catch((error) => {
            console.log(error)
        })
    }

    // call gp3 then dalle with onclick
    const getResultsHandler = async () => {
        try {
            const gp3Response = await gp3RequestHandler();
            const dalleRespone = await dalleRequestHandler(dataForDalle);

        } catch (error) {
            console.error('Error - something happened when using the mega button', error)
        }
    }

    return (
        <div>
            <button onClick={getResultsHandler}>Get Results!</button>
            <div>
                {!!image ? <img src={image} style={{ width: '300px' }} alt="food " />
                    : (null)
                }</div>
            <div dangerouslySetInnerHTML={{ __html: recipe }}></div>
        </div>
    )
}