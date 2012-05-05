/*
HTTP vs. HTTPS localstorage - store seperately (including incognito for chrome)
No default expiration.
Only support strings as values
Sessionstorage extends Storage just like localstorage, but presists like a session.
Sessionstorage only survives crash recovery in FF at the moment.
SUPPORT: All modern browsers and IE8+
POLYFILL: Use lawnchair for storage.
*/

// Check if localStorage is available
if (typeof window.localStorage == 'object' && window.localStorage != null) {
	var store = window.localStorage;
	var myObject = {}
	var status = document.getElementById('status');
	var newObj;

	try {
		store.setItem('myKey', 'value');
		store['myObject'] = JSON.stringify(myObject);
	} catch(e) {
		if (e == QUOTA_EXCEEDED_ERR) {
			console.log('ERROR: Local Storage is out of space!');
		}
	}

	// Change status text
	// status.innerText = store.getItem('myKey');
	// status.innerText = store['myKey'];
	status.innerText = store.myKey;

	// Retrieve my Object
	newobj = JSON.parse(store.myObject);

	// Delete all of localstorage
	store.clear();
}