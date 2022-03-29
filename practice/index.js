//console api
console.log("Hello World");
//alert("me");
document.write("hello");
console.warn("warning");
console.error("error lock");

var num1 = 10;
var num2= 20;
console.log(num1+num2);

// data types 

var str1 ="string";
var str2 = 'stinf in single quotes';

//objects

var marks ={
    ravi:10,
    b:2,
    c:3,
}

console.log(marks);

//booleans
var a =true;
var f=false;
console.log(a,f);

var und;
console.log(und);

//null
var n = null;
console.log(n);

//array
//there r 2 types of data types 
// 1. primitive : undefined null Number String Boolean Symbol
// 2. reference : Array n objects 

var arr = [1,"hello",2,3,4]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.length);

// logical operators
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true  || true)
console.log(true  || false)
console.log(false ||  true)
console.log(false ||  false)

console.log(!false)
console.log(!true)

//functions 
function avg(number1, number2){
    average = (number1+number2)/2;
    return average;
}
average1= avg(4,6);
average2 = avg(14,16);
console.log(average1,average2);

var age =4 ;
if(age<2){
    console.log("you kid");
}
else{
    console.log('not kid');
}

var arr1=[1,2,3,4,5,6];
console.log(arr);
for(var i =0; i<arr1.length;i++){
    console.log(arr1[i]);
}

// for printing elemts one by one 
arr1.forEach(function(element){
    console.log(element);
})

// other ways to declear variable
// let j = 0;
// const a =1;

console.log("while loop");
//while loop
var arr2=[1,2,3,4,5,6,7,8,9];
let j=0;
while(j<arr2.length){
    console.log(arr2[j]);
    j++;
}

console.log("do while loop");

let k=5
do{
    console.log(arr2[k]);
    k++;
}while(k < arr2.length);

// when the condn is false it will print undefined 

console.log("break n continue ")

var arr1=[1,2,3,4,5,6];
console.log(arr);
for(var i =0; i<arr1.length;i++){
    if(i==2){
        //break;
        continue;
    }
    console.log(arr1[i]);

}
// array methods 
let myarr=["apple",1,null,true];
console.log(myarr.length);
console.log(myarr);
myarr.pop();
console.log(myarr);
myarr.push("prity");
console.log(myarr);
myarr.shift();
console.log(myarr);
myarr.unshift("prity");
console.log(myarr);
myarr.toString();
console.log(myarr);
myarr.sort();
console.log(myarr);


// java script array methods there u will find many more like slice n all 
// string methods 

let mystring="java is good "
console.log(mystring.length);
console.log(mystring.indexOf("good"));
console.log(mystring.lastIndexOf("good"));
console.log(mystring.slice(1,3))
d = mystring.replace("java","C#");
console.log(d);

let mydate= new Date();
console.log(mydate)
console.log(mydate.getTime())
console.log(mydate.getFullYear())

document
document.location
document.getElementById('btn').style.border='2px solid blue';

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
 
// Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })


// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}
// SetTimeout and setinterval
// clr = setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JavaScript localStorage
// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)