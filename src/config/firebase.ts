import admin from "firebase-admin";
import { env } from "./env";

/**
 * Initializes Firebase Admin SDK for Cloud Storage.
 * Uses environment variables for credentials to avoid committing service account JSON.
 */
const initializeFirebase = () => {
  if (admin.apps.length > 0) return;

  try {
    if (
      !env.FIREBASE_PROJECT_ID ||
      !env.FIREBASE_CLIENT_EMAIL ||
      !env.FIREBASE_PRIVATE_KEY
    ) {
      if (env.NODE_ENV === "production") {
        throw new Error("Firebase credentials are required in production");
      }
      console.warn(
        "⚠️  Firebase credentials missing. Storage functions will fail.",
      );
      return;
    }

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: env.FIREBASE_PROJECT_ID,
        clientEmail: env.FIREBASE_CLIENT_EMAIL,
        privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      }),
      storageBucket: env.FIREBASE_STORAGE_BUCKET,
    });

    console.log("✅  Firebase Admin initialized successfully");
  } catch (error) {
    console.error("❌  Firebase initialization failed:", error);
  }
};

initializeFirebase();

export const bucket =
  env.FIREBASE_STORAGE_BUCKET && admin.apps.length > 0
    ? admin.storage().bucket()
    : null;
export default admin;
