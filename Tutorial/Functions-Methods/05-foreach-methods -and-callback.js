// A function can also be passed as an argument .
// The passed function is called call back function.

const myFunc = (receiveFunction) =>{

    let value = 50;
    receiveFunction(value)
};
myFunc(function(value){
    console.log("The value is ", value)
});