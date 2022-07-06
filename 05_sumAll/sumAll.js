const sumAll = function(num1,num2) {
    if(!(typeof(num1) == 'number' && typeof(num2) =='number' && num1>=0 && num2>0)){
        return "ERROR";
    }
    high_limit = (num1>num2) ? num1 : num2;
    low_limit = (num1<num2)  ? num1 : num2;
    sum = 0;
    for(let i=low_limit;i<=high_limit;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
