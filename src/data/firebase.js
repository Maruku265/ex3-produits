import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBVNZayndvVPJI-c0dOF-KA6BuGYjd2s98",
  authDomain: "pvt-h21-pilon-marc.firebaseapp.com",
  databaseURL: "https://pvt-h21-pilon-marc-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-pilon-marc",
  storageBucket: "pvt-h21-pilon-marc.appspot.com",
  messagingSenderId: "218748352260",
  appId: "1:218748352260:web:99f788bde2c462837f0251"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;