/**
 * Created by NAVER on 2016-11-10.
 */




var Inputquit = function (inputs, answers){

    var okbtn = document.getElementById('inout_btn');
    var len = inputs.length;
    var inputDoms = [];
    var incurrect = answers;
    var userAnser = [];
    var opp = 2; //기회는 2번
    var learnDom = document.getElementById('learning-quiz-text');
    var okBtnVisible = false;
    var correct_solution = document.getElementById("correct-solution");

    for(var i = 0; i<len ; i++) {
        var input = $("#"+inputs[i]);
        inputDoms.push(input);
        input.keydown(function() {
            console.log("keydown");
            checkBtnEnable();
        });
    }

    function checkBtnEnable(){
        var len = inputDoms.length;
        if(okBtnVisible) {
            for(var i = 0; i<len ; i++) {
                if(inputDoms[i].val() != ""){
                    return;
                }
            }
            okbtn.style.display = "none";
            okBtnVisible = false;
        }else{

            for(var i = 0; i<len ; i++) {
                if(inputDoms[i].val() == ""){
                    return;
                }
            }
            okbtn.style.display = "block";
            okBtnVisible = true;
        }
    }


    okbtn.onclick = function (){
        console.log("click");
        checkAnswer();
    }

    correct_solution.onclick = function (){
        console.log("clickccc");
        viewIncorrect();
    }



    // 정답 확인 버튼.
    function viewIncorrect(){
        $('#correct-solution').hide();

        var len = inputDoms.length;
        for(var i = 0; i<len ; i++) {
            inputDoms[i].val(incurrect[i]);
            inputDoms[i].css('color', '#f00');
            inputDoms[i].css('font-weight', 'bold');
            $('#inputCheck_o'+(i+1)).hide();
            $('#inputCheck_x'+(i+1)).hide();
        }
    }

    // 입력완료 버튼 누르면 실행.
    function checkAnswer() {
        var len = inputDoms.length;
        userAnser = [];

        for(var i = 0; i<len ; i++) {
            console.log(i, inputDoms[i].val());
            var val = inputDoms[i].val();
            console.log(val);
            userAnser.push(val);
            var temp = val.split(" ");
            val = temp.join("");
            if(val == "") {
                console.log(i, "암것두 없오.");
                showAlertDiv1();
                return;
            }
        }

        // 입력을 다 한것이다.
        opp --;
        var falg = true;
        for(var i = 0; i<len ; i++) {

            if(userAnser[i] == incurrect[i]) {
                // 요건 정답일세.
                checkO(inputDoms[i], i);

            }else{
                // 정답이 아닐세.
                checkX(inputDoms[i], i);
                falg = false;
            }
        }
        // 기회를 한번 줄이구.
        if(falg) {
            opp = 0;
           // 다 맞췄어요.~
            console.log("다 맞춰썽요")
            var falg = true;
            for(var i = 0; i<len ; i++) {
                checkO(inputDoms[i], i);
            }
        }

        if(!opp || opp == 0) {
            okbtn.style.display = "none";
            okBtnVisible = false;

            $("#correct-solution").show();
    		$(".apply-sound").show();
            return;
        }
        if(!falg) {
            showAlertDiv2();
        }
    }

    function checkO(dom, ind){

        dom.attr('disabled','disabled');
        // 기회가 남아 있다면.
        if(opp) {
            // 일력하지 못하게 해욤.

        }else{
            dom.attr('disabled','disabled');
            $('#inputCheck_o'+(ind+1)).show();
        }
    }

    function checkX(dom, ind){
        if(opp) {
            dom.val('');
            checkBtnEnable();
        }else{
            dom.attr('disabled','disabled');
            console.log($('#inputCheck_o'+(ind+1)))
            $('#inputCheck_x'+(ind+1)).show();
        }
    }


    function showAlertDiv1() {
        $("#quiz_alert1").css("display", "block");
        this.itv = setTimeout(hideDiv1,1200);
    }

    function hideDiv1(){
        clearInterval(this.itv);
        $("#quiz_alert1").css("display", "none");
    }

    function showAlertDiv2(){
        $("#quiz_alert2").css("display", "block");
        this.itv = setTimeout(hideDiv2,1200);
    }

    function hideDiv2(){
        clearInterval(this.itv);
        $("#quiz_alert2").css("display", "none");
    }
};



function hiddenExplanation(){
    $(".narration-bg").hide();
    $("#learning_quiz_feed").hide();
}


// 해설 보기.
function viewExplanation(){
    $(".narration-bg").show();
    $("#learning_quiz_feed").show();
}
