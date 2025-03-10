const myAdvice = new Promise((resolve, reject) => {
    //logic
        let result = Math.random();
        if (result > 0.5) {
            resolve("you get advice");
        } else {
            reject("try again");
        }
    });

myAdvice
.then((message) => {
    console.log(message);
    //logic
})
.catch((error) => {
    console.log(error);
    //logic
});