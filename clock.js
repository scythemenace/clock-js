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