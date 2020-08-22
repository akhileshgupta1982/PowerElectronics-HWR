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
2.	Set the peak value of input supply Vp.<br>
3.	Set the value of firing Angle α.<br>
4.	Set the value of load resistance RL.<br>
5.	Set the Frequency of input Supply fo.<br>
6.	Set the Vmax  range.<br>
7.	Set the Tmax range.<br>
8.	Change the value of total point for the plot.<br>
9.	Click on "Draw Waveform" button.<br>
10.	Click on "Average Voltage" button.<br>
11.	Click on "RMS Voltage".<br>


##### 2.4 Set Challenges and Questions/Complexity/Variations in Questions:
<h5> Task 1: Understanding half wave controlled rectifier experiment</h5><br>
Assessment Questions:
1 Once you move on the simulator page what is the default value of peak voltage?
2 What difference do you observe between current waveforms of R and RL loads?
3 What result do you expect when you change the value of load inductance?
4 What result do you expect when you change the value of load resistance?
5 Interpret and conclude the experiment.


Difficuty level: Remember<br>
Q.1. When a thyristor if forward biased, the number of blocked p-n junctions is<br>
(a)	1<br>
(b)	2<br>
(c)	3<br>
(d)	4<br></p>
Difficuty level: Understand<br>
Q.2. In a thyristor<br>
(a)	Latching current IL is associated with turn-off process and holding current IH with turn-on process.<br>
(b)	Both IL and IH are associated with turn-off process.<br>
(c)	IH is associated with turn-off process and IL with turn-on process.<br>
(d)	Both IL and IH are associated with turn-off process.<br></p>
Difficuty level: Understand<br>
Q.3. In a thyristor, the ratio of holding current to latching current is<br>
(a)	0.4<br>
(b)	1.0<br>
(c)	2.5<br>
(d)	4.0<br></p>
Difficuty level: Apply<br>
Q.4. The SCR ratings, di/dt in A/µsec and dv/dt in V/µsec, may vary, respectively, between<br>
(a)	20 to 500, 10 to 100<br>
(b)	Both 20 to 500<br>
(c)	Both 10 to 100<br>
(d)	50 to 300, 20 to 500<br></p>
Difficuty level: Apply<br>
Q.5. When a thyristor if forward biased, the number of blocked p-n junctions is<br>
(a)	1<br>
(b)	2<br>
(c)	3<br>
(d)	4<br>


##### 2.5 Allow pitfalls:
1.	User will get an error message if the circuit connection is wrong.<br>
2.	User will get wrong waveform if the number of points to be appear on plot are very less.<br>
3.	Once user hits Draw Waveform button, the values would be locked.<br>

##### 2.6 Conclusion:
Describe conclusion here : (guide: This may include displaying: how much time did the user take to solve the questions/ How many questions were right?/ How many hints did the learner use. Based on this the evaluation/marking to be suggested to the user. (once he is towards the completion of the experiment, what LO he is taking along with him, what will be his probable, interpretation/conclusion , descriptive) )

##### 2.7 Equations/formulas:
<b> 1.  For R Load</b><br>
<b>The average or DC value of the load voltage is given by: </b><br>V<sub>o,avg</sub> = V<sub>m</sub>/2&#120587;(1+cos &prop;)                                      (1)<br>
<b>The RMS value of the load voltage is given by: </b><br>V<sub>or</sub> = V<sub>m</sub>/2&radic;(&#120587;)   [(&#120587;-&prop;)+1/2(sin 2&prop;)]                (2) <br>
<b> 2.  For RL Load</b><br>
<b>The average or DC value of the load voltage is given by: </b><br>V<sub>o,avg</sub> = V<sub>m</sub>/2&#120587;(cos $\beta$-cos &prop;)                                  (1)<br>
<b>The RMS value of the load voltage is given by: </b><br>V<sub>or</sub> = V<sub>m</sub>/2&radic;(&#120587;)   [(&#120587;-&prop;)+1/2(sin 2&prop;)]                (2) 

### 3. Flowchart 4
<img src="flowchart/flowchart.png"/><br>
link to flow chart Here : Store in the  /flowchart folder within Round2 folder in your repo
<br>
(guide :The lab proposer should extract logic from the story, prepare a flowchart from the story narration and write the algorithm to execute the black box.  use Google Drawings https://docs.google.com/drawings/ (send the link to your flowchart and also attach .png by exporting it )

### 4. Mindmap:
<img src="mindmap/mindmap.png"/>
 Link to mindmap here : Store the mindmap in both .mm & .png extension in the  /mindmap folder and include link of only .pdf verison here
 <br>
 (guide : An elaborate mind map (connecting all the points in the experiment flow ) should be prepared and submitted by the lab proposer. The mind map should be a clear and detailed document that takes into account all minute intri5acies involved in the development of virtual lab. The mindmap should be self-content and any developer across the globe should be able to code it with all those details. using only FreeMind http://freemind.sourceforge.net/wiki/index.php/Main_Page (send the .png file and also the original .mm extension project file. )

### 5. Storyboard :
Storyboard: <a href="Storyboard/carwiper.gif"> [here]</a>
Link to storybaord (.gif file ) here :
(guide: This document should include sketching and description scene wise (duration, action, description). Software to be used for storyboarding : https://wonderunit.com/storyboarder/ (Its a FOSS tool) . tutorial on how to use it https://www.youtube.com/watch?v=LAeCEpG0KX4
