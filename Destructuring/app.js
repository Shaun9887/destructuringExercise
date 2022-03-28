//Object Destructuring 1
// 8 and 1846

//Object Destructuring 2
//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3
//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like green

//Array 1
//Maya
//Marissa
//Chi



//Array 2
//"Raindrops on roses"
//"whiskers on kittens"
//["Bright copper kettles",
//"warm woolen mittens",
//"Brown paper packages tied up with strings"]

//Array 3
//[10,30,20]

//ES2015 Object Destructuring
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const { a, b } = obj.numbers;


//Array Swap
var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });