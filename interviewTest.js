

class LongestWord{
	constructor(str){

		this.str = str;
	}

	longWord(){

		// .split method breaks string into an array. the string is split into an array using " " (space as a separator).
		
		var strArray = this.str.split(" ");

		//Assign the first value of the array to temp 

		var temp = strArray[0];

		//for loop starts with index 1 of the array as we dont want to compare temp with itself.
		for(var i=1;i<strArray.length;i++)
		{

			//if element of array is greater than temp then temp takes its value and this loop continues till last element of array.
			if(strArray[i].length >= temp.length)
			{

				temp = strArray[i];
				
			}

		}

		return "the longest word is "+temp+" and its length is " +temp.length;
	}

}




//Test Case1
var str = "The cow jumped over the moon.";

var firstAttempt = new LongestWord(str);
var lWord = firstAttempt.longWord();
console.log(lWord);

//Test Case 2
var testCase1 = new LongestWord("Conundrum Hello javascrip")
var tcWord1 = testCase1.longWord();
console.log(tcWord1);

//Test Case 3
var testCase2 = new LongestWord("hello hello")
var tcWord2 = testCase2.longWord();
console.log(tcWord2);

//Test Case 4
var testCase3 = new LongestWord("&*^&%+ 124367")
var tcWord3 = testCase3.longWord();
console.log(tcWord3);


//Test Case 5
var testCase3 = new LongestWord("1 2 3 4 5 6")
var tcWord3 = testCase3.longWord();
console.log(tcWord3);



