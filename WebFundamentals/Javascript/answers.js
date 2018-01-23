/* Page 16 */

// Setting and Swapping
var myNumber = 42;
var myName = "Ashley";

myNumber = "Ashley";
myName = 42;

// Print -52 to 1066
for (var num = -52; num <= 1066; num++) {
    console.log(num);
}

// Don't Worry, Be Happy
function beCheerful() {
    for (var num = 1; num <= 98; num++) {
        console.log("good morning!");
    }
}

// Multiples of Three - but Not All
for (var num = -300; num <= 0; num++) {
    if (num % 3 === 0) {
        if (num == -3 || num == -6) {
            continue;
        } else {
            console.log(num);
        }
    }
}

// Printing Integers with While
var whileNum = 2000;
while (whileNum <= 5280) {
    console.log(whileNum);
    whileNum++;
}

// You Say It's Your Birthday
function birthday(num1, num2) {
    var month = 6;
    var day = 21;

    if ((num1 == month && num2 == day) || (num1 == day && num2 == month)) {
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

// Leap Year
function leapYear(year) {
    var isItALeap;
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 === 0) {
            isItALeap = true;
        } else if (year % 100 === 0) {
            isItALeap = false;
        } else {
            isItALeap = true;
        }
    } else {
        isItALeap = false;
    }
    console.log(isItALeap);
}

// Print and Count
function intOfFive() {
    var tally = 0;

    for (var num = 512; num <= 4096; num++) {
        if (num % 5 === 0) {
            console.log(num);
            tally++;
        } else {
            continue;
        }
    }
    console.log(tally);
}

// Multiples of Six
var num = 6;
while (num < 60000) {
    if (num % 6 === 0) {
        console.log(num);
    }
    num++;
}

// Counting, the Dojo Way
for (var i = 1; i <= 100; i++) {
    var phrase = "";
    if (i % 5 === 0) {
        phrase += "Coding";

        if (i % 10 === 0) {
            phrase += " Dojo";
        }
        console.log(phrase);
    } else {
        console.log(i);
    }
}

// What Do You Know?
function know(incoming) {
    console.log(incoming);
}

// Whoa, That Sucker's Huge...
var sum = 0;

for (var start = -300000; start <= 300000; start++) {
    if (start % 2 !== 0) {
        sum += start;
    }
}
console.log(sum);

// Countdown by Fours
var start = 2016;

while (start > 0) {
    if (start % 2 === 0) {
        console.log(start);
        start = start - 4;
    }
}

// Flexible Countdown
function flexCount(lowNum, highNum, mult) {
    for (var start = highNum; start > lowNum; start = start - mult) {
        console.log(start);
    }
}

// The Final Countdown
function finalCount(mult, start, end, nope) {
    while (start <= end) {
        if (start % mult === 0 && start != nope) {
            console.log(start);
            start++;
        }
        else {
            start++;
            continue;
        }
    }
}

/* Page 20 */

// Countdown
function countdown(number) {
    var array = [];

    for (var i = number; i >= 0; i--) {
        array.push(i);
    }
    console.log(array);
}

// Print and Return
function twoNum(array) {
    console.log(array[0]);
    return (array[1]);
}

// First Plus Length
function addition(array) {
    var sum;

    if (typeof array[0] == 'number') {
        sum = array[0] + array.length;
        return sum;
    }
    else {
        console.log("Array[0] is not a valid number.");
    }
}

// Values Greater than Second
function greaterThanSec(array) {
    var total = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[1]) {
            console.log(array[i]);
            total++;
        }
    }
    return "Total values bigger than second value in array: " + total;
}

// Values Greater than Second, Generalized
function greaterThanSecGen(array) {
    var newArr = [];
    var totalVal = 0;

    if (array.length > 1) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[1]) {
                newArr.push(array[i]);
                totalVal++;
            }
        }
    }
    else {
        console.log("There is only one element in the array; please add more.");
        return totalVal;
    }
    console.log("Total values bigger than second value in array: " + totalVal);
    return newArr;
}

// This Length, That Value
// Unsure what this question was asking

// Fit the First Value
function fitFirst(array) {
    if (array[0] > array.length) {
        console.log("Too big!");
    }
    else if (array[0] < array.length) {
        console.log("Too small!");
    }
    else {
        console.log("Just right!");
    }
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees) {
    var dCelsius = (fDegrees - 32) * 0.5556;
    return Math.round(dCelsius);
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees) {
    var dFahrenheit = cDegrees * 1.8 + 32;
    return Math.round(dFahrenheit);
}

/* Page 22 */

// Biggie Size
function makeItBig(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            newArr.push("big");
        }
        else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// Print Low, Return High
function lowHigh(array) {
    var low = 0;
    var high = 0;


    for (var i = 0; i < array.length; i++) {
        if (array[i] == array[0]) {
            low = array[i];
            high = array[i];
        }
        else if (array[i] < low) {
            low = array[i];
        }
        else if (array[i] > high) {
            high = array[i];
        }
    }
    return "Lowest Number: " + low + " Highest Number: " + high;
}

// Double Vision
function double(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        newArr.push(array[i] * 2);
    }
    return newArr;
}

// Count Positives
function countPositives(array) {
    var positives = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positives++;
        }
    }
    array.pop();
    array.push(positives);

    return array;
}

// Evens and Odds
function evenOdd(array) {
    var evenTally = 0;
    var oddTally = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenTally++;

            if (evenTally == 3) {
                console.log("Even more so!");
            }
        }
        else if (array[i] % 2 !== 0) {
            oddTally++;

            if (oddTally == 3) {
                console.log("That's odd!");
            }
        }
    }
}

// Increment the Seconds
function increment(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] = arr[i] + 1;
            console.log(arr[i]);
        }
    }
    return arr;
}

// Previous Lengths
function prevLengths(array) {
    var prevLength;
    var currLength;

    for (var i = 0; i < array.length; i++) {
        if (array[i] == array[0]) {
            prevLength = array[i].length;
            array[i] = prevLength;
        }
        else if (array[i] != array[0]) {
            currLength = array[i].length;
            array[i] = prevLength;
            prevLength = currLength;
        }
    }
    console.log(array);
}

// Add Seven to Most
function addSeven(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] == array[0]) {
            newArr.push(array[i]);
        }
        else {
            newArr.push(array[i] + 7);
        }
    }
    return newArr;
}

// Reverse Array
function reverse(array) {
    var temp = array[0];

    for (var i = 0; i < array.length; i++) {
        array[i] = array.pop();
    }
    array.push(temp);

    return array;
}

// Outlook: Negative
function negative(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] * -1;
        }
    }
    return array;
}

// Always Hungry
function hungry(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "food") {
            console.log("yummy")
        }
        else {
            console.log("I'm hungry");
        }
    }
}

// Swap Toward the Center
function swap(array) {
    var temp;

    for (var i = 0; i < array.length - i; i++) {
        temp = array.pop();
        array.push(array[i]);
        array[i] = temp;
    }
    return array;
}

// Scale the Array
function scale(array, num) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * num;
    }
    return array;
}
