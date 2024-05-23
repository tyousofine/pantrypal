import React, { useEffect } from 'react';
import './styles.scss'

import picture from '../../images/bg.jpg'




// props coming from recipeRequest component
export default function ResultPage({ image, recipe }) {

    return (
        <div className="container-results">

            <div className='container-image'>
                {!!image ? <img src={image} alt="food " />
                    : (null)
                }
            </div>
            <div className='recipe' dangerouslySetInnerHTML={{ __html: recipe }}></div>
        </div>
    )
}
