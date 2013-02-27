function parseTweets() {

	var $tweet = $(this).find('p');
	var tweet = $tweet.text().replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/g, function (url) {

		return url.link(url);

	}).replace(/[@]+[A-Za-z0-9-_]+/g, function (u) {

		var username = u.replace("@", "")
		return u.link("http://twitter.com/" + username);

	}).replace(/[#]+[A-Za-z0-9-_]+/g, function (t) {

		var tag = t.replace("#", "%23")
		return t.link("http://search.twitter.com/search?q=" + tag);

	});

	$tweet.html(tweet);

}

$(function() {

	$('article.twitter').each(parseTweets);

});