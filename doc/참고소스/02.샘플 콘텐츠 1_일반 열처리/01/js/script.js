// JavaScript Document
var _this=this;

/////video var///////////////////////////////
var _video=null;
var _playBtn=null;
var _pauseBtn=null;
var _replayBtn=null;
var _volBtn=null;

var _timeTxt=null;
var _timeTxtPlayed=null;
var _timeTxtTotal=null;
var _slideBar=null;
var _slideBg=null;
var _slideHandle=null;//slideHandleBg
var _slideHandleBar = null;
var _slideHandle=null;
var _mvPercent=0;
var _handleGap=11;
var _rect=null;
var _dragX=0;
var _dragWidth=0;
var _dragGap=0; //10;

var _dragPerc=0;
var eventChk=1;
var isDraging=false;
/////video var///////////////////////////////

var _volHandle=null;
var _volHandleBar=null;
var _volSlideHandleBg=null;

var _muteFlag=false;
var _volRect=null;
var _volDragX=0;
var _volDragY=0;
var _volDragHeight=0;
var _volDragPerc=0;
var _volFlag=true;
var _volDragGap=10;

var _narBtn=null;
var _narFlag=false;
var _narDiv=null;

var _audio=null;


var _presentPageSummary=0;
var _totalPageSummary=0;


function sInit(){
	_this = this;
	audioFlag = false;
	_video = document.getElementById("myVideo");
	if(document.getElementById("myAudio")){
		_video = document.getElementById("myAudio");
		audioFlag = true;
	}
	//alert();
	if(_video){
		loadVolume();
		try{
			_initVideo();
		}catch(e){}
	}
	_initVolume();
	if(isMobilePlatform() == true)
		if(audioFlag){
			_video.paly();
		}else{
			_video.pause();
		}
	else
		_video.play();
}

function _initVolume(){
	// handle -> volHandle
	// handleBar -> volHandleBar
	// slideHandleBg -> volSlideHandleBg
	_volHandle = document.getElementById("volHandle");
	_volHandleBar = document.getElementById("volHandleBar");
	_volSlideHandleBg = document.getElementById("volSlideHandleBg");

	_narBtn = document.getElementById("nar_btn");
	_volBtn = document.getElementById("vol_btn");
	
	if(_volHandle){
		_volHandle.addEventListener("mousedown",_volDragStart,false);	
	}

	if(_volBtn){
		_volBtn.addEventListener("click",_volHandler,false);	
	}

	if(_volSlideHandleBg){
		_volSlideHandleBg.addEventListener("click",_volSlideclick,false);	
	}


	
	if(_narBtn){
		_narBtn.addEventListener("click",_narHandler,false);	
	}
}

function _volHandler(e){
	_volFlag=!_volFlag;
	if(_volFlag){
		if(_video){
			_video.muted = false;
		}
		//_volBtn.style.opacity=1;
		$("#vol_btn").css("background-position", "top");
	}
	else{
		if(_video){
			_video.muted = true;
		}
		//_volBtn.style.opacity=0.3;
		$("#vol_btn").css("background-position", "bottom");
	}
}

function _narHandler(e){
	if(typeof(isNarrationsEmpty) == 'undefined' || isNarrationsEmpty == true)
		return;
		
	_narDiv = document.getElementById("narration");
	if(_narDiv){
		if(_narFlag){
			_narFlag=false;	
			_narBtn.style.opacity=1;
		}else{
			_narFlag=true;	
			_narBtn.style.opacity=0.7;
		}
		
		if(_narFlag){
			_narDiv.style.display="block";
			sessionStorage.setItem('captionLayer', 'yes');
		}else{
			_narDiv.style.display="none";
			sessionStorage.setItem('captionLayer', 'no');
		}
	}
	
}

function _showVolHandle(e){
	var mc = e.target;
	if(_volHandle){
		_volHandle.style.display="block";
	}
}

