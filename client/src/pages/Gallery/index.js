import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './styles.scss'

// component imports
import NavBar from '../../components/NavBar'

export default function GalleryPage() {
    const [recipes, setRecipes] = useState([]);

    // fetch all stored recipe to display
    // TODO - ADD LAZY LOADING?
    useEffect(() => {
        axios.get('http://localhost:5000/gallery', {
            method: 'GET'

        }).then((response) => {
            console.log({ response })
            const recipes = response.data;
            setRecipes(recipes);
            console.log(recipes)

        }).catch((error) => {
            console.log(error)
        })

    }, [])


    return (
        <div>
            <NavBar />
            <h2>Gallery Page Coming Soon!</h2>
            <div>
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <img src={recipe.imageURL} alt="prepared food" />
                        <p>{recipe.recipe}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}
