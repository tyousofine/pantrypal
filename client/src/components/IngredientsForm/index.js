
import { useState } from 'react';
import './styles.scss';

//component imports
import RecipeRequest from '../RecipeRequest';

// this component is used in InputPage
export default function IngredientsForm({ onDataSubmit }) {
    const initialState = [
        { name: '' },
        { name: '' },
        { name: '' },
    ]
    const [ingredients, setIngredients] = useState(initialState);


    const handleInputChange = (index, value) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index].name = value;
        setIngredients(updatedIngredients);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { name: '' }]);
    };

    const resetForm = () => {
        setIngredients(initialState)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onDataSubmit(ingredients);
        console.log({ ingredients })
    };



    return (
        <div className='container-form-results'>
            <h4>Enter your ingredients:</h4>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <form>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={ingredient.name}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                autoFocus
                            />
                        </div>
                    ))}
                </form>
                <button style={{ height: '20px' }} onClick={addIngredient}>+</button>
            </div>

            <button onClick={resetForm}>Reset Form</button>
            <button onClick={handleSubmit}>Generate Recipe</button>
            {/* <RecipeRequest ingredients={ingredients} /> */}

        </div>
    );
}