function _volDragStart(e){
	isDraging = true;

	if(_volSlideHandleBg){
		_volRect = _volSlideHandleBg.getBoundingClientRect();
		_volDragY = _volRect.top;
		_volDragX = _volRect.left;
		_volDragHeight = _volRect.top+_volRect.height;
		_volDragWidth = _volRect.left+_volRect.width;
	}
	
	_volHandle.addEventListener("mousemove",_volDragMove,false);
	_volHandle.addEventListener("mouseup",_volDragOver,false);
	e.preventDefault();
}

function _volDragMove(e){
	var xx = e.clientX-_volDragX;
	if(e.clientX<_volDragX){
		xx = 0;	
	}
	if(e.clientX>(_volDragWidth)){
		xx = _volRect.width;	
	}
	_volDragPerc = xx / (_volRect.width);
	_volHandle.style.marginLeft=xx-_volHandle.style.width-11+"px";
	_volHandleBar.style.width = xx + "px";
	
	
	saveVolume(_volDragPerc);
	if(_video){
		// _video.muted = false;
		_video.volume = _volDragPerc;
	}
}

function _volDragOver(e){
	_volHandle.removeEventListener("mousemove",_volDragMove,false);	
	_volHandle.removeEventListener("mouseup",_volDragOver,false);	

	var xx = e.clientX-_volDragX;
	if(e.clientX<_volDragX){
		xx = 0;	
	}
	if(e.clientX>(_volDragWidth)){
		xx = _volRect.width;	
	}
	_volDragPerc = xx / (_volRect.width);
	_volHandle.style.marginLeft=xx-_volHandle.style.width-11+"px";
	_volHandleBar.style.width = xx + "px";
	
	
	saveVolume(_volDragPerc);
	if(_video){
		// _video.muted = false;
		_video.volume = _volDragPerc;
	}

	isDraging=false;
	e.preventDefault();
}

function _volSlideclick(e){
	if(_volSlideHandleBg)
		_volRect = _volSlideHandleBg.getBoundingClientRect();
	
	var xx = e.clientX-_volRect.left;
	if(e.clientX<_volRect.left){
		xx = 0;	
	}
	if(e.clientX>_volRect.left + _volRect.width){
		xx = _volRect.width;	
	}

//	console.log("e.clientX : " + e.clientX);
//	console.log("_volRect.width : " + _volRect.width);
//	console.log("xx : " + xx);

	_volDragPerc = xx / _volRect.width;
	_volHandle.style.marginLeft=xx-_volHandle.style.width-11+"px";
	_volHandleBar.style.width = xx + "px";

	saveVolume(_volDragPerc);
	if(_video){
		// _video.muted = false;
		_video.volume = _volDragPerc;
	}
}




///////////video control/////////////////////////////////////////////////////////////////
function _initVideo(){
	_playBtn = document.getElementById("play_btn");
	_pauseBtn = document.getElementById("pause_btn");
	_timeTxt = document.getElementById("timer");
	_timeTxtPlayed = document.getElementById("playedTime");
	_timeTxtTotal = document.getElementById("totalTime");
	_slideBar = document.getElementById("slideBar");
	_slideBg = document.getElementById("slideBg");
	_slideHandle = document.getElementById("handle");
	_slideHandleBar =  document.getElementById("handleBar");
	_replayBtn = document.getElementById("replay_btn");
	_slideHandleBg = document.getElementById("slideHandleBg");
	
	if(_slideBg){
		_rect = _slideBg.getBoundingClientRect();
		_dragX = _rect.left;
		_dragWidth = _rect.left+_rect.width-_handleGap;
	}
	
	
	if(typeof(_initVideoPage3) == "function") {
		_initVideoPage3();
		return;
	}


	_video.addEventListener('loadedmetadata',_loadMetadata,false);	
	_video.addEventListener('pause',_pause,false);
	_video.addEventListener('playing',_playing,false);
	_video.addEventListener('timeupdate',_timeUpdate,false);
	_video.addEventListener('ended',_ended,false);
	
	_video.controls=false;
	
	_slideHandle.addEventListener("mouseup",_dragOver,false);

	//마우스를 때거나 커서가 요소영역을 벗어났을때 이벤트를 없앤다.
	$('#handle').bind('mouseleave', function(){

		var cTime = 0;
		var tTime = 0;
		isDraging = false;

		_slideHandle.removeEventListener("mousemove",_dragMove,false);   

		if(typeof(document.getElementById("myVideo")) != "undefined" && document.getElementById("myVideo") != null){
			cTime = document.getElementById("myVideo").currentTime; 
			tTime = document.getElementById("myVideo").duration;

			if(parseInt(cTime , 10) != parseInt(tTime, 10)) {
				document.getElementById("myVideo").play();
			}
		}

		if(typeof(document.getElementById("myAudio")) != "undefined" && document.getElementById("myAudio") != null){
			cTime = document.getElementById("myAudio").currentTime;
			tTime = document.getElementById("myAudio").duration;

			if(parseInt(cTime , 10) != parseInt(tTime, 10)) {
			}
		}
	});
	
	_initBtn();
}

