import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDUbBe5E8JKN1iVY_oIg1iJ7j50XCRg2L0',
  authDomain: 'gymnerd-db.firebaseapp.com',
  databaseURL: 'https://gymnerd-db.firebaseio.com',
  projectId: 'gymnerd-db',
  storageBucket: 'gymnerd-db.appspot.com',
  messagingSenderId: '553718898282',
  appId: '1:553718898282:web:f761ae1944348062b6f413',
  measurementId: 'G-12GK2NB2WM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformCollection.reduce((acc, curr) => {
    acc[curr.title.toLowerCase()] = curr;
    return acc;
  }, {});
};

export const createUserProfileDocument = async (userAuth, userData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...userData,
      });
    } catch (err) {
      console.log('error adding user', err.mesasge);
    }
  }
  return userRef;
};

export const createUserOrderDocument = async (user, orderItems) => {};

export default firebase;
