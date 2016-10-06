var NoteBookMain = (function(){
	var loopCount = 0;

	var self = {
		init:function(){
			self.setInMotion();
			//self.startInMotion();
		},


		setInMotion:function(){

			TweenMax.to($(".intro-course"), 0, {y:75, autoAlpha:0});
			TweenMax.to($(".intro-chapter"), 0, {y:0, autoAlpha:0});

			TweenMax.to($(".intro-nut-01"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-02"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-03"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-04"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-05"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-06"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-07"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-08"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-09"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-10"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".intro-nut-11"), 0, {y:0, autoAlpha:0});

			TweenMax.to($(".intro-bg"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".next-page"), 0, {y:0, autoAlpha:0});





			TweenMax.to($(".outro-course"), 0, {y:50, autoAlpha:0});

			TweenMax.to($(".outro-box-1"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".outro-box-2"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".outro-box-left"), 0, {x:0, autoAlpha:0});
			TweenMax.to($(".outro-box-right"), 0, {x:0, autoAlpha:0});
			TweenMax.to($(".outro-box-nut"), 0, {y:0, autoAlpha:0});

			TweenMax.to($(".outro-text-1"), 0, {y:0, autoAlpha:0});
			TweenMax.to($(".outro-text-2"), 0, {x:75, autoAlpha:0});
			TweenMax.to($(".outro-text-3"), 0, {y:0, autoAlpha:0});

			TweenMax.to($(".outro-btn-1"), 0, {x:-50, autoAlpha:0});

			TweenMax.to($(".outro-bg"), 0, {y:0, autoAlpha:0});

		},


		startInMotion:function(){

			TweenMax.to($(".intro-course"), 1, {delay:5, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-chapter"), 1, {delay:6, y:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".intro-nut-01"), 1, {delay:1, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-02"), 1, {delay:2.5, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-03"), 1, {delay:1.6, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-04"), 1, {delay:3.7, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-05"), 1, {delay:2.2, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-06"), 1, {delay:3.4, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-07"), 1, {delay:1.3, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-08"), 1, {delay:1.9, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-09"), 1, {delay:2.8, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-10"), 1, {delay:4.1, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".intro-nut-11"), 1, {delay:3.1, y:0, autoAlpha:1, ease:Cubic.easeOut});
			
			TweenMax.to($(".intro-bg"), 1, {delay:5, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".next-page"), 1, {delay:6.3, y:0, autoAlpha:1, ease:Cubic.easeOut});





			TweenMax.to($(".outro-course"), 1, {delay:2, y:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".outro-box-1"), 1, {delay:0.5, y:0, autoAlpha:0.15, ease:Cubic.easeOut});
			TweenMax.to($(".outro-box-2"), 2, {delay:1.5, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".outro-box-left"), 1.5, {delay:0.5, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".outro-box-right"), 1.5, {delay:0.5, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".outro-box-nut"), 2.5, {delay:1, y:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".outro-text-1"), 1.5, {delay:3.5, y:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".outro-text-2"), 1, {delay:3, x:0, autoAlpha:1, ease:Cubic.easeOut});
			TweenMax.to($(".outro-text-3"), 1.5, {delay:3.5, y:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".outro-btn-1"), 1, {delay:4.5, x:0, autoAlpha:1, ease:Cubic.easeOut});

			TweenMax.to($(".outro-bg"), 10, {delay:1, y:0, autoAlpha:1, ease:Cubic.easeOut});

		}
	}

	return self;
})();

$(function(){
	NoteBookMain.init();
})

