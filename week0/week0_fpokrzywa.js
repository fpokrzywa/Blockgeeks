/*
Week 0 Assignments for Blockgeeks
*/

//Task 1: Repeating Numbers
var repeatNumbers = function(data) {
  var result = '';
  
  for(d in data){
	result += data[d][0];

	for(i = 0; i < data[d][1]; i++){
		result += data[d][0];
	}
	if(d < data.length - 1){
		result += ", ";
	}
  }
  
  return result;
  
};

//console.log(repeatNumbers([[1, 10]]));
//console.log(repeatNumbers([[1, 2], [2, 3]]));
//console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
Expected Output
1111111111
11, 222
10101010, 343434343434, 9292
*/

//Task 2: Conditional Sums
var conditionalSum = function(values, condition) {
	var data = 0;

	for(i in values){
		
		if((values[i] % 2) === 0 && condition.toLowerCase() === 'even'){
			data = values[i] + data;
		}
		if((values[i] % 2) !== 0 && condition.toLowerCase() === 'odd'){
			data = values[i] + data;
		}
	}
	return data;
  
};

//console.log(conditionalSum([1, 2, 3, 4, 5], "Even"));
//console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
//console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
//console.log(conditionalSum([], "odd"));

/*
Expected Output
6
9
144
0
*/

//Task 3: Talking Calendar
var talkingCalendar = function(date) {
	var cal = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var d = '';
	var date = date.split("/");
	if(date.length === 3){
		for(i in cal){
			mo = cal[date[1] -1];
			yr = date[0];
			dy = date[2];
			d = mo + " " + dy + ", " + yr; 
		}
		
		return d;
	}
	return "No proper date format";
};

//console.log(talkingCalendar("2017/12/02"));
//console.log(talkingCalendar("2007/11/11"));
//console.log(talkingCalendar("1987/08/24"));
/*
Expected Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

//Task 4: Change Calculator
var calculateChange = function(total, cash) {
	var balance = cash - total;
	var b = (balance);
	
	return b.toFixed(2);
};

console.log(calculateChange(1787, 2000));
//console.log(calculateChange(2623, 4000));
//console.log(calculateChange(501, 1000));
/*
Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

*/

