﻿//v. 1.0 9/4/2007
function modeDisplay(){
	var indicatorString='<div id="apiIndicator"  href="#" onMouseDown="turnOn();return false;">';
indicatorString+='<div id="modeExplanationContainer" style="display:none;" onClick="turnOn();">You are in Unscored Mode because you did not enroll in this module through MLearning.</br>No score will be recorded in your MLearning Transcript but you may use these materials for reference. <\/div>';
indicatorString+='</div>';

   if (parent.APIOK()){

	 // document.getElementById('apiIndicator').style.display='none';
	 // document.getElementById('mlearningControls').style.display='block';
   }
   else {
	 	 document.getElementById('mlearningControls').innerHTML=('');
         document.getElementById('mlearningControls').innerHTML+=(indicatorString);
   }
}

function turnOn() {
    if ( document.getElementById('modeExplanationContainer').style.display == 'block'){
         document.getElementById('modeExplanationContainer').style.display = 'none';
         }
 else {
         document.getElementById('modeExplanationContainer').style.visibility = 'visible';
		 document.getElementById('modeExplanationContainer').style.display = 'block';
                      }
}			  



			 