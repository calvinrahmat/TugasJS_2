function runTimer(time) {
	//convert input to milliseconds according to the task
	newTime = time * 60000 + 1000 + 60000;

	//convert today's date to ms and add newtime
	var countDownMinutes = new Date().getTime() + newTime;

	var x = setInterval(function () {
		// get today's date
		var now = new Date().getTime();

		// calculate the distance between countDownminutes and now
		var distance = countDownMinutes - now;

		// Time calculations for minutes and seconds

		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		//add 0 in front of numbers
		newMinutes = ('0' + minutes).slice(-2);
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		newSeconds = ('0' + seconds).slice(-2);

		// Output the result

		console.log(newMinutes + ':' + newSeconds);
	}, 1000);
}

runTimer(1);
