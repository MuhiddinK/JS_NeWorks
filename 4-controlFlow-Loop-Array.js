// For Loop
for(var counter = 1; counter <5 ; counter++){
    console.log("inside the loop : " + counter)
}

console.log("outside the loop : " + counter)

// Nested Loop
for(var i=0 ; i<5 ; i++){
    console.log("outer loop at state: " +i);
    for(var j=0 ; j<2 ; j++){
        console.log("inner loop at state: " +j);
        if(j==1){
            console.log("The value of j is equal to 1.");
        }
    }
}

//While loop
var count = 1;
while(count < 5){
    console.log(count);
    count +=2;
}

console.log();


// Array
var students = ['ali', 'veli', 'deli'];
var emptyArray = [];

console.log(students[1]);

students.push('emma'); // adds an element to the end

students.unshift('adem'); // adds an element to the begginning

students.pop(); // removes an element from the end

students.shift(); // removes an element from the begginning

students.indexOf('emma') // returns index number of the element

students.splice(0,1); // deletes given number of elements from the given position

students.splice(2,1, 'muti'); // deletes given number of elements from the given position and inserts the given new element

students.sort(); // sorts to elements => first capitals, then small letters, the last the numbers


