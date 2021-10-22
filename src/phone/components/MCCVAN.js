// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available
console.log($scope.app);



//Simulated data for the Gauges
$interval(function() {
  //return Math.floor(Math.random() * (max - min) ) + min;
  $scope.view.wdg['gauge-1']['value'] = Math.floor(Math.random() * (7 - 5) ) + 5;
},1000);

$interval(function() {
  //return Math.floor(Math.random() * (max - min) ) + min;
  $scope.view.wdg['gauge-2']['value'] = Math.floor(Math.random() * (485 - 480) ) + 480;
},1000);
$interval(function() {
  //return Math.floor(Math.random() * (max - min) ) + min;
  $scope.view.wdg['gauge-3']['value'] = Math.floor(Math.random() * (2 - 1) ) + 1;
},1000);
$interval(function() {
  //return Math.floor(Math.random() * (max - min) ) + min;
  $scope.view.wdg['gauge-4']['value'] = Math.floor(Math.random() * (75 - 70) ) + 70;
},1000);


$scope.openPopup = function() {
  
  
	};
