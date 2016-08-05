$(function(){
 $("#box>h5").click(function(){
	$(this).next().slideDown().siblings("ul").slideUp();
 })
 $("#subnav").click(function(){
 	$("#left").fadeIn(3000);
 })
})
