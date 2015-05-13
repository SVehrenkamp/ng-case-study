/*
* Main App Object
* Routes Attached Here
*/
angular.module('app', ['ui.router', 'AppCTRL', 'MainCTRL', 'ProductsCTRL', 'ProductCTRL', 'NavDirective'])
.config(function($stateProvider, $urlRouterProvider){
	
	//Return them to homepage if unhandled route
	$urlRouterProvider.otherwise('/login');
	$stateProvider
		.state('login', {
			url: '/login',
			views: {
				'Main': {
					templateUrl: 'js/partials/home.partial.html'
				}
			}
		})
		.state('products', {
			url: '/products',
			views: {
				'Main':{
					templateUrl: 'js/partials/products_list.partial.html'
				}
			}
		})
		.state('product', {
			url: '/products/:product',
			views: {
				'Main': {
					templateUrl: 'js/partials/product.partial.html'
				}
			}
		});

});