function _initBtn(){
	if(_playBtn){
		_playBtn.addEventListener("click",_playMv);
	}
	if(_pauseBtn){
		_pauseBtn.addEventListener("click",_pauseMv);
	}
	if(_slideHandle){
		_slideHandle.addEventListener("mousedown",_dragStart,false);
	}
	
	if(_replayBtn){
		_replayBtn.addEventListener("click",replayMv);
	}

	if(_slideHandleBg){
		_slideHandleBg.addEventListener("click",_slideclick,false);
	}
}

function _dragOver(e){
	_slideHandle.removeEventListener("mousemove",_dragMove,false);

	_gotoTimeMv();
	isDraging=false;

	hidePopupChapter();

	e.preventDefault();
}

function _dragStart(e){
	isDraging=true;
	_slideHandle.addEventListener("mousemove",_dragMove,false);	
	e.preventDefault();
}

function _dragMove(e) {
	var xx = e.clientX-_dragX/*-_dragGap*/;
	if(e.clientX<_dragX/*-_dragGap*/){
		xx = 0;	
	}
	if(e.clientX>(_dragWidth + _handleGap)){
		xx = _rect.width/*-_dragGap*/;	
	}
	_dragPerc = xx/(_rect.width/*-_dragGap*/);
	_slideHandleBar.style.width = xx + "px";
	_slideHandle.style.marginLeft = xx - _handleGap + "px";


	_gotoTimeMv();
	if(isDraging && _video){
		_video.pause();
	}

	hidePopupChapter();
	
	e.preventDefault();
}

function _slideclick(e){
	var xx = e.clientX-_dragX/*-_dragGap*/;
	if(e.clientX<_dragX){
		xx = 0;	
	}
	if(e.clientX>(_dragWidth + _handleGap/*-_dragGap*/)){
		xx = _rect.width/*-_dragGap*/;	
	}
	_dragPerc = xx/(_rect.width/*-_dragGap*/);
//	if(_dragPerc>0.95){
//		_dragPerc	=0.95;
//	}

	_video.currentTime = _video.duration*_dragPerc;
}

function audioPlay(src) {
	_video.pause();
	_video.src = src;
	_video.play();
}

function audioJump(ct) {
	_video.currentTime = ct;
	_video.play();
}

function audioEnd() {
	_video.currentTime = _video.duration;
	_video.pause();
}

