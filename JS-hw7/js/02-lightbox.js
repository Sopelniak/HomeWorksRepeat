import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(
      (item) => `
        <li>
          <a class="gallery__item" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              alt="${item.description}"
            />
          </a>
        </li>
        `
    )
    .join("")
);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  scrollZoom: false,
});
