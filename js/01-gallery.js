import { galleryItems } from './gallery-items.js';
// Change code below this line
const divEl = document.querySelector('.gallery');

console.log(galleryItems);

// 1 task 
function createGalleryImage(items) {
  return items.map(item =>  `<div class="gallery__item">
      <a class="gallery__link" href='${item.original}'>
      <img
        class="gallery__image"
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}'
      />
    </a>
  </div>`)
  .join(' ');
    
};
const addGalleryImage = createGalleryImage(galleryItems);

divEl.insertAdjacentHTML("afterbegin", addGalleryImage);

// task 2 
divEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();

  const { target: elemImg } = event;
  
  const instance = basicLightbox.create(`
    <img src='${elemImg.dataset.source}' alt = '${elemImg.alt}'>`)

  instance.show()
  if (elemImg.dataset.source === false) {
    return;
    
  };
  console.log(event);
}

// task Escape

// function escapeModal(event) {
//   if () {
    
//   }
// };

// document.addEventListener("keydown", escapeModal  {
//   // console.log("key: ", event.key);
//   // console.log("code: ", event.code);
// });




