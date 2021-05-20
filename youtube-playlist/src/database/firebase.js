import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDvVIW5etv1GDntXyTCTeHgmRls6dx7cHY',
  authDomain: 'playlist-a1c78.firebaseapp.com',
  projectId: 'playlist-a1c78',
  storageBucket: 'playlist-a1c78.appspot.com',
  messagingSenderId: '406422948948',
  appId: '1:406422948948:web:208d252e5bcc59402571c1',
});

const firestore = firebase.firestore();
const videosRef = firestore.collection('videos');
export const query = videosRef.orderBy('timestamp');

export const addVideo = async ({
  id,
  youtubeId,
  title,
  duration,
  timestamp,
}) => {
  console.log(
    'addding video to firebase',
    id,
    youtubeId,
    duration,
    title,
    timestamp
  );

  await videosRef.doc(id).set({
    id,
    youtubeId,
    title,
    duration,
    timestamp,
  });
};

export const deleteVideo = async (id) => {
  await videosRef.doc(id).delete();
};

export const getDocument = async (id) => {
  const doc = await videosRef.doc(id).get();
  if (doc.exists) {
    return doc.data();
  }
};

export const updateDocument = async (id, prop, value) => {
  await videosRef.doc(id).update({ [prop]: value });
};
