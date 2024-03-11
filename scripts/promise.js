const promise=new Promise((resolve,reject)=>{
    resolve("Start Counting");
})
    .then(counter=>{
        console.log(counter);
        return "One";
    })
    .then(counter=>{
        console.log(counter);
        return "Two";
    })
    .then(counter=>{
        console.log(counter);
        return "Three";
    })
    .then(counter=>{
        console.log(counter);
        return "Four";
    })