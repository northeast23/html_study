let price = 0;
let menu = '카페라떼'; // 메뉴를 바꿔보세요!

switch (menu) {
        case '아메리카노':
                price = 4000;
      case '카페라떼':
                price = 5000;
        case '바닐라라떼':
                price = 6000;
      case '콜드브루':
                price = 5500;
        case '딸기라떼':
                price = 7000;
      case '레몬에이드':
                price = 6500;
        case '에스프레소':
                price = 3500;
      case '루이보스':
                price = 4500;
        default:
                console.log('메뉴를 정확히 입력하세요.');
}

text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)
// document.body.innerHTML = text
// document.write(text)


// 이렇게 쓴다 (in html)
const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = ''
for (let i = 0; i < cars2.length; i++) {
    text2 += '<section><h2>' + cars2[i] + '</h2></section>' 
}
text2

