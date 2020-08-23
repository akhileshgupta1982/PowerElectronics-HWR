function draw() {
 // get values directly from form
 
 var Vp=document.myForm.Vp.value
 var fo=document.myForm.fo.value
  var Vmax=document.myForm.Vmax.value
 var Tmax=document.myForm.Tmax.value
 var N=document.myForm.N.value
 var FA=document.myForm.FA.value;
 var RL=document.myForm.RL.value;
 var m = 0;
 
 Vp=Number(Vp);
 fo=Number(fo);
  Vmax=Number(Vmax);
 Tmax=Number(Tmax);
 N=Number(N);
 FA=Number(FA);
 RL=Number(RL)
 // define canvas
 var canvas = document.getElementById("canvas");
 if (null==canvas || !canvas.getContext) return;
 ctx=canvas.getContext("2d")


// fill canvas
 ctx.fillStyle="white";
 ctx.fillRect(0,0,1050,401);
 
 // define origin at plot center
 var axes={};
 axes.x0 = 0;  // x0, y0 place plot origin in middle of canvas
 axes.y0 = 0.25*canvas.height;
 
 // draw axes
 showAxes(ctx,axes);
 
 var x=new Array(), y=new Array(), zz=new Array();   // x,y plotting variables
 var dt, tstart, tstop;             // time variables
 var z;
 z = 0;
 var k;
 k = 0;
 var p_h=Math.atan((Math.PI)*2*fo*.02/RL);
 var ext_ang=Math.PI+p_h;
 
 // define plot paramaters
 tstart=0;
 tstop=Tmax;
 dt = Tmax / (N-1);				// time increment over N points
 axes.xscale = (canvas.width)/(Tmax); 	// x pix per s
 axes.yscale = (canvas.height)/(2*Vmax);    // y pix per V
 axes.N = N;

  //ctx.strokeText("a", FA*(canvas.width)/(180*2*Tmax*fo), 80);
  // create function 
    
 for (k=0; k <= (Tmax*fo); k++) 
 {
 for ( i=1; i<(N/(Tmax*fo)); i++) 
 {
 
 x[m] = (z + (dt));
 
 
if(((360*Tmax*fo*i/N)<(FA))||((360*Tmax*fo*i/N)>(180+p_h*180/Math.PI)))
			{
			y[m]=0;
			
						}
			else
		{
			//if((x[m]*(Math.PI)*2*fo)==(FA*(Math.PI)/180))
			//{
				//		y[m] = Vp*Math.sin(2*(Math.PI)*fo*x[m]) ;
						
		//	}
			//else
			{
				y[m] = Vp*Math.sin(2*(Math.PI)*fo*x[m]) ;
			}
		}
 z=x[m] 
 m=m+1;
 
 	}
var ss=2*k+"\u03C0+\u03B1"
ctx.font = "16px Times New Roman"
if (k==0)
{
ctx.strokeText("\u03B1", (k*360*(canvas.width)/(180*2*Tmax*fo)+FA*(canvas.width)/(180*2*Tmax*fo)), 0.25*canvas.height+15);
}
else
{
ctx.strokeText(ss, (k*360*(canvas.width)/(180*2*Tmax*fo)+FA*(canvas.width)/(180*2*Tmax*fo)), 0.25*canvas.height+15);
}
   }

 GraphArray(ctx,axes,x,y,"rgb(0,0,256)",2); 
 
 //////////////////////////// Vt
 var axes={};
 axes.x0 = 0;  // x0, y0 place plot origin in middle of canvas
 axes.y0 = 0.50*canvas.height;
 // draw axes
 var phi=Math.atan((Math.PI)*2*fo*.10/RL);
 showAxes(ctx,axes);
 tstart=0;
 tstop=Tmax;
 dt = Tmax / (N-1);				// time increment over N points
 axes.xscale = (canvas.width)/(Tmax); 	// x pix per s
 axes.yscale = (canvas.height)/(2*Vmax);    // y pix per V
 axes.N = N;
 m=0;
 z=0;
 for (k=0; k <= (Tmax*fo); k++) 
 {
 for ( i=1; i<(N/(Tmax*fo)); i++) 
 {
 
 x[m] = (z + (dt));
 
 if(((360*Tmax*fo*i/N)<(FA))||((360*Tmax*fo*i/N)>(180+p_h*180/Math.PI)))
			{
			y[m]=Vp*Math.sin(2*(Math.PI)*fo*x[m]);
			
						}
			else
		{
			y[m] = 0 ;
			
		}
 z=x[m] 
 m=m+1;
 	}
	var ss=2*k+2+"\u03C0"
	ctx.strokeText(ss, (k+1)*360*(canvas.width)/(180*2*Tmax*fo), (0.50*canvas.height+15));
   }

 GraphArray(ctx,axes,x,y,"rgb(256,0,0)",2); 
 
 
 //////////////////////////// C
 
 
   
 var axes={};
 axes.x0 = 0;  // x0, y0 place plot origin in middle of canvas
 axes.y0 = 0.8*canvas.height;
 // draw axes
 showAxes(ctx,axes);
 tstart=0;
 tstop=Tmax;
 dt = Tmax / (N-1);				// time increment over N points
 axes.xscale = (canvas.width)/(Tmax); 	// x pix per s
 axes.yscale = (canvas.height)/(2*Vmax);    // y pix per V
 axes.N = N;
  var x=new Array(), y=new Array(); 
 m=0;
 z1=0;
var L = 0.02;
var p_h=Math.atan((Math.PI)*2*fo*L/RL);
var del =3.342 +p_h*(0.8-0.08*p_h)-(FA*(Math.PI)/180)*(0.9-0.09*FA*(Math.PI)/180);

var bet=FA+del*180/Math.PI;
var zr=(Math.sqrt(RL^2+(2*(Math.PI)*fo*L)^2));
 for (k=0; k < (Tmax*fo); k++) 
 {
 for ( i=0; i<(N/(Tmax*fo)); i++) 
 {
 x[m] = z1+(i*(dt));
 //if (((x[m]*(Math.PI)*2*fo)<((FA*(Math.PI)/180)+(2*(Math.PI)*k)))||((((2*k+1)*(Math.PI))+(bet*(Math.PI)/180))<(x[m]*(Math.PI)*2*fo)))
if(((360*Tmax*fo*i/N)<(FA))||((360*Tmax*fo*i/N)>(180+p_h*180/Math.PI)))
{
			y[m]=0;
			
						}
			else
		{
			
			y[m]=((Vp/zr)*Math.sin(2*(Math.PI)*fo*i*(dt)-p_h))-((Vp/zr)*Math.sin(FA*((Math.PI)/180)-p_h)*Math.exp(-(RL/(2*(Math.PI)*fo*L))*(2*(Math.PI)*fo*i*(dt)-FA*((Math.PI)/180))))
			
		}
 
 m=m+1;
 
 	}
z1=x[m-1] 
	
   }

 GraphArray(ctx,axes,x,y,"green",2); 
 
 }
 
