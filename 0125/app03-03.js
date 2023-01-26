// (2) getXXX() method --> 책에서 2번 기준으로 설명을 많이 함
// HTMLCollection => array-like-objcet
let title = document.getElementById('title');
console.log(title);
console.log(typeof title);
title.textContent = 'Welcome to School of SmartIt!!';
console.log(title);

let items = document.getElementsByClassName('item'); // 같은 변수명이 여러개 있을 경우 복수로 만들 것!!
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

// (1) HTML Element query => Nodelist
// --> 많이 씀, query로 쓸 것!!
let h2 = document.querySelector('#title');
console.log(h2);

let items2 = document.querySelector('.item');
console.log(items2);

let items3 = document.querySelectorAll('.item');
console.log(items3);
console.log(items3[0]);
console.log(items3[1]);
console.log(items3[2]);