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
    $scope.settings={
    	name: "Ari",
    	age: 12,
    	inputEmail: "me@exammple.com"
    };	

    $scope.updateSettings = function() {
    	console.info("se ha realizado una peticion de act...");
    }

});


app.controller('MailListingController',function($scope) {
    $scope.email={
    	'id': 1,
    	'from': 'fred@fullstack.io',
    	'to': "me@exammple.com",
    	'subject': "Great job",
    	'body': 'Congrats on the release of the book!'
    };	

    $scope.updateSettings = function() {
    	console.info("se ha realizado una peticion de act...");
    }

});



app.controller('ContentController',function($scope) {
   console.info("llamado al content")
});
