// const btnRed = document.getElementById('btn-red');
// const btnBule = document.getElementById('btn-blue');
// const btnGreen = document.getElementById('btn-green');

// btnRed.addEventListener('click', (e) => {
//     document.body.style.backgroundColor = 'red';
// });
// btnBule.addEventListener('click', (e) => {
//     document.body.style.backgroundColor = 'blue';
// });
// btnGreen.addEventListener('click', (e) => {
//     document.body.style.backgroundColor = 'green';
// });

const btnRed = document.querySelector('#btn-red');
const btnBule = document.querySelector('#btn-blue');
const btnGreen = document.querySelector('#btn-green');

btnRed.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});
btnBule.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'blue';
});
btnGreen.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'green';
});