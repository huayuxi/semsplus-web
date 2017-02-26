// JavaScript Document
$(document).ready(function() {
	//回到顶部
	$(window).scroll(function() {
		var sroll = $(window).scrollTop()
		if (sroll > 300) {
			$(".jump-top").css("visibility", "visible");
		} else {
			$(".jump-top").css("visibility", "hidden");
		}
	});
	$(".jump-top a").click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, '1500');
	});
});