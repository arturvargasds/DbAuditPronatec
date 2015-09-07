app.config(function($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'bairros.html',
            controller: 'bairrosCtrl'
        });    
});