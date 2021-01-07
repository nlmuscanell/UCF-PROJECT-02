// Javascript Project 2: Fast-food Nutrition Plots//

////// DROPDOWN MENU //////
// Store all restaurants, categories, and items into separate nested arrays
d3.json("/api/v1.0/nutrition").then(function(data) {
  var restaurants = data.restaurants;
  console.log(restaurants);
  var categories = data.categories;
  console.log(categories);
  var items = data.names;
  console.log(items);

// Create filters by restaurant
function mcdFilter(item){
  return item.restaurant === "mcdonalds"
 };

 function subwayFilter(item){
  return item.restaurant === "subway"
 };

 function starbucksFilter(item){
  return item.restaurant === "starbucks"
 };

// Create filters by category
 function breakfastFilter(item){
  return item.category === "breakfast"
 };

 function beefporkFilter(item){
  return item.category === "beef & pork sandwich/wraps"
 };

 function poultryfishFilter(item){
  return item.category === "poultry & fish sandwich/wraps"
 };

 function saladsFilter(item){
  return item.category === "salads"
 };

 function snacksidesFilter(item){
  return item.category === "snacks & sides"
 };

 function dessertsFilter(item){
  return item.category === "desserts"
 };

 function beveragesFilter(item){
  return item.category === "beverages"
 };

 function veggiesFilter(item){
  return item.category === "veggie sandwich/wraps"
 };

 function breadtoppingsFilter(item){
  return item.category === "bread & toppings"
 };

 function otherfoodFilter(item){
  return item.category === "other food"
 };

 // Store the nutrition object into a variable
 var nutrition = data.nutrition
    
 // Filter nutrition object according to the selected restaurant and category

 // McDonald's filtered items
 var mcdBreakfast = nutrition.filter(mcdFilter).filter(breakfastFilter);
 console.log(mcdBreakfast);

 var mcdBeefPork = nutrition.filter(mcdFilter).filter(beefporkFilter);
 console.log(mcdBeefPork);

 var mcdPoutlryFish = nutrition.filter(mcdFilter).filter(poultryfishFilter);
 console.log(mcdPoutlryFish);

 var mcdSalads = nutrition.filter(mcdFilter).filter(saladsFilter);
 console.log(mcdSalads);

 var mcdSnackSides = nutrition.filter(mcdFilter).filter(snacksidesFilter);
 console.log(mcdSnackSides);

 var mcdDesserts = nutrition.filter(mcdFilter).filter(dessertsFilter);
 console.log(mcdDesserts);

 var mcdBeverages = nutrition.filter(mcdFilter).filter(beveragesFilter);
 console.log(mcdBeverages);

//  var mcdVeggies = nutrition.filter(mcdFilter).filter(veggiesFilter);
//  console.log(mcdVeggies);

//  var mcdBreadToppings = nutrition.filter(mcdFilter).filter(breadtoppingsFilter);
//  console.log(mcdBreadToppings);

//  var mcdOther = nutrition.filter(mcdFilter).filter(otherfoodFilter);
//  console.log(mcdOther);

 // Subway filtered items
 var subwayBreakfast = nutrition.filter(subwayFilter).filter(breakfastFilter);
 console.log(subwayBreakfast);

 var subwayBeefPork = nutrition.filter(subwayFilter).filter(beefporkFilter);
 console.log(subwayBeefPork);

 var subwayPoutlryFish = nutrition.filter(subwayFilter).filter(poultryfishFilter);
 console.log(subwayPoutlryFish);

 var subwaySalads = nutrition.filter(subwayFilter).filter(saladsFilter);
 console.log(subwaySalads);

//  var subwaySnackSides = nutrition.filter(subwayFilter).filter(snacksidesFilter);
//  console.log(subwaySnackSides);

 var subwayDesserts = nutrition.filter(subwayFilter).filter(dessertsFilter);
 console.log(subwayDesserts);

//  var subwayBeverages = nutrition.filter(subwayFilter).filter(beveragesFilter);
//  console.log(subwayBeverages);

 var subwayVeggies = nutrition.filter(subwayFilter).filter(veggiesFilter);
 console.log(subwayVeggies);

 var subwayBreadToppings = nutrition.filter(subwayFilter).filter(breadtoppingsFilter);
 console.log(subwayBreadToppings);

//  var subwayOther = nutrition.filter(subwayFilter).filter(otherfoodFilter);
//  console.log(subwayOther);

// Starbucks filtered items
var starbucksBreakfast = nutrition.filter(starbucksFilter).filter(breakfastFilter);
console.log(starbucksBreakfast);

var starbucksBeefPork = nutrition.filter(starbucksFilter).filter(beefporkFilter);
console.log(starbucksBeefPork);

var starbucksPoutlryFish = nutrition.filter(starbucksFilter).filter(poultryfishFilter);
console.log(starbucksPoutlryFish);

var starbucksSalads = nutrition.filter(starbucksFilter).filter(saladsFilter);
console.log(starbucksSalads);

// var starbucksSnackSides = nutrition.filter(starbucksFilter).filter(snacksidesFilter);
// console.log(starbucksSnackSides);

var starbucksDesserts = nutrition.filter(starbucksFilter).filter(dessertsFilter);
console.log(starbucksDesserts);

var starbucksBeverages = nutrition.filter(starbucksFilter).filter(beveragesFilter);
console.log(starbucksBeverages);

 var starbucksVeggies = nutrition.filter(starbucksFilter).filter(veggiesFilter);
 console.log(starbucksVeggies);

 var starbucksBreadToppings = nutrition.filter(starbucksFilter).filter(breadtoppingsFilter);
 console.log(starbucksBreadToppings);

 var starbucksOther = [nutrition.filter(starbucksFilter).filter(otherfoodFilter)];
 console.log(starbucksOther);

// McDonald's macronutrient values for 
var mcdBreakfastMacros = mcdBreakfast.nutritional_values["carbohydrates_g"];
console.log("mcdBreakfastMacros");
console.log(mcdBreakfastMacros);

});
//////////////////////////////////////////////////////////////////////////
// Note: McDonald's has no veggie sandwiches, bread/toppings, or other foods
// Note: Subway has no snacks/sides, beverages, or other foods
// Note: Starbucks has no snacks/sides

