const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  var sum = 0;
	arr.forEach(x => {
    sum+=x;
  });
  return sum;
};

const multiply = function(arr) {
  var mul = 1;
	arr.forEach(x => {
    mul*=x;
  });
  return mul;
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num) {
	if(num == 0){
    return 1;
  }
  return num*factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
