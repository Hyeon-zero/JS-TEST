// 1) Event를 추가하는 방법
let addBtn = document.getElementById('button');
let inputBox = document.querySelector('input');

let addBeforeBtn = document.getElementById('before');

let reomveTargetBtn = document.querySelector('#target-remove');

// console.log(inputBox.value);
addBtn.addEventListener('click', () => {
    // alert('환영합니다.. 자바스크립트!');
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    li.textContent = inputBox.value;
    // li.textContent = 'HTML5';
    ul.appendChild(li);
});

// 2) insertBefore로 추가하기
addBeforeBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    let targetli = document.querySelector('li#target');

    li.textContent = inputBox.value;
    ul.insertBefore(li, targetli);
});

// 3) 삭제하기  
reomveTargetBtn.addEventListener('click', () => {
    let targetli = document.querySelector('#target-remove');
    let li = document.querySelector('li');

    li.remove(targetli);
});

