angular.module('ProductCTRL', [])
	.controller('ProductCTRL', function($scope, $http, $stateParams, $location){
		console.log($stateParams);
		$scope.product_id = $stateParams.product;
		$scope.product = {};
		$scope.qty = 0;
		

		$scope.getProduct = function(){
			$http.get('/api/products/'+$scope.product_id).success(function(data){
				console.log(data);
				$scope.product = data;
				//$scope.qty = $scope.product.quantity;
			});
		}
		$scope.updateQty = function(dir){
			if(dir === 'up'){
				if($scope.qty === 99 ){
					return;
				} else{
					$scope.qty++;
				}
			} else{
				if($scope.qty === 0){
					return;
				} else{
					$scope.qty--;	
				}
			}
		}
		$scope.backToList = function(){
			$location.path('/products');
		}
		$scope.restock = function(){
			if($scope.qty < 1){
				alert('Please enter a quantity greater than 0 to restock item;');
			} else{
				alert('You have reordered '+$scope.qty+' '+$scope.product.title);
			}
		}
		$scope.getProduct();
	});