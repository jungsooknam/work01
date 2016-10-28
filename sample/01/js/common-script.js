



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





// Image view /////////////////////////////////////////////////////////////////

function openViewbox1() {
	$(".case-1").show();
}
function closeViewbox1() {
	$(".case-1").hide();
}

function openViewbox2() {
	$(".case-2").show();
}
function closeViewbox2() {
	$(".case-2").hide();
}

function openViewbox3() {
	$(".case-3").show();
}
function closeViewbox3() {
	$(".case-3").hide();
}





// Image page /////////////////////////////////////////////////////////////////

function initImagePage() {
	_presentPageImage=1;
	showPageNoImage();
}

function showPageNoImage() {

	$(".img-page-area").css("display", "none");
	$("#img-group-" + _presentPageImage).css("display", "block");

	$("#current_img_page_no").empty();
	$("#current_img_page_no").append(_presentPageImage);
	$("#total_img_page_no").empty();
	$("#total_img_page_no").append(_totalPageImage);

	if(_totalPageImage == 1)
		$(".img-page").hide();

	if(_presentPageImage == 1)
		$("#img_page_left").hide();
	else
		$("#img_page_left").show();

	if(_presentPageImage == _totalPageImage)
		$("#img_page_right").hide();
	else
		$("#img_page_right").show();
}

function prevPageImage() {
	_presentPageImage--;
	showPageNoImage();
}


function nextPageImage() {
	_presentPageImage++;
	showPageNoImage();
}





// Summary page /////////////////////////////////////////////////////////////////

function initSummaryPage() {
	_presentPageSummary=1;
	showPageNoSummary();
}

function showPageNoSummary() {

	$(".type-1").css("display", "none");
	$(".type-2").css("display", "none");
	$("#summary-text" + _presentPageSummary).css("display", "block");

	$("#current_page_no").empty();
	$("#current_page_no").append(_presentPageSummary);
	$("#total_page_no").empty();
	$("#total_page_no").append(_totalPageSummary);

	if(_totalPageSummary == 1)
		$(".learning-page").hide();

	if(_presentPageSummary == 1)
		$("#page_left").hide();
	else
		$("#page_left").show();

	if(_presentPageSummary == _totalPageSummary)
		$("#page_right").hide();
	else
		$("#page_right").show();
}

function prevPageSummary() {
	_presentPageSummary--;
	showPageNoSummary();
}


function nextPageSummary() {
	_presentPageSummary++;
	showPageNoSummary();
}



