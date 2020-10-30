//EXERCISE==: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."
function theFortuneTeller() {

    console.log(`${fortunePrint}`)
    return fortunePrint    
    }
    let jobTitle = 'Pilot';
    let geographicLocation = 'Tokyo';
    let annualSalary = '250K Dollars';
    let companyName = 'Goerge company';
    
    let fortunePrint = `You Will be a  ${jobTitle} in ${geographicLocation} ,  making  ${annualSalary}  for  ${companyName} .`
    theFortuneTeller();
    document.getElementById('exercise1').innerHTML= fortunePrint;
    
    
    //EXERCISE 2: The Age Calculator
    //Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.
    
    //EXERCISE 3: The Lifetime Supply Calculator
    //Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".
    function theLifetimeSupplyCalc() {
    
      return 365 * snackEstimatedAmonut * (maximumAge - currtnetAge);
    }
    let currtnetAge = 19;
    let maximumAge = 80;
    let snackEstimatedAmonut = 2;
    let answer2  =  theLifetimeSupplyCalc()
    let lifetimPrint = ` You will need ${answer2} to last you until the ripe old age of ${maximumAge}`
    console.log(`${lifetimPrint}`)
    document.getElementById('exercise2').innerHTML= lifetimPrint;
    
    
    //EXERCISE 4: The Geometrizer Area of the circle = π × R²  Circumference of a circle	2 × π × R.
    //Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
    function theGeoAreaOfTheCircle(){
        return circleLifetimePrint
    }
    let piValue = 3.14;
    let circleRadius = 10;
    let circumference = 2 * piValue * circleRadius;
    let CircumfenceFinal = circumference.toFixed(2)
    let AreaOfTheCircle = piValue * circleRadius**2;
    let AreFinalResult = AreaOfTheCircle.toFixed(2)
    
    let circleLifetimePrint = ` The circumference is ${CircumfenceFinal}cm, and the Area is ${AreFinalResult}cm. `;
    console.log(`${circleLifetimePrint}`)
    theGeoAreaOfTheCircle()
    document.getElementById('exercise3').innerHTML= circleLifetimePrint;
    
    //EXERCISE 5: The Temperature Converter
    //It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
    /*
      °C to °F	Divide by 5, then multiply by 9, then add 32
    °F to °C	Deduct 32, then multiply by 5, then divide by 9
      */
    
      function theTemperatureConverter(){
        function fahToCel() {
          return FahtoCelFinal
        }
        function celToFah(){
          return CelsitoFahFinal
        }
    return 
      }
    let celsiusValue = 50;
    let celsiusFahrenheitConvertion = celsiusValue / 5 * 9 + 30;
    let CelsitoFahFinal = celsiusFahrenheitConvertion.toFixed(0)
    
    let fahrenheitValue = 94;
    let fahrenheitCelsiusConvertion = (fahrenheitValue-32) * 5/9;
    let FahtoCelFinal = fahrenheitCelsiusConvertion.toFixed(0)
    let fahToCellPrint = ` The Temperature Converter of ${fahrenheitValue}°F is ${FahtoCelFinal}°C`
    let celToFahPrint = ` The Temperature Converter of ${celsiusValue}°C is ${CelsitoFahFinal}°F`
    console.log(`${fahToCellPrint}`)
    console.log(`${celToFahPrint}`)
    theTemperatureConverter()
    document.getElementById('exercise4').innerHTML= fahToCellPrint;
    document.getElementById('exercise5').innerHTML= celToFahPrint;
    
    // EXERCISE 1
    // Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    function squareNumber(number) {
    return number**2;
    }
    let number = 7;
    let squareNumberResult = squareNumber(number)
    let squareNumberPrint = `The result of squaring the number ${number} is ${squareNumberResult}`;
    console.log(`${squareNumberPrint}`)
    document.getElementById('exercise6').innerHTML= squareNumberPrint;
    
    //Functions
    // EXERCISE 2
    // Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
    function halfNumber(numberToBeDevided){
    return numberToBeDevided/2
    }
    let numberToBeDevided = 68;
    let halfNumberResult = numberToBeDevided/2
    let halfNumberPrint = `Half of the number ${numberToBeDevided} is ${halfNumberResult}`
    console.log(halfNumberPrint)
    halfNumber(numberToBeDevided)
    document.getElementById('exercise7').innerHTML= halfNumberPrint;

    
    // EXERCISE 3
    // Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
    function percentage(num, per) {
    return num*per
    }
    let num=1200;
    let per = 50/100
    let percentageResult = num*per;
    let percentageResultPrint = `${percentageResult} is 50% of the number ${num}.`
    console.log(`${percentageResultPrint}`);
    percentage(num, per)
    document.getElementById('exercise8').innerHTML= percentageResultPrint;
    
    // EXERCISE 4
    // Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
    //      Bonus: Round the result so there are only two digits after the decimal.
    function areaOfCircle(radius) {
    return radius**2*pi
       }
    let radius = 8;
    let pi = 3.1415926535898;
    let resultArea = radius**2*pi;
    let resultAreaFinal = resultArea.toFixed(0)
    let areaPrint = `The area for a circle with radius ${radius} is ${resultAreaFinal}cm.`
    console.log(`${areaPrint}`)
    areaOfCircle (radius)
    document.getElementById('exercise9').innerHTML= areaPrint;
    
    
    // EXERCISE 5
    // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
    //      1. Take half of the number and store the result.
    //      2. Square the result of #1 and store that result. 
    //      3. Calculate the area of a circle with the result of #2 as the radius.   
    //      4. Calculate what percentage that area is of the squared result (#3).
    
  
    function motherOfFunctions(nNumber){
    let func1 = halfNumber(nNumber);
    console.log(`${func1}`)
    let func2 = squareNumber(func1);
    console.log(`${func2}`)
    let func3 = areaOfCircle(func2);
    console.log(`${func3}`)
    let func4 = percentage(func2, func3);
    console.log(`${func4}`)
    let finalPrintedResult =  ` the result of taking the half of ${nNumber} is ${func1}. the square of ${func1} is ${func2} and by having the area by taking the squre no as a radius is ${func3}, finally the result of having squared number as in first field and the area result as second field
    is ${func4}`
    document.getElementById('exercise10').innerHTML= finalPrintedResult;

    }
    let nNumber = 8
    let finalResult = motherOfFunctions(nNumber)
   
  