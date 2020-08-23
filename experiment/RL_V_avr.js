function V_avg() {
             	  
            	var Vp=document.myForm.Vp.value
  Vm=Number(Vp);
 var FA=document.myForm.FA.value;
  fir=Number(FA);
y=Math.PI;
 document.forms["myForm"]["Average_Voltage"].value = " = " + (Vm/(2*Math.PI))*(Math.cos(fir*y/180)-Math.cos(bet*y/180)) +"   V";
	         }
			 function V_rms() {
             	  
            	var Vp=document.myForm.Vp.value
  Vm=Number(Vp);
 var FA=document.myForm.FA.value;
  fir=Number(FA);
y=Math.PI;
 document.forms["myForm"]["RMS_Voltage"].value = " = " + (Vm/(2*Math.sqrt(y)))*Math.sqrt(((bet*y/180)-(fir*y/180))-0.5*(Math.sin(2*(bet*y/180))-Math.sin(2*(fir*y/180)))) +"   V";
	         }