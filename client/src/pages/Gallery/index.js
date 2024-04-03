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
        <>
            <NavBar />
            <h2>THIS SECTION IS UNDER CONSTRUCTION!</h2>
            <div className='container-gallery'>
                <h2>WARNING:</h2>
                <p>These recipes are AI created. Eat at your own risk!</p>
                <div className='container-cards'>
                    {recipes.map((recipe) => (
                        <div className="card" key={recipe.id}>
                            <img
                                className='card-image'
                                src={recipe.imageURL}
                                alt="prepared food" />
                            <p className='card-text'>{recipe.recipe.substring(0, 100)}...</p>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
