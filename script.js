'use strict'

// 時間によって挨拶を変える
const hour = new Date().getHours();
let greeting = "";

if (hour < 12) {
    greeting = "おはようございます！";
} else if (hour < 18) {
    greeting = "こんにちは！";
} else {
    greeting = "こんばんは！";
}

alert(greeting + "MyIR AkikoFujikawaへようこそ");

const btn = document.getElementById('myBtn');
const message = document.getElementById('message');


// クリックするたびに文字が変わる
btn.addEventListener('click', function() {
    if (message.textContent === '') {
        message.textContent = 'thank you for coming to my page!';  // 1回目は表示される
    } else {
        message.textContent = '';  // 2回目は消える
    }
});