//체크박스 문제 정오답 셋팅 및 확인
var ans_sido_sel = 0;
function confirmAnswer_select(x_id,dab_val_arr,exp_id,btn_id){
	var ans_flag = 1;
	var exp = exp_id;
	var btn = btn_id;

	if(ans_sido_sel < 1){

		for(i=0;i<dab_val_arr.length;i++){
				
				
				if (GetSelectVal(x_id+(i+1)) == dab_val_arr[i]) {
				}
				else{
						ans_flag = 0; 
				}
		}

 	
		if(ans_flag){
			exp.style.display = 'block';  
			btn.style.visibility = 'hidden'; 
			alert("정답입니다.");
			ans_sido_sel = 0;			 
		}
		else{
			alert("정답이 아닙니다. 다시 확인해보세요.");
			ans_sido_sel = ans_sido_sel + 1;
		}
	}
	else{
		for(i=0;i<dab_val_arr.length;i++){
				
				
				if (GetSelectVal(x_id+(i+1))	== dab_val_arr[i]) {
				}
				else{
						ans_flag = 0; 
				}
		}

		if(ans_flag){
			exp.style.display = 'block'; 
			btn.style.visibility = 'hidden';
			alert("정답입니다.");
			ans_sido_sel = 0;
		}
		else{
			exp.style.display = 'block'; 
			btn.style.visibility = 'hidden';
			alert("정답이 아닙니다. 정답을 확인해보세요.");
			ans_sido_sel = 0;
		}
	}
}



function GetSelectVal(xid) {
 
	var elem = document.getElementById(xid);
	var selectedNode = elem.options[elem.selectedIndex];
	
	//alert(xid + ":" + selectedNode.value )
	
	return selectedNode.value ; 

}

