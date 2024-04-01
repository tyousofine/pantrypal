const app = require('./firebaseConfig');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
require('uuid');


// import uuid from 'react-uuid';

const storage = getStorage(app);

async function uploadImage(file) {

    try {
        const storage = getStorage();
        const storageRef = ref(storage, uuid() + '--' + file.name)

        const snapshot = await uploadBytes(storageRef, file)
        const imageURL = await getDownloadURL(snapshot.ref);

        return imageURL;
    }
    catch (error) {
        console.log('error', error);
        return error;

    };
}

module.exports = { storage, uploadImage }