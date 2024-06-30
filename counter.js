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
counter();