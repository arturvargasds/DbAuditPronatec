
app.config(['$routeProvider', function ($routeProvider) {$routeProvider
    // Home
    .when("/", {
        templateUrl: "views/home.html", 
         controller: "HomeCtrl"})
    // Paginas
  
    .when("/cliente", {
        templateUrl: "views/Cadastro/Clientes.html", 
        controller: "ClienteCtrl"})
    
        .when("/settings-pills", {
        templateUrl: "Clientes.html", 
        controller: "ClienteCtrl"})
    
      .when("/home-pills", {
        templateUrl: "Clientes.html", 
        controller: "ClienteLCtrl"})
    
      .when("/bairro", {
        templateUrl: "views/Cadastro/Bairros.html", 
        controller: "BairroCtrl"})
    
      .when("/settings-pills", {
        templateUrl: "Bairros.html", 
        controller: "BairroCtrl"})
    
      .when("/home-pills", {
        templateUrl: "Bairros.html", 
        controller: "BairroCtrl"})
    
      .when("/cidade", {
        templateUrl: "Cidades/cidade.html", 
        controller: "cidadeCtrl"})
    
      .when("/settings-pills", {
        templateUrl: "cidade.html", 
        controller: "cidadeCtrl"})
    
      .when("/home-pills", {
        templateUrl: "cidade.html", 
        controller: "cidadeCtrl"})
    
        .when("/auditor", {
        templateUrl: "Auditores/auditor.html", 
        controller: "auditorCtrl"})
    
      .when("/settings-pills", {
        templateUrl: "auditor.html", 
        controller: "auditorCtrl"})
    
      .when("/home-pills", {
        templateUrl: "auditor.html", 
        controller: "auditorCtrl"})
    
   
}]);
