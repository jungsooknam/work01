$("#course").text(subject);
$("#chap").text(subtitle);
$("#chap1").text(subtitle);

document.write("<div id='controlset'>");

document.write("<div id='lmsDiv'>");
document.write("<a href='javascript:runLearingMap();' title='과정정보' id='lmsLearningMap' tabindex='4' class='support-1'></a>");
document.write("<a href='javascript:runDownload();' title='학습자료' id='lmsDownload' tabindex='5' class='support-2'></a>");
document.write("<a href='javascript:runSearchBox()' title='검색' id='lmsHelp' tabindex='6' class='support-3'></a>");
document.write("</div>");

document.write("<div id='map'>");
document.write("<ul>");
document.write("<li class='screen'>");
document.write("<dl>");
document.write("<dt>과정정보 - 러닝맵</dt>");
document.write("<dd class='btn'><a href='#' onClick='closeLearningMap();'>닫기</a></dd>");
document.write("<dd class='page-area'>");
document.write("<iframe name='learning-map' src='map_01.html' scrolling='no' frameborder='0'></iframe>");
document.write("</dd>");
document.write("</dl>");
document.write("</li>");
document.write("<li class='map-bg'></li>");
document.write("</ul>");
document.write("</div>");

document.write("<div id='search-box'>");
document.write("<label for='search-text' class='iLabel'>검색어를 입력하세요.</label>");
document.write("<input id='search-text' class='iText' type='text' value='' onfocus='onFocus();' tabindex='6'/>");
document.write("<a href='#' id='search-btn' onClick='SearchSubmit();'>검색</a>");
document.write("<a href='#' id='search-close' onClick='closeSearchBox();'>닫기</a>");
document.write("</div>");


document.write("<div id='slideBg'>");
document.write("<div class='ui-slider-range' id='slideBar'></div>");
document.write("<div class='ui-slider-handle' id='slideHandleBg'>");
document.write("<div onClick='hidePopupChapter(); quizclose(); trainingclose();' id='handleBar' style='width:0px; height:8px; background-color:#FFF; margin-top:2px; margin-left:0; border-radius:3px;'>");
document.write("<img src='img/controlbar/handler.png' draggable='true' alt='' id='handle' style='margin-left:-10px; margin-top:-8px' class='button' tabindex='7' />");
document.write("</div>");
document.write("</div>");
document.write("</div>");

document.write("<div id='timer'><span id='playedTime'>00:00</span><span id='totalTime'> / 00:00</span></div>");



document.write("<div id='play'>");
document.write("<a href='#' title='재생' id='play_btn' tabindex='8'>재생</a>");
document.write("</div>");
document.write("<div id='pause'>");
document.write("<a href='#' title='일시정지' id='pause_btn' tabindex='9'>일시정지</a>");
document.write("</div>");
document.write("<div id='replay'>");
document.write("<a href='#' title='다시보기' id='replay_btn' tabindex='10'>다시보기</a>");
document.write("</div>");
document.write("<div id='script'>");
document.write("<a href='#' title='자막열기' id='nar_btn' tabindex='11'>자막열기</a>");
document.write("</div>");

document.write("<div id='vol'>");
document.write("<a href='#' draggable='true' alt='볼륨' title='볼륨' id='vol_btn' tabindex='12'>볼륨</a>");
document.write("</div>");
document.write("</div>");


document.write("<div id='volSlideHandleBg'>");
document.write("<div id='volHandleBar'>");
document.write("<img src='img/controlbar/volHandle.png' id='volHandle' draggable='true' class='button' tabindex='13' />");
document.write("</div>");
document.write("</div>");

document.write("<div id='paging'>");

document.write("<div id='prev'>");
document.write("<a href='#' title='이전 페이지' onClick='goPrevPage()' id='lmsGoPrevPage' tabindex='14'>이전 페이지</a>");
document.write("</div>");
document.write("<div id='page_num'><span id='current_page'></span><span id='total_page'></span></div>");
document.write("<div id='next'>");
document.write("<a href='#' title='다음 페이지' onClick='goNextPage()' id='lmsGoNextPage' tabindex='15'>다음 페이지</a>");
document.write("</div>");

document.write("</div>");

document.write("<div id='popupChapter'>");
document.write("</div>");


document.write("<audio id='next-audio'>");
document.write("<source src='"+mp3Link+"next.mp3' type='audio/mpeg' />");
document.write("</audio>");



