$("body")
/* 楼层跳转 */
.on("click",".nav-item",function(){
	var itemId = $(this).attr("data-for"),
		headLine = $("#" + itemId);
	$('body,html').animate({ scrollTop: headLine.offset().top }, 1000);
})
