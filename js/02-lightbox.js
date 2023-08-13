import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElements = document.querySelector('.gallery');


const createGalleryMarkup = galleryItems => {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href=${original}>
                <img class="gallery__image" src=${preview} alt=${description} />
            </a>`;
    })
    .join('');
};

galleryElements.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.5,
    captionDelay: 250,
    captionsData: 'alt',
    fadeSpeed: 250,
    rtl: true,
});
console.log(galleryItems);
