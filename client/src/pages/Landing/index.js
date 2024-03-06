import React from 'react'

import './styles.scss'

// component imports
import Hero from '../../components/Hero';


import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (

        <div className='container-landing'>
            <div className='container-hero'>
                <h1>Pantry Pal!</h1>
            </div>

            <p>AI Created Delicious Recipes Tailored to Your Pantry Ingredients</p>
            <div className='container-buttons'>
                <Link to='/generate'>
                    <button>Create Recipe</button>
                </Link>
                <Link to='/gallery'>
                    <button>Browse Gallery</button>
                </Link>
            </div>
        </div>

    )
}
