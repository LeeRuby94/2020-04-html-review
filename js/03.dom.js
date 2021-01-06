/* ******* 전역 변수 선언 ********** */
var $listWrap = $(".list-wrap");
var tag = '<h2>추가내용</h2>';

/* ******* 이벤트 등록 ********** */
$('#btAppend').click(onAppend);
$('#btPrepend').click(onPrepend);
$('#btEmpty').click(onEmpty);
$('#btRemove').click(onRemove);
$('#btHtml').click(onHtml);
$('#btText').click(onText);
$('#btReset').click(onReset);

/* ********** 이벤트 콜백 ************ */
// 이벤트에서 바로 콜백 가려면 이벤트에서 단어누르고 f12누르면 바로 찾아짐
function onAppend(){
	$listWrap.append(tag);
	$(tag).appendTo($listWrap);
}
function onPrepend(){
	$listWrap.prepend(tag);
	$(tag).prependTo($listWrap);
}
function onEmpty(){

}
function onRemove(){

}
function onHtml(){

}
function onText(){

}
function onReset(){

}