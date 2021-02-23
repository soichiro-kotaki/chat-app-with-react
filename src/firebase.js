import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABSE6cSHfq04PvR6RVJAOi8rq_0hxYSS0",
    authDomain: "chat-app-with-react-8ff33.firebaseapp.com",
    projectId: "chat-app-with-react-8ff33",
    storageBucket: "chat-app-with-react-8ff33.appspot.com",
    messagingSenderId: "30042534728",
    appId: "1:30042534728:web:c6d1edb8aaa31d412e397d"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const messageRef = db.ref('messages');

export const pushMessage = ({name, text}) => {
    messageRef.push({ name, text })
};
