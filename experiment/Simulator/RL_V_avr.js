
function LV_avg() {
	var Vp=document.myForm.Vp.value
  Vm=Number(Vp);
 var FA=document.myForm.FA.value;
  fir=Number(FA);
   var FA=document.myForm.FA.value;
  fir=Number(FA);
 var   R1=document.myForm.RL.value;
R=Number(R1);
   var   L1=document.myForm.L.value;
L=Number(L1);
var f1=document.myForm.fo.value;
    fo2=Number(f1);
var p_h=Math.atan((Math.PI)*2*fo2*L/R); 
var bet = 210//180+180*p_h/Math.PI;
//var bet = (3.342 +p_h*(0.8-0.08*p_h)-(FA*(Math.PI)/180)*(0.9-0.09*FA*(Math.PI)/180))*180/Math.PI//
y=Math.PI;
   
				document.forms["myForm"]["Average_Voltage"].value = " = " + (Vm/(2*Math.PI))*(Math.cos(fir*y/180)-Math.cos(bet*y/180)) +"   V";
	         }
function LV_rms() {
	var Vp=document.myForm.Vp.value
  Vm=Number(Vp);
 var FA=document.myForm.FA.value;
  fir=Number(FA);
   var FA=document.myForm.FA.value;
  fir=Number(FA);
 var   R1=document.myForm.RL.value;
R=Number(R1);
   var   L1=document.myForm.L.value;
L=Number(L1);
var f1=document.myForm.fo.value;
    fo2=Number(f1);
var p_h=Math.atan((Math.PI)*2*fo2*L/R); 
var bet = 180+180*p_h/Math.PI;
y=Math.PI;
				document.forms["myForm"]["RMS_Voltage"].value = " = " + (Vm/(2*Math.sqrt(y)))*Math.sqrt(((bet*y/180)-(fir*y/180))-0.5*(Math.sin(2*(bet*y/180))-Math.sin(2*(fir*y/180)))) +"   V";
	         }