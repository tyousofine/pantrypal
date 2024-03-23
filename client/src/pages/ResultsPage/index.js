import React from 'react'
import NavBar from '../../components/NavBar'


// props coming from recipeRequest component
export default function ResultPage({ image, recipe }) {


    return (
        <>

            <div>
                {!!image ? <img src={image} style={{ width: '300px' }} alt="food " />
                    : (null)
                }
            </div>
            <div dangerouslySetInnerHTML={{ __html: recipe }}></div>

        </>
    )
}
