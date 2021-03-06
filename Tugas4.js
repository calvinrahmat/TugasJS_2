function runTimer(time) {
	//convert input to milliseconds according to the task
	newTime = time * 60000 + 2000 + 60000;

	//convert today's date to ms and add newtime
	const countDownMinutes = new Date().getTime() + newTime;

	const timer = setInterval(function () {
		// get today's date
		let now = new Date().getTime();

		// calculate the distance between countDownminutes and now
		let distance = countDownMinutes - now;

		// Time calculations for minutes and seconds

		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		//add 0 in front of numbers
		newMinutes = ('0' + minutes).slice(-2);
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);
		newSeconds = ('0' + seconds).slice(-2);
		if (minutes > 0 && seconds == 0) {
			conMinutes = ('0' + (minutes - 1)).slice(-2);

			console.log(conMinutes + ':' + 60);
		} else if (minutes == 0 && seconds == 0) {
			console.log('TIMER STOP !');
			clearInterval(timer);
		} else {
			// Output the result

			console.log(newMinutes + ':' + newSeconds);
		}
	}, 1000);
}

runTimer(1);
