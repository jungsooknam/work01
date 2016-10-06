



$("#course").text(subject);
$("#chap-1").text(subtitle);



document.write("<div id='lms-area'>");
document.write("<a href='javascript:runDownload();' title='학습자료' id='lmsDownload' tabindex='5' class='support-2'>학습자료</a>");
document.write("<a href='javascript:runLearingMap();' title='과정정보' id='lmsLearningMap' tabindex='4' class='support-1'>과정정보</a>");
document.write("<a href='javascript:runSearchBox();' title='검색' id='lmsSearch' tabindex='6' class='support-3'>검색</a>");
document.write("</div>");



document.write("<div id='search-area'>");
document.write("<label for='search-text' class='iLabel'>검색어를 입력하세요.</label>");
document.write("<input id='search-text' class='iText' type='text' value='' onfocus='onFocus();' tabindex='6' />");
document.write("<a href='#!' id='search-btn' onClick='SearchSubmit();'>검색</a>");
document.write("<a href='#!' id='search-close' onClick='closeSearchBox();'>닫기</a>");
document.write("</div>");



document.write("<div id='paging'>");
document.write("<div id='prev'><a href='#!' title='이전 페이지' onClick='goPrevPage()' id='lmsGoPrevPage' tabindex='7'>이전 페이지</a></div>");
document.write("<div id='page_num'><span id='current_page'></span><span id='total_page'></span></div>");
document.write("<div id='next'><a href='#!' title='다음 페이지' onClick='goNextPage()' id='lmsGoNextPage' tabindex='8'>다음 페이지</a></div>");
document.write("</div>");



document.write("<audio id='next-audio'>");
document.write("<source src='../audio/next.mp3' type='audio/mpeg' />");
document.write("</audio>");





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
		totalPageContent.append("/0"+totalPage);
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
	alert('프로토에서는 지원하지 않습니다.');
}



function runDownload() {
	alert('프로토에서는 지원하지 않습니다.');
	//window.open("../down/01.zip");
}



jQuery(function($){
	var iText = $('.iLabel').next('.iText');
	$('.iLabel').css('position','absolute');
	iText
		.focus(function(){
			$(this).prev('.iLabel').css('display','none');
		})
		.blur(function(){
			if($(this).val() == ''){
				$(this).prev('.iLabel').css('display','block');
			} else {
				$(this).prev('.iLabel').css('display','none');
			}
		})
		.change(function(){
			if($(this).val() == ''){
				$(this).prev('.iLabel').css('display','block');
			} else {
				$(this).prev('.iLabel').css('display','none');
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
	if($("#search-area").css("display") == "none")
		$("#search-area").css('display','block');
	else
		$("#search-area").css('display','none');
}



function closeSearchBox() {
	$("#search-area").css('display','none');
}





