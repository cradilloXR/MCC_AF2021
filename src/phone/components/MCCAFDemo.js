var currentMin = 5;
var CurrentMax = 7;
var voltageMin = 480;
var voltageMax = 485;
var powerMin = 1;
var powerMax = 2;
var frequencyMin = 70;
var frequencyMax = 75;

//1
$scope.show1 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/green_dot.svg';
    $scope.view.wdg['label-1']['text']= 'MCC';
  	$scope.view.wdg['label-2']['text']= '1';
  	$scope.view.wdg['labelFaultValue']['text']= 'No Fault';

    currentMin = 5;
    currentMax = 7;
    voltageMin = 480;
    voltageMax = 485;
    powerMin = 1;
    powerMax = 2;
    frequencyMin = 70;
	frequencyMax = 75;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//2
$scope.show2 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/red_dot.svg';
  	$scope.view.wdg['label-1']['text']= 'MCC';
  	$scope.view.wdg['label-2']['text']= '2';
	$scope.view.wdg['labelFaultValue']['text']= 'F004 Under Voltage';
  
    currentMin = 5;
    currentMax = 7;
    voltageMin = 200;
    voltageMax = 255;
    powerMin = 1;
    powerMax = 2;
    frequencyMin = 70;
    frequencyMax = 75;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//3
$scope.show3 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/brown_dot.svg';
  	$scope.view.wdg['label-1']['text']= 'MCC';
  	$scope.view.wdg['label-2']['text']= '3';
	$scope.view.wdg['labelFaultValue']['text']= 'F008 Heatsink Over Temp';
  
    currentMin = 5;
    currentMax = 7;
    voltageMin = 480;
    voltageMax = 485;
    powerMin = 1;
    powerMax = 2;
    frequencyMin = 70;
    frequencyMax = 75;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//4
$scope.show4 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/yellow_dot.svg';
  	$scope.view.wdg['label-1']['text']= 'MCC';
  	$scope.view.wdg['label-2']['text']= '4';
	$scope.view.wdg['labelFaultValue']['text']= 'Handswitch On';
  
    currentMin = 5;
    currentMax = 7;
    voltageMin = 480;
    voltageMax = 485;
    powerMin = 1;
    powerMax = 2;
    frequencyMin = 70;
    frequencyMax = 75;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//5
$scope.show5 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/white_dot.svg';
  	$scope.view.wdg['label-1']['text']= 'MCC';
  	$scope.view.wdg['label-2']['text']= '5';
	$scope.view.wdg['labelFaultValue']['text']= 'No Fault';
  
    currentMin = 0;
    currentMax = 0;
    voltageMin = 0;
    voltageMax = 0;
    powerMin = 0;
    powerMax = 0;
    frequencyMin = 0;
    frequencyMax = 0;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//Flash icons that are faulted
$interval(function() {
	if ($scope.view.wdg['3DGauge-2'].opacity == 1) {
        $scope.view.wdg['3DGauge-2'].opacity = 0.25;
    } else {
      	$scope.view.wdg['3DGauge-2'].opacity = 1;
    }
},500);
$interval(function() {
	if ($scope.view.wdg['3DGauge-3'].opacity == 1) {
        $scope.view.wdg['3DGauge-3'].opacity = 0.25;
    } else {
      	$scope.view.wdg['3DGauge-3'].opacity = 1;
    }
},500);
$interval(function() {
	if ($scope.view.wdg['3DGauge-4'].opacity == 1) {
        $scope.view.wdg['3DGauge-4'].opacity = 0.25;
    } else {
      	$scope.view.wdg['3DGauge-4'].opacity = 1;
    }
},500);

//Simulated data for the Gauges
$interval(function() {
  	$scope.view.wdg['gauge-1']['value'] = Math.floor(Math.random() * (CurrentMax - currentMin) ) + currentMin;
},1000);
$interval(function() {
	$scope.view.wdg['gauge-2']['value'] = Math.floor(Math.random() * (voltageMax - voltageMin) ) + voltageMin;
},1000);
$interval(function() {
  	$scope.view.wdg['gauge-3']['value'] = Math.floor(Math.random() * (powerMax - powerMin) ) + powerMin;
},1000);
$interval(function() {
  	$scope.view.wdg['gauge-4']['value'] = Math.floor(Math.random() * (frequencyMax - frequencyMin) ) + frequencyMin;
},1000);

