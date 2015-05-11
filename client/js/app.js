/*
* Main App Object
* Routes Attached Here
*/
angular.module('app', ['ui.router', 'MainCTRL', 'ProductsCTRL', 'ProductCTRL'])
.config(function($stateProvider, $urlRouterProvider){
	
	//Return them to homepage if unhandled route
	$urlRouterProvider.otherwise('/products');
	$stateProvider
		.state('products', {
			url: '/products',
			templateUrl: 'js/partials/products_list.partial.html'
		})
		.state('product', {
			url: '/products/:product',
			templateUrl: 'js/partials/product.partial.html'
		});

});