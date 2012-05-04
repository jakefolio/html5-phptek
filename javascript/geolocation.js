/*
maximumAge = Cache expiration
timeout = Time allowed to request location
enableHighAccuracy = Requests a more precise location (can cause faster battery consumption)
*/

if (navigator.geolocation) {
	var currentPosition = navigator.geolocation.getCurrentPosition(function(pos) {
		return [pos.coords.latitude, pos.coords.longitude];
	});
	var glocWatch = navigator.geolocation.watchPosition(function(pos) {
		// Successfully changed position
		currentPosition = [pos.coords.latitude, pos.coords.longitude];
	}, function(error) {
		// Error
		console.log(error);
	}, { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });

} else {
	// Geolocation not supported
}