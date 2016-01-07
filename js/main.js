// Declare app level module which depends on views, and components
var app = angular.module('myApp',  ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: "templates/home.html",
		controler: 'HomeController'
	})
	.when('/settings',{
	    templateUrl: "templates/settings.html",
		controler: 'SettingsController'
	})	
	
	.when('/home',{
	    templateUrl: "templates/home.html",
		controler: 'HomeController'
	})	
	
  .otherwise({ redirectTo: '/'});
});

app.controller('HomeController',function($scope) {
	
//console.log('Authentication successful');
//alert('aaaa');
});



app.controller('SettingsController',function($scope) {
    $scope.name = "Ari-------------";	
    console.log($scope.name);

});
