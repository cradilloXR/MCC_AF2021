// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


$scope.bucketRemoval = function() {
	$scope.app.fn.navigate('MCCAFDemo');  
}

$scope.animation = function() {
	//$scope.app.fn.triggerWidgetService('model-2','stop')
  	$scope.app.fn.triggerWidgetService('model-2','reset')
	$scope.app.fn.triggerWidgetService('model-2','playAll') 
}