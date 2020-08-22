## Storyboard (Round 2)

Experiment 1:To obtain the simulation of single phase half wave controlled rectifier with R and RL load and plot load voltage and load current waveforms.

### 1. Story Outline:

<p align="justify">The uses approaches to the simulator to understand the basic concept of firing angle and its use in half wave controlled rectifier. The simulator has six scroll buttons which are used by the user to control the different parameters. User scrolls the firing angle button to change the value of firing instant of the thyristor to control the DC value of output voltage. The resistance scroll button is used by the user to set the load resistance value of the circuit.</p>
<p align="justify">There are three generalized button for the whole button. User may use the V<sub>max</sub> and T<sub>max</sub> scrolls button to zoom in or zoom out all the plots for clear visualization. User may use the average voltage and RMS voltage buttons for the calculation of corresponding values of output voltages.</p>


### 2. Story:

<p align="justify">The story is started with a character called thyristor. In our daily life we learn many thing with their pros and cons. Similarly, in this experiment we learn to control the output DC voltage by delaying the ON position of the thyristor. Here thyristor acts just like a switch which is used to obtain the average output voltage according to our needs. User initiates the process to delay the switch ON position by setting the value of firing angle. The whole story design process of simulation experiment is narrated as a story which consists of the description of the visual stage, the goals and objectives planned and the pathway set for the learner. Moreover a few challenges and pitfalls are also set to underline and emphasize the concepts involved in the experimentation. Every stage is described thoroughly in the following subsections.</p>

#### 2.1 Set the Visual Stage Description:
<p align="justify">The simulator starts with the experiment name on the top and asking for the input whether user need to do experiment for R load or RL load. The simulator consists of five blocks: four blocks with inputs and outputs and one block with drop down instruction lists. User needs to connect the circuit as given in instructions. After proper connections, user needs to enter the desired value of input supply, load resistance, load inductance, frequency and firing angle given in left side block. Now, user may hit the “Draw Waveform” button to obtain the output waveforms in right block and average and RMS output voltage in left block. If user thinks that he enters some wrong value by mistake, there is a RESET button next to Draw Waveform button to reset the inputs. </p>

#### 2.2 Set User Objectives & Goals:
<p align="justify">The main objective of this experiment is  to let the user know about the functioning of thyristor and its appliaction as half wave controlled rectifier. At the end of the module the student would be able to understand:<br>
1.	The difference between half wave uncontrolled rectifier and half wave controlled rectifier.<br>
2.	The role of firing angle to control the DC and RMS values output voltage.<br>
3.	The effect of load inductance on the conduction of thyristor.<br>
4.	The effect of load inductance on different types of output waveforms.<br>

#### 2.3 Set the Pathway Activities:

1.	click on the simulator tab.<br>
2. click on either R-Load or RL-Load button.<br>
3. Set the connection in circuit. <br>
4. Check Connections. <br>
5. Set the peak value of input supply Vp.<br>
6.	Set the value of firing Angle α.<br>
7.	Set the value of load resistance RL and Load inductance L.<br>
8.	Set the Frequency of input Supply fo.<br>
9.	Set the Vmax  range.<br>
10.	Set the Tmax range.<br>
11.	Change the value of total point for the plot.<br>
12.	Click on "Draw Waveform" button.<br>
13.	Click on "Average Voltage" button.<br>
14.	Click on "RMS Voltage".<br>


##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:
<h5> Task 1: Understanding half wave controlled rectifier experiment</h5>
<h5>Assessment Questions:</h5>
1. Once you move on the simulator page what is the default value of peak voltage?<br>
2. What difference do you observe between current waveforms of R and RL loads?<br>
3. What result do you expect when you change the value of load inductance?<br>
4. What result do you expect when you change the value of load resistance?<br>
5. Interpret and conclude the experiment.<br>

