/**
 * Created by NAVER on 2016-12-06.
 */
var DragQuiz = function (target, answers){

    this.len = target.length;
    this.drags = [];
    this.drops = [];

    this.userDrag = [];
    this.opp = 2; //기회는 2번

    for(var i = 0 ; i< this.len ; i++){
        this.userDrag.push(null);
        var drag = $("#"+target[i]);
        this.drags.push(drag);
        drag.draggable(
            {
                revert :
                    function(event) {
                        if(event){

                        }else{
                            quiz.dragReturn($(this).attr('id'), true);
                        }
                    }
                ,
                start: function(event,ui) {
                    $(this).css('z-index','200');
                },

                stop : function (){
                    $(this).css('z-index','100');
                }
            }
        );

        var drop = $("#"+answers[i]);
        this.setDroppAble(drop);
        drop.droppable({
            drop:function (event, ui){

                var dragID = ui.draggable.attr("id");		// drag 레이어 ID 구하기
                var dropId = event.target.id;

                this.onDrop(dragID, dropId);

            }.bind(this)
        });

        this.drops.push(drop);
    }
}


DragQuiz.prototype = {
    setDroppAble : function (drop){

        drop.droppable({
            drop:function (event, ui){

                var dragID = ui.draggable.attr("id");		// drag 레이어 ID 구하기
                var dropId = event.target.id;
            }.bind(this)
        });
    },

    getDragIndexForId : function (id){

        for(var i = 0 ; i< this.len ; i++){
            var itemId = this.drags[i].prop( "id" );
            if(itemId == id){
                return i;
            }
        }
    },



    getDropIndexForId : function (dragID){
        for(var i = 0 ; i< this.len ; i++){
            var id = this.drops[i].prop( "id" );
            if(dragID == id){
                return i;
            }
        }
    },

    onDrop : function (dragID, dropID){

        this.removeDragIDInUserDrag(dragID);

        var dropInd = this.getDropIndexForId(dropID);
        this.userDrag[dropInd] = dragID;

        var ind = this.getDragIndexForId(dragID);

        this.setDrop(ind, $('#' + dragID), $('#' + dropID));

        $('#' + dropID).droppable('disable');

        // 다 채웠는지 채크.
        this.onCheckFull ();

    },

    viewAlert2 : function (){
        //다시 한번 생각해 보세요.
        $("#apply_alert3").fadeIn(500);
        $('#narration-bg2').fadeIn(500);
        this.itv = setTimeout(this.hideDiv2,1200);

        document.getElementById("audio2").play();

    },

    hideDiv2 : function () {
        clearInterval(this.itv);
        $('#narration-bg2').fadeOut(500);
        $("#apply_alert3").fadeOut(500);
    },

    removeDragIDInUserDrag : function (dragID){
        for(var i = 0 ; i< this.len ; i++){
            if( this.userDrag[i] == dragID ) {
                this.userDrag[i] = null;

                this.drops[i].droppable( 'enable' )
            }
        }
    },

    setDrop : function (ind, drag, drop){

        var p = drop.offset();
        var p2 = drag.parent().offset();


        var tt = (p2.top - p.top) * -1;
        var ll = (p2.left - p.left) * -1;

        drag.css({top:tt+'px' , left:ll+'px'});
        drag.css('background-color','#235AA7');
    },

    dragReturn : function (dragID, animation){

        var ind = this.getDragIndexForId(dragID);

        // position 에 따라 바뀐다.
        if(animation) {
            $('#'+dragID).animate({top:0, left:0}, 300, function (){
                $(this).css('z-index','99');
                $(this).css('background-color','#527b99');
            });

        }else{
            $('#'+dragID).css('top', '0');
            $('#'+dragID).css('left', '0');
            $('#'+dragID).css('background-color','#527b99');
        }

        this.removeDragIDInUserDrag(dragID)
        this.onCheckFull();
    },

    onCheckFull : function (){
        for(var i = 0 ; i< this.len ; i++){
            if( this.userDrag[i] == null) {
                this.hiddenOkBtn();
                return;
            }
        }
        this.viewOkBtn();
        // 확인 버튼 보임.

    },

    viewOkBtn : function (){
        $('#drag-ok-btn').show();
    },

    hiddenOkBtn : function (){
        $('#drag-ok-btn').hide();
    },

    showCheckBtn : function (){
        $('#drag-check-btn').show();
    },
    hiddenCheckBtn : function (){
        $('#drag-check-btn').show();
    },

    checkAnswer : function (){
        for(var i = 0 ; i< this.len ; i++){
            $("#inputCheck_o"+(i+1)).hide();
            $("#inputCheck_x"+(i+1)).hide();
            this.drags[i].css('background-color','#235AA7');
            this.setDrop(i, this.drags[i], this.drops[i]);
        }
    },

    okAnswer : function (){
        this.opp -- ;

        if(this.opp == 0) {
            this.setEndQuiz();
            return;
        }

        var flag = true;

        for(var i = 0 ; i< this.len ; i++){

            if( this.userDrag[i] != this.drags[i].attr('id')) {
                // 되돌아가.
                this.dragReturn(this.userDrag[i], false);
                flag = false;

            }else{
                this.setDisableDrag(this.drags[i]);
            }
        }

        if(flag) {
            // 완전 정답.
            //전답확인 버튼
           this.setEndQuiz();

        }else{
            this.viewAlert2();

        }

    },

    setDisableDrag : function (target){
        target.draggable( 'disable' );
        target.css('cursor','default');
    },

    setEndQuiz : function (){
        this.showCheckBtn();
        this.hiddenOkBtn();

        $('#drag-audio').show();
        var flag = true;
        for(var i = 0 ; i< this.len ; i++) {
            if (this.userDrag[i] != this.drags[i].attr('id')) {
                $("#inputCheck_x"+(i+1)).show();
                this.drags[i].css('background-color','#E31D09');
                flag = false;
            }else{
                $("#inputCheck_o"+(i+1)).show();
            }
            this.setDisableDrag(this.drags[i]);
        }

        if(flag){
            document.getElementById("audio1").play();
        }else{
            document.getElementById("audio2").play();
        }
    },

    viewNarration : function (){
        $('#narration-area').show();
        $('#narration-bg2').show();

    },

    narrationClose : function () {
        $('#narration-area').hide();
        $('#narration-bg2').hide();
    }
}


