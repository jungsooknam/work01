var thisMain = this;
var indexOpenBtn;
var indexCloseBtn;
var indexTarget;
var indexStatus="close";
var currentSco1;
var currentSco2;
var currentSco3;
var currentSco4;
currentSco1 = pages[currentPage-1].text;
currentSco2 = pages[currentPage-1].text;
currentSco3 = pages[currentPage-1].text;
currentSco4 = pages[currentPage-1].text;
currentSco1 = currentSco1.replace(/<[a-z|/]+[^<>]*>/gi, '');
currentSco2 = currentSco2.replace(/<[a-z|/]+[^<>]*>/gi, '');
currentSco3 = currentSco3.replace(/<[a-z|/]+[^<>]*>/gi, '');
currentSco4 = currentSco4.replace(/<[a-z|/]+[^<>]*>/gi, '');

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
	
	indexOpenBtn = document.getElementById("menu_open_btn");
	indexCloseBtn = document.getElementById("menu_close_btn");
	myHandler(indexCloseBtn, "click", _indexCloseAc);
	myHandler(indexOpenBtn, "click", _indexOpenAc);
	
	indexTarget=document.getElementById("menu");
	if(indexTarget){
		$("#menu").hide();
	}
	//initTitles();
}

function myHandler(target,str,fn){

	if(target){
		if(target.addEventListener){
			//alert("target.addEventListener");
			target.addEventListener(str,fn,false);
		}else{
			//alert("click");
			if(str=="click"){
				target.onclick=fn;
			}
		}
	}	
}

function _indexOpenAc(){
	indexTarget=document.getElementById("menu");
	if(indexTarget){
		$("#menu_activated").show();
//		indexOpenBtn.style.display="none";
		if(indexTarget){
			indexTarget.style.display="block";
			indexTarget.style.right=0+"px";
		}
	}
}

function _indexCloseAc(){
	indexTarget=document.getElementById("menu");
	$("#menu").hide();
//	indexOpenBtn.style.display="block";
}





