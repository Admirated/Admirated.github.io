"use strict"

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
}

const detailCards = document.querySelectorAll('.details__card');
if (detailCards) {
   const detailsModal = document.querySelector('.details__modal'),
         modalClose = detailsModal.querySelector('.modal__close');
   detailCards.forEach(card => {
      card.addEventListener('click', () => {
         detailsModal.classList.add('_active');
      });
   })
   modalClose.addEventListener('click', () => {
      detailsModal.classList.remove('_active');
   });
}