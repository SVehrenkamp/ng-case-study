angular.module('ProductsCTRL', [])
	.controller('ProductsCTRL', function($scope, $http){
		$scope.products_list = [];
		$scope.sort_dir = 'price';
		$scope.sortUp = true;
		
		$scope.getProducts = function(){
			$http.get('/api/products').success(function(data){
				console.log(data);
				$scope.products_list = data;
			});
		}
		$scope.sortProducts = function(){
			if($scope.sort_dir === 'price'){
				$scope.sort_dir = '-price';
				$scope.sortUp = false;
			} else {
				$scope.sort_dir = 'price';
				$scope.sortUp = true;
			}
		}
		$scope.getProducts();
	});