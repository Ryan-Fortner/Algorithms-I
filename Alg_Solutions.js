// Sets variables and makes a array to swap both
var myNumber = 42;
var myName = "Ryan";
[myNumber, myName] = [myName, myNumber];
console.log(myNumber);
console.log(myName);

// Print -52 to 1066
var i;
for (var i = -52; i < 1067; i++) {
	console.log(i);
}

// Don't Worry, Be Happy
function becheerful() {
	 for (var i = 1; i <= 98; i++) 
	 {
	 console.log("good morning!");
	}
	}

// Multiples of Three-but Not All
var num;
for (var num = -300; num <= 0; num = num + 3) 
{
	if (num == -3 || num == -6) 
	{
		continue;
	}
	console.log(num);
}

// Printing Integers with While
var num = 2000;
while (num < 5280) 
{
	console.log(num);
	num = num + 1;
}
console.log(num);

// You say It's Your Birthday
function birthdayguesser(date)
{
	if (date == 7 && 16)
	{
		console.log("How did you know?");
	}
	else 
	{
		console.log("Just another day....")
	}
}

// Leap Year
function leapyearguesser(Year)
{
	var Year;
	if (Year % 400 === 0)
	{
		console.log("Yes");	
	}
	else
	{
		if ((Year % 4 === 0) && (Year % 100 != 0))
		{
			console.log("Yes");
		}
		else
		{
			console.log("No");
		}
	}
}

// Print and Count
function PrintCount ()
{
	var count = 0;
	for (i = 512; i <= 4096; i++)
	{
		if (i %5 == 0)
		{
			console.log(i);
			count++;
		}
	}
	console.log("There are " + (count) + " multiples of 5");
}
PrintCount();

// Multiples of Six
function MultiplesofSix()
{
	var i = 0;
	while (i <= 60000)
	{
		i++;
		if (i %6 == 0)
		{
			console.log(i);
		}
	}
}
MultiplesofSix();

// Counting, the Dojo Way
for (var i = 1; i <= 100; i ++)
{
	if ((i %5 !==0) && (i %10 !==0))
	{
		console.log(i);
	}
	if (i %5 ==0)
	{
		console.log("Coding");
	}
	if (i %10 ==0)
	{
		console.log("Dojo");
	}
}

// What Do You Know?
function whatdoyouknow(incoming) {
sum = 0;
for (var i = 1; i < 10; i++) {
sum += i;
}
return sum;
}

// Whoa, that Suckers Huge...
function addodds(n)
{
	var sum = 0;
	for (var i = 1; i <= 2*150000 - 1; i += 2)
	{
		sum += i;	
	}
	console.log((sum) + -(sum));
} 

// Countdown by Fours
var i = 2017;
while (i > 0)
{
	if (i %4 == 0)
	{
		console.log(i);
	}
	i --;
}

// Flexible Countdown
for (i = 9; i > 2; i --)
{
    if (i %3 ==0)
    {
        console.log(i);
    }
}

// Final Countdown
var i = 17;
while (i > 3)
{
	{
	i --;
	}
	if (i == 9)
	{
		continue;
	}
	if ((i %3 == 0) && (i !== 3))
	{ 
		console.log(i);
	}
}

// Countdown
function countDown(num)
{
	var newarr= [];
	if (num > 0)
	{
		while (num >= 0)
		{
			newarr.push(num);
			num --;
		}
	}
	else
		{
			while (num <= 0)
			{
				newarr.push(num);
				num ++;
			}
		}
	return newarr;
	}
	console.log(countDown(10));

	// Print and Return
	function printReturn(num1, num2)
	{
		console.log(num1);
		return(num2);
	}

	// First Plus Length
	function firstpluslength(arr)
	{
		if (typeof arr[0] != 'number')
		{
			console.log("Please use numerical values only.")
		}
		else 
		{
			arr[0] = arr[0] + arr.length;
			return arr[0];
		}
		
	}

// Values Greater than the Second
function greaterthanSecond(arr)
{
	var arr = [1,3,5,7,9,13];
	var count = 0;
	for (var idx = 1; idx < arr.length; idx++)
	{
		console.log(arr[idx]);
		count ++;
	}
	return count;
}

// Values Greater than the Second, Generalized
function greaterthanSecondGen(arr)
{
	var count = 0;
	var arr = arr;
	if (arr.length = 1)
	{
		console.log("Please make index atleast two elements long.");
	}
	else 
	{
		for (var idx = 1; idx < arr.length; idx++)
		{
		console.log(idx);
		count ++;
		}
	}
	return count;
}

// This Length, That Value
function lengthValue(num1, num2)
{
	var arr = [];
	var num1 = num1;
	var num2 = num2;
	for (var i = 0; i <= num1-1; i++)
	{
		arr.push(num2);
	}
	if (num1 === num2)
	{
		console.log("Jinx!");
	}
	console.log(arr);
}

// Fit the First Value
function perfectFit(arr)
{
	var arr = arr;
	if ((arr[0]) != arr.length)
	{
		if (arr[0] > arr.length)
		{
			console.log("Too Big!");
		}
		else
		{
			console.log("Too Small");
		}
	}
	else
	{
		console.log("Just Right!");
	}
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees)
{
	var f = fDegrees;
	var c = ((f - 32) * (5/9));
	console.log("The Temperature in Celsius is " + c);
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees)
{
	var c = cDegrees;
	var f = (((9/5) * c) + 32);
	console.log("The Temperature in Celsius is " + f);
}

