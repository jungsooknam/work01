function extractUrlParameterMap() {
	var url = window.location.search.substring(1);
	var idx = url.lastIndexOf('?');
	var queryString = (idx==-1)?url:url.substring(idx+1);

	var queryParameter = {};
	if ( queryString == undefined || queryString.length == 0 ) return queryParameter;

	var items = queryString.split('&');

	for (var i= 0, l=items.length; i<l; i++){
		var pair = items[i].split('=');
		queryParameter[pair[0]] = pair[1];
	}

	return queryParameter;
}

function getContentId() {
	var param = extractUrlParameterMap();
	return param['content_id'];
}