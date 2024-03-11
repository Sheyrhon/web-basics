function greet(fullname){
    console.log(`Welcome, ${fullname[0]} ${fullname[1]}`)
}
function secondfunc(userName,callback){
    const fullname = userName.split(" ");
    callback(fullname);
}
secondfunc("Sheyrhon Chi",greet);
