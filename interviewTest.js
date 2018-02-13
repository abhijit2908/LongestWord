

class LongestWord{
	constructor(str){

		this.str = str;
	}

	longWord(){
		var strArray = this.str.split(" ");

		var temp = strArray[0];
		for(var i=1;i<strArray.length;i++)
		{


			if(strArray[i].length >= temp.length)
			{

				temp = strArray[i];
				
			}

		}

		return "the longest word is "+temp+" and its length is " +temp.length;
	}

}


var str = "The cow jumped over the moon.";

var firstAttempt = new LongestWord(str);
var lWord = firstAttempt.longWord();
console.log(lWord);


var testCase1 = new LongestWord("Conundrum Hello javascrip")
var tcWord1 = testCase1.longWord();
console.log(tcWord1);


var testCase2 = new LongestWord("hello hello")
var tcWord2 = testCase2.longWord();
console.log(tcWord2);

var testCase3 = new LongestWord("&*^&%+ 124367")
var tcWord3 = testCase3.longWord();
console.log(tcWord3);

var testCase3 = new LongestWord("1 2 3 4 5 6")
var tcWord3 = testCase3.longWord();
console.log(tcWord3);



