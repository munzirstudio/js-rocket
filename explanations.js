	console.log('hello there friends!');

	//Variable
	var favColor = 'blue';
	var myfavcolor = ['blue', 'red', 'green'];
	var numOfFavColors = 3;
	var hasGotFavColors = true;
	var richObject = {
		firstName: 'Rich',
		lastNmae: 'Armstrong',
		myfavcolor: ['blue', 'red', 'green'],
		yearsAlive: 103,
		isMale: true
	}

	//function
	var fullname = function (firstname, secondname) {
		return firstname + ' ' +secondname;
	}
	var area = function (width, height) {
		return width * height;
	}
	var whatIsmyFavColor = function () {
		return false;
		return true;
		return 'blue';
	}

	var doSomething = function () {
		console.log("do something!!!");
	}

	//if statement
	var name1 = 'Rich';
	var name2 = 'Bob';

	if (name1 == 'Rich' && name2 == 'Bob') {
		alert('true!!!');
	} else {
		alert('false!!!');
	}