function playAudio(audioId){
	var vAudioObj = document.getElementById(audioId);
	if(vAudioObj.currentTime > 0){
		vAudioObj.pause();
		vAudioObj.currentTime=0;
	}
	vAudioObj.play();
}

$("#play").hide();

function initKeyEvent()
{
	 console.log("initKeyEvent");

	$("#lmsLearningMap").keypress(function(event) {
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#lmsDownload").keypress(function(event) {
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#lmsHelp").keypress(function(event) {
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#play_btn").keypress(function(event) {
		console.log("play_btn");
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#pause_btn").keypress(function(event) {
		console.log("pause_btn");
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#replay_btn").keypress(function(event) {
		console.log("replay_btn");
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#nar_btn").keypress(function(event) {
		console.log("nar_btn");
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#vol_btn").keypress(function(event) {
		console.log("vol_btn");
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#lmsGoPrevPage").keypress(function(event) {
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});

	$("#lmsGoNextPage").keypress(function(event) {
		if(event.which == 13 || event.which == 32){
			$(this).click();
		}
	});
}

var currentPageContent = $("#current_page");
if(currentPageContent){
	currentPageContent.empty();
	if(currentPage > 9)
		currentPageContent.append(currentPage);
	else
		currentPageContent.append("0"+currentPage);
}

var totalPageContent = $("#total_page");
if(totalPageContent){
	totalPageContent.empty();
	if(totalPage > 9)
		totalPageContent.append("/" + totalPage);
	else
		totalPageContent.append("/ 0"+totalPage);
}


if(currentPage == totalPage)
	$("#popupChapter").css("background", "url('img/inc/chapter_end.png') no-repeat");
else
	$("#popupChapter").css("background", "url('img/inc/chapter_next.png') no-repeat");

function showPopupChapter()
{
	if(typeof(canShowPopupChapter) == 'function' && canShowPopupChapter() == false)
		return;

	playAudio('next-audio');
	$("#popupChapter").show();
	$(".btn-skip").hide();
}

function hidePopupChapter()
{
	$("#popupChapter").hide();
	$(".btn-skip").show();
	$("#play").hide();
	$("#pause").show();
}



function skip(value) {
	var video = document.getElementById("myVideo");
	video.currentTime = value;
}


function goPrevPage() {
	if(currentPage == 1)
		alert('첫 페이지 입니다.');

	presentPageIndex = currentPage - 1;
	document.location = pages[presentPageIndex - 1].url;
}

function goNextPage() {
	if(currentPage == totalPage)
		alert('마지막 페이지 입니다.');
	
	presentPageIndex = currentPage - 1;
	parent.document.location = pages[presentPageIndex + 1].url;
}


function runLearingMap() {
	alert('샘플 콘텐츠에서는 지원하지 않습니다.');
	//if($("#map").css("display") == "none")
		//$("#map").show();
	//else
		//$("#map").hide();
}

function closeLearningMap() {
	$("#map").hide();
}


function runDownload() {
	alert('샘플 콘텐츠에서는 지원하지 않습니다.');
	//window.open("../down/01.zip");
}


// Search on Naver

jQuery(function($){

	// Input Clear
	var iText = $('.iLabel').next('.iText');
	$('.iLabel').css('position','absolute');
	iText
		.focus(function(){
			$(this).prev('.iLabel').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				$(this).prev('.iLabel').css('visibility','visible');
			} else {
				$(this).prev('.iLabel').css('visibility','hidden');
			}
		})
		.change(function(){
			if($(this).val() == ''){
				$(this).prev('.iLabel').css('visibility','visible');
			} else {
				$(this).prev('.iLabel').css('visibility','hidden');
			}
		})
		.blur();
});




function SearchSubmit() {
	console.log("onSubmitSearch");
	var text = $("#search-text").val();

	if(text == ''){
		alert('검색어를 입력하세요!');
		return false;
	}

	console.log(text);
	window.open("http://search.naver.com/search.naver?where=nexearch&query=" + text, "네이버 검색", "");
}

function runSearchBox() {
	alert('샘플 콘텐츠에서는 지원하지 않습니다.');
	//if($("#search-box").css("display") == "none")
		//$("#search-box").show();
	//else
		//$("#search-box").hide();
		//if(document.getElementById("myAudio")){
			//_video=document.getElementById("myAudio");
		//}
		//if(_video){
			//_video.play();
		//}
}

function closeSearchBox() {
	$("#search-box").hide();
	if(document.getElementById("myAudio")){
		_video=document.getElementById("myAudio");
	}
	if(_video){
		_video.play();
	}
}