angular.module("myapp",["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home.html",
      controller : "homeCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "about.html",
      controller: "aboutCtrl"
    })
    .state('services', {
      url: "/services",
      templateUrl: "services.html",
      controller: "servicesCtrl"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "contact.html",
      controller: "contactCtrl"
    });
})

.controller("homeCtrl", function ($scope){
	$scope.name="Welcome to home page";

})

.controller("aboutCtrl", function ($scope){
	$scope.name="Welcome to About Us page";
})

.controller("servicesCtrl", function ($scope){
	$scope.name="Welcome to Services page";
})

.controller("contactCtrl", function ($scope){
	$scope.name="Welcome to Contact Us page";
});