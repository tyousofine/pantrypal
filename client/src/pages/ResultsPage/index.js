import React, { useEffect } from 'react';
import axios from 'axios';


// props coming from recipeRequest component
export default function ResultPage({ image, recipe }) {
    console.log('image and recipe from results desplay: ', image, recipe)

    useEffect(() => {
        axios.fetch('', {
            method: 'POST',
            header: "",
            body: ""
        }).then((res) => {

        }).catch((error) => {
            console.log(error)
        })
    })

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