// var dropdownObject = {
//   "McDonald's": {
//     "Breakfast":
//     "Beef & Pork Sandwiches & Wraps":
//     "Poultry & Fish Sandwiches & Wraps":
//     "Salads":
//     "Snacks & Sides":
//     "Desserts":
//     "Beverages":
//     "Bread & Toppings":
//     "Other Food"
//   },
//   "Subway": {
//     "Breakfast":
//     "Beef & Pork Sandwiches & Wraps":
//     "Poultry & Fish Sandwiches & Wraps":
//     "Salads":
//     "Snacks & Sides":
//     "Desserts":
//     "Beverages":
//     "Veggie Sandwiches & Wraps":
//     "Bread & Toppings":
//     "Other Food"
//   }
//   "Starbucks": {
//     "Breakfast":
//     "Beef & Pork Sandwiches & Wraps":
//     "Poultry & Fish Sandwiches & Wraps":
//     "Salads":
//     "Snacks & Sides":
//     "Desserts":
//     "Beverages":
//     "Veggie Sandwiches & Wraps":
//     "Bread & Toppings":
//     "Other Food"
//   }
// } 
// console.log("Printing dropdown object")
// console.log(dropdownObject);

// window.onload = function() {
//   var restaurantSel = document.getElementById("restaurant");
//   var categorySel = document.getElementById("category");
//   var itemSel = document.getElementById("item");
//   for (var x in dropdownObject) {
//     restaurantSel.options[restaurantSel.options.length] = new Option(x, x);
//   }
//   restaurantSel.onchange = function() {
//     // empty category and item dropdowns
//     itemSel.length = 1;
//     categorySel.length = 1;
//     // display correct values
//     for (var y in dropdownObject[this.value]) {
//       categorySel.options[categorySel.options.length] = new Option(y, y);
//     }
//   }
//   categorySel.onchange = function() {
//     // empty item dropdown
//     itemSel.length = 1;
//     // display correct values
//     var z = dropdownObject[restaurantSel.value][this.value];
//     for (var i = 0; i < z.length; i++) {
//       itemSel.options[itemSel.options.length] = new Option(z[i], z[i]);
//     }
//   }
// }
// });
// ///// CAPITALIZE FIRST LETTER FUNCTION /////
// function capitalizeFirstLetter(str) {
//   if (str == 'mcdonalds') {
//     return "McDonald's"
//   } else {
//      var splitStr = str.split(' ');
//      for (var i = 0; i < splitStr.length; i++) {
//      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//      }
//     return splitStr.join(' ')
//    }
//   };

