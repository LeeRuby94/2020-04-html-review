# HTML, CSS, ES5 jQuery 에서 복습 및 배울 것
    1. css FlexModel
    2. css Bootstrap (전통적인 방식)
    3. Swiper Plugin (jQuery)
    4. Javascript 심도있게
    5. jQuery 리뷰

# jQuery 리뷰
## 모든 jQuery 는 함수(메서드)로 만들어져 있다.
```js
$(".wrap").hide();

// 다음 중 올바른 표현을 고르시오. (2번만 사용 가능)
$(".a").hasClass("b").hide();
$(".a").append('<div>A</div>').hide(); //정답
$(".a").width().hide();
$(".a").attr("id").hide();
//-> $(".a").attr("id", "test").hide or show(); 4번 고치면 이케 돼

//함수,즉 펑션과 메서드의 차이?


// 다음의 문장을 Javascript로 변환하세요.
$("#sample")
document.getElementById("sample")
```
### 0. Selector(선택자) - 리턴 값 제이쿼리
  [Selector의 모든것](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)
  - find() children() eq() siblings() parent() parents() next() prev() 
```js
// 태그나 객체를 $()로 감싸 실행하면 jQuery객체가 리턴된다.
$(".a")
$("div")
$(".a > div")
$(document.getElementById('sample'))
$('<div>A</div>')
$('div, '.wrap') => .wrap 안의 div $('.wrap).find('div')와 같다
$('div, .wrap') => div와 .wrap 같이 선택

// $()[0] => 자바스크립트가 된다
$("#sample")[0] // 자바스크립트
```
### 1. Animation - jQuery return ( 리턴 값 제이쿼리)
  [애니메이션의 모든것](https://www.w3schools.com/jquery/jquery_ref_effects.asp)
```js
hide(300, function(){}) // 이 때 이 함수가 콜백임. 펑션괄호대괄호가!
show()
fadeIn()
fadeOut()
slideUp()
slideDown()
toggle()
fadeToggle()
slideToggle()
animate()
앞에 꼭 jQurey개체가 있어야 함
```
### 2. DOM(Document Object Model) : reutrn jQuery
  [DOM의 모든것](https://www.w3schools.com/jquery/jquery_ref_html.asp)
- append() appendTo() prependTo() remeve() empty() html() text()
```js
$('.a').appned('<div>A</div>').click    // return $('.a')
$('<div>A</div>').appnedTo('.a').click // return $('<div>A</div>' 즉,위와 리턴하는 값이 다르다
```

### 3. Attribute(html속성들), dataSet
  위의 dom의 모든것 주소에 들어가면 볼 수 있음.
  - Getter(가져오는): attr('속성')
  - Setter(세팅해주는): attr('속성', '값')
  - Getter: data('key키');
  - Setter: data('key키', 'value값');
  <!-- 자주봐야하는 사이트 3가지 1.w3cschools.com 2.developer.mozilla.org/ko/docs/Web/javaScript(모질라 자바스크립트) 3.api.jquery.com  그 외 stackoverflow-->
```html
<div class="a" id="A"></div>
```

```js
$(".a").attr("id"); // 문자열 "A"를 리턴해줌
$(".a").attr("id", "B"); // id="B'가되고, jQuery를 리턴해줌
$(".a").attr({
  id: "C"
  style: "background-color: #ccc"
});
```
### 4. CSS를 조작할 수 있음
  - Getter : css('속성')
  - Setter : css('속성', '값')
  - Setter : css({ '속성', '값', ... })
  - addClass('클래스명') removeClass('클래스명') toggleClass('클래스명')
  - hasClass('클래스명')

### 5. Dimension (단위)
  [크기의 모든 것](https://www.w3schools.com/jquery/jquery_dimensions.asp)
  - width() height() 
  - innerWidth() innerHeight() 
  - outerWidth() outerHeight()
  - outerWidth(true) outerHeight(true)
  - offset() => return {top: 200, left:100} 즉,객체를 리턴해줌
  - offset().top / offset().left
  - position().top / position().left
  - scrollTop()

### 6. Event
  -[이벤트의 모든것](https://www.w3schools.com/jquery/jquery_ref_events.asp)
  - click(), hover(), mouseover(), mouseleave(), mouseenter(), keyup(), keydown(),
  resize(), scroll() ...

###7. getter/setter
  - html(), text(), css(), attr(), ...

# Javascript Review
## 프로그래밍은 변수와 함수의 집합이다.

### 변수
1. Primmitive(원시) Type
  - String, Number, Boolean, undefined
2. Reference(참조) Type
  - Array, Object, Null
```js

```