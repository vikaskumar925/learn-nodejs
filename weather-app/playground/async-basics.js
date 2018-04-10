console.log('Starting App');

setTimeout(()=> {
    console.log('inside of callback');
}, 2000);

setTimeout(() => {
    console.log("second time out worked");
},0);
console.log('Finishing App');
