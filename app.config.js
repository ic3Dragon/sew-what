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
      }
    },
    "owner": "ic3dragon",
    "scheme": "sew-what"
  }
}
