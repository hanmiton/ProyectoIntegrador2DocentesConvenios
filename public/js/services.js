(function () {

     angular.module('ingedex.services', ['ngResource'])
        .factory('Ingeniero', ['$resource', function ($resource) {
        return $resource('/api/ingenieros/:name');
     }])

      .factory('solicitudesService', ['$window', function ($window) {
       var localStorage = $window.localStorage;
    
      function saveSolicitud(ingeniero, solicitud) {
        var solicitudes = getSolicitudes(ingeniero);

        solicitudes.push(solicitud);
        localStorage.setItem(ingeniero, JSON.stringify(solicitudes));
      }

      function getSolicitudes(ingeniero) {
        var solicitudes = localStorage.getItem(ingeniero);

        if (!solicitudes) {
          solicitudes = [];
        } else {
          solicitudes = JSON.parse(solicitudes);
        }

        return solicitudes;
      }


      return {
        saveSolicitud: saveSolicitud,
        getSolicitudes: getSolicitudes
      };

    }]);

})();
