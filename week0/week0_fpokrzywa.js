console.log("\n********** Task 1: Repeating Numbers **********");
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

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

console.log("\n********** Task 2: Conditional Sums ********** ");
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

console.log(conditionalSum([1, 2, 3, 4, 5], "Even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

console.log("\n********** Task 3: Talking Calendar ********** ");
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

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

console.log("\n********** Task 4: Change Calculator **********");
var calculateChange = function(total, cash) {
	var balance = cash - total;
	var change = {};
	var amount;
    var coinTypes = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
    var denominations = ["twenty", "ten", "five", "twoDollar", "dollar", "quarter", "dime", "nickel", "penny"];
	for(i in coinTypes){
		amount = Math.floor(balance/coinTypes[i]);
		if(amount > 0){
			change[denominations[i]] = amount;
			balance = balance%coinTypes[i];
		}

	}
	
	return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


