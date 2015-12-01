
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {
        templateUrl: "views/home.html", 
         controller: "HomeCtrl"})
    // Paginas
    
    .when("/equipeAuditor", {
        templateUrl: "equipeAuditores/equipeAuditor.html", 
        controller: "equipeAuditorCtrl"})
    
      .when("/settings-pills", {
        templateUrl: "equipeAuditor.html", 
        controller: "equipeAuditorCtrl"})
    
      .when("/home-pills", {
        templateUrl: "equipeAuditor.html", 
        controller: "equipeAuditorCtrl"})
    
   
}]);