<h5> Task 2: Simulate the half wave controlled rectifier with the simulator. [LO1, LO2, LO3, LO4, LO5]</h5>
<b>Difficuty level: Remember<br>
1. The SCR ratings, di/dt in A/µsec and dv/dt in V/µsec, may vary, respectively, between</b><br>
(a)	20 to 500, 10 to 100.<br>
<b>(b)	Both 20 to 500.</b><br>
(c)	Both 10 to 100.<br>
(d)	50 to 300, 20 to 500.<br></p>

<b>Difficuty level: Understand<br>
2. A single phase half-wave controlled rectifier is used to feed the DC power to resistive load. If this circuit is fired at an angle α, what will be the shape of output current:<br></b>
a.	 A full wave similar to input supply.<br>
b.	A half wave opposite to output voltage.<br>
<b>c.	A half wave similar to output voltage.</b><br>
d.	A half wave with α phase lag to output voltage.<br></p>

<b>Difficuty level: Understand<br>
3. In a thyristor, the ratio of holding current to latching current is<br></b>
<b>(a)	0.4</b><br>
(b)	1.0<br>
(c)	2.5<br>
(d)	4.0<br></p>
<b>Difficuty level: Apply
<p align="justify">4. A single phase half-wave controlled rectifier has 400*sin(314t) as the input voltage and R as the load. For a firing angle of 60<sup>o</sup> for the SCR, the average output voltage is</b><br>
(a)	400/π<br>
<b>(b)	300/π</b><br>
(c)	200/π<br>
(d)	240/π<br></p>
<b>Difficuty level: Apply
<p align="justify">5.  voltage source 200sin*(314t) is applied to a thyristor controlled half-wave rectifier with a resistive load of 50 Ω. If the firing angle is 30<sup>o</sup> with respect to supply voltage waveform, the average power in the load is</b><br>
(a)	90.6 watts<br>
(b)	86.3 watts<br>
(c)	60.8 watts<br>
 <b>(d)	70.6 watts</b><br>

##### 2.5 Allow pitfalls:
1.	User will get an error message if the circuit connection is wrong.<br>
2.	User will get wrong waveform if the number of points to be appear on plot are very less.<br>
3.	Once user hits Draw Waveform button, the values would be locked.<br>

##### 2.6 Conclusion:
1. The pre-test and post-test assessment must be provided immediately to the user. <br>
2. The correct answer must be displayed to the user after clicking the submission button.<br>
3. This would help the user to gain the basic knowledge of the experiment.<br>
4. The performance feedback of user should be calculate on the basis of marks assigned to each question <br>


##### 2.7 Equations/formulas:
<b> 1.  For R Load</b><br>
<b>The average or DC value of the load voltage is given by: </b><br>V<sub>o,avg</sub> = V<sub>m</sub>/2&#120587;(1+cos &prop;)                                      (1)<br>
<b>The RMS value of the load voltage is given by: </b><br>V<sub>or</sub> = V<sub>m</sub>/2&radic;(&#120587;)   [(&#120587;-&prop;)+1/2(sin 2&prop;)]                (2) <br>
<b> 2.  For RL Load</b><br>
<b>The average or DC value of the load voltage is given by: </b><br>V<sub>o,avg</sub> = V<sub>m</sub>/2&#120587;(cos &#946;-cos &prop;)                                  (1)<br>
<b>The RMS value of the load voltage is given by: </b><br>V<sub>or</sub> = V<sub>m</sub>/2&radic;(&#120587;)   [(&#946;-&prop;)+1/2(sin 2&#946;-sin 2&prop;)<sup>1/2</sup>]                (2) 

### 3. Flowchart 4
<img src="flowchart/flowchart.png"/><br>

### 4. Mindmap:
<img src="mindmap/mindmap.png"/>
### 5. Storyboard :
Storyboard: <a href="Storyboard/carwiper.gif"> [here]</a>
Link to storybaord (.gif file ) here :
(guide: This document should include sketching and description scene wise (duration, action, description). Software to be used for storyboarding : https://wonderunit.com/storyboarder/ (Its a FOSS tool) . tutorial on how to use it https://www.youtube.com/watch?v=LAeCEpG0KX4
