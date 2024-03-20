{/* try catch method*/}

function getMonthName(mo){
    mo --;

    const months =[
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
     ];
     if (months[mo]){
        return months[mo];
     }else{
        throw new Error("InvalidMmonthNo")
     }
}


try {
    monthName = getMonthName(myMonth);
} catch(e){
    monthName = "unknown";
    logMyErrors(e);
}