// ///// LOWERCASE FIRST LETTER FUNCTION /////
// function lowerCaseFirstLetter(str) {
//   if (str == "McDonald's") {
//     return "mcdonalds"
//   } else {
//      var splitStr = str.split(' ');
//      for (var i = 0; i < splitStr.length; i++) {
//      splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
//      }
//     return splitStr.join(' ')
//    }
//   };

// //// GAUGE CHART ////
// //var ubication = "A";
// //console.log("#" + chartTag)
// function buildGaugeA (itemInputA){
//   //chartId = "#radialChartA";
//   var gaugeTag = d3.select("#radialChartA");
//   gaugeTag.html("");

//   d3.json("/api/v1.0/nutrition").then(function(data) {
//     console.log(data)

//     //itemInputA = "sausage mcmuffin"

//     var names = data.names;
    
//     // Find the index for the input item
//     itemIndexA = names.indexOf(itemInputA);
//     console.log(itemIndexA);

//     // Find the item in the Nutrition object
//     itemNutritionInformation = data.nutrition[itemIndexA];
//     console.log(itemNutritionInformation);

//     // Store the name of the item and the restaurant name to use it on the chart
//     itemName = itemNutritionInformation["item_name"];
//     restaurantName = itemNutritionInformation["restaurant"];


//     // Select the % daily values
//     dailyValuesObject = itemNutritionInformation["% daily values"];
//     console.log(dailyValuesObject);

//     // Create an array with the value names
//     var valueNames = ["Calcium", "Iron", "Sodium", "Vitamin A", "Vitamin C"];

//     // Create an array with the % daily values

//     var calcium = dailyValuesObject["calcium_%_dv"];
//     var iron = dailyValuesObject["iron_%_dv"];
//     var sodium = dailyValuesObject["sodium_%_dv"];
//     var vitaminA = dailyValuesObject["vitamin_a_%_dv"];
//     var vitaminC = dailyValuesObject["vitamin_c_%_dv"];
   
//     var values = [calcium, iron, sodium, vitaminA, vitaminC, 100];
//     console.log(values);
    
//     // Gauge //

//     var data = [23, 34, 67, 93, 56, 100];
//     var dataSet = anychart.data.set(values);
//     var palette = anychart.palettes
//       .distinctColors()
//       .items([
//         '#64b5f6',
//         '#1976d2',
//         '#ef6c00',
//         '#ffd54f',
//         '#455a64',
//         '#96a6a6',
//         '#dd2c00',
//         '#00838f',
//         '#00bfa5',
//         '#ffa000'
//       ]);

//     function dinamicText(values) {if (values[i] == "nan") {
//       return valueNames[i] + ', <span style="">' + values[i] + 'NIA</span>'
//     } else {
//       return valueNames[i] + ', <span style="">' + values[i] + '%</span>'
//     }
//     };

//     var makeBarWithBar = function (gauge, radius, i, width) {
//       var stroke = null;
//       gauge
//         .label(i)
//         .text(valueNames[i] + ', <span style="">' + values[i] + '%</span>') // color: #7c868e
//         //.text(dinamicText)
//         .useHtml(true);
//       gauge
//         .label(i)
//         .hAlign('center')
//         .vAlign('middle')
//         .anchor('right-center')
//         .padding(0, 10)
//         .height(width / 2 + '%')
//         .offsetY(radius + '%')
//         .offsetX(0);
    
