app.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'corridas.html',
            controller: 'corridasCtrl'
        })
        .when('/cidade', {
            templateUrl: 'cidades.html',
            controller: 'cidadesCtrl'
        });    
});