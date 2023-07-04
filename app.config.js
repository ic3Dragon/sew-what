import 'dotenv/config';

export default {
  "expo": {
    "name": "sew-what",
    "slug": "sew-what",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/favicon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.ic3dragon.sewwhat"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "ios": {
      "bundleIdentifier": "com.ic3dragon.sewwhat"
    },
    "extra": {
      "eas": {
        "projectId": "910b1caf-7c52-460c-880f-7e1ab13188eb"
      },
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      webClientId: process.env.WEB_CLIENT_ID,
      androidClientId: process.env.ANDROID_CLIENT_ID,
      expoClientId: process.env.EXPO_CLIENT_ID
    },
    "owner": "ic3dragon",
    "scheme": "sew-what"
  }
}
