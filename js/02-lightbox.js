import { galleryItems } from './gallery-items.js';
// Change code below this line
const divEl = document.querySelector('.gallery');

console.log(galleryItems);

function createGalleryImage(items) {
  return items.map(item =>  `<div class="gallery__item">
      <a class="gallery__item" href='${item.original}'>
      <img class="gallery__image" src='${item.preview}' alt='${item.description}' />
      </a> 
  </div>`)
  .join(' ');
    
};

const addGalleryImage = createGalleryImage(galleryItems);

divEl.insertAdjacentHTML("afterbegin", addGalleryImage);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

// task 2 
// divEl.addEventListener('click', openModal);

// function openModal(event) {
//   event.preventDefault();
//   const { target: elemImg } = event;
//   console.log(event.target);
//   console.log(event.currentTarget);
//   const instance = basicLightbox.create(`
//     <img src='${elemImg.dataset.source}' alt = '${elemImg.alt}'>`)

//   instance.show()
//   if (elemImg.dataset.source === false) {
//     return;
    
//   };
//   console.log(event);
// }
