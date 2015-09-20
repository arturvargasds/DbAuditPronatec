
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {
        templateUrl: "views/home.html", 
         controller: "HomeCtrl"})
    // Paginas
    
    .when("/naoConformidade", {
        templateUrl: "naoConformidades/naoConformidade.html", 
        controller: "naoConformidadeCtrl"})
    
      .when("/settings-pills", {
        templateUrl: "naoConformidade.html", 
        controller: "naoConformidadeCtrl"})
    
      .when("/home-pills", {
        templateUrl: "naoConformidade.html", 
        controller: "naoConformidadeCtrl"})
    
   
}]);
