
 // Note: Providers can only be injected into config functions. Thus you could not inject $routeProvider into PhoneListCtrl. 
serviceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cidades', { templateUrl: 'list.html', controller: 'controlCidade'}).
      when('/cadasCid', { templateUrl: 'cadastro.html', controller: 'controlCidade'}).
      when('/delete', { templateUrl: 'list.html', controller: 'controlCidade'}).
      otherwise({
        redirectTo: '/cidades'
      });
  }
]);

