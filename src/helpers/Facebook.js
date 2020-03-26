import { Platform } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const { LoginManager, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;
const FB_USER_DATA = 'FB_USER_DATA';

export async function login(callback, cancelCallback, isTryLogin) {
  try {
    // New login
    if (Platform.OS === 'android') LoginManager.setLoginBehavior('native_with_fallback');
    LoginManager.logOut();
    var result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      cancaelaCallback;
    } else {
      // Login success => get user info (Name, avatar, email)'
      var accessToken = await AccessToken.getCurrentAccessToken();
      const infoRequest = new GraphRequest('/me?fields=id,name,email,picture', null, (err, result) => {
        if (!err) {
          var user = {
            id: accessToken.userID,
            token: accessToken.accessToken,
            name: result.name,
            email: result.email,
            avata: result.picture.data.url
          };
          callback(true, user);

          // Save storage
        } else {
          callback(fales, err);
        }
      });
      // Start the graph request
      new GraphRequestManager().addRequest(infoRequest).start();
    }
  } catch (err) {
    if (!isTryLogin) {
      login(callback, cancelCallback, true);
    } else {
      callback(false, err);
    }
  }
}

export function logout(callback) {
  LoginManager.logOut();
  if (callback) callback;
}
