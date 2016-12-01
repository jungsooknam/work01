/**
 * Created by NAVER on 2016-11-10.
 */

var Inputquit = function (inputs, answers){

    this.okbtn = document.getElementById('inout_btn');
    this.len = inputs.length;
    this.inputDoms = [];
    this.incurrect = answers;
    this.userAnser = [];
    this.opp = 2; //기회는 2번
    //this.learnDom = document.getElementById('learning-quiz-text');
    this.okBtnVisible = false;
    //this.correct_solution = document.getElementById("correct-solution");


    for(var i = 0; i<this.len ; i++) {
        var input = $("#"+inputs[i]);
        this.inputDoms.push(input);

        var rect = input.position();
        console.log(rect.top, rect.left, input.width(), input.height());

        var xximg = $('#inputCheck_x'+(i+1));
        var ooimg = $('#inputCheck_o'+(i+1));

        console.log(xximg.width(), xximg.height(), ooimg.width(), ooimg.height());


        $('#inputCheck_x'+(i+1)).css({top: rect.top, left: rect.left});
        $('#inputCheck_o'+(i+1)).css({top: rect.top, left: rect.left});

        //$('#inputCheck_x'+(i+1)).x =;
        //$('#inputCheck_x'+(i+1)).y = ;
        //
        //$('#inputCheck_o'+(i+1)).x =rect.left;
        //$('#inputCheck_o'+(i+1)).y = rect.top;

        input.keydown(function() {

            this.checkBtnEnable();
        }.bind(this));
    }

    //this.okbtn.onclick = function (){
    //    console.log("click");
    //    this.checkAnswer();
    //}.bind(this);

    //this.correct_solution.onclick = function (){
    //    console.log("clickccc");
    //    this.viewIncorrect();
    //}.bind(this);






};


Inputquit.prototype = {

    checkBtnEnable : function (){

        if(this.okBtnVisible) {
            for(var i = 0; i<this.len ; i++) {
                if(this.inputDoms[i].val() != ""){
                    return;
                }
            }
            this.okbtn.style.display = "none";
            this.okBtnVisible = false;
        }else{

            for(var i = 0; i<this.len ; i++) {
                if(this.inputDoms[i].val() == ""){
                    return;
                }
            }
            this.okbtn.style.display = "block";
            this.okBtnVisible = true;
        }
    },


    // 정답 확인 버튼.
    viewIncorrect : function () {
        $('#correct-solution').hide();


        for(var i = 0; i<this.len ; i++) {
            this.inputDoms[i].val(this.incurrect[i]);
            this.inputDoms[i].css('color', '#f00');
            this.inputDoms[i].css('font-weight', 'bold');
            $('#inputCheck_o'+(i+1)).hide();
            $('#inputCheck_x'+(i+1)).hide();
        }
    },

    // 입력완료 버튼 누르면 실행.
    checkAnswer : function () {

        this.userAnser = [];

        for(var i = 0; i<this.len ; i++) {
            console.log(i, this.inputDoms[i].val());
            var val = this.inputDoms[i].val();
            console.log(val);
            this.userAnser.push(val);
            var temp = val.split(" ");
            val = temp.join("");
            if(val == "") {
                console.log(i, "암것두 없오.");
                this.showAlertDiv1();
                return;
            }
        }

        // 입력을 다 한것이다.
        this.opp --;
        var falg = true;
        for(var i = 0; i<this.len ; i++) {

            if(this.userAnser[i] == this.incurrect[i]) {
                // 요건 정답일세.
                this.checkO(this.inputDoms[i], i);

            }else{
                // 정답이 아닐세.
                this.checkX(this.inputDoms[i], i);
                falg = false;
            }
        }
        // 기회를 한번 줄이구.
        if(falg) {
            this.opp = 0;
            // 다 맞췄어요.~
            console.log("다 맞춰썽요")
            var falg = true;
            for(var i = 0; i<this.len ; i++) {
                this.checkO(this.inputDoms[i], i);
            }
        }

        if(!this.opp || this.opp == 0) {
            this.okbtn.style.display = "none";
            this.okBtnVisible = false;

            $("#correct-solution").show();
            $(".apply-sound").show();
            return;
        }
        if(!falg) {
            this.showAlertDiv2();
        }
    },

    checkO : function (dom, ind) {
        dom.attr('disabled','disabled');
        // 기회가 남아 있다면.
        if(this.opp) {
            // 일력하지 못하게 해욤.

        }else{
            dom.attr('disabled','disabled');
            $('#inputCheck_o'+(ind+1)).show();
        }
    },

    checkX : function (dom, ind) {
        if(this.opp) {
            dom.val('');
            this.checkBtnEnable();
        }else{
            dom.attr('disabled','disabled');
            console.log($('#inputCheck_o'+(ind+1)))
            $('#inputCheck_x'+(ind+1)).show();
        }
    },

    showAlertDiv1 : function () {
        $("#quiz_alert1").css("display", "block");
        this.itv = setTimeout(this.hideDiv1,1200);
    },

    hideDiv1 : function () {
        clearInterval(this.itv);
        $("#quiz_alert1").css("display", "none");
    },

    showAlertDiv2 : function () {
        $("#quiz_alert2").css("display", "block");
        this.itv = setTimeout(this.hideDiv2,1200);
    },

    hideDiv2 : function () {
    //function hideDiv2(){
        clearInterval(this.itv);
        $("#quiz_alert2").css("display", "none");
    }
}


function hiddenExplanation(){
    $(".narration-bg").hide();
    $("#learning_quiz_feed").hide();
}


// 해설 보기.
function viewExplanation(){
    $(".narration-bg").show();
    $("#learning_quiz_feed").show();
}
