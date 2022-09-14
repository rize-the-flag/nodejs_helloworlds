/*

const start = performance.now();
setTimeout(()=> {
    console.log(performance.now() - start);
    console.log('1000');
}, 1000);

function myF(arg) {
    console.log(arg);
}

setTimeout(myF, 1000, "Top");
*/

/*
const start = performance.now();
const handle = setTimeout(()=> {
    console.log(performance.now() - start);
    console.log('1000');
}, 5000);

handle.unref();

setTimeout(() => {
    handle.ref();
} , 1000)*/

/*const start = performance.now();
const handle = setInterval(() => {
    console.log(performance.now() - start);
    console.log("tick");
}, 1000);

setTimeout(() => {
    clearInterval(handle);
} , 5000);*/


/*
console.log('before');
setImmediate(() => {
    console.log('After all');
})
console.log('after');*/
