
# Lab 01: Quantitative Data

### Project description
In an attempt to illustrate the urgent need to provide adequate mental health aid and more humane conditions inside prison, I used data from the <a href="https://dataunodc.un.org/dp-prisons-persons-held">UN's Office on Drugs and Crime</a> and from the <a href="https://ourworldindata.org/suicide#800-000-people-die-from-suicide-every-year">Institute for Health Metrics and Evaluation, Global Burden of Disease</a>, to compare deaths by suicide inside and outside prison facilities in 2019.

### Learning goals
<i>This segment of the course examines the fundamentals of quantitative data. Students will gain an
understanding of how data is gathered, the databases and other formats by which it can be stored,
the APIs by which it can be accessed, and how it may need to be “cleaned” before use. Design
exercises will use web-based libraries (such as D3, R or Processing) to create visualizations of sample
data sets. Through the exercise, students will learn how to determine meaningful patterns along with
best practices for visualizing them. Students will be given a data set to design static visualizations for
an intended audience. Through the exercise, students will explore the most effective way to
communicate the information. Group discussion and critique of the work will highlight best practices. </i>

## 1A – SDG Intro Research
### Instructions
Sign up for one of the Sustainable Development Goals <a href="https://docs.google.com/spreadsheets/d/10cj3CWiGuwZfWTllv0k6j37ZS63NS3ru0DV35oe0in0/edit#gid=526910931">in the spreadsheet.</a> Give us an overview of what the goal is about: What does it actually mean? 3-5 Key statistics? How might we achieve it? Provide us with one concrete case study. Your presentation should not be longer than 5 minutes and should be <a href="https://docs.google.com/presentation/d/1zQHVrOapd5NiZWMIuW9yzjX-Jn1iG8ourvFD3ePObHQ/edit#slide=id.g1493215f871_0_0">in this slide deck.</a>

### Presentation
<img src="https://github.com/ibonnet/majorstudio1/blob/a2949b810194ac338f508d540dc2145a2d0ae810/Lab01/1A%E2%80%93SDGIntroResearch/1A-Goal16.png" height="300">

## 1B – Concept & Sketches
### Instructions
<b>1. Data Review:</b>
Now that you have learned about the SDGs and the different organizations, initiatives and locations involved, try to research actual data sets that might be interesting to you. Find data sets that you find interesting, that are not too large (> 100,000 entries) and not too small (80<).

<b>2. Concepts and Sketches:</b>
After reviewing the data and data set imagine 3 different quantitative visualization concepts with 3 different data sets. For each concept, create a hand-drawn sketch and write a paragraph about the idea. The sketch really should be hand-drawn, not done with a computer. Please design it for a format of 16:9 and make it self explanatory, so that anyone can understand what they are looking at even without your explanation.
The paragraph should include: Title of the visualization; What are questions that you want to explore with this visualization?; Which quantitative dataset is used?; What are the properties of the data set? How many data points, what's the quality of the data etc?; Which visualization method is used and why?

### Hand-drawn sketch
My first idea was to focus on the data from the Goal 16 in which I would use a map to illustrate the different levels of insecurity and fear of walking in the streets around the world.
<img src="https://github.com/ibonnet/majorstudio1/blob/ec7c450b9235ed1a61b0f7ee5a15523ce72007fb/images-1B/1B-Concept%20and%20sketches.jpg" height="400">

## 1C – Design Mockup and First Prototype

### Data Description

This repository uses data from the UN's Office on Drugs and Crime on incarcerated people by their nationality across the world.
<a href="https://dataunodc.un.org/dp-prisons-persons-held">Link to UN data.</a>

### Design mockup before review

  <b> Deaths by suicide among incarcerated people in eight countries around the world </b>

<img src="https://github.com/ibonnet/majorstudio1/blob/f5509ff3fa214b2b5975c220443dfa1f80ef9fc4/images-1B/deathsbysuicide.png" height="300">

  <b> Deaths by suicide in 2017 </b>

