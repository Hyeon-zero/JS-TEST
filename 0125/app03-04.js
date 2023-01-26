// (1) Element Property 직접 수정 --> Inline Style Sheet
let deptItem =document.querySelector('.dept');
console.log(deptItem);
deptItem.style.color = 'red';

// (2) CSS Class를 이용하는 방법
deptItem.classList.add('dark');
