var IntroMotion = (function(){
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
			TweenMax.to($(".img-03"), 0, {x:100, autoAlpha:0});
			TweenMax.to($(".img-04"), 0, {x:0, autoAlpha:0});

			TweenMax.to($(".course-name"), 0, {x:0, autoAlpha:0});
			TweenMax.to($(".chapter-name"), 0, {x:-150, autoAlpha:0});
			TweenMax.to($(".page-ending"), 0, {y:-10, autoAlpha:0});
		},


		startInMotion:function(){
			TweenMax.to($(".img-01"), 1, {delay:3, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".img-02"), 1, {delay:1, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".img-03"), 1, {delay:2, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".img-04"), 1, {delay:3, x:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".course-name"), 1.5, {delay:3, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".chapter-name"),1, {delay:3.5, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".page-ending"),0.5, {delay:4, y:0, autoAlpha:1, ease:Cubic.easeOut});
		}
	}

	return self;
})();

$(function(){
	IntroMotion.init();
})

