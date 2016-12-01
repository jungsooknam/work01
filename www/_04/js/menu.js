var thisMain = this;
var indexOpenBtn;
var indexCloseBtn;
var indexTarget;
var indexStatus="close";
var currentSco1;
currentSco1 = pages[currentPage-1].text;
currentSco1 = currentSco1.replace(/<[a-z|/]+[^<>]*>/gi, '');

var MenuController = function(){
	var menuContent = $("#menu");
	if(menuContent){
		menuContent.empty();
		
		//메뉴구성
		var menuString = "<span id='menu_close'><input type='image' src='img/inc/btn_index_02.png' id='menu_close_btn' tabindex='3'></span>";
		var currentCategory = "";
		var currentText = "";


		for ( var i = 0; i < pages.length; i++) {
			if(typeof(pages[i].category) == 'undefined' || pages[i].category == '' || pages[i].category == 'null')
				continue;
			
			// 카테고리 설정
			if(currentCategory != pages[i].category) {
				if(currentCategory != "")
					menuString += "</dl>";
				currentCategory = pages[i].category;
				if(isCurrentCategory(i, currentPage) == true)
					menuString += "<dl><dt><a class='on' tabindex='3'";
				else
					menuString += "<dl><dt><a tabindex='3'";
				menuString += " href='" + pages[i].url + "'>" + pages[i].category + "</a></dt>";
			}
			
			// 페이지 설정
			if(currentText != pages[i].text){
				currentText = pages[i].text;
				if(isCurrentText(i, currentPage) == true){
					menuString += "<dd><a class='on' tabindex='3'";
				}else{
					menuString += "<dd><a tabindex='3'";
				}
				menuString += " href='" + pages[i].url  + "'>" + pages[i].text + "</a></dd>";
			}
		}
		menuString += "</dl>";

		menuContent.append("<div id='menu_activated'>" + menuString + "</div>");
	}
};





function isCurrentCategory(index, currentPage) {
	var currentCategory = "";
	for(var i = currentPage - 1; i > -1; i--) {
		if(typeof(pages[i].category) == 'undefined' || pages[i].category == '' || pages[i].category == 'null')
			continue;
		else {
			currentCategory = pages[i].category;
			break;
		}
	}

	for(var j = index; j > -1; j--) {
		if(typeof(pages[i].category) == 'undefined' || pages[i].category == '' || pages[i].category == 'null')
			continue;
		else {
			if(pages[j].category == currentCategory)
				return true;
			else
				return false;
		}
	}
	return false;
}



function isCurrentText(index, currentPage) {
	var currentText = "";
	for(var i = currentPage - 1; i > -1; i--) {
		if(typeof(pages[i].text) == 'undefined' || pages[i].text == '' || pages[i].text == 'null')
			continue;
		else {
			currentText = pages[i].text;
			break;
		}
	}

	for(var j = index; j > -1; j--) {
		if(typeof(pages[i].text) == 'undefined' || pages[i].text == '' || pages[i].text == 'null')
			continue;
		else {
			if(pages[j].text == currentText)
				return true;
			else
				return false;
		}
	}
	return false;
}



function isCurrentPage(index, currentPage) {
	var maxPage = currentPage - 1;

	if(index == maxPage) {
		return true;
	}
	else if (maxPage < index)
		return false;
	else { // if (index < currentPage)
		var countFarFromCurrentPage = 0;
		for(var i = index; i < currentPage; i++) {
			if(typeof(pages[i].text) == 'undefined' || pages[i].text == '' || pages[i].text == 'null')
				continue;
			else
				countFarFromCurrentPage++;
		}
	}
	if(countFarFromCurrentPage > 1)
		return false;
	return true;
}




function menuInit(){
	var menuController = new MenuController();
	
	$("#menu_open").click(function () {
		$("#menu,#menu-bg").addClass("open"); 
		$("#menu_open").css('display','none'); 
		window.location.hash = "#open"; 
	});

	$('#menu_close').click(function(){
		$("#menu,#menu-bg").removeClass("open"); 
		$("#menu_open").css('display','block'); 
	});
}