function _timeUpdate(e){
	var cTime = _video.currentTime;
	var tTime = _video.duration;
	_mvPercent = cTime / tTime;
	if(!cTime){
		cTime=0;	
	}
	if(!tTime){
		tTime=0;	
	}
	
	if(_timeTxt){
//		_timeTxt.innerHTML = rectime(cTime)+" / "+rectime(tTime);
		_timeTxtPlayed.innerHTML = rectime(cTime);
		_timeTxtTotal.innerHTML = " / " + rectime(tTime);
	}
	
	if(!isDraging){
		if(_slideBar && _slideBg){
			//_slideBar.style.width = _slideBg.clientWidth*_mvPercent+"px";
			var xW = _slideBg.clientWidth*_mvPercent;
			var isHandleX = xW;
			if(isHandleX<0){
				isHandleX=0;	
			}
			if(_slideHandle){
				//_slideHandle.style.marginLeft = 	isHandleX+"px";
				_slideHandleBar.style.width = isHandleX + "px";
				_slideHandle.style.marginLeft = isHandleX - _handleGap + "px";
			}
		}
	}
	
	 if(cTime == tTime) {
		if(typeof(dontShowPopupChapterByVideoEnd) == 'undefined' || dontShowPopupChapterByVideoEnd == false) {
			if(cTime == 0 || tTime == 0)	// wrong event occurs when audio restarts
				return;
			
			showPopupChapter();
			$("#play").show();
			$("#pause").hide();
		}

		if(typeof(showButtonByVideoEnd) != 'undefined')
			showButtonByVideoEnd();
	}
	
	if(typeof(isStopAudioTime) == "function") {
		if(isStopAudioTime(cTime) == true)
			_video.pause();
	}
	
	// 
	if(typeof(buttonControlByVideo) == "function") {
		buttonControlByVideo();
	}
//	console.log("_slideHandleBar.style.width = "+_slideHandleBar.style.width);
//	console.log("cTime = " + cTime + ", tTime : " + tTime);
//	console.log("_mvPercent = " + _mvPercent);
}

function _ended(){
//	if(typeof(dontShowPopupChapterByVideoEnd) == 'undefined' || dontShowPopupChapterByVideoEnd == false)
//		showPopupChapter();
}

function _gotoTimeMv(){
	if(isDraging && _video){
		_video.currentTime = _video.duration*_dragPerc;
		if(_video.paused){
			//_video.play();
		}
	}
}


function _loadMetadata(e){
	_ended();
	_timeUpdate();
	_playing();
}

function _pause(e){
	if(_playBtn){
		//_playBtn.style.display="block";
		_playBtn.style.opacity=1;
	}
	
	if(_pauseBtn){
		//_pauseBtn.style.display="none";
		_pauseBtn.style.opacity=1;
	}
}

function _playing(e){
	if(_playBtn){
		//_playBtn.style.display="none";
		_playBtn.style.opacity=1;
	}
	
	if(_pauseBtn){
		//_pauseBtn.style.display="block";
		_pauseBtn.style.opacity=1;
	}
}

function _playMv(e){
	if(_video){
		$("#play").hide();
		$("#pause").show();
		_video.play();
	}
	
	if(typeof(clickStart) == "function") {
		clickStart();
	}
}
function _pauseMv(e){
	if(_video){
		$("#play").show();
		$("#pause").hide();
		_video.pause();
	}
}

function replayMv(e){
	document.location.reload();

//	$("#popupChapter").hide();
//	if(_video){
//		_video.currentTime = 0;
//		if(_video.paused){
//			_video.play();
//		}
//		trainingclose();
//		quizclose();
//	}
	
//	if(typeof(reloadPage) == "function") {
//		reloadPage();
//	}
	
//	hidePopupChapter();
}

function rectime(secs){
	var hr = Math.floor(secs / 3600);
	var min = Math.floor((secs - (hr*3600))/60);
	var sec = Math.floor(secs - (hr*3600) - (min*60));
	
	if(hr < 10) {hr = '0'+hr;}	
	if(min < 10) {min = '0'+min;}
	if(sec < 10) {sec = '0'+sec;}
	if(hr){hr='00';}
	return min+':'+sec;
}
///////////video control/////////////////////////////////////////////////////////////////


if(!console){
	var console=this;
	function log(arg){}
}

if(window.addEventListener){
	eventChk=1;
	window.addEventListener("load",sInit,false);
	
}else{
}



///////////volume control/////////////////////////////////////////////////////////////////

