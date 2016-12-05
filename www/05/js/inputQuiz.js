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
    this.okBtnVisible = false;


    for(var i = 0; i<this.len ; i++) {
        var input = $("#"+inputs[i]);
        this.inputDoms.push(input);

        var rect = input.position();

        var xximg = $('#inputCheck_x'+(i+1));
        var ooimg = $('#inputCheck_o'+(i+1));

        xximg.css({top: rect.top, left: rect.left});
        ooimg.css({top: rect.top, left: rect.left});

        input.keydown(function() {

            this.checkBtnEnable();
        }.bind(this));
    }


    $( window ).resize(function() {

        for(var i = 0; i<this.len ; i++) {

            var input = this.inputDoms[i];
            var rect = input.position();
            var xximg = $('#inputCheck_x' + (i + 1));
            var ooimg = $('#inputCheck_o' + (i + 1));

            xximg.css({top: rect.top, left: rect.left});
            ooimg.css({top: rect.top, left: rect.left});
        }
    }.bind(this));


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
            var val = this.inputDoms[i].val();
            this.userAnser.push(val);
            var temp = val.split(" ");
            val = temp.join("");
            if(val == "") {
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
