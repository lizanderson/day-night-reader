//Get the hour of day
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);




//if nighttime,
if ( current_hour >= 11 ) {

	//add remove 'day' class
	$('body').removeClass('day');

	//add 'night' class
	$('body').addClass('night');
};


