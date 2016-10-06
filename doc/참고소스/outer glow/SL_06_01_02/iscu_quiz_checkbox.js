//체크박스 문제 정오답 셋팅 및 확인
var ans_sido_chbox = 0;
function confirmAnswer_checkbox(val,val1,val2,val3,val4){
	var chk_info = val;
	var ans = val1;
	var ans_correct = val2;
	var ans_chk = new Array(5);
	var av = 0;
	var bv = 0;
	var rv = 0;
	var ans_flag = 0;
	var exp = val3;
	var btn = val4;

	if(ans_sido_chbox < 1){
		for(i=0;i<chk_info.length;i++){
				if(chk_info[i].checked == true){
						ans_chk[i] = 1;
				}
				else{
						ans_chk[i] = 0;
				}
		}

		for(i=0;i<chk_info.length;i++){
			av = ans[i];
			bv = ans_chk[i];
			if(av == bv){
				ans_flag = ans_flag + 1;
			}
		}
		
		if(ans_flag == chk_info.length){
			exp.style.display = 'block';  
			btn.style.visibility = 'hidden'; 
			alert("정답입니다.");			
			ans_sido_chbox = 0; 
		}
		else{
			alert("정답이 아닙니다. 다시 확인해보세요.");
			ans_sido_chbox = ans_sido_chbox + 1;
		}
	}
	else{
		for(i=0;i<chk_info.length;i++){
				if(chk_info[i].checked == true){
						ans_chk[i] = 1;
				}
				else{
						ans_chk[i] = 0;
				}
		}

		for(i=0;i<chk_info.length;i++){
			av = ans[i];
			bv = ans_chk[i];
			if(av == bv){
				ans_flag = ans_flag + 1;
			}
		}
		
		if(ans_flag == chk_info.length){
			exp.style.display = 'block'; 
			btn.style.visibility = 'hidden';
			alert("정답입니다.");
			ans_sido_chbox = 0;
		}
		else{
			exp.style.display = 'block'; 
			btn.style.visibility = 'hidden';
			alert("정답이 아닙니다. 정답은 " + ans_correct + " 입니다.");
			ans_sido_chbox = 0;
		}
	}
}
