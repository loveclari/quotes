/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {quote:"History is a vast early warning system.", source:"  Norman Cousins, ", citation:" Saturday Review, ", year: " 1978"},
  {quote:"Keep your face always toward the sunshine - and shadows will fall behind you.", source:"  Walt Whitman"},
  {quote:"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", source:" Buddha"},
  {quote:"You have power over your mind - not outside events. Realize this, and you will find strength.", source:" Marcus Aurelius"},
  {quote:"It has become appallingly obvious that our technology has exceeded our humanity.", source:" Albert Einstein"},
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  let randomNumber =  Math.floor(Math.random() * quotes.length);

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  let randomQuote = quotes[randomNumber];

  // 3. Return the variable storing the random quote object
  return randomQuote;
}

console.log(getRandomQuote())




/***
 * `printQuote` function
***/

let selectHtml = document.getElementById('quote-box')


function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let nextQuote = getRandomQuote()
  let html = "";

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  html += `<p class='quote'>${nextQuote.quote}</p><p class='source'>${nextQuote.source}`
  if(nextQuote.citation) {
    html += `<span class="firstSpan">${nextQuote.citation}<span>`
  }
  if(nextQuote.year) {
    html += `<span class="secondtSpan">${nextQuote.year}<span></p>`
  } 
 


  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  selectHtml.innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);