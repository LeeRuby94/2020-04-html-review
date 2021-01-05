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
0. Selector(선택자)
```js
// 태그나 객체를 $()로 감싸 실행하면 jQuery객체가 리턴된다.
$(".a")
$("div")
$(".a > div")
$(document.getElementById('sample'))
$('<div>A</div>')

// $()[0] => 자바스크립트가 된다
$("#sample")[0] // 자바스크립트
```
1. Animation
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
2. DOM(Document Object Model)

3. Attribute(html속성들)

4. CSS를 조작할 수 있음

5. Dimension (단위)

6. Event

7. getter/setter
  - html(), text(), css(), attr(), ...