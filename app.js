// Declare app level module which depends on views, and components
angular.module('MainApp', [
	'ui.router',
	'ui.mask',
	'ngStorage',
	'unsavedChanges'

]).
config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	//$urlRouterProvider.otherwise('/appPortal/a');
	$stateProvider
		.state('appAdmin', {
			url: "/appAdmin",
			templateUrl: "app/appAdmin/appAdmin.html",
			controller: "appAdminCtrl",
			restrito: true
		})
		.state('appPortal', {
			url: "/appPortal",
			templateUrl: "app/appPortal/appPortal.html",
			controller: "appPortalCtrl"
		})
}]);





