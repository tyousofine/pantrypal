import React, { useEffect } from 'react'

import axios from 'axios';
import { useState } from 'react';

//component imports
import Loader from '../Loader';


//this component is used in ingredientsForm page
export default function RecipeRequest({ ingredients }) {
    const [recipe, setRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState('');


    useEffect(() => {
        if (ingredients) {
            let dataForDalle;

            console.log({ ingredients }, 'from results component')


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
                    setIsLoading(true);
                    const gp3Response = await gp3RequestHandler();
                    const dalleRespone = await dalleRequestHandler(dataForDalle);

                } catch (error) {
                    console.error('Error - something happened when using the mega button', error)
                }
                setIsLoading(false);
            }
            getResultsHandler();
        }

    }, [ingredients])

    return (
        <div>
            {/* <button onClick={getResultsHandler}>Get Results!</button> */}
            {!!isLoading ? <Loader /> :
                <>
                    <div>
                        {!!image ? <img src={image} style={{ width: '300px' }} alt="food " />
                            : (null)
                        }
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: recipe }}></div>

                </>
            }

        </div>
    )
}