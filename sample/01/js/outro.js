var OutroMotion = (function(){
	var loopCount = 0;

	var self = {
		init:function(){
			self.setInMotion();
			self.startInMotion();
			self.startLoopMotion();
		},


		setInMotion:function(){
			TweenMax.to($(".img-01"), 0, {x:0, autoAlpha:0});
			TweenMax.to($(".img-02"), 0, {x:0, autoAlpha:0});
			TweenMax.to($(".data-box"), 0, {x:0, autoAlpha:0});

			TweenMax.to($(".data-name"), 0, {x:120, autoAlpha:0});
			TweenMax.to($(".data-01"), 0, {y:20, autoAlpha:0});
			TweenMax.to($(".data-02"), 0, {y:20, autoAlpha:0});
			TweenMax.to($(".data-03"), 0, {y:20, autoAlpha:0});
			TweenMax.to($(".data-04"), 0, {y:20, autoAlpha:0});
			TweenMax.to($(".data-05"), 0, {y:20, autoAlpha:0});

			TweenMax.to($(".course-name"), 0, {x:0, autoAlpha:0});
			TweenMax.to($(".chapter-name"), 0, {x:-120, autoAlpha:0});
			TweenMax.to($(".ending-text"), 0, {x:-120, autoAlpha:0});
		},


		startInMotion:function(){
			TweenMax.to($(".img-01"), 1, {delay:3, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".img-02"), 1, {delay:1.5, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".data-box"), 1, {delay:0.5, x:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".data-name"), 0.5, {delay:3, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".data-01"), 1, {delay:3, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".data-02"), 1, {delay:3.3, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".data-03"), 1, {delay:3.6, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".data-04"), 1, {delay:3.9, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".data-05"), 1, {delay:4.2, y:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".course-name"), 1.5, {delay:1, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".chapter-name"),1, {delay:1.5, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".ending-text"),1, {delay:2, x:0, autoAlpha:1, ease:Cubic.easeOut});
		}
	}

	return self;
})();

$(function(){
	OutroMotion.init();
})