//       gauge
//         .bar(i)
//         .dataIndex(i)
//         .radius(radius)
//         .width(width)
//         .fill(palette.itemAt(i))
//         .stroke(null)
//         .zIndex(5);
//       gauge
//         .bar(i + 100)
//         .dataIndex(5)
//         .radius(radius)
//         .width(width)
//         .fill('#F5F4F4')
//         .stroke(stroke)
//         .zIndex(4);
    
//       return gauge.bar(i);
//     };
    
//     anychart.onDocumentReady(function () {
//       var gauge = anychart.gauges.circular();
//       gauge.data(dataSet);
//       gauge
//         .fill('#fff')
//         .stroke(null)
//         .padding(0)
//         .margin(100)
//         .startAngle(0)
//         .sweepAngle(270);
    
//       var axis = gauge.axis().radius(100).width(1).fill(null);
//       axis
//         .scale()
//         .minimum(0)
//         .maximum(100)
//         .ticks({ interval: 1 })
//         .minorTicks({ interval: 1 });
//       axis.labels().enabled(false);
//       axis.ticks().enabled(false);
//       axis.minorTicks().enabled(false);
//       makeBarWithBar(gauge, 100, 0, 17);
//       makeBarWithBar(gauge, 80, 1, 17);
//       makeBarWithBar(gauge, 60, 2, 17);
//       makeBarWithBar(gauge, 40, 3, 17);
//       makeBarWithBar(gauge, 20, 4, 17);
    
//       gauge.margin(50);
//       gauge
//         .title()
//         .text(
//           'Micronutrient values on' + ' ' +capitalizeFirstLetter(itemName) +
//           '<br/> <span style="color:#929292; font-size: 5px;"></span>'  + 'from ' +
//           (capitalizeFirstLetter(restaurantName))
//         )
//         .useHtml(true);
//       gauge
//         .title()
//         .enabled(true)
//         .hAlign('center')
//         .padding(0)
//         .margin([0, 0, 20, 0]);
//       gauge.container('radialChartA');
//       gauge.draw();
//     });
//  });
// }

// //// GAUGE CHART B///
// //var ubication = "A";
// //console.log("#" + chartTag)
// function buildGaugeB (itemInputB){
//   chartId = "#radialChartB";
//   var gaugeTag = d3.select(chartId);
//   gaugeTag.html("");

//   d3.json("/api/v1.0/nutrition").then(function(data) {
//     console.log(data)

//     //itemInputA = "sausage mcmuffin"

//     var names = data.names;
    
//     // Find the index for the input item
//     itemIndexA = names.indexOf(itemInputA);
//     console.log(itemIndexA);

//     // Find the item in the Nutrition object
//     itemNutritionInformation = data.nutrition[itemIndexA];
//     console.log(itemNutritionInformation);

//     // Store the name of the item and the restaurant name to use it on the chart
//     itemName = itemNutritionInformation["item_name"];
//     restaurantName = itemNutritionInformation["restaurant"];


//     // Select the % daily values
//     dailyValuesObject = itemNutritionInformation["% daily values"];
//     console.log(dailyValuesObject);

//     // Create an array with the value names
//     var valueNames = ["Calcium", "Iron", "Sodium", "Vitamin A", "Vitamin C"];

//     // Create an array with the % daily values

//     var calcium = dailyValuesObject["calcium_%_dv"];
//     var iron = dailyValuesObject["iron_%_dv"];
//     var sodium = dailyValuesObject["sodium_%_dv"];
//     var vitaminA = dailyValuesObject["vitamin_a_%_dv"];
//     var vitaminC = dailyValuesObject["vitamin_c_%_dv"];
   
//     var values = [calcium, iron, sodium, vitaminA, vitaminC, 100];
//     console.log(values);
    
//     // Gauge //

//     var data = [23, 34, 67, 93, 56, 100];
//     var dataSet = anychart.data.set(values);
//     var palette = anychart.palettes
//       .distinctColors()
//       .items([
//         '#64b5f6',
//         '#1976d2',
//         '#ef6c00',
//         '#ffd54f',
//         '#455a64',
//         '#96a6a6',
//         '#dd2c00',
//         '#00838f',
//         '#00bfa5',
//         '#ffa000'
//       ]);

