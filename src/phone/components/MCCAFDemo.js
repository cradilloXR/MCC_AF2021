var currentMin = 6;
var CurrentMax = 9;
var voltageMin = 480;
var voltageMax = 485;
var frequencyMin = 70;
var frequencyMax = 75;

//1
$scope.show1 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/green_dot.svg';
    $scope.view.wdg['label-1']['text']= 'MCC_1A';
	$scope.view.wdg['label-2']['text']= 'Feeder Circuit Breaker';
	$scope.view.wdg['labelFaultValue']['text']= 'No Fault';
  	$scope.view.wdg['hyperlinkManual']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/193-um015_-en-p.pdf';
  	$scope.view.wdg['hyperlinkFaultCodes']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/193-um015_-en-p.pdf#page=209';
  	$scope.view.wdg['hyperlinkSchematic']['url'] = 'https://rockwellautomation.sharepoint.com/:b:/s/MCCAF/EUKItwXfksdPg5pCEsy2oPQBYxUaVlF7inxZMdS_TSZFFw?e=0ARS97';
  

    voltageMin = 480;
    voltageMax = 485;
    frequencyMin = 60;
	frequencyMax = 60;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//3
$scope.show3 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/yellow_dot.svg';
  	$scope.view.wdg['label-1']['text']= 'MCC_1E';
  	$scope.view.wdg['label-2']['text']= 'PowerFlex 753';
	$scope.view.wdg['labelFaultValue']['text']= 'Overtemp Condition Imminent'; 
    $scope.view.wdg['hyperlinkManual']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/pm/750-pm001_-en-p.pdf';
  	$scope.view.wdg['hyperlinkFaultCodes']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/pm/750-pm001_-en-p.pdf#page=311';
  	$scope.view.wdg['hyperlinkSchematic']['url'] = 'https://rockwellautomation.sharepoint.com/:b:/s/MCCAF/ETfrjyON2hpLsyyzV0wXAF0BMpD3RwLrxYa21QV95oSlDw?e=U4GsUC';
  
    voltageMin = 480;
    voltageMax = 485;
    frequencyMin = 70;
    frequencyMax = 75;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//4
$scope.show4 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/green_dot.svg';
  	$scope.view.wdg['label-1']['text']= 'MCC_2A';
  	$scope.view.wdg['label-2']['text']= 'PowerFlex 525';
	$scope.view.wdg['labelFaultValue']['text']= 'No Fault';
  	$scope.view.wdg['hyperlinkManual']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/520-um001_-en-e.pdf';	
  	$scope.view.wdg['hyperlinkFaultCodes']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/um/520-um001_-en-e.pdf#page=157';
  	$scope.view.wdg['hyperlinkSchematic']['url'] = 'https://rockwellautomation.sharepoint.com/:b:/s/MCCAF/EXXJB6pasNdEo8fTipifAXwB7e4hycHqXAywsyaPztXKiQ?e=Sho6An';
  
    voltageMin = 480;
    voltageMax = 485;
    frequencyMin = 70;
    frequencyMax = 75;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//5
$scope.show5 = function() {
    $scope.view.wdg['imageButtonStatus']['imgsrc'] = 'app/resources/Uploaded/red_dot.svg';
  	$scope.view.wdg['label-1']['text']= 'MCC_2E';
  	$scope.view.wdg['label-2']['text']= 'PowerFlex 755';
	$scope.view.wdg['labelFaultValue']['text']= 'F004 Under Voltage';
  	$scope.view.wdg['hyperlinkManual']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/pm/750-pm001_-en-p.pdf';
	$scope.view.wdg['hyperlinkFaultCodes']['url'] = 'https://literature.rockwellautomation.com/idc/groups/literature/documents/pm/750-pm001_-en-p.pdf#page=311';
  	$scope.view.wdg['hyperlinkSchematic']['url'] = 'https://rockwellautomation.sharepoint.com/:b:/s/MCCAF/ETfrjyON2hpLsyyzV0wXAF0BMpD3RwLrxYa21QV95oSlDw?e=U4GsUC';
  
    voltageMin = 200
    voltageMax = 225
    frequencyMin = 70;
    frequencyMax = 75;
  
  	$scope.app.fn.triggerWidgetService('unitInfoPopup','showpopup')
}

//Flash icons that are faulted
$interval(function() {
	if ($scope.view.wdg['3DGauge-3'].opacity == 1) {
        $scope.view.wdg['3DGauge-3'].opacity = 0.25;
    } else {
      	$scope.view.wdg['3DGauge-3'].opacity = 1;
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
