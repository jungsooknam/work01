/**
 * Created by NAVER on 2016-10-04.
 */
document.write('aaaaa')

//document.write("<script language=\"javascript\" src=\"js/webfont.js\"></script>");

//document.write('<script type="text\/javascript" src="js\/webfont.js"><\/script>');


//document.write('<script type="text/javascript">window.jQuery || document.write(\"<script src=\'http://code.jquery.com/jquery-1.10.2.min.js\'><\\/script>\")<\/script>');




console.log("mian");

//document.write('<link rel="stylesheet" type="text\/css" href="css\/default.css" />');
//document.write('<script type="text\/javascript" src="js\/globalvars.js"><\/script>');
//document.write('<script type="text\/javascript" src="js\/jquery-latest.js"><\/script>');
//document.write('<script type="text\/javascript" src="js\/common.js"><\/script>');
//document.write('<script type="text\/javascript" src="js\/common-script.js"><\/script>');





function appendScript(pathToScript) {
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = pathToScript;
    head.appendChild(js);
    console.log("ddddd")
}

appendScript("js/webfont.js");
appendScript("js/globalvars.js");
appendScript("js/jquery-latest.js");
appendScript("js/common.js");
appendScript("js/common-script.js");


var currentPage = 02;											// 현 페이지 번호
WebFont.load({
    custom: {
        families: ['nbgM', 'play']
    }
});




$(document).ready(function(){
    console.log("aaaaaddddd")
    $("#sco-name1").text(currentSco1);

    lms_mode();													// LMS 탑재관련
    menuInit();														// 우측 메뉴
});
