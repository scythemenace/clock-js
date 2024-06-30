//Task 1: Create a counter that counts down to 0 from 30;

var count = 31;

let id;

const counter = () => {
    if (!id) {
        id = setInterval(counterCheck, 1000);
    }
}

const counterCheck = () => {
    if (count == 1) {
        clearInterval(id);
    }
    count--;
    console.log(count);
}

//Call counter for 30 sec timer

//Task 2: Calculate the actual time it takes for setTimeout() to get called by an inner function versus the delay we set it to run at
let timeThen;

const checkSetTimeoutTimeTaken = () => {
    timeThen = Date.now();
    setTimeout(calling, 1000);  
}

const calling = () => {
    console.log(Date.now() - timeThen);
}

//Takes a lil more time than 1 sec => approx (1.003 seconds)

//Task 3: Create a terminal clock that shows time in HH:MM:SS

/*To use terminal have to install prompt:
    ```sudo npm install prompt-sync```
    After that declare on top ```const prompt = require('prompt-sync')();

    Note:- the terminal clock will not work unless you're running the file by typing ```node clock.js``` in the terminal instead of running it
    through the in built vs code debug button. 
*/

var prompt = require('prompt-sync')();
var count;
var intervalId;
var d;

function clock() {
    var n = prompt('How long do you want to run the clock for(seconds): ');
    count = n;
    intervalId = setInterval(runClock, 1000);
}

function runClock() {
    if (count == 1) {
        clearInterval(intervalId);
    }
    count--;
    d = new Date();
    process.stdout.write(`\rDate: ${d.getHours()}|${d.getMinutes()}|${d.getSeconds()}`); // \r moves the cursor back to the beginning of the line
}

clock();