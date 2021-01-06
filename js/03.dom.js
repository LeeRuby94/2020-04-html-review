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
	$listWrap.empty(); //리스트랩 안에 있는 내용을 지움 
}

function onRemove(){
	$listWrap.remove(); //리스트랩이 지워짐
}

function onHtml(){
	$listWrap.html('<h1>Hello</h1>');
}

function onText(){
	$listWrap.text('<h1>Hello</h1>')
}

function onReset(){
	$('.container').html('<div class="list-wrap text-center"><div>====== 기준 ======</div></div>');
	$listWrap = $(".list-wrap"); //이거 초기화 해준 거임
}