function loadVolume() {
	savedVol = getCookie("media_vol");
	//console.log("load cookie savedVol : " + savedVol);
	if(savedVol == "") {
		savedVol = 1;
//		saveVolume(savedVol);
	}
	
	//console.log("_video : " + _video);
	if(_video){
		_video.volume = savedVol;
		//console.log("volume : " + _video.volume);

		_volHandle = document.getElementById("volHandle");
		_volHandle.style.marginLeft=(68 * savedVol) - _volHandle.style.width-17+"px";
		_volHandleBar = document.getElementById("volHandleBar");
		_volHandleBar.style.width = (68 * savedVol) + "px";
	}
}

function saveVolume(vol) {
	setCookie("media_vol", vol, 10);
	//console.log("save cookie Vol : " + vol);
}

function setCookie(cName, cValue, cDay){
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    //console.log("cookie : " + cookies);
    document.cookie = cookies;
}

function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    //console.log("cookieData : " + cookieData);
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)
        	end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}
///////////volume control/////////////////////////////////////////////////////////////////



///////////Summary page/////////////////////////////////////////////////////////////////
function initSummaryPage() {
	_presentPageSummary=1;

	showPageNoSummary();
}

function showPageNoSummary() {
	// pageImages
//	$("#background_image").css("background", "url('../11/img/" + images[(_presentPageSummary - 1)] + ".png') no-repeat");
//	$("#background_image").css("background", "url('../11/" + pageImages[(_presentPageSummary - 1)] + "') no-repeat");

	$(".summary-text").css("display", "none");
	$("#summary-text" + _presentPageSummary).css("display", "block");

	$("#current_page_no").empty();
	$("#current_page_no").append(_presentPageSummary);

	$("#total_page_no").empty();
	$("#total_page_no").append(_totalPageSummary);

	if(_totalPageSummary == 1)
		$(".summary-page").hide();

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

var s = 0;
function nextPageSummary() {
	if(_totalPageSummary == _presentPageSummary + 1) {
		s = s + 1;
		if ( s == 1 ){
			playAudio('next-audio');
		}
		$("#pop-next").show();
	}
	_presentPageSummary++;
	showPageNoSummary();
}
///////////Summary page/////////////////////////////////////////////////////////////////




/////////// Mobile     /////////////////////////////////////////////////////////////////
function isMobilePlatform() {
	if (navigator.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null
		|| navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null)	{
		return true;
	}
	else {
		NoteBookMain.startInMotion();
		return false;
	}
}

function mobileAlertView() {
	var readyLayer = $('<div />', { 
		id:"readyLayer"  
		, class:"readyLayer button"
	});
	
	var readyImage = $('<img />', {src:"img/inc/ready.png"});
	readyLayer.append(readyImage);
	
	var br = $('<br />', {});
	readyLayer.append(br);
	
	var readyText = $('<span />', { html:"재생 버튼을 눌러 학습을 시작해 주세요."});
	readyLayer.append(readyText);
	
	console.log(readyLayer);

	// setting below
	$("#wrapper").append(readyLayer);
	// setting above

	$("#readyLayer").click(function() {
		_video = document.getElementById("myVideo");
		if(document.getElementById("myAudio")){
			_video=document.getElementById("myAudio");
		}
		if(_video){
			_video.play();
		}
		console.log(_video.src);

		$("#readyLayer").hide();
		NoteBookMain.startInMotion();
	});
};


function mobilesubView() {
	var subLayer = $('<div />', { 
		id:"subLayer"  
		, class:"subLayer button"
	});
	
	var subImage = $('<img />', {src:"img/inc/ready.png"});
	subLayer.append(subImage);
	
	var br = $('<br />', {});
	subLayer.append(br);
	
	var subText = $('<span />', { html:"재생 버튼을 눌러 학습을 계속 진행해 주세요."});
	subLayer.append(subText);
	
	console.log(readyLayer);

	// setting below
	$("#wrapper").append(subLayer);
	// setting above

	$("#subLayer").click(function() {
		var vAudio = document.getElementById("audio0");
		if(vAudio){
			vAudio.play();
		}
		$("#subLayer").hide();
	});
};
/////////// Mobile     /////////////////////////////////////////////////////////////////