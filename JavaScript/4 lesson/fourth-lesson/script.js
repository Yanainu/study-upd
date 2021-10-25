const button = document.documentElement.querySelector('.faq__card-btn');
const content = document.documentElement.querySelector('.faq__card-content');
const box = document.documentElement.querySelector('.faq__card-box'); 
const plus = document.documentElement.querySelector('.faq__card-btn-plus-vis');
const minus = document.documentElement.querySelector('.faq__card-btn-minus-invis');



button.addEventListener('click', event => {
    content.classList.toggle('faq__card-content-is-visible');
    box.classList.toggle('faq__card-box-opened');
    plus.classList.toggle('plus-invis');
    minus.classList.toggle('minus-vis');
})
