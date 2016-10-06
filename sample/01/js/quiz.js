var vWrongAnswerCnt = 0;
var vCorrectAnswerCnt = 0;
var vQuizResult = new Array(0,0,0); // 
var vShowSolution = 0;

function showSolution(){
	vShowSolution = 1;
	$(".q-num").show();
	goQuiz('1');
}

function pageInit(){
	// 1번 문제 정리
	if(vQuizResult[0] == 0){
		$(".qq").removeClass("check");
		$(".qq").addClass("none");
		$("#q1_n2").removeClass("n-2-choice");
		$("#q1_n2").addClass("n-2");
		$("#btn_1").show();
		$("#q1_correct").hide();
		$("#q1_correct1").hide();
		$("#q1_wrong").hide();
		$("#q1_wrong1").hide();
		$("#quiz_feed_1").hide();
		$(".correct-check1").hide();
	}

	// 2번 문제 정리
	if(vQuizResult[1] == 0){
		$(".qq").removeClass("check");
		$(".qq").addClass("none");
		$("#q2_n4").removeClass("n-4-choice");
		$("#q2_n4").addClass("n-4");
		$("#btn_2").show();
		$("#q2_correct").hide();
		$("#q2_correct1").hide();
		$("#q2_wrong").hide();
		$("#q2_wrong1").hide();
		$("#quiz_feed_2").hide();
		$(".correct-check2").hide();
	}

	// 3번 문제 정리
	if(vQuizResult[2] == 0){
		$(".qq").removeClass("check");
		$(".qq").addClass("none");
		$("#q3_n4").removeClass("n-4-choice");
		$("#q3_n4").addClass("n-4");
		$("#btn_3").show();
		$("#q3_correct").hide();
		$("#q3_correct1").hide();
		$("#q3_wrong").hide();
		$("#q3_wrong1").hide();
		$("#quiz_feed_3").hide();
		$(".correct-check3").hide();
	}
}

function goQuiz(num){
	$(".intro").hide();
	$(".quiz").hide();
	$(".quiz-result").hide();
	switch(num){
		case '1' :

					if(vShowSolution == 1){
						$("#quiz_1").show();
					}else{
						if(vQuizResult[0] == 0){
							$("#quiz_1").show();
						}else{
							goQuiz('2');
						}
					}
				   break;
		case '2' :
				   if(vShowSolution == 1){
						$("#quiz_2").show();
					}else{
						if(vQuizResult[1] == 0){
							$("#quiz_2").show();
						}else{
							goQuiz('3');
						}
					}
				   break;
		case '3' :
					if(vShowSolution == 1){
						$("#quiz_3").show();
					}else{
						if(vQuizResult[2] == 0){
							$("#quiz_3").show();
						}else{
							goQuiz('4');
						}
					}
					break;
		case '4' : 
					playAudio('next-audio');
					$("#result").show(); calculate(); break;
	}
}


var vSelectAnswer1 = "";
var vSelectAnswer2 = "";
var vSelectAnswer3 = "";
function selectAnswer1(type, select, id){
	vSelectAnswer1 = select;
	$(".qq").removeClass("check");
	$(".qq").addClass("none");
	$("#"+id + " > span").removeClass("none");
	$("#"+id + " > span").addClass("check");
}
function selectAnswer2(type, select, id){
	vSelectAnswer2 = select;
	$(".qq").removeClass("check");
	$(".qq").addClass("none");
	$("#"+id + " > span").removeClass("none");
	$("#"+id + " > span").addClass("check");
}
function selectAnswer3(type, select, id){
	vSelectAnswer3 = select;
	$(".qq").removeClass("check");
	$(".qq").addClass("none");
	$("#"+id + " > span").removeClass("none");
	$("#"+id + " > span").addClass("check");
}

