//-----------first form ------------//
function greetMe(fName, year) {
    return "Happy New year :"+ fName + "  Year : "+year;
}

//call function
var msg = greetMe("Priyanka", 2022);
console.log("first form of using func - typeof msg is : " + typeof msg);
console.log("first form of using func - msg from function is : ", msg);

//----------- second way to use function  ------------//
var greetMsg = function greetMe(fName, year) {
    return "Happy new year : " + fName + " year : " +year ;
}
var f2 = greetMsg("Kuma" , 1974);
console.log("second form of using func - typeof msg is : " + typeof greetMsg);
console.log("second form of using func - msg is : " +  f2);


//----------- third way to use function - using function constructor ------------//
var greetingMsg = new Function("fName", "year", console.log("type of greetingMsg" + typeof greetingMsg),"return 'Happy New year :'+fName + ' Year :  ' +year");

var Message = greetingMsg("Priya", 2021);

console.log("third form of using func - typeof msg is : " + typeof greetingMsg);
console.log("third way - Message : " +  Message);

