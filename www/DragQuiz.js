/**
 * Created by NAVER on 2016-12-06.
 */
var DragQuiz = function (target, answers){

    this.len = target.length;
    this.drags = [];
    this.drops = [];

    this.dragsP = [];
    this.userDrag = [];
    this.opp = 2; //기회는 2번

    for(var i = 0 ; i< this.len ; i++){
        this.userDrag.push(null);
        var drag = $("#"+target[i]);
        this.drags.push(drag);
        drag.draggable();
        var p = drag.position();
        this.dragsP.push(p);
        drag.mousedown (function (e){
            var tt = e.currentTarget;
            $('#'+tt.id).css('z-index','100');
        });

        drag.mouseup (function (e){

            var tt = e.currentTarget;
            var xx = e.clientX;
            var yy = e.clientY;
            this.onCheck(tt.id, xx, yy);

        }.bind(this));

        var drop = $("#"+answers[i]);
        this.drops.push(drop);
    }
}


DragQuiz.prototype = {

    getIndexForId : function (id){

        for(var i = 0 ; i< this.len ; i++){
            var itemId = this.drags[i].prop( "id" );
            if(itemId == id){
                console.log(i, "찾았옹.");
                return i;
            }
        }
    },

    onCheck : function (domID, xx, yy) {
        for(var i = 0 ; i< this.len ; i++){
            if(this.userDrag[i] == null) {
                var flag = this.drops[i].hitTestPoint({"x": xx, "y": yy, "transparency": true});
                if (flag) {
                    this.onDrop(domID, i);
                    return;
                    break;
                }
            }
        }
        this.dragReturn(domID);
    },

    onDrop : function (domID, dropInd){
        var p = this.drops[dropInd].position();
        console.log(p);
        this.userDrag[dropInd] = domID;

        var ind = this.getIndexForId(domID);
        var p2 = this.dragsP[ind];

        var tt = (p2.top - p.top) * -1;
        var ll = (p2.left - p.left) * -1;

        // position 에 따라 바뀐다.
        //$('#' + domID).css({top:p.top+'px' , left:p.left+'px'});
        $('#' + domID).css({top:tt+'px' , left:ll+'px'});

        // 파란색으로 바뀝니다.

        //drag.draggable( 'disable' );
        //drag.unbind( "mousedown" );
        //drag.unbind( "mouseup" );

        // 다 채웠는지 채크.
        this.onCheckFull ();
    },

    dragReturn : function (domID){
        var ind = this.getIndexForId(domID);

        // position 에 따라 바뀐다.
        //$('#'+domID).animate({top:this.dragsP[ind].top+'px' , left:this.dragsP[ind].left+'px'});
        $('#'+domID).animate({top:0, left:0}, 300, function (){
            console.log('complete~~~', this);
            $(this).css('z-index','99');
        });

        for(var i = 0 ; i< this.len ; i++){
            if( this.userDrag[i] == domID ) {
                this.userDrag[i] = null;
            }
        }
    },

    onCheckFull : function (){
        for(var i = 0 ; i< this.len ; i++){
            if( this.userDrag[i] == null) {
                return;
            }
        }
        this.viewOkBtn();
        // 확인 버튼 보임.

    },

    viewOkBtn : function (){
        $('#okBtn').show();
    },

    checkAnswer : function (){
        opp -- ;
        var flag = true;
        for(var i = 0 ; i< this.len ; i++){
            console.log(this.userDrag[i], this.drags[i].id);
            if( this.userDrag[i] != this.drags[i].id) {
                if(opp) {
                    // 되돌아가.
                    this.dragReturn(this.userDrag[i]);
                }else{
                    // ox 표시.

                }
            }else{

            }
            flag = false;
        }

        if(flag) {
            // 완전 정답.
        }else{

            if(opp) {
                // 다시해.
            }else{

            }
        }

    }


}