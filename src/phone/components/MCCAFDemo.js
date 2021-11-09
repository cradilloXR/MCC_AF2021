var currentMin = 6;
var CurrentMax = 9;
var voltageMin = 480;
var voltageMax = 485;
var frequencyMin = 70;
var frequencyMax = 75;

//1A - Main Circuit Breaker
$scope.show1A = function() {
	$scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/green_dot.svg';
	$scope.view.wdg['label-1']['text']= 'MCC_1A';
	$scope.view.wdg['label-2']['text']= 'Main Circuit Breaker';
	$scope.view.wdg['labelFault']['text']= 'Fault Code:';
	$scope.view.wdg['labelFaultValue']['text']= 'No Fault';
	$scope.view.wdg['hyperlinkManual']['visible'] = false;
	$scope.view.wdg['hyperlinkManual']['url'] = '';
	$scope.view.wdg['hyperlinkFaultCodes']['visible'] = false;
	$scope.view.wdg['hyperlinkFaultCodes']['url'] = '';
	$scope.view.wdg['hyperlinkSchematic']['visible'] = false;
	$scope.view.wdg['hyperlinkSchematic']['url'] = '';
	
	voltageMin = 480;
    voltageMax = 485;
	currentMin = 10;
	CurrentMax = 14;
    frequencyMin = 60;
	frequencyMax = 60;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//1E - Power Monitor 5000
$scope.show1E = function() {
	$scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/green_dot.svg';
	$scope.view.wdg['label-1']['text']= 'MCC_1E';
	$scope.view.wdg['label-2']['text']= 'Power Monitor 5000';
	$scope.view.wdg['labelFault']['text']= 'Fault Code:';
	$scope.view.wdg['labelFaultValue']['text']= 'No Fault';
	$scope.view.wdg['hyperlinkManual']['visible'] = false;
	$scope.view.wdg['hyperlinkManual']['url'] = '';
	$scope.view.wdg['hyperlinkFaultCodes']['visible'] = false;
	$scope.view.wdg['hyperlinkFaultCodes']['url'] = '';
	$scope.view.wdg['hyperlinkSchematic']['visible'] = false;
	$scope.view.wdg['hyperlinkSchematic']['url'] = '';
	
	voltageMin = 480;
    voltageMax = 485;
	currentMin = 11;
	CurrentMax = 13;
    frequencyMin = 60;
	frequencyMax = 60;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//2A - PowerFlex 525
$scope.show2A = function() {
	$scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/red_dot.svg';
	$scope.view.wdg['label-1']['text']= 'MCC_2A';
	$scope.view.wdg['label-2']['text']= 'PowerFlex 525';
	$scope.view.wdg['labelFault']['text']= 'Fault Code:';
	$scope.view.wdg['labelFaultValue']['text']= 'F004 Under Voltage';
	$scope.view.wdg['hyperlinkManual']['visible'] = true;
	$scope.view.wdg['hyperlinkManual']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/520-um001_-en-e.pdf';	
	$scope.view.wdg['hyperlinkFaultCodes']['visible'] = true;
	$scope.view.wdg['hyperlinkFaultCodes']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/520-um001_-en-e.pdf#page=157';
	$scope.view.wdg['hyperlinkSchematic']['visible'] = true;
	$scope.view.wdg['hyperlinkSchematic']['url'] = 'https://rockwellautomation.sharepoint.com/:b:/s/MCCAF/EXXJB6pasNdEo8fTipifAXwB7e4hycHqXAywsyaPztXKiQ?e=Sho6An';
	
	voltageMin = 200;
    voltageMax = 225;
	currentMin = 0;
	CurrentMax = 0;
    frequencyMin = 0;
	frequencyMax = 0;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//2D - E300
$scope.show2D = function() {
	$scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/yellow_dot.svg';
	$scope.view.wdg['label-1']['text']= 'MCC_2D';
	$scope.view.wdg['label-2']['text']= 'E300';
	$scope.view.wdg['labelFault']['text']= 'Alarm Code:';
	$scope.view.wdg['labelFaultValue']['text']= 'Overload Warning';
	$scope.view.wdg['hyperlinkManual']['visible'] = true;
	$scope.view.wdg['hyperlinkManual']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/193-um015_-en-p.pdf';
	$scope.view.wdg['hyperlinkFaultCodes']['visible'] = true;
	$scope.view.wdg['hyperlinkFaultCodes']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/520-um001_-en-e.pdf#page=157';
	$scope.view.wdg['hyperlinkSchematic']['visible'] = true;
	$scope.view.wdg['hyperlinkSchematic']['url'] = 'https://rockwellautomation.sharepoint.com/:b:/s/MCCAF/EUKItwXfksdPg5pCEsy2oPQBYxUaVlF7inxZMdS_TSZFFw?e=0ARS97';
	
	voltageMin = 480;
    voltageMax = 485;
	currentMin = 5.1;
	CurrentMax = 7.2;
    frequencyMin = 60;
	frequencyMax = 60;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//2H - E100
$scope.show2H = function() {
	$scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/green_dot.svg';
	$scope.view.wdg['label-1']['text']= 'MCC_2H';
	$scope.view.wdg['label-2']['text']= 'E100';
	$scope.view.wdg['labelFault']['text']= 'Fault Code:';
	$scope.view.wdg['labelFaultValue']['text']= 'None';
	$scope.view.wdg['hyperlinkManual']['visible'] = false;
	$scope.view.wdg['hyperlinkManual']['url'] = '';
	$scope.view.wdg['hyperlinkFaultCodes']['visible'] = false;
	$scope.view.wdg['hyperlinkFaultCodes']['url'] = '';
	$scope.view.wdg['hyperlinkSchematic']['visible'] = false;
	$scope.view.wdg['hyperlinkSchematic']['url'] = '';
	
	voltageMin = 480;
    voltageMax = 485;
	currentMin = 2.8;
	CurrentMax = 5.1;
    frequencyMin = 60;
	frequencyMax = 60;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//Flash icons that are faulted
$interval(function() {
	if ($scope.view.wdg['3DGauge-4'].opacity == 1) {
        $scope.view.wdg['3DGauge-4'].opacity = 0.25;
    } else {
      	$scope.view.wdg['3DGauge-4'].opacity = 1;
    }
},500);
$interval(function() {
	if ($scope.view.wdg['3DGauge-5'].opacity == 1) {
        $scope.view.wdg['3DGauge-5'].opacity = 0.25;
    } else {
      	$scope.view.wdg['3DGauge-5'].opacity = 1;
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
  	$scope.view.wdg['gauge-3']['value'] = ($scope.view.wdg['gauge-1']['value'] * $scope.view.wdg['gauge-2']['value']) / 1000;
},1000);
$interval(function() {
  	$scope.view.wdg['gauge-4']['value'] = Math.floor(Math.random() * (frequencyMax - frequencyMin) ) + frequencyMin;
},1000);

// Show/Hide Gauges
$scope.hideGauges = function() {
 	$scope.view.wdg['3DGauge-1']['visible'] = false;
    $scope.view.wdg['3DGauge-2']['visible'] = false;
    $scope.view.wdg['3DGauge-3']['visible'] = false;
    $scope.view.wdg['3DGauge-4']['visible'] = false;
    $scope.view.wdg['3DGauge-5']['visible'] = false;
}
$scope.showGauges = function() {
 	$scope.view.wdg['3DGauge-1']['visible'] = true;
    $scope.view.wdg['3DGauge-2']['visible'] = true;
    $scope.view.wdg['3DGauge-3']['visible'] = true;
    $scope.view.wdg['3DGauge-4']['visible'] = true;
    $scope.view.wdg['3DGauge-5']['visible'] = true;
}


//Show/Hide Arc FLash Warning
$scope.hideArcFlash = function() {
    $scope.view.wdg['3DImage-1']['visible'] = false;
    $scope.view.wdg['3DImage-2']['visible'] = false;
    $scope.view.wdg['3DImage-3']['visible'] = false;
    $scope.view.wdg['3DImage-4']['visible'] = false;
}
$scope.showArcFlash = function() {
    $scope.view.wdg['3DImage-1']['visible'] = true;
    $scope.view.wdg['3DImage-2']['visible'] = true;
    $scope.view.wdg['3DImage-3']['visible'] = true;
    $scope.view.wdg['3DImage-4']['visible'] = true;
}

$scope.animation = function () {
 	$scope.hideGauges();
  	$scope.view.wdg['toggleButton-3']['pressed'] = false;
  	$scope.view.wdg['toggleButton-3']['disabled'] = true;
  	$scope.hideArcFlash();
  	$scope.view.wdg['toggleButton-4']['pressed'] = false;
  	$scope.view.wdg['toggleButton-4']['disabled'] = true;
 	$scope.app.fn.triggerWidgetService('model-2','playAll') 
}

$scope.animationFinished = function() {
  	$scope.view.wdg['toggleButton-5']['pressed'] = false;
  	$scope.view.wdg['toggleButton-3']['disabled'] = false;
  	$scope.view.wdg['toggleButton-4']['disabled'] = false;
  	$scope.view.wdg['toggleButton-5']['disabled'] = false;
}

$scope.animationStop = function () {
	$scope.app.fn.triggerWidgetService('model-2','stop')
  	$scope.app.fn.triggerWidgetService('model-2','reset')
  	$scope.animationFinished();
}