// Celsius equals Fahrenheit (Optional)
function celsiusequalsFahrenheit()
{
	for (var degree = 200; degree > -45; degree --)
	{
		if (degree == ((degree - 32) * (5/9)))
		{
			console.log("Celsius and Fahrenheit equal each other at " + degree + " degrees! BINGO!!!")
		}
		else 
		{
			console.log("Celcius and Fahrenheit do not equal at " + degree);
		}
	}
}

// Biggie Size
function makeItBig(arr)
{
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] < 0)
		{
			arr[i] = arr[i];
		}
		else
		{
			arr[i] = "big";
		}
	}
	console.log(arr);
	return arr;
}

// Print Low, Return High
function printLowReturnHigh(arr)
{
	var low = Math.min(...arr);
	var high = Math.max(...arr);
	if (arr.length == 0)
	{
		console.log("No values in Array.");
	}
	else if (arr.length == 1)
		{
			console.log("Need 1 more value in Array.");
		}
	else
	{
		console.log(low);
		return high;
	}
}

// Print One, Return Another
function printOneReturnAnother(arr)
{
	if (arr.length < 1)
	{
		console.log("Need at least two values in Array.");
	}
	else for (var i = 0; i < arr.length; i ++)
	{
		if (arr[i] %2 == 1) 
		{
			odd = arr[i];
			break;
		}
	}
	console.log(arr[arr.length-2]);
	return odd;
}

// Double Vision
function double(arr)
{
	var newarr = [];
	for (var i = 0; i < arr.length; i ++)
	{
		newarr.push(arr[i] * 2);
	}
	return newarr;
}

// Count Positives
function countPositives(arr)
{
	var poscount = 0;
	for (var i = 0; i < arr.length; i ++)
	{
		if (arr[i] > 0)
		{
			poscount ++;
		}
	}
	arr.length --;
	arr.push(poscount);
	return(arr);
}

// Evens and Odds
function evensThatsOdd(arr)
{
	for (var i = 0; i < arr.length; i ++)
	{
		if (arr[i] %2 == 1)
		{
			 if ((arr[i + 1]) %2 == 1)
			{
				 if ((arr[i + 2]) %2 == 1)
				{
					console.log("That's odd!")
				}
			}
		}
	}
	
	for (var i = 0; i < arr.length; i ++)
	{
		if (arr[i] %2 == 0)
		{
			 if ((arr[i + 1]) %2 == 0)
			{
				if ((arr[i + 2]) %2 == 0)
				{
					console.log("Even more so!");
				}
			}
		}
	}
}

// Increment the Seconds
function incrementSeconds (arr)
{
    for (var i = 0; i < arr.length; i ++)
    {
        if (arr[i] %2 == 1)
        {
            arr[i] ++;
        }
    }
     console.log(arr);
        return arr;
}

// Previous Lengths
function previouslengths(arr)
{
	for (i = 0; i < arr.length; i++)
	{
     		if (typeof '' === 'string')
		{
			arr.splice(i, i < arr.length, arr[i - 1].length);
		}	
	
	    	else
	    	{
			console.log("Elements in Array must be strings.");
	    	}
	}
}

// Previous Lengths
function previouslengths(arr)
{
	for (var i = 0; i < arr.length; i++)
	{
		if (typeof arr[i] === 'string')
		{
			arr[i] = arr[i].length;
			arr.push(arr[i]);
			arr.pop();
		}
		else
		{
		
		}
	}
	return arr;
}

// Add Seven to Most
function addSeven(arr)
{
	var newarr = arr;
	for (var i = 1; i < arr.length; i ++)
	{
		arr[i] += 7;
	}
	return newarr;
}

// Reverse Array
function reverseArray(arr)
{
	var newArray = [];
	for (var i = arr.length - 1; i >= 0; i --)
	{
		newArray.push(arr[i]);
	}
	return newArray;
}

	// Outlook: Negative
function makeNegative(arr)
{
	var newArray = arr;
	for (var i = 0; i < arr.length; i ++)
	{
		if (arr[i] > 0)
		{
		arr[i] -= (arr[i] * 2);
		}
		else
		{
			arr[i] = arr[i];
		}
	}
	return newArray;
}

// Always Hungery
function imHungry(arr)
{
	for (var i = 0; i < arr.length; i ++)
	{
		if (arr[i] == "food")
		{
			console.log("Yummy");
		}
		else if (i !== 'food')
		{
			console.log("I'm Hungery");
			break;
		}
	}
}

// Swap Toward the Center
function swapToCenter(arr)
{
	for (var i = 0; i < arr.length; i ++)
	{
		if (i = arr[0])
		{
			[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
		}
		else (i = arr[3])
		{
			[arr[2], arr[arr.length - 3]] = [arr[arr.length - 3], arr[2]];
		}
		return arr;
	}
}

// Scale the Array
function scaleArray(arr, num)
{
	for (var i = 0; i < arr.length; i ++)
	{
		arr[i] = (arr[i] * num);
	}
	return arr;
}
