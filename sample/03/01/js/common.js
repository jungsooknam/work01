
//false : 로컬용
//true : 포팅용

var lmsVOD = false;
var lmsMode = false;
var api_mode = false;


/////////////////////////////////////////////////////////////////////////////////////////


var functionJs1 = "<script language=\"javascript\" src=\"js/KEMAPIWrapper.js\"></script>";
var functionJs2 = "<script language=\"javascript\" src=\"js/SCOFunctions.js\"></script>";

var path = (document.location.href).split("/");

if (api_mode == true) {
	//포팅시 스콤임베드
	document.write(functionJs1);
	document.write(functionJs2);
	PageLocation(path[path.length-1], (currentPage - 1));
}




if (lmsVOD == true) {
	//미디어서버 주소
	var mp4Link = "http://progr.e-koreatech.ac.kr/Data/2015/lifelong/mechatronic/01_system_software/";
	var mp3Link = "http://progr.e-koreatech.ac.kr/Data/2015/lifelong/mechatronic/01_system_software/";
} else {
	//로컬용 영상 주소
	var mp4Link = "../movie/";
	var mp3Link = "../audio/";
}




function lms_mode() {
	if (lmsMode == true) {
		$("#menu_open").hide();
		$("#lms-area").hide();
		$("#paging").hide();
	} else {
		$("#menu_open").show();
		$("#lmsDiv").show();
		$("#paging").show();
	}
}




PageLocation(path[path.length-1], (currentPage - 1));

