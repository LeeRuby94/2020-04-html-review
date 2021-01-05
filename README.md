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

//함수,즉 펑션과 메서드의 차이?
```
0. Selector(선택자)
        
1. Animation
```js
hide()
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