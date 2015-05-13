angular.module('NavDirective', [])
	.directive('navigation', [function () {
		return {
			restrict: 'E',
			templateUrl: 'js/partials/navigation.partial.html',
			link: function (scope, iElement, iAttrs) {
			}
		};
	}])