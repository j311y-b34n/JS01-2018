var int = 7
var string = "a string"
var intString = "7"

/*
PREDICTIONS:
a. int + int will be 14
b. int + string will be "7a string"
c. int + intString will be "77"
d. intString + int will be "77"
e. int + intString + string will be "7a string7"
f. int + int + string will be "77a string" (uncertainty here, could be "14a string")
g. string + int + int will be "a string77" (uncertainty here, could be "a string14")
h. int - string will be an error
i. int - intString will be an error
j. string - intString will be an error
k. int == intString will be True
l. int === intString will be False

RESULTS:
14
7a string
77
77
77a string (LOGIC ERROR on my part, I messed up the order)
14a string (so the computer does add the integer and the string even though there's another string. Why?)
a string77 (But it doesn't add them here. Why?)
NaN (NaN is Not a Number: aka error message)
0 (The computer converted the string into an integer and subtracted them. Why?)
NaN
true
false
*/
function Testing(){
  console.log("int + int = " + int + int);
  console.log("int + string = " + int + string);
  console.log("int + intString = " + int + intString);
  console.log("intString + int = " + intString + int);
  console.log("int + intString + string = " + int + intString + string);
  console.log("int + int + string = " + int + int + string);
  console.log("string + int + int = " + string + int + int);
  console.log("int - string = " + int - string);
  console.log("int - intString = " + int - intString);
  console.log("string - intString = " + string - intString);
  console.log("int == intString = " + (int == intString));
  console.log("int === intString = " + int === intString);
 //  alert("Check your console!");
}
