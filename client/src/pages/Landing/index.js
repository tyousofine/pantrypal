import React from 'react'

import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <h1>Pantry Pal!</h1>
            <p>Discover Delicious Recipes Tailored to Your Pantry Ingredients</p>
            <Link to='/generate'>
                <button>Generate</button>
            </Link>
            <Link to='/gallery'>
                <button>Browse Gallery</button>
            </Link>
        </div>
    )
}
