/*
querySelector returns only the first element
querySelector/querySelectorAll can be applied to the document or narrowed down to an element
*/
// Get all menu items
var items = document.querySelectorAll('.menu li');
// jQuery version: $('.menu li');

// Sub Items of the first menu item
var subItems = items[0].querySelectorAll('li');
// jQuery version: $('.menu li').find('li')

// Find the latest tweet
var latestTweet = document.querySelector('#latest-tweet');
// jQuery version: $('#latest-tweet').first();

for item in items {
	// Log the content of element
	console.log(item.innerHTML);
	// Output the style object
	console.log(item.style);
}