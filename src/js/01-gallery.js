import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const block = document.querySelector(".gallery");
for (const item of galleryItems) {

  let imgLink = document.createElement("a");
  block.append(imgLink);
  imgLink.classList.add("gallery__link");
  imgLink.setAttribute("href", item.original)

  let img = document.createElement("img");
  imgLink.append(img);
  img.classList.add("gallery__image");
  img.setAttribute("src", item.preview);
  img.setAttribute("alt", item.description);
}

// Creating image options with simplelightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});