$(function() {

	var $stream = $('.stream');
	var $streamArticles = $stream.find('.stream-articles');
	var $streamNext = $stream.find('.next');

	$streamNext.click(function() {
		$streamArticles.stStream('nextPage');
	});

	$streamArticles.stStream().on({
		next: function() {
			$streamNext.attr('disabled', true);
		},
		load: function() {
			$streamNext.removeAttr('disabled');
			$('article.twitter').each(parseTweets);
			$stream.imagesLoaded(function() {
				$stream.masonry('reload');
			});
		}
	});

	$stream.imagesLoaded(function() {
		$stream.masonry({
			'itemSelector': '.stream-article',
			'isResizeable': true,
			'cornerStampSelector': '.radio'
		});
	});

	/*
	$('.stream-articles').stStream({ pagination: 'scrolling' }).on('load', function(){
		// TODO: http://masonry.desandro.com/docs/methods.html#appended
		$('article.twitter').each(parseTweets);
	});
	*/

});