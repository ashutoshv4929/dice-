// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { getDatabase, ref, set, get } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Function to save wallet data
export const saveWalletData = async (userId, balance) => {
    try {
        await set(ref(db, 'users/' + userId + '/wallet'), {
            balance: balance,
            lastUpdated: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error saving wallet data:', error);
    }
};

// Function to get wallet data
export const getWalletData = async (userId) => {
    try {
        const snapshot = await get(ref(db, 'users/' + userId + '/wallet'));
        return snapshot.val();
    } catch (error) {
        console.error('Error getting wallet data:', error);
        return null;
    }
};
