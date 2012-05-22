/*
querySelector returns only the first element
querySelector/querySelectorAll can be applied to the document or narrowed down to an element
SUPPORT: All modern browsers and IE8+
POLYFILL: Just use jQuery if IE6 or IE7 is required
*/
// Get all menu items
var items = document.querySelectorAll('.menu li');
// jQuery version: $('.menu li');

// Sub Items of the first menu item
var subItems = items[0].querySelectorAll('li');
//jQuery version: $('.menu li').find('li');

// Find the latest tweet
var latestTweet = document.querySelector('#latest-tweet');
// jQuery version: $('#latest-tweet').first();