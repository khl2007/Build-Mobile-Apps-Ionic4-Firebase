// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hackernews_db: {
    databaseURL: 'https://hacker-news.firebaseio.com',
  },
  app_db: {
    apiKey: "AIzaSyB7oeot6pREZYKHA_zo18WQnBPSEIw6ZgM",
  authDomain: "khlstacksocial.firebaseapp.com",
  databaseURL: "https://khlstacksocial.firebaseio.com",
  projectId: "khlstacksocial",
  storageBucket: "khlstacksocial.appspot.com",
  messagingSenderId: "351180360715",
  appId: "1:351180360715:web:9d43235653b013e16ccb0e"
},
};
