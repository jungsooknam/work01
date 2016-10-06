//단답형 문제 정오답 셋팅 및 확인		
var ans_sido_txt = 0;			
function confirmAnswer_checkshort(val,val1,val2,val3){
	var ans = val;	
	var ans_correct = val;
	var msg = document.getElementById(val1);
	var exp = val2;
	var btn = val3;
	if(ans_sido_txt < 1){
		if(convertChkString(ans) == convertChkString(msg.value)){
			exp.style.display = 'block'; 
			btn.style.visibility = 'hidden';
			alert("정답입니다.");
			ans_sido_txt = 0;
		}
		else{
			alert("정답이 아닙니다. 다시 확인해보세요.");
			ans_sido_txt = ans_sido_txt + 1;
		}
	}
	else{
		if(convertChkString(ans) == convertChkString(msg.value)){
			exp.style.display = 'block'; 
			btn.style.visibility = 'hidden';
			alert("정답입니다.");
			ans_sido_txt = 0;
		}
		else{			
			exp.style.display = 'block'; 
			btn.style.visibility = 'hidden';
			alert("정답이 아닙니다. 정답은 [" + ans_correct + "] 입니다.");
			ans_sido_txt = 0;
		}
	}
}


function convertChkString(thisString) {
		 
 		var myString = thisString.toLowerCase();
		var my_str = myString;
		var my_array = my_str.split("");
		 
		var mymyArray =new Array();
		for (var k = 0; k<my_array.length; k++) {
			if(my_array[k]!=" " && !((k==my_array.length-1)&& my_array[k]==".")){
				
				mymyArray.push(my_array[k]);
			}
		}		
		var convertedString =mymyArray.join("").toString();
		return convertedString;
		 
}