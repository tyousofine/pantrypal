
import { useState } from 'react';
import RecipeRequest from '../RecipeRequest';


export default function IngredientsForm() {
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



    return (
        <div>
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
                <button style={{ height: '20px' }} onClick={addIngredient}>Add More</button>
            </div>

            <button onClick={resetForm}>Reset Form</button>
            <RecipeRequest ingredients={ingredients} />

        </div>
    );
}


