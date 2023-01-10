// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = num => String(num)



// const numToString = () => {
//   const numInput = document.getElementById('numString').value
//   let s = numInput.toString() 
//   document.getElementById('output').innerHTML = s + ' is now a ' + typeof s
// }
  


// Write a JavaScript program to convert a string to the number.
const stringToNum = str => Number(str)

// const stringToNum = () => { 
//   const strInput = document.getElementById('stringNum').value
  
//   let number23 = parseInt(strInput)
//   document.getElementById('output2').innerHTML = number23 + ' is now a ' + typeof number23

// }

 



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  // const dataType = data => Array.isArray(data) ? 'array' : data;

  // const typeOf = data => Array.isArray(data) ? 'array' : typeof data;
  

  


  // data === 'undefined'
  // data === 'null'
  // data === 'true'


    const dataType = () => {
    const dataInput = document.getElementById('textArea').value 
 
    if (dataInput === 'true' || dataInput === 'false') {
      return document.getElementById("whatData").innerHTML = 'Boolean'
    }
    if (dataInput === 'Null') {
      return document.getElementById("whatData").innerHTML = 'Null'
    }
    if (dataInput === 'Undefined') {
      return document.getElementById("whatData").innerHTML = 'Undefined'
    }
    // if (typeof stringToNum(dataInput) === 'number') {
    //   return document.getElementById("whatData").innerHTML = 'Number'
    // }
    if (isNaN(parseInt(dataInput))) {
      return document.getElementById("whatData").innerHTML = 'String'
    } else {
      return document.getElementById("whatData").innerHTML = 'Number'
     }
    //  console.log(dataType())


}


  


  
// Write a JavaScript program that adds 2 numbers together.
const add = (num1, num2) => num1 + num2;



// Write a JavaScript program that runs only when 2 things are true.
const bothTrue = (a, b) => a && b;





// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = (a, b) => a || b; 


// Write a JavaScript program that runs when both things are not true.  
const bothNotTrue = (a, b) => !a && !b;

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

const addForm = document.getElementById('add');
addForm.addEventListener("submit", e => {
  e.preventDefault()

  const n1 = document.getElementById("number1").value;
  const n2 = document.getElementById("number2").value;
  const sum = add(stringToNum(n1), stringToNum(n2))
  document.getElementById("sum").innerHTML = `The Sum of ${n1} + ${n2} is ${sum}`;
})



// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
