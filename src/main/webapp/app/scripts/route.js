
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

      .when("/Auditoria", {
        templateUrl: "auditoria/auditoria.html", 
        controller: "AuditoriaCtrl"})

       .when("/ConsultaAuditoria", {
        templateUrl: "auditoria/consultaauditoria.html", 
        controller: "ConsultaAuditoriaCtrl"})

           
    
   
}]);
