const { collection, addDoc, } = require("firebase/firestore");
const db = require('./firebaseConfig');

async function saveRecipeToDB(data) {

    try {
        const docRef = await addDoc(collection(db, "recipes"), data);
        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    }
}

module.exports = { saveRecipeToDB }