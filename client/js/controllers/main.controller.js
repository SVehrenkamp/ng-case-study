angular.module('MainCTRL', [])
	.controller('MainCTRL', function($scope, $http, $rootScope, $location){
		
		$scope.credentials = {};
		$scope.error = false;

		$scope.login = function(){
			
			$scope.credentials.username = $scope.user.username;
			$scope.credentials.password = $scope.user.password;

			$http.post('/api/Users/login', $scope.credentials).success(function(data){
				
				$rootScope.user = data;
				$rootScope.user.username = $scope.user.username;
				$location.path('/products');

			}).error(function(err){
				$scope.error = true;
				console.log('Error!', err);
			});
		}

		$scope.checkLogin = function(){
			if(!$rootScope.user){
				return;
			} else{
				$location.path('/products');
			}
		}
		$scope.checkLogin();

	});