<img src="https://github.com/ibonnet/majorstudio1/blob/cc7ef18e5556bf35071a5a3fcfe8ef416807f41e/images-1B/Deathsbysuicide2017.png" height="200">

  <b> Deaths by suicide in 2018 </b>
  
<img src="https://github.com/ibonnet/majorstudio1/blob/cc7ef18e5556bf35071a5a3fcfe8ef416807f41e/images-1B/Deathsbysuicide2018.png" height="200">

  <b> Deaths by suicide in 2019 </b>

<img src="https://github.com/ibonnet/majorstudio1/blob/cc7ef18e5556bf35071a5a3fcfe8ef416807f41e/images-1B/Deathsbysuicide2019.png" height="200">

  <b> Deaths by suicide outside prison in 2019 </b>

<img src="https://github.com/ibonnet/majorstudio1/blob/71d17b9ae10d75c7bc075b48e46f9aaa312b0636/images-1B/DeathsBySuicideOutsidePrison2019.png" height="300">

Data from the Institute for Health Metrics and Evaluation, Global Burden of Disease (2019). <a href="https://ourworldindata.org/suicide#800-000-people-die-from-suicide-every-year">Link to the data.</a>

<img src="https://github.com/ibonnet/majorstudio1/blob/280def728094f2ab8bf6095934e7a4bd632e1c47/images-1B/1C-Data.png" height="200">

<a href="https://docs.google.com/spreadsheets/d/1MXPSSWqqaKiRd8w2gFV5ZNsemQTLgGZh42-IyHDYry8/edit?usp=sharing">Link to the data.</a>

<b> Comments </b>
Change the data from total number of deaths by suicide to deaths per 100,000 people in each country.

### Design mockup after review
  <b> Deaths by suicide inside prison in the US vs in the world in 2019 </b> 

<img src="https://github.com/ibonnet/majorstudio1/blob/6259fbc90f4b1ce4c49b9ad25b21ffbf2a138d46/cleandata-1D/Deaths%20inside%20prison%20in%20the%20US%20vs%20in%20the%20world%20in%202019.png" height="300">

  <b> Deaths by suicide inside and outside prison in 2019 </b> 

<img src="https://github.com/ibonnet/majorstudio1/blob/6259fbc90f4b1ce4c49b9ad25b21ffbf2a138d46/cleandata-1D/Deaths%20by%20suicide%20inside%20and%20outside%20prison%20in%202019.png" height="400">

<a href="https://github.com/ibonnet/majorstudio1/blob/fa8a1c221ae6cd9f429e3173a5e0e8fc2a17213b/cleandata-1D/Deaths%20by%20suicide%20in%20prison%20-%20Mortality%20in%202019%20-%20clean.csv">Link to the data.</a>

### Code Prototype
I would like to do a "lollipop chart" with the countries deaths by suicide inside and outside prison using the code from <a href="https://d3-graph-gallery.com/graph/lollipop_basic.html">the d3 gallery here.</a>

I would also like to do something like the graphs in this article from <a href="https://www.themarshallproject.org/2021/06/23/millions-of-people-with-felonies-can-now-vote-most-don-t-know-it">The Marshall Project</a> where each dot represents the numbers of deaths by suicide in the US inside and outside prison. I experimented with Observable to compare countries around the world with the code that <a href="https://observablehq.com/@ibonnet/percentage-of-deaths-by-suicide-inside-prison-in-the-world-in-2019">can be found here.</a>

<img src="https://github.com/ibonnet/majorstudio1/blob/82693318d0e7ea184f77bf4498f236c33180fba8/images-1B/svg-deaths-by-suicide-in-the-world.png" height="400">

<img src="https://github.com/ibonnet/majorstudio1/blob/694982564fd3ea53d5bc0ebf5f9288d6cc7ae331/images-1B/Deaths%20by%20suicide%20per%20country%202019%20inside%20and%20outside%20prison.png" height="250">

## 1D — Final Design, Prototype and Presentation
