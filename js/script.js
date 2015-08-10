/**
 * Created by kadehill on 8/9/15.
 */
//Calculate how old Sparky the pit bull is in dog years based on his actual age.
var dogYears = 7;
var sparkyAge = 1;
var age = dogYears * sparkyAge; //multiply how old Sparky is in human years by his age in dog years; 7 x 1 = 7
console.log("Sparky is" +" " + sparkyAge + " " + "human year old which is" + " " + age + " " + "in dog years."); //print out the output of human and dog years.



//Calculate how much how much pizza each partygoer will get at the party.
var people = 20;
var pizzaSlices = 12;
var pizzaBox = 4;
var x = (pizzaBox * pizzaSlices) / people; //multiply the number of pizza boxes times the number of slices per box then divide by the number of partygoers.
console.log("Each person at" + " " + x + " " + "slices of pizza at the party.");




//Calculate how many whole slices Sparky will feast on.
var people = 20;
var pizzaSlices = 12;
var pizzaBox = 4;
var x = (pizzaBox * pizzaSlices) % people;
console.log("Sparky got" + " " + x + " "+ "slices of pizza");


//Calculate the average amount spent on groceries.
var groceryTotal = [128, 210, 150, 175, 200];
var total = groceryTotal[0] + groceryTotal[1] + groceryTotal[2] + groceryTotal[3] + groceryTotal [4];
var average = total / 5;
console.log("You have spent" + " " + "$" + total +" " + "on groceries over 5 weeks. That is an average of" + " " + "$ " + average + " " + "per week." );


//Calculate the discounted price for an item.