//     function dinamicText(values) {if (values[i] == "nan") {
//       return valueNames[i] + ', <span style="">' + values[i] + 'NIA</span>'
//     } else {
//       return valueNames[i] + ', <span style="">' + values[i] + '%</span>'
//     }
//     };

//     var makeBarWithBar = function (gauge, radius, i, width) {
//       var stroke = null;
//       gauge
//         .label(i)
//         .text(valueNames[i] + ', <span style="">' + values[i] + '%</span>') // color: #7c868e
//         //.text(dinamicText)
//         .useHtml(true);
//       gauge
//         .label(i)
//         .hAlign('center')
//         .vAlign('middle')
//         .anchor('right-center')
//         .padding(0, 10)
//         .height(width / 2 + '%')
//         .offsetY(radius + '%')
//         .offsetX(0);
    
//       gauge
//         .bar(i)
//         .dataIndex(i)
//         .radius(radius)
//         .width(width)
//         .fill(palette.itemAt(i))
//         .stroke(null)
//         .zIndex(5);
//       gauge
//         .bar(i + 100)
//         .dataIndex(5)
//         .radius(radius)
//         .width(width)
//         .fill('#F5F4F4')
//         .stroke(stroke)
//         .zIndex(4);
    
//       return gauge.bar(i);
//     };
    
//     anychart.onDocumentReady(function () {
//       var gauge = anychart.gauges.circular();
//       gauge.data(dataSet);
//       gauge
//         .fill('#fff')
//         .stroke(null)
//         .padding(0)
//         .margin(100)
//         .startAngle(0)
//         .sweepAngle(270);
    
//       var axis = gauge.axis().radius(100).width(1).fill(null);
//       axis
//         .scale()
//         .minimum(0)
//         .maximum(100)
//         .ticks({ interval: 1 })
//         .minorTicks({ interval: 1 });
//       axis.labels().enabled(false);
//       axis.ticks().enabled(false);
//       axis.minorTicks().enabled(false);
//       makeBarWithBar(gauge, 100, 0, 17);
//       makeBarWithBar(gauge, 80, 1, 17);
//       makeBarWithBar(gauge, 60, 2, 17);
//       makeBarWithBar(gauge, 40, 3, 17);
//       makeBarWithBar(gauge, 20, 4, 17);
    
//       gauge.margin(50);
//       gauge
//         .title()
//         .text(
//           'Micronutrient values on' + ' ' +capitalizeFirstLetter(itemName) +
//           '<br/> <span style="color:#929292; font-size: 5px;"></span>'  + 'from ' +
//           (capitalizeFirstLetter(restaurantName))
//         )
//         .useHtml(true);
//       gauge
//         .title()
//         .enabled(true)
//         .hAlign('center')
//         .padding(0)
//         .margin([0, 0, 20, 0]);
//       gauge.container('radialChartB');
//       gauge.draw();
//     });
//  });
// }
// //buildGauge();



// //////// STACKED BAR CHART  ////////
// d3.json("/api/v1.0/nutrition").then(function(data) {
  
//   itemInputA = "egg mcmuffin"
//   itemInputB = "egg white delight"

//   var names = data.names;
      
//   // Find the index for input for both items
//   itemIndexA = names.indexOf(itemInputA);
//   // console.log(itemIndexA);
//   itemIndexB = names.indexOf(itemInputB);
//   // console.log(itemIndexB);
  
//   // Find the items in the Nutrition object
//   itemNutritionInfoA = data.nutrition[itemIndexA];
//   // console.log(itemNutritionInfoA);
//   itemNutritionInfoB = data.nutrition[itemIndexB];
//   // console.log(itemNutritionInfoB);
  
//   // Select the macronutrient values for both items
//   nutritionalValuesA = itemNutritionInfoA["nutritional_values"];
//   // console.log(nutritionalValuesA);
//   nutritionalValuesB = itemNutritionInfoB["nutritional_values"];
//   // console.log(nutritionalValuesB);
  
