// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCHVsWgPi_6arItPfwneWCGKjQmqum6KIs',
    authDomain: 'paradise-archery-schedule.firebaseapp.com',
    databaseURL: 'https://paradise-archery-schedule.firebaseio.com',
    storageBucket: 'paradise-archery-schedule.appspot.com'
  }
};

