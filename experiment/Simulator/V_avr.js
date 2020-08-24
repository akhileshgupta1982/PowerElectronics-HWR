function V_avg() {
             	  
            	var Vp=document.myForm.Vp.value
  Vm=Number(Vp);
 var FA=document.myForm.FA.value;
  fir=Number(FA);
y=Math.PI;
 document.forms["myForm"]["Average_Voltage"].value = " = " + Vm*(1+Math.cos(fir*y/180))/(2*Math.PI) +"   V";
	         }
			 function V_rms() {
             	  
            	var Vp=document.myForm.Vp.value
  Vm=Number(Vp);
 var FA=document.myForm.FA.value;
  fir=Number(FA);
y=Math.PI;
 document.forms["myForm"]["RMS_Voltage"].value = " = " + (Vm/(2*Math.sqrt(y)))*Math.sqrt((y-(fir*y/180)) + 0.5*Math.sin(2*fir*y/180)) +"   V";
	         }