function checkAnswer(quizNum){
	vWrongAnswerCnt++;
	if(quizNum == 0){					// 4지선다
		if(vSelectAnswer1 == ""){
			vWrongAnswerCnt = 0;
			this.showAlertDiv1();
			//alert("문제를 풀어 보세요.");
		}else{
			if(vSelectAnswer1 == 2){
				vWrongAnswerCnt = 0;
				vQuizResult[quizNum] = 1;
				$("#quiz_feed_"+(quizNum+1)).show();
				$("#q1_n2").removeClass("n-2");
				$("#q1_n2").addClass("n-2-choice");
				$("#q1_correct").show();
				$("#q1_correct1").show();
				$("#btn_1").hide();
				$(".correct-check1").show();
				playAudio('audio1');
			}else if(vWrongAnswerCnt == 1){
				vQuizResult[quizNum] = 0;
				this.showAlertDiv2();
			}else if(vWrongAnswerCnt == 2){
				vWrongAnswerCnt = 0;
				vQuizResult[quizNum] = 0;
				$("#quiz_feed_"+(quizNum+1)).show();
				$("#q1_n2").removeClass("n-2");
				$("#q1_n2").addClass("n-2-choice");
				$("#q1_wrong").show();
				$("#q1_wrong1").show();
				$("#btn_1").hide();
				$(".correct-check1").show();
				playAudio('audio2');
			}
		}

	}else if(quizNum == 1){				// 4지선다
		if(vSelectAnswer2 == ""){
			vWrongAnswerCnt = 0;
			this.showAlertDiv1();
			//alert("문제를 풀어 보세요.");
		}else{
			if(vSelectAnswer2 == 4){
				vWrongAnswerCnt = 0;
				vQuizResult[quizNum] = 1;
				$("#quiz_feed_"+(quizNum+1)).show();
				$("#q2_n4").removeClass("n-4");
				$("#q2_n4").addClass("n-4-choice");
				$("#q2_correct").show();
				$("#q2_correct1").show();
				$("#btn_2").hide();
				$(".correct-check2").show();
				playAudio('audio1');
			}else if(vWrongAnswerCnt == 1){
				vQuizResult[quizNum] = 0;
				this.showAlertDiv2();
			}else if(vWrongAnswerCnt == 2){
				vWrongAnswerCnt = 0;
				vQuizResult[quizNum] = 0;
				$("#quiz_feed_"+(quizNum+1)).show();
				$("#q2_n4").removeClass("n-4");
				$("#q2_n4").addClass("n-4-choice");
				$("#q2_wrong").show();
				$("#q2_wrong1").show();
				$("#btn_2").hide();
				$(".correct-check2").show();
				playAudio('audio2');
			}
		}

	}else if(quizNum == 2){				// 4지선다
		if(vSelectAnswer3 == ""){
			vWrongAnswerCnt = 0;
			this.showAlertDiv1();
			//alert("문제를 풀어 보세요.");
		}else{
			if(vSelectAnswer3 == 4){
				vWrongAnswerCnt = 0;
				vQuizResult[quizNum] = 1;
				$("#quiz_feed_"+(quizNum+1)).show();
				$("#q3_n4").removeClass("n-4");
				$("#q3_n4").addClass("n-4-choice");
				$("#q3_correct").show();
				$("#q3_correct1").show();
				$("#btn_3").hide();
				$(".correct-check3").show();
				playAudio('audio1');
			}else if(vWrongAnswerCnt == 1){
				vQuizResult[quizNum] = 0;
				this.showAlertDiv2();
			}else if(vWrongAnswerCnt == 2){
				vWrongAnswerCnt = 0;
				vQuizResult[quizNum] = 0;
				$("#quiz_feed_"+(quizNum+1)).show();
				$("#q3_n4").removeClass("n-4");
				$("#q3_n4").addClass("n-4-choice");
				$("#q3_wrong").show();
				$("#q3_wrong1").show();
				$("#btn_3").hide();
				$(".correct-check3").show();
				playAudio('audio2');
			}
		}
	}
}

function calculate(){
	vCorrectAnswerCnt = 0;
	if(vQuizResult[0] == 1){
		$("#q1_r1").attr("src", "img/quiz/check_o.png");
		vCorrectAnswerCnt++;
	}else{
		$("#q1_r1").attr("src", "img/quiz/check_x.png");
	}
	if(vQuizResult[1] == 1){
		$("#q2_r2").attr("src", "img/quiz/check_o.png");
		vCorrectAnswerCnt++;
	}else{
		$("#q2_r2").attr("src", "img/quiz/check_x.png");
	}
	if(vQuizResult[2] == 1){
		$("#q3_r3").attr("src", "img/quiz/check_o.png");
		vCorrectAnswerCnt++;
	}else{
		$("#q3_r3").attr("src", "img/quiz/check_x.png");
	}
	$("#correctCnt").text(vCorrectAnswerCnt);
	if(vCorrectAnswerCnt == 3){
		$("#result-btn-1").hide();
		$("#result-btn-2").show();
		$(".q-num").hide();
	}else{
		$("#result-btn-2").hide();
		$("#result-btn-1").show();
		$(".q-num").hide();
	}
}



function goInit(){
	vShowSolution = 0;
	$(".q-num").hide();
	vQuizResult = new Array(0,0,0);
	pageInit();
	goQuiz('1');
}

function goWrongQuiz(num){
	vShowSolution = 0;
	$(".q-num").hide();
	pageInit();
	goQuiz(num);
}

this.showAlertDiv1 = function (){
	$("#quiz_alert1").css("display", "block");
	this.itv = setTimeout(this.hideDiv1,1200);
}

this.hideDiv1 = function (){
	clearInterval(this.itv);
	$("#quiz_alert1").css("display", "none");
}

this.showAlertDiv2 = function (){
	$("#quiz_alert2").css("display", "block");
	this.itv = setTimeout(this.hideDiv2,1200);
}

this.hideDiv2 = function (){
	clearInterval(this.itv);
	$("#quiz_alert2").css("display", "none");
}