///////////////////////////////////////////////////////
function GraphArray (ctx,axes,x,y,color,thick) {

 var i, x0, y0, xscale, yscale, xp, yp;
  var z5=0;
 x0=axes.x0;  y0=axes.y0;
 xscale=axes.xscale;  yscale=axes.yscale;

 ctx.beginPath();
 ctx.lineWidth = thick;
 ctx.strokeStyle = color;


  var FA=document.myForm.FA.value;
 var fo=document.myForm.fo.value;
  fo=Number(fo);
 FA=Number(FA);
  
 for (i=0; i<axes.N; i++) {
 	// translate actual x,y to plot xp,yp
 	
	xp = x0 + x[i]*xscale;
 	yp = y0 - y[i]*yscale;
 	
 	// draw ine to next point
	if (i==0) ctx.moveTo( xp, yp );
	else      ctx.lineTo( xp, yp );
	
	
 }
 



 ctx.stroke();
}
//////////////////////////////////////////////////////
function showAxes(ctx,axes) {
 var jk="hi"
 var x0=axes.x0, w=ctx.canvas.width;
 var y0=axes.y0, h=ctx.canvas.height;

 ctx.lineWidth = 1.2;
  ctx.beginPath();
 ctx.strokeStyle = "black"; 
 ctx.moveTo(0,y0); 

 ctx.lineTo(w,y0);  //document.write("X axis")
 ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
 ctx.stroke();
 
}
