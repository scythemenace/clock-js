//Task 2: Calculate the actual time it takes for setTimeout() to get called by an inner function versus the delay we set it to run at
let timeThen;

const checkSetTimeoutTimeTaken = () => {
    timeThen = Date.now();
    setTimeout(calling, 1000);  
}

const calling = () => {
    console.log(Date.now() - timeThen);
}

checkSetTimeoutTimeTaken();
//Takes a lil more time than 1 sec => approx (1.003 seconds)