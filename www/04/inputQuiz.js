/**
 * Created by NAVER on 2016-11-10.
 */



console.log("1");

var inputquit = function (id, inputs, answers){

    console.log("2");
    var okbtn = document.getElementById('id');
    var len = inputs.length;
    var inputDoms = [];
    var incurrect = answers;
    var userAnser = [];
    var opp = 2; //기회는 2번
    var learnDom = document.getElementById('learnDom');

    for(var i = 0; i<len ; i++) {
        var input = $("#"+inputs[i]);
        inputDoms.push(input);
    }

    var okbtn = document.getElementById('okbtn');

    okbtn.onclick = function (){
        console.log("click");
        checkAnswer();
    }

    function checkAnswer() {
        var len = inputDoms.length;
        userAnser = [];

        for(var i = 0; i<len ; i++) {
            console.log(i, inputDoms[i].value);
            var val = inputDoms[i].val();
            console.log(val);
            userAnser.push(val);
            var temp = val.split(" ");
            val = temp.join("");
            if(val == "") {
                console.log(i, "암것두 없오.");
                viewError1();
                return;
            }
        }

        // 입력을 다 한것이다.
        opp --;

        for(var i = 0; i<len ; i++) {

            if(userAnser[i] == incurrect[i]) {
                // 요건 정답일세.
                checkO(inputDoms[i]);

            }else{
                // 정답이 아닐세.
                checkX(inputDoms[i]);
            }
        }
        // 기회를 한번 줄이구.

    }

    //position: absolute;
    //left:0px;
    //top:0px;
    //width:46px;
    //height:46px;
    //background:url("../images/kywa/std/inc/line_top_01.png") 100% 100% no-repeat;

    function checkO(dom){
        // 기회가 남아 있다면.
        if(opp) {
            // 일력하지 못하게 해욤.
            opp.disabled = true;
        }else{

            var position = dom.position();
            console.log(position.left, position.top);
            var l = position.left - 46;;
            var t = position.top - 15;

            var checkox = document.createElement('div');
            checkox.setAttribute('style', "position: absolute;left:"+l+"px;top:"+t+"px;width:46px;height:46px;background:url('img/apply/check_o.png') 100% 100% no-repeat;");
            learnDom.appendChild(checkox);

        }
    }

    function checkX(dom){
        if(opp) {
            // 입력한 내용 지워 버려요.
            opp.value = ""
        }else{
            //"img/apply/check_x.png"
        }
    }


    // 문제를 풀어보세요
    function viewError1(){

    }

};





