
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {
        templateUrl: "views/home.html", 
         controller: "HomeCtrl"})
    // Paginas
    
    .when("/cidade", {
        templateUrl: "Cidades/cidade.html", 
        controller: "cidadeCtrl"})
    
      .when("/settings-pills", {
        templateUrl: "cidade.html", 
        controller: "cidadeCtrl"})
    
      .when("/home-pills", {
        templateUrl: "cidade.html", 
        controller: "cidadeCtrl"})
    
   
}]);
