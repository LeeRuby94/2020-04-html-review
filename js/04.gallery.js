/******이벤트 등록*****/ 
$(".thumb img").click(onClick).eq(0).trigger("click");
//trigger는 미리 클릭해주는 것임

/******이벤트 콜백*****/ 
function onClick() {
	var src = $(this).attr('src');
	var title = $(this).data('title'); //데이타의 타이틀 .. html있는거 data-title이거.
	//둘 다 게터임 getter... 속성중에 src를 가져와 , 데이타를 가져와. 이 말이라고 함
	$(".img-main")
	.attr({ 'src': src, 'alt':title })
	.data('title', title)
	.css("opacity",0)
	.stop()
	.animate({"opacity":1},300);
}