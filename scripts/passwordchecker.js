const allowedPasswords=["12345", "Sheyrhon@237", "Test12345"];
function checkPassword(pass){
    return allowedPasswords.includes(pass);
} 
function Login(password) {
  return new Promise((resolve, reject)=>{
    if (checkPassword(password)){
        resolve({
            status: true
        })

    }else{
        reject({
            status:false
        })
    }
    
})  
}

function checker(pass){
    Login(pass)
    .then(token =>{
        console.log("Approve:");
        console.log(token);
    })
    .catch(value=>{
        console.log("Reject:");
        console.log(value);
    })
}
checker("boul")
checker("Sheyrhon@237");
checker("test")

   