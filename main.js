/*
console.log('Hello mac');
console.error('This is an error');
console.warn('warning');
//var let const
let age = 30;  //let is used to reassign
console.warn('always used const unless u are gona reassign');
age = 31;
console.log(age);


//datatypes   Strings Numbers Boolean Null undefined 
const name = 'Harsha';
const Age = 19;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
console.log(typeof Age);


// concatenation
console.log(' My name is ' + name + ' and I am ' + Age);
// Template string
const hello = 'My name is  ${name}';
console.log(hello);

const s = 'hello world, i , am ,harsha';
console.log(s.length);
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(', '));

//Arrays - variables that hold multiple values
const numbers = new Array('1,2,3,4,5');
console.log(numbers);

const fruits = ['apples','mangoes'];
console.log(fruits);
fruits[2] = 'grapes';
console.log(fruits);
fruits.push('oranges');
fruits.unshift('berry');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray('harsha'));
console.log(fruits.indexOf('mangoes'));

//object literals
const person = {
    firstName :'Harsha',
    lastName : 'Codes',
    Age:19,
    hobbies: ['music' , 'movies', 'sports'],
    address: {
        street : '22 Nelson St',
        city : 'Edinburgh',
        state:'MA'
    }

}
console.log(person.hobbies[1]);
console.log(person.address.street);
const{firstName,lastName,address: {city}} = person;
console.log(city);

person.email = 'harsha@gmail.com';

const todo =[
    {
    id :1,
    text: 'take out trash',
    isCompleted:true
    },
    {
        id :2,
    text: 'meeting',
    isCompleted:true
    }

];

console.log(todo[1].text);

//JSON
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);
//map
 
const todoText = todo.filter(function(todo )
{
    return todo.isCompleted == true;
});
console.log(todoText);

//conditionals
const z = 20;
if(z===10){
    console.log(' x is 10');
}
else{
    console.log('x is not 10');
}

const  add = (num1,num2) =>num1+num2;

console.log(add(1,4.5));
 // OBJECT ORIENTED PROGRAMMING
function erson(fname,lname,dob){
this.fname = fname;
this.lname = lname;
this.dob  = new Date(dob);
this.getBirthYear = function(){
    return this.dob.getFullYear(); 
} 

//class
class erson{
    constructor(fname,lname,dob)
    { this.fname = fname;
this.lname = lname;
this.dob  = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
}
const person1 = new erson('harsha','codes','7/12/2001');
console.log(person1.getBirthYear());
//console.log(window);
//window.alert(1);





//Single element slelectors

//const  form = document.getElementById('my-form');
console.log(document.querySelector('h1'));



//multiple element selectors

console.log(document.querySelectorAll('.item'));   // generally use this one
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Harsha';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
const btn = document.querySelector('.btn');
btn.style.background = 'black';
btn.addEventListener('click',(e) => {
    e.preventDefault(e);
  //  console.log(e.target.className);
 // document.querySelector('#my-form').style.background = '#ccc';
 // document.querySelector('body').classList.add('bg-dark');
//document.querySelector('.items').lastElementChild.innerHTML = '<h1>Harsha</h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value  === ''){
     msg.classList.add('error');   
     msg.innerHTML = 'please enter feilds';

     setTimeout(()  => msg.remove(),3000);
    }
    else{
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nameInput.value}  : ${emailInput.value}`));
  userList.appendChild(li);
  //clear feilds
    nameInput.value = '';
    emailInput.value-'';

}
};










