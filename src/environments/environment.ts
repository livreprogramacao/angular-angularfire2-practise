// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBP0Mt0qxEoxGffv4TgnwqggWHzJc0bWYc',
    authDomain: 'auth-f9004.firebaseapp.com',
    databaseURL: 'https://auth-f9004.firebaseio.com',
    projectId: 'auth-f9004',
    storageBucket: 'auth-f9004.appspot.com',
    messagingSenderId: '215583315022'
  }
};