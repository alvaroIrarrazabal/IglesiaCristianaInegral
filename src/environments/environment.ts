// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint :'http://localhost:8081/api/personas',
  endpointPais :'http://localhost:8081/api/paises',
  endpointReg : 'http://localhost:8081/api/regiones/',
  endpointSupervisores :'http://localhost:8081/api/personaSupervisada/supervisor',
  endpointComu :'http://localhost:8081/api/comunas/',
  endpointrols :'http://localhost:8081/api/roles/',
  endpointCumple:'http://localhost:8081/api/personasCumple',
  endpointSupervisados:'http://localhost:8081/api/supervisado'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