//   // Create an array for each item's macronutrient values
//   var carbohydratesA = nutritionalValuesA["carbohydrates_g"];
//   var carbohydratesB = nutritionalValuesB["carbohydrates_g"];
//   var fiberA = nutritionalValuesA["dietary_fiber_g"];
//   var fiberB = nutritionalValuesB["dietary_fiber_g"];
//   var proteinA = nutritionalValuesA["protein_g"];
//   var proteinB = nutritionalValuesB["protein_g"];
//   var saturatedFatA = nutritionalValuesA["saturated_fat_g"];
//   var saturatedFatB = nutritionalValuesB["saturated_fat_g"];
//   var sugarA = nutritionalValuesA["sugars_g"];
//   var sugarB = nutritionalValuesB["sugars_g"];
//   var fatA = nutritionalValuesA["total_fat_g"];
//   var fatB = nutritionalValuesB["total_fat_g"];
     
//   // Create an array for each macronutrient (containing both item's values)
//   var carbArray = ['Carbohydrates', carbohydratesA, -carbohydratesB];
//   // console.log(carbArray);

//   var fiberArray = ['Fiber', fiberA, -fiberB];
//   // console.log(fiberArray);

//   var proteinArray = ['Protein', proteinA, -proteinB];
//   // console.log(proteinArray);

//   var satFatArray = ['Saturated Fat', saturatedFatA, -saturatedFatB];
//   // console.log(satFatArray);

//   var sugarArray = ['Sugar', sugarA, -sugarB];
//   // console.log(sugarArray);

//   var fatArray = ['Fat', fatA, -fatB];
//   // console.log(fatArray);

//   // Put each array into one list
//   var dataArray = [carbArray, fiberArray, proteinArray, satFatArray, sugarArray, fatArray];
//   // console.log(dataArray);
  
//   // Define data with anychart
//   var dataSet = anychart.data.set(dataArray);
//   // console.log("Printing dataSet")
//   // console.log(dataSet);

//   // Map data for the first series, take x from the zero column and value from the first column of data set
//   var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
//   // console.log(firstSeriesData);

//   // Map data for the second series, take x from the zero column and value from the second column of data set
//   var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
//   // console.log(secondSeriesData);

//   // Create bar chart
//   var chart = anychart.bar();

//   // Turn on chart animation
//   chart.animation(true);

//   // Set padding
//   chart.padding([10, 20, 5, 20]);

//   // Force chart to stack values by Y scale.
//   chart.yScale().stackMode('value');
//   chart.yScale().minimum(50 * -1);
//   chart.yScale().maximum(50);

//   // Format y axis labels so they are always positive
//   chart
//     .yAxis()
//     .labels()
//     .format(function () {
//       return Math.abs(this.value).toLocaleString();
//     });

//   // Set title for Y-axis
//   chart.yAxis(0).title('Nutritional Value in Grams');

//   // Allow labels to overlap
//   chart.xAxis(0).overlapMode('allow-overlap');

//   // Turn on extra axis for the symmetry
//   chart
//     .xAxis(1)
//     .enabled(true)
//     .orientation('right')
//     .overlapMode('allow-overlap');

//   // Set chart title text
//   chart.title('Macronutrients: Comparison Chart');

//   chart.interactivity().hoverMode('by-x');

//   chart
//     .tooltip()
//     .title(false)
//     .separator(false)
//     .displayMode('separated')
//     .positionMode('point')
//     .useHtml(true)
//     .fontSize(12)
//     .offsetX(5)
//     .offsetY(0)
//     .format(function () {
//       return (
//         Math.abs(this.value).toLocaleString()
//       );
//     });

//   // Temp variable to store series instance
//   var series;

//   // Create first series with mapped data
//   series = chart.bar(firstSeriesData);
//   series.name(capitalizeFirstLetter(itemInputA)).color('HotPink');
//   series.tooltip().position('right').anchor('left-center');

//   // Create second series with mapped data
//   series = chart.bar(secondSeriesData);
//   series.name(capitalizeFirstLetter(itemInputB));
//   series.tooltip().position('left').anchor('right-center');

//   // Turn on legend
//   chart
//     .legend()
//     .enabled(true)
//     .inverted(true)
//     .fontSize(13)
//     .padding([0, 0, 20, 0]);

//   // Set container id for the chart
//   chart.container('container');

//   // Initiate chart drawing
//   chart.draw();

// });