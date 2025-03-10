const myAdvice = new Promise((resolve, reject) => {
    let result = 1 + 1
    if (result == 2){
        resolve("good work")
    } else {
        reject("you have failed")
    }
})

myAdvice.then((message) => {
    console.log("you did a " + message)
}).catch((message) => {
    console.log("sorry but " + message)
});