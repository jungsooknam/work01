//우클릭 방지

$(window.document).ready(function(){
	$(window.document).on("contextmenu", function(event){return false;});		// 우클릭방지
	$(window.document).on("selectstart", function(event){return false;});			// 더블클릭을 통한 선택방지
});




$(document).ready(function(){
	document.title = subtitle;
	
	if(narrations[currentPage - 1] == "")
		isNarrationsEmpty = true;

	$("#nar_txt").empty();
	$("#nar_txt").append(narrations[currentPage - 1]);
	
	$("#nar_close").click(function(){

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
			}else{
				_narDiv.style.display="none";
			}
		}

		sessionStorage.setItem('captionLayer', 'no');
	});
});
