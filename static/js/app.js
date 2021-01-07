// Javascript Project 2: Fast-food Nutrition Plots//

///// DROPDOWN MENU FUNCTION /////
function dropDownMenu(Tag1, Tag2, Tag3) {
  d3.json("/api/v1.0/nutrition").then(function(data) {
     var restaurants = data.restaurants;
     var restaurants = restaurants.map(restaurant => capitalizeFirstLetter(restaurant))
     restaurants.splice(0, 0, "Select A Restaurant...");
     console.log(restaurants);
 
     restaurants.forEach((name) => {
       d3.select(Tag1).append("option").text(name).property("value", name);
     });
   
   // Store the selected restaurant  into a variable to filter the categories
    d3.selectAll("select").on("change", function(){
       element = d3.select(this);
       selectedRestaurant = lowerCaseFirstLetter(element.property("value"));
       console.log(selectedRestaurant)
 
      // Create a function to filter the items from the restaurant
      function filterItemsByRestaurant(item){
        return item.restaurant === selectedRestaurant
       };
  
      // Store the nutrition object into a variable
      var nutrition = data.nutrition;
    
      // Filter nutrition object according to the selected restaurant
      var itemsSelectedRestaurant = nutrition.filter(filterItemsByRestaurant);
      console.log(itemsSelectedRestaurant);
  
      // Create an array to store the categories;
      var categories = itemsSelectedRestaurant.map(item => capitalizeFirstLetter(item.category))
  
      // Remove the duplicates
      var uniqueCategories = [...new Set(categories)];
      uniqueCategories.splice(0, 0, "Select A Category...");
      console.log(uniqueCategories);
  
     // Create a the dropdown menu for the categories
      uniqueCategories.forEach((name) => {
       d3.select(Tag2).append("option").text(name).property("value", name);
      }); 
 
      // Store the selected category into a variable to filter the categories
      d3.selectAll("select").on("change", function(){
         element = d3.select(this);
         selectedCategory = lowerCaseFirstLetter(element.property("value"));
         console.log(selectedCategory)
   
       // Create a function to filter the items according to the selected category
        function filterItemsByCategory(item){
          return item.category === selectedCategory
         };
    
       //Filter nutrition object according to the selected category
        var itemsSelectedCategory = itemsSelectedRestaurant.filter(filterItemsByCategory);
        console.log(itemsSelectedCategory);
    
       // Create an array to store the categories;
       var itemNames = itemsSelectedCategory.map(item =>capitalizeFirstLetter(item.item_name))
    
       // Remove the duplicates
       var uniqueItems = [...new Set(itemNames)];
       uniqueItems.splice(0, 0, "Select An Item...");
       console.log(uniqueItems);
    
       // Create a the dropdown menu for the categories
        uniqueItems.forEach((name) => {
         d3.select(Tag3).append("option").text(name).property("value", name);
         d3.selectAll("select").on("change", function(){
           element = d3.select(this);
           selectedItem = lowerCaseFirstLetter(element.property("value"));
           console.log(selectedItem);
     
           buildGaugeA(selectedItem);
          });  
       });
     });    
   });
  });
 };
 
 //LEFT DROPDOWN
 selectTag1 = "#selDataset1"
 selectTag2 = "#selDataset2"
 selectTag3 = "#selDataset3"
 dropDownMenu(selectTag1,selectTag2,selectTag3);
 
 //RIGHT DROPDOWN
 selectTag4 = "#selDataset4"
 selectTag5 = "#selDataset5"
 selectTag6 = "#selDataset6"
 dropDownMenu(selectTag4,selectTag5,selectTag6);

///// CAPITALIZE FIRST LETTER FUNCTION /////
function capitalizeFirstLetter(str) {
  if (str == 'mcdonalds') {
    return "McDonald's"
  } else {
     var splitStr = str.split(' ');
     for (var i = 0; i < splitStr.length; i++) {
     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
     }
    return splitStr.join(' ')
   }
  };

///// LOWERCASE FIRST LETTER FUNCTION /////
function lowerCaseFirstLetter(str) {
  if (str == "McDonald's") {
    return "mcdonalds"
  } else {
     var splitStr = str.split(' ');
     for (var i = 0; i < splitStr.length; i++) {
     splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
     }
    return splitStr.join(' ')
   }
  };

