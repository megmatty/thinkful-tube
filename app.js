var prefs = {
  query: {
    part: 'snippet',
    key: 'AIzaSyDBb2Iu4-q20ubEJh6C7dicfxrTMOT500s',
    maxResults: 6,
    pageToken: '',
    type: 'video',
    q: ''
  },
  youtubeUrl: 'https://www.googleapis.com/youtube/v3/search',
};

//click handler
$('button[type=submit]').on('click', function(event) {
	event.preventDefault();
	setSearchTerm();
	getAPIdata(prefs, showResults);
});

//Set the search term to user input
function setSearchTerm() { 
	var searchTerm = $('.js-query').val();
	prefs.query.q = searchTerm; //change settings object query.q to user input
}

//API call
function getAPIdata(settings, callback) {
  $.getJSON(settings.youtubeUrl, settings.query, callback);
}

function showResults(data) {
        var videoHTML = '<div class="video-results">';
       	$.each(data.items, function(index, item) {
       		videoHTML += '<div class="video-wrapper"><iframe src="https://www.youtube.com/embed/' + item.id.videoId + '"frameborder="0"></iframe>';
       		videoHTML += '<p>' + item.snippet.title + '</p></div>';
       	});	
    	videoHTML += '</div>';

        $('.js-search-results').html(videoHTML);
}