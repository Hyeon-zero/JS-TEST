const $body = document.querySelector('body');
const $main = document.querySelector('main');
const $div = document.querySelector('div');
const $p = document.querySelector('p');
const $span = document.querySelector('span');

console.log($body);
console.log($main);
console.log($div);
console.log($p);
console.log($span);

// Capturing
$span.addEventListener('click', () => {
    console.log('span tag가 capturing 되었습니다.');
}, true);
$p.addEventListener('click', () => {
    console.log('p tag가 capturing 되었습니다.');
}, true);
$div.addEventListener('click', () => {
    console.log('div tag가 capturing 되었습니다.');
}, true);
$main.addEventListener('click', () => {
    console.log('main tag가 capturing 되었습니다.');
}, true);
$body.addEventListener('click', () => {
    console.log('body tag가 capturing 되었습니다.');
}, true);

// Bubbling
$span.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('span tag가 bubbling 되었습니다.');
},false);
$p.addEventListener('click', () => {
    console.log('p tag가 bubbling 되었습니다.');
});
$div.addEventListener('click', () => {
    console.log('div tag가 bubbling 되었습니다.');
});
$main.addEventListener('click', () => {
    console.log('main tag가 bubbling 되었습니다.');
});
$body.addEventListener('click', () => {
    console.log('body tag가 bubbling 되었습니다.');
});
// option을 생략하면 default 값은 false