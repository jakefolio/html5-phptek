/*
maximumAge = Cache expiration
timeout = Time allowed to request location
enableHighAccuracy = Requests a more precise location (can cause faster battery consumption)
*/

if (navigator.geolocation) {
  var geoloc = navigator.geolocation;
  
	var myPosition = geoloc.getCurrentPosition(function(pos) {
		return [pos.coords.latitude, pos.coords.longitude];
	}, errorHandler);

	var geolocWatch = geoloc.watchPosition(function(pos) {
			// Successfully changed position
			myPosition = [pos.coords.latitude, pos.coords.longitude];
		} errorHandler, 
		// Options
		{ 
		  enableHighAccuracy: true, 
		  maximumAge: 30000, 
		  timeout: 27000
		}
	);
	
	var errorHandler = function(error) {
		// Error
		console.log(error);
	};

} else {
	// Geolocation not supported
}