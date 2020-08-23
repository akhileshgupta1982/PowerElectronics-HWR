function draw() {
 // get values directly from form
 var Vp=document.myForm.Vp.value
 var fo=document.myForm.fo.value
  var Vmax=document.myForm.Vmax.value
 var Tmax=document.myForm.Tmax.value
 var N=document.myForm.N.value
 var FA=document.myForm.FA.value;
 var m = 0;
 
 Vp=Number(Vp);
 fo=Number(fo);
  Vmax=Number(Vmax);
 Tmax=Number(Tmax);
 N=Number(N);
 FA=Number(FA);
 // define canvas
 var canvas = document.getElementById("canvas");
 if (null==canvas || !canvas.getContext) return;
 ctx=canvas.getContext("2d")

// fill canvas
 ctx.fillStyle="white";
 ctx.fillRect(0,0,501,401);
 
 // define origin at plot center
 var axes={};
 axes.x0 = 0;  // x0, y0 place plot origin in middle of canvas
 axes.y0 = 0.3*canvas.height;
 
 // draw axes
 showAxes(ctx,axes);
 
 var x=new Array(), y=new Array();   // x,y plotting variables
 var dt, tstart, tstop;             // time variables
 var z;
 z = 0;
 var k;
 k = 0;
 
 // define plot paramaters
 tstart=0;
 tstop=Tmax;
 dt = Tmax / (N-1);				// time increment over N points
 axes.xscale = (canvas.width)/(Tmax); 	// x pix per s
 axes.yscale = (canvas.height)/(2*Vmax);    // y pix per V
 axes.N = N;
 
 
  // create function 
    
 for (k=0; k <= (Tmax*fo); k++) 
 {
 for ( i=1; i<(N/(Tmax*fo)); i++) 
 {
 
 x[m] = (z + (dt));
 
 if ((x[m]*(Math.PI)*2*fo)<((FA*(Math.PI)/180)+(2*(Math.PI)*k))||(((2*k+1)*(Math.PI))<(x[m]*(Math.PI)*2*fo)))
			{
			y[m]=0;
			
						}
			else
		{
			y[m] = Vp*Math.sin(2*(Math.PI)*fo*x[m]) ;
			
		}
 z=x[m] 
 m=m+1;
 	}
	
   }

 GraphArray(ctx,axes,x,y,"rgb(0,0,256)",2); 
 
 var axes={};
 axes.x0 = 0;  // x0, y0 place plot origin in middle of canvas
 axes.y0 = 0.70*canvas.height;
 
 // draw axes
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
 
 if ((x[m]*(Math.PI)*2*fo)<((FA*(Math.PI)/180)+(2*(Math.PI)*k))||(((2*k+1)*(Math.PI))<(x[m]*(Math.PI)*2*fo)))
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
	
   }

 GraphArray(ctx,axes,x,y,"rgb(256,0,0)",2); 
 
 }
 
///////////////////////////////////////////////////////
function GraphArray (ctx,axes,x,y,color,thick) {

 var i, x0, y0, xscale, yscale, xp, yp;
  
 x0=axes.x0;  y0=axes.y0;
 xscale=axes.xscale;  yscale=axes.yscale;

 ctx.beginPath();
 ctx.lineWidth = thick;
 ctx.strokeStyle = color;

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
 var x0=axes.x0, w=ctx.canvas.width;
 var y0=axes.y0, h=ctx.canvas.height;
 ctx.lineWidth = 1.2;
 
 ctx.beginPath();
 ctx.strokeStyle = "black"; 
 ctx.moveTo(0,y0);    ctx.lineTo(w,y0);  // X axis
 ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
 ctx.stroke();
 
}