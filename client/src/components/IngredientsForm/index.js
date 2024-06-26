
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import thinking from '../../images/thinking.png';

//component imports
import RecipeRequest from '../RecipeRequest';

// this component is used in InputPage
export default function IngredientsForm({ onDataSubmit }) {
    const [isHiding, setIsHiding] = useState(false);

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
        setIsHiding(true);
        e.preventDefault();
        onDataSubmit(ingredients, isHiding);


    };



    return (
        <div className='container-form-results'>
            <h4>Enter your ingredients:</h4>
            <div className='form'>
                <form>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={ingredient.name}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                autoFocus={index === 0 || index >= 3}
                            />
                        </div>
                    ))}
                </form>
                <button className='add-button' onClick={addIngredient}><span>+</span></button>
            </div>

            <div className='action-buttons'>
                <Link onClick={resetForm}>
                    <img src={thinking} alt="thinking robot" />
                    Reset</Link>
                <Link onClick={handleSubmit}>
                    <img src={thinking} alt="thinking robot" />
                    Generate</Link>
            </div>
            {/* <RecipeRequest ingredients={ingredients} /> */}

        </div>
    );
}


