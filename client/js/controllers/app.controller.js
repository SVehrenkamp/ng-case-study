angular.module('AppCTRL', [])
	.controller('AppCTRL', function($scope, $http, $rootScope, $location){
		$scope.user = $rootScope.user;
	});