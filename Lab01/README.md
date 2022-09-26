
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
I presented the UN's Sustainable Development Goal 16, which aims to support societies where there is conflict or wars by providing access to justice and inclusive institutions.

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
### Instructions
After the first design review, decide for one of the concepts for this assignment. You now have two parallel work streams: Design and code. For this assignment create a prototype for both:

<b>Design mockup:</b> Create a high fidelity version of the design you want to create. Include the data visualization, a title, a legend and the relevant scales and units. Carefully consider colors, scale, composition and typography. Be able to answer why you picked any of the above. All designs should be created with a 16:9 aspect ratio in mind (1920x1080px).

<b>Code prototype:</b> Gather all the data you want to use or build a system to query it using the api. Make sure the data is structured in the right way for your visualization. Build a prototype that loads the data and displays it visually on the screen. Imagine a plan to get to your high fidelity mockup in code.

### Design and prototype
I used data from the UN's Office on Drugs and Crime and from the Institute for Health Metrics and Evaluation, Global Burden of Disease, to compare deaths by suicide inside and outside prison facilities in 2019. I <a href="https://github.com/ibonnet/majorstudio1/tree/main/Lab01/metadata">cleaned the data</a> and created different types of graphs and illustrations with excel, and then with SVG. 

This visualization shows the proportion of deaths by suicide within the incarcerated population around the world in 2019. Each dot represents a country and the size represents the numbers of deaths per 100,000 people:
<img src="https://github.com/ibonnet/majorstudio1/blob/82693318d0e7ea184f77bf4498f236c33180fba8/images-1B/svg-deaths-by-suicide-in-the-world.png" height="400">

I would like to do a similar visualization adding an interactive option that shows the country and proportion for each dot when the mouse hovers the dot.

<a href="https://github.com/ibonnet/majorstudio1/tree/main/Lab01/1C%20%E2%80%93Design%20Mockup%20and%20First%20Prototype">You can see the process here.</a>

## 1D — Final Design, Prototype and Presentation
### Instructions
After the second review of your project, incorporate the feedback and refine your design. Re-evaluate your visual design choices and refine all aspects of it in detail (pixel perfect design): Visualization method, composition, color, contrast, typography, hierarchy. Fix outstanding bugs and missing features in the code version of your project. Upload the working version of your project to your github.io page. Create a set of 2-5 screenshots that work in a slide presentation (16:9, 1920x1080px). Create a presentation about this project that describes the project. Initial motivation and question (1-3 slides, 1-2min). Process (only if helpful, necessary). Visualization (Still and in code). Next steps, learnings and open questions. Be prepared to present this work live to a public audience.

### Final Project
