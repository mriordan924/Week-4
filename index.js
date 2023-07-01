//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.Do not use numbers to reference the last element, find it programmatically.


let agesArray = [3, 9, 23, 64, 2, 8, 28, 93] 
    console.log (agesArray[agesArray.length-1] - (agesArray[0]))
    //Because the elements in an array are zero indexed, taking the length of the array and subtracting 1 will give us the last element in the array. The first element will always be 0. So 93-3 = 0; which is printed over on my console.

//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
 
    agesArray.push(105)
    console.log((agesArray.length), (agesArray[agesArray.length-1]))
    //Adding .push(num) to the array adds that number to the existing array. Here I console.logged the array length (now 9 elements long) as well as the last element to ensure it was 105. So now when I run the above code, I should see 102 (105-3).

    console.log (agesArray[agesArray.length-1] - (agesArray[0]))


//Use a loop to iterate through the array and calculate the average age.

let sum = 0;
    for (let i = 0; i < agesArray.length; i++) {
    sum += agesArray[i];
}
    console.log(sum / agesArray.length)
//I created a var for sum here because I wanted to first find the sum of all the numbers in my element. I knew that with that sum, I could use agesArray.length to calculate the average within my console.log. The sum of all the elements was 335, and there were 9 elements total. So 335/9 = 37.22 repeating. I'm sure there's a better way that would result in a fixed decimal but I haven't figured it out yet.

//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.Use a loop to iterate through the array and calculate the average number of letters per name.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
   //for(let i = 0; i < names.length; i++){
    //    sum += names[i];
       // }
    //console.log(sum / names.length)
   //Here I tried to implement the same code as above to calculate the average number of letters, and it returned NaN. So I tried an arrow function:
   //}
  const average = names => names.reduce((a, b) => a + b) / names.length;
   console.log(average)
   //let avg = 0
   //for(let i = 0; i <names.length; i++){
    //avg = (names / names.length) * names.length
   //}
   //console.log(vg)
   //console.log(names.sum()/names.length)
   //}

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
for(let i = 0; i < names.length; i++){
   console.log(names.join(","))

}
//using .join(",") will take all the elements of an array and turn them into a string seperated by commas. 


//How do you access the last element of any array?
    //Take the length of the array and minus one, as arrays are indexed starting at zero so the last element will be one less than the length. As shown earlier. 

//How do you access the first element of any array?
    //Arrays start at an index of zero, so the first element of an array will be myArray[0]. myArray[1] will result in calling the second element of the array.
    
//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    let firstNames = ["Mike", "John", "Sam"]
    let nameLengths = [4, 4, 3]

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
total = 0
for (let i = 0; i <nameLengths.length; i++) {
    total += nameLengths[i]
}
    console.log (total)
    //Used the same loop as I did earlier in code. 
    
    //Write a function that takes two parameters, word and n, as arguments and returns the word //concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function test (word, n){
    return word.repeat(n)
} console.log (test ('hello', 3))
    //I did have to look into how to repeat in JS, as initially I tried to return word.concat(n) which resulted in hello3.
    
    
//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName (firstName, lastName){
    return firstName + " " + lastName
}
console.log(fullName ("Molly", "Riordan"))
    
  //  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let array1 = [20,30,40]
let array2 = [50, 40, 25]  

function oneHundred () {
    let numbers = 0
    for (let i = 0; i < array1.length; i++) {
        numbers += array1[i]
   if (numbers > 100) {
     return true
    } else { 
        return false
    }
    }
}
    console.log(oneHundred(array1))
    console.log (oneHundred(array2))
        //So here I was able to write a function that used array1 and declared it false since it is not equal to 100. I tried to console.log array2 but it also retured false, although it should be true because it is over 100. I'm assuming it's because array1 is specifically called out within my function...
    
    //Write a function that takes an array of numbers and returns the average of all the elements in the array.
    driveSpeed = [65,75,90,85,70,]
    speed = 0
    function avgSpeed () {
        for (let i = 0; i < driveSpeed.length; i++) {
       speed +=driveSpeed[i]
            //return driveSpeed
                //here's where I struggled on what to have the function return.
            //return (speed += driveSpeed[i]) / driveSpeed.length 
        } //Not sure where this was going to I decided to try a simpler approach:
        return speed / driveSpeed.length //this worked! BUT I also realized I had (speed) within the parameter of my function too, which was causing an error.
    }
    console.log(avgSpeed(driveSpeed))
    
//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let firstArray = [1,2,3,4]
let secondArray = [10, 20, 30, 40]
let a = 0
let b = 0

function greaterArray (a, b) {
    for (let i = 0; i <firstArray.length; i++){
        a += firstArray[i] / array1.length
    }
    for (let i = 0; i <secondArray.length; i++){
        b += secondArray[i] / array2.length
    }
    if (a > b){
        return true
    } else {
        return false
    }
}
console.log(greaterArray(firstArray, secondArray))
    //the sum of firstArray is smaller than secondArray so the expected result is false. After writing several codes this one was a little easier to grasp, however, I'm sure  there is a way to shorten it that doesn't require 2 for statements. I did finally realize that when finding the average I can include diving by the arrays length on the same line of code that I find the sum! :)
    
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 
    10.50
let isHot = Boolean
let hasMoney = 0
function willBuyDrink (isHot, hasMoney) {
  if (isHot = true && hasMoney > 10.50 ){
    return true;
    } else {
    return false
    }
}

console.log (willBuyDrink(true, 15.50))
//I wrote this code correctly on the first try somehow! So let's do one more console.log to make sure it returns false when it's I don't have enought money.

console.log (willBuyDrink(true, 5.50)) //WOOO

    
    //Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
    
let isWeekend = Boolean
let money = 0

function whatsForDinner (isWeekend, money) {
    if (isWeekend != true)
        return "I'm not taking the kids out for dinner on a school night!"
    else if ((isWeekend = true) && (money >20))
     return "We're going out for pizza!"
    else if ((isWeekend = true) && (money <= 20)) 
        return "We should probably save money, cook what's in the fridge." 
    // else if (isWeekend != true) 
        //return "I'm not taking the kids out for dinner on a school night!"
    }

console.log (whatsForDinner(true, 50))
console.log (whatsForDinner(true, 20))
console.log (whatsForDinner(false, 20))

    //This code is to help answer the age old question of "what's for dinner?" after determining if we're even hungry. If we're hungry and it's the weekend, and we have more than $20, we're getting pizza! If it's the weekend but we have $20 or less, we better stay in and cook something! And if it's not the weekend, it doesn't matter how munch money we have because we aren't taking the kids out to dinner on a school night! 

    //I originally had my first if statement as my else if statement (see line 173) but I kept getting "We should probably save money, cook what's in the fridge" when I console.logged false, 20 as the paramiters. Then I realized I should start with if isWeekend doesn't equal true, because otherwise it would continue running to the next line of code and that fixed my issue! 
    
    




  