//// GAUGE CHART ////
//var ubication = "A";
//console.log("#" + chartTag)
function buildGaugeA (itemInputA){
  //chartId = "#radialChartA";
  var gaugeTag = d3.select("#radialChartA");
  gaugeTag.html("");

  d3.json("/api/v1.0/nutrition").then(function(data) {
    console.log(data)

    //itemInputA = "sausage mcmuffin"

    var names = data.names;
    
    // Find the index for the input item
    itemIndexA = names.indexOf(itemInputA);
    console.log(itemIndexA);

    // Find the item in the Nutrition object
    itemNutritionInformation = data.nutrition[itemIndexA];
    console.log(itemNutritionInformation);

    // Store the name of the item and the restaurant name to use it on the chart
    itemName = itemNutritionInformation["item_name"];
    restaurantName = itemNutritionInformation["restaurant"];


    // Select the % daily values
    dailyValuesObject = itemNutritionInformation["% daily values"];
    console.log(dailyValuesObject);

    // Create an array with the value names
    var valueNames = ["Calcium", "Iron", "Sodium", "Vitamin A", "Vitamin C"];

    // Create an array with the % daily values

    var calcium = dailyValuesObject["calcium_%_dv"];
    var iron = dailyValuesObject["iron_%_dv"];
    var sodium = dailyValuesObject["sodium_%_dv"];
    var vitaminA = dailyValuesObject["vitamin_a_%_dv"];
    var vitaminC = dailyValuesObject["vitamin_c_%_dv"];
   
    var values = [calcium, iron, sodium, vitaminA, vitaminC, 100];
    console.log(values);
    
    // Gauge //

    var data = [23, 34, 67, 93, 56, 100];
    var dataSet = anychart.data.set(values);
    var palette = anychart.palettes
      .distinctColors()
      .items([
        '#64b5f6',
        '#1976d2',
        '#ef6c00',
        '#ffd54f',
        '#455a64',
        '#96a6a6',
        '#dd2c00',
        '#00838f',
        '#00bfa5',
        '#ffa000'
      ]);

    function dinamicText(values) {if (values[i] == "nan") {
      return valueNames[i] + ', <span style="">' + values[i] + 'NIA</span>'
    } else {
      return valueNames[i] + ', <span style="">' + values[i] + '%</span>'
    }
    };

    var makeBarWithBar = function (gauge, radius, i, width) {
      var stroke = null;
      gauge
        .label(i)
        .text(valueNames[i] + ', <span style="">' + values[i] + '%</span>') // color: #7c868e
        //.text(dinamicText)
        .useHtml(true);
      gauge
        .label(i)
        .hAlign('center')
        .vAlign('middle')
        .anchor('right-center')
        .padding(0, 10)
        .height(width / 2 + '%')
        .offsetY(radius + '%')
        .offsetX(0);
    
      gauge
        .bar(i)
        .dataIndex(i)
        .radius(radius)
        .width(width)
        .fill(palette.itemAt(i))
        .stroke(null)
        .zIndex(5);
      gauge
        .bar(i + 100)
        .dataIndex(5)
        .radius(radius)
        .width(width)
        .fill('#F5F4F4')
        .stroke(stroke)
        .zIndex(4);
    
      return gauge.bar(i);
    };
    
    anychart.onDocumentReady(function () {
      var gauge = anychart.gauges.circular();
      gauge.data(dataSet);
      gauge
        .fill('#fff')
        .stroke(null)
        .padding(0)
        .margin(100)
        .startAngle(0)
        .sweepAngle(270);
    
      var axis = gauge.axis().radius(100).width(1).fill(null);
      axis
        .scale()
        .minimum(0)
        .maximum(100)
        .ticks({ interval: 1 })
        .minorTicks({ interval: 1 });
      axis.labels().enabled(false);
      axis.ticks().enabled(false);
      axis.minorTicks().enabled(false);
      makeBarWithBar(gauge, 100, 0, 17);
      makeBarWithBar(gauge, 80, 1, 17);
      makeBarWithBar(gauge, 60, 2, 17);
      makeBarWithBar(gauge, 40, 3, 17);
      makeBarWithBar(gauge, 20, 4, 17);
    
      gauge.margin(50);
      gauge
        .title()
        .text(
          'Micronutrient values on' + ' ' +capitalizeFirstLetter(itemName) +
          '<br/> <span style="color:#929292; font-size: 5px;"></span>'  + 'from ' +
          (capitalizeFirstLetter(restaurantName))
        )
        .useHtml(true);
      gauge
        .title()
        .enabled(true)
        .hAlign('center')
        .padding(0)
        .margin([0, 0, 20, 0]);
      gauge.container('radialChartA');
      gauge.draw();
    });
 });
}

//// GAUGE CHART B///
//var ubication = "A";
//console.log("#" + chartTag)
function buildGaugeB (itemInputB){
  chartId = "#radialChartB";
  var gaugeTag = d3.select(chartId);
  gaugeTag.html("");

  d3.json("/api/v1.0/nutrition").then(function(data) {
    console.log(data)

    //itemInputA = "sausage mcmuffin"

    var names = data.names;
    
    // Find the index for the input item
    itemIndexA = names.indexOf(itemInputA);
    console.log(itemIndexA);

    // Find the item in the Nutrition object
    itemNutritionInformation = data.nutrition[itemIndexA];
    console.log(itemNutritionInformation);

    // Store the name of the item and the restaurant name to use it on the chart
    itemName = itemNutritionInformation["item_name"];
    restaurantName = itemNutritionInformation["restaurant"];


    // Select the % daily values
    dailyValuesObject = itemNutritionInformation["% daily values"];
    console.log(dailyValuesObject);

    // Create an array with the value names
    var valueNames = ["Calcium", "Iron", "Sodium", "Vitamin A", "Vitamin C"];

    // Create an array with the % daily values

    var calcium = dailyValuesObject["calcium_%_dv"];
    var iron = dailyValuesObject["iron_%_dv"];
    var sodium = dailyValuesObject["sodium_%_dv"];
    var vitaminA = dailyValuesObject["vitamin_a_%_dv"];
    var vitaminC = dailyValuesObject["vitamin_c_%_dv"];
   
    var values = [calcium, iron, sodium, vitaminA, vitaminC, 100];
    console.log(values);
    
    // Gauge //

    var data = [23, 34, 67, 93, 56, 100];
    var dataSet = anychart.data.set(values);
    var palette = anychart.palettes
      .distinctColors()
      .items([
        '#64b5f6',
        '#1976d2',
        '#ef6c00',
        '#ffd54f',
        '#455a64',
        '#96a6a6',
        '#dd2c00',
        '#00838f',
        '#00bfa5',
        '#ffa000'
      ]);

    function dinamicText(values) {if (values[i] == "nan") {
      return valueNames[i] + ', <span style="">' + values[i] + 'NIA</span>'
    } else {
      return valueNames[i] + ', <span style="">' + values[i] + '%</span>'
    }
    };

    var makeBarWithBar = function (gauge, radius, i, width) {
      var stroke = null;
      gauge
        .label(i)
        .text(valueNames[i] + ', <span style="">' + values[i] + '%</span>') // color: #7c868e
        //.text(dinamicText)
        .useHtml(true);
      gauge
        .label(i)
        .hAlign('center')
        .vAlign('middle')
        .anchor('right-center')
        .padding(0, 10)
        .height(width / 2 + '%')
        .offsetY(radius + '%')
        .offsetX(0);
    
      gauge
        .bar(i)
        .dataIndex(i)
        .radius(radius)
        .width(width)
        .fill(palette.itemAt(i))
        .stroke(null)
        .zIndex(5);
      gauge
        .bar(i + 100)
        .dataIndex(5)
        .radius(radius)
        .width(width)
        .fill('#F5F4F4')
        .stroke(stroke)
        .zIndex(4);
    
      return gauge.bar(i);
    };
    
    anychart.onDocumentReady(function () {
      var gauge = anychart.gauges.circular();
      gauge.data(dataSet);
      gauge
        .fill('#fff')
        .stroke(null)
        .padding(0)
        .margin(100)
        .startAngle(0)
        .sweepAngle(270);
    
      var axis = gauge.axis().radius(100).width(1).fill(null);
      axis
        .scale()
        .minimum(0)
        .maximum(100)
        .ticks({ interval: 1 })
        .minorTicks({ interval: 1 });
      axis.labels().enabled(false);
      axis.ticks().enabled(false);
      axis.minorTicks().enabled(false);
      makeBarWithBar(gauge, 100, 0, 17);
      makeBarWithBar(gauge, 80, 1, 17);
      makeBarWithBar(gauge, 60, 2, 17);
      makeBarWithBar(gauge, 40, 3, 17);
      makeBarWithBar(gauge, 20, 4, 17);
    
      gauge.margin(50);
      gauge
        .title()
        .text(
          'Micronutrient values on' + ' ' +capitalizeFirstLetter(itemName) +
          '<br/> <span style="color:#929292; font-size: 5px;"></span>'  + 'from ' +
          (capitalizeFirstLetter(restaurantName))
        )
        .useHtml(true);
      gauge
        .title()
        .enabled(true)
        .hAlign('center')
        .padding(0)
        .margin([0, 0, 20, 0]);
      gauge.container('radialChartB');
      gauge.draw();
    });
 });
}
//buildGauge();



