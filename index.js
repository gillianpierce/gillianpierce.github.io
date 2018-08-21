
$(document).ready(function(){
<<<<<<< HEAD

	var lastScrollTop = $(window).scrollTop();
	var list = $('#list').children();
	for(var i = 0, len = list.length; i < len; i++){
		console.log($("#"+list[i].id).data("parent"))
		if($("#"+$("#"+list[i].id).data("parent")).isInViewport()){
			var current = $("#"+list[i].id);
			current.addClass("active").removeClass("inactive");
			break;
		}
	}
	console.log(list);
	$(window).scroll(function(){
		console.log($(window).scrollTop())
		if($(window).scrollTop()==0){
			current.removeClass("active").addClass("inactive");
			$("#"+$("#list").children()[0].id).removeClass("inactive").addClass("active");
		}
		else{
		current = $('.active');
		//console.log(current);
		var parent = $('#'+current.data("parent"));
		//console.log(parent);
		var st = $(this).scrollTop();
		if (! parent.isInViewport()){
			if (st > lastScrollTop){
				var next = $(current.next());
				next.removeClass("inactive").addClass("active");
				current.removeClass("active").addClass("inactive");
				current = next;
   			} else {
   				var prev = $(current.prev());
				prev.removeClass("inactive").addClass("active");
				current.removeClass("active").addClass("inactive");
				current = prev;
   			}
		}

   		lastScrollTop = st;
   	}
	});
=======
 
>>>>>>> 12abf9b25dc986b7b171912029e8737cbf436dbf

	// $(".nav-element.inactive").hover(function(){
	// 	$(this).removeClass("inactive").addClass("active");
	// }, function(){
	// 	$(this).removeClass("active").addClass("inactive");
	// })

	$(".name-header").hide().fadeIn(2000);
	$(".degree-header").hide().fadeIn(2000);
	//
	// $(".nav-element").click(function(){
	// 	var target = $(this)[0].dataset.parent;
	// 	$([document.documentElement, document.body]).animate({
  //       scrollTop: $("#"+target).offset().top
  //   }, 2000);
	// })

})

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};
