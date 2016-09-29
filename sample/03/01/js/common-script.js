



// Audio Script ////////////////////////////////////////////////////////////////

function playAudio(audioId){
	var vAudioObj = document.getElementById(audioId);
	if(vAudioObj.currentTime > 0){
		vAudioObj.pause();
		vAudioObj.currentTime=0;
	}
	vAudioObj.play();
}





// Learn page /////////////////////////////////////////////////////////////////

function initLearnPage() {
	_presentPageLearn=1;
	showPageNoLearn();
}

function showPageNoLearn() {

	$(".page-area-1").css("display", "none");
	$("#learn-group-" + _presentPageLearn).css("display", "block");

	$("#current_page_no").empty();
	$("#current_page_no").append(_presentPageLearn);
	$("#total_page_no").empty();
	$("#total_page_no").append(_totalPageLearn);

	if(_totalPageLearn == 1)
		$(".learning-page").hide();

	if(_presentPageLearn == 1)
		$("#page_left").hide();
	else
		$("#page_left").show();

	if(_presentPageLearn == _totalPageLearn)
		$("#page_right").hide();
	else
		$("#page_right").show();
}

function prevPageLearn() {
	_presentPageLearn--;
	showPageNoLearn();
}


function nextPageLearn() {
	_presentPageLearn++;
	showPageNoLearn();
}



