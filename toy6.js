//Write a function that returns the factorial of a number
//the number 5 will return 5*4*3*2*1

var func = function (num) {
	var newNum = 1;
	for (var i = num; i >= 1; i--) {
		newNum *= i;
	}
	return newNum;
}

func(5);


