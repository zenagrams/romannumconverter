function convert(number){ //made the function
    const romannum = {//object containing the name and value pairs
         "1000":"M", "900":"CM", "500":"D",
        "500":"D", "400":"CD", "100":"C",
        "90": "XC", "50":"L", "40":"XL",
        "10":"X", "IX":"9", "V":"5",
        "4":"IV", "1":"I"
        };
}

console.log(convert(900));
console.log(convert(24));