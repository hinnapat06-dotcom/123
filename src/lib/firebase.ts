import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Provider with required scopes for Google Sheets and Google Drive
export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');
provider.addScope('https://www.googleapis.com/auth/drive.file');
provider.addScope('https://www.googleapis.com/auth/userinfo.email');
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

let isSigningIn = false;
let cachedAccessToken: string | null = null;

// Initialize auth listener
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else {
        // If we have a user but no cached token (e.g. page reload or state recovery),
        // we might need to prompt sign in again to get a fresh access token, or we can try to restore it.
        // For security and because of iframe constraints, we want the token in memory.
        if (!isSigningIn) {
          cachedAccessToken = null;
          if (onAuthFailure) onAuthFailure();
        }
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Sign in with Google Popup
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    // Set custom parameters to force account selection
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken || (result as any)._tokenResponse?.oauthAccessToken;
    if (!token) {
      throw new Error('ไม่สามารถรับ Access Token จาก Google ได้ กรุณาลองอีกครั้ง');
    }
    cachedAccessToken = token;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Sign-In Error:', error);
    if (error.code === 'auth/popup-blocked') {
      throw new Error('เบราว์เซอร์บล็อกป๊อบอัป (Pop-up Blocked): กรุณาอนุญาตให้แสดงป๊อบอัป หรือเปิดแอปในหน้าต่างใหม่ (Open in New Tab)');
    } else if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('หน้าต่างเข้าสู่ระบบถูกปิดก่อนทำรายการเสร็จ กรุณากดปุ่มเข้าสู่ระบบด้วย Gmail อีกครั้ง');
    } else if (error.code === 'auth/cancelled-popup-request') {
      throw new Error('มีการเปิดหน้าต่างเข้าสู่ระบบซ้อนกัน กรุณารอสักครู่แล้วลองใหม่');
    }
    throw error;
  } finally {
    isSigningIn = false;
  }
};

// Log out
export const googleSignOut = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

// Get current cached token
export const getAccessToken = (): string | null => {
  return cachedAccessToken;
};
