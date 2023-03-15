var n1 = 100;
var n2 = 10;

if(n1>n2){
    console.log('n1 is greater than n2')
}else if(n1<n2){
    console.log('n1 is less than n2')
}else{
    console.log('n1 is equal to n2')
}


// Ternary
var age = 25;
var allowRegister = age > 18 ? true : false;


// Switch
var year = 2021;
var month = 2;
var dayCount;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dayCount = 31;        
        break;
    case 4: case 6: case 9: case 11:
        dayCount = 30;        
        break;
    default:
        dayCount = 28;
        break;
} 