//////// STACKED BAR CHART  ////////
d3.json("/api/v1.0/nutrition").then(function(data) {
  
  itemInputA = "egg mcmuffin"
  itemInputB = "egg white delight"

  var names = data.names;
      
  // Find the index for input for both items
  itemIndexA = names.indexOf(itemInputA);
  // console.log(itemIndexA);
  itemIndexB = names.indexOf(itemInputB);
  // console.log(itemIndexB);
  
  // Find the items in the Nutrition object
  itemNutritionInfoA = data.nutrition[itemIndexA];
  // console.log(itemNutritionInfoA);
  itemNutritionInfoB = data.nutrition[itemIndexB];
  // console.log(itemNutritionInfoB);
  
  // Select the macronutrient values for both items
  nutritionalValuesA = itemNutritionInfoA["nutritional_values"];
  // console.log(nutritionalValuesA);
  nutritionalValuesB = itemNutritionInfoB["nutritional_values"];
  // console.log(nutritionalValuesB);
  
  // Create an array for each item's macronutrient values
  var carbohydratesA = nutritionalValuesA["carbohydrates_g"];
  var carbohydratesB = nutritionalValuesB["carbohydrates_g"];
  var fiberA = nutritionalValuesA["dietary_fiber_g"];
  var fiberB = nutritionalValuesB["dietary_fiber_g"];
  var proteinA = nutritionalValuesA["protein_g"];
  var proteinB = nutritionalValuesB["protein_g"];
  var saturatedFatA = nutritionalValuesA["saturated_fat_g"];
  var saturatedFatB = nutritionalValuesB["saturated_fat_g"];
  var sugarA = nutritionalValuesA["sugars_g"];
  var sugarB = nutritionalValuesB["sugars_g"];
  var fatA = nutritionalValuesA["total_fat_g"];
  var fatB = nutritionalValuesB["total_fat_g"];
     
  // Create an array for each macronutrient (containing both item's values)
  var carbArray = ['Carbohydrates', carbohydratesA, -carbohydratesB];
  // console.log(carbArray);

  var fiberArray = ['Fiber', fiberA, -fiberB];
  // console.log(fiberArray);

  var proteinArray = ['Protein', proteinA, -proteinB];
  // console.log(proteinArray);

  var satFatArray = ['Saturated Fat', saturatedFatA, -saturatedFatB];
  // console.log(satFatArray);

  var sugarArray = ['Sugar', sugarA, -sugarB];
  console.log(sugarArray);

  var fatArray = ['Fat', fatA, -fatB];
  // console.log(fatArray);

  // Put each array into one list
  var dataArray = [carbArray, fiberArray, proteinArray, satFatArray, sugarArray, fatArray];
  console.log(dataArray);
  
  // Define data with anychart
  var dataSet = anychart.data.set(dataArray);
  // console.log("Printing dataSet")
  // console.log(dataSet);

  // Map data for the first series, take x from the zero column and value from the first column of data set
  var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
  // console.log(firstSeriesData);

  // Map data for the second series, take x from the zero column and value from the second column of data set
  var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });
  // console.log(secondSeriesData);

  // Create bar chart
  var chart = anychart.bar();

  // Turn on chart animation
  chart.animation(true);

  // Set padding
  chart.padding([10, 20, 5, 20]);

  // Force chart to stack values by Y scale.
  chart.yScale().stackMode('value');
  chart.yScale().minimum(50 * -1);
  chart.yScale().maximum(50);

  // Format y axis labels so they are always positive
  chart
    .yAxis()
    .labels()
    .format(function () {
      return Math.abs(this.value).toLocaleString();
    });

  // Set title for Y-axis
  chart.yAxis(0).title('Nutritional Value in Grams');

  // Allow labels to overlap
  chart.xAxis(0).overlapMode('allow-overlap');

  // Turn on extra axis for the symmetry
  chart
    .xAxis(1)
    .enabled(true)
    .orientation('right')
    .overlapMode('allow-overlap');

  // Set chart title text
  chart.title('Macronutrients: Comparison Chart');

  chart.interactivity().hoverMode('by-x');

  chart
    .tooltip()
    .title(false)
    .separator(false)
    .displayMode('separated')
    .positionMode('point')
    .useHtml(true)
    .fontSize(12)
    .offsetX(5)
    .offsetY(0)
    .format(function () {
      return (
        Math.abs(this.value).toLocaleString()
      );
    });

  // Temp variable to store series instance
  var series;

  // Create first series with mapped data
  series = chart.bar(firstSeriesData);
  series.name(capitalizeFirstLetter(itemInputA)).color('HotPink');
  series.tooltip().position('right').anchor('left-center');

  // Create second series with mapped data
  series = chart.bar(secondSeriesData);
  series.name(capitalizeFirstLetter(itemInputB));
  series.tooltip().position('left').anchor('right-center');

  // Turn on legend
  chart
    .legend()
    .enabled(true)
    .inverted(true)
    .fontSize(13)
    .padding([0, 0, 20, 0]);

  // Set container id for the chart
  chart.container('container');

  // Initiate chart drawing
  chart.draw();

});