//! 1. Напишіть функцію, яка буде викликатись при натисканні на клавішу Enter в інпуті і буде відображати введений текст в параграфі.

const p = document.getElementById('p')
const inputText = document.getElementById('textInput')

inputText.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
    p.textContent += inputText.value
    }
})

//! 2. Напишіть функцію, яка буде викликатись при введенні тексту в інпут і буде відображати введений текст в параграфі.

  // const input = document.getElementById("textOnline");
  // const output = document.getElementById("pOnline");

  // function outputText() {
  //   output.textContent = input.value;
  // }
  
  const input = document.getElementById("textOnline");
  const output = document.getElementById("pOnline");

  input.addEventListener("keyup", () => {
    output.textContent = input.value;
  });



//!  3. Напишіть функцію, яка буде викликатись при відведенні курсора від елементу і буде змінювати колір.

const btn3 = document.getElementById('btn3');

btn3.addEventListener('mouseleave', () => {
btn3.style.backgroundColor = 'red';
});
btn3.addEventListener('mouseenter', ()=>{
btn3.style.backgroundColor = 'transparent'
}) 

//! 4. Напишіть функцію, яка буде викликатись при наведенні курсора на елемент і буде додавати клас для зміни стилю(стилі на ваш вибір).

const btn4 = document.getElementById('btn4');
const input4 = document.getElementById('input4');

function changeStyle() {
btn4.classList.add('btn_style');
}

btn4.addEventListener('mouseenter', () => {
  changeStyle();
});

btn4.addEventListener('mouseleave', () => {
  btn4.classList.remove('btn_style');
});

//! 5. Напишіть функцію, яка буде викликатись при натисканні на кнопку і буде змінювати колір фону сторінки.

const themeColor = document.getElementById('colorBtnValue')
const body = document.getElementsByName('body')

const btn = document.getElementById('themeBtn')
btn.addEventListener('click', () => {
    console.log(themeColor.value);
    document.body.style.backgroundColor = themeColor.value;
})






