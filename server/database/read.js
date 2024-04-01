
const db = require('./firebaseConfig');
const { collection, getDocs } = require("firebase/firestore");

/**
 * Retrieves all data from db
 * 
 */
async function loadRecipes() {
    console.log(collection.db)
    try {
        const querySnapshot = await getDocs(collection(db, 'recipes'));
        return processQuerySnapshot(querySnapshot);

    } catch (error) {
        // throw new Error('Failed to load from Database')
        console.log(error.message);
    }
}


/**
 * 
 * adds new item to database
 * 
 * @requires
 * image url and recipe instructions
 */

async function addRecipe() {
    try {

    } catch (error) {
        throw new Error("Failed to add recipe")
    }
}

/**
 * pulls specific recipe from Database
 * 
 * @requires
 * item ID
 * @returns
 * Recipe from Database
 * 
 */
async function loadByID() {
    try {


    } catch (error) {
        throw new Error("Failed to pull item")
    }

}

/**
 * Helper function to process mapping requests
 * @param {*} qS 
 * @returns 
 * mapped object
 */
function processQuerySnapshot(qS) {
    const data = [];
    qS.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        })
    })
    return data
}

module.exports = loadRecipes;






