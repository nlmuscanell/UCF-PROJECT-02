# Interactive Dashboard - Fast Food Nutrition

Project Team:
Kathy Manthey
Manuela Munoz
Nicole Muscanell


##### Project Purpose: Provide nutritional data for three major fast food chains in an interactive visual dashboard.

**Homepage:**
The home page provides access to the dashboard as well as links to the data and full restaurant menus.


![alt text](https://github.com/nlmuscanell/UCF-PROJECT-2/blob/master/app_images/homepage.png?raw=true)


**Dashboard:**
Our dashboard is easily accessed via a web link: https://fastfood-nutrition-dashboard.herokuapp.com/home

**Features:**
- Drop down menus

Two cascading drop down menus filter data by restuarant, then food category, and finally menu item selection.  This allows users to select two menu items from any of the three restaurants for a side by side comparisons in terms of the macro- and micronutrient content.

- Bar and gauge charts

The selected dropdown menu choices dynamically populate both the stacked bar and gauge charts.  The stacked bar provides a comparison of macronutrients whereas the radial charts provide the user with a comparison of the micronutrients.  Hover capability has been added to display the menu item values in the bar chart. 


![alt text](https://github.com/nlmuscanell/UCF-PROJECT-2/blob/master/app_images/dashboard_bar.png?raw=true)

![alt text](https://github.com/nlmuscanell/UCF-PROJECT-2/blob/master/app_images/dashboard_gauge.png?raw=true)




- Scatter plot

The scatter plot allows users to see nutritional data for all menu items by restaurant. A toggle feature was added to each axis, allowing users to select a restaurant (x-axis) and then choose to view calories, carbohydrates, or protein (y-axis). Each menu item is represented by a circle on the scatter plot's x axis.  Hover capability displays the menu item and the value for the selected macronutrient.

![alt text](https://github.com/nlmuscanell/UCF-PROJECT-2/blob/master/app_images/dashboard_scatter.png?raw=true)


**Data Source:** 
- Nutrition data for McDonalds: https://www.kaggle.com/mcdonalds/nutrition-facts
- Nutrition data for Subway: https://www.kaggle.com/davinm/subway-restaurant-nutrition-data 
- Nutrition data for Starbucks: https://www.kaggle.com/starbucks/starbucks-menu


**Technical Specifications:**

- Backend:
    - Python Flask
    - SQLite

- Front-end:
   - HTML
   - CSS
   - JavaScript
   - Python
   - Pandas

- JS libraries:
   - AnyChart
   - D3

- Deployment:
   - Heroku
