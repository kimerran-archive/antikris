var y = $("body").html();
var i = y.search(/kris aquino/i);

if (i>0){
	alert('Kris Aquino detected! :p');
	window.location = "http://i.imgur.com/iAVrufr.jpg";
}
