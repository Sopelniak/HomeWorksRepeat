import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector("div.gallery");
let instance;

galleryEl.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    showLightbox(e.target.dataset.source);
  }
}

function onKeyup(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}

function showLightbox(url) {
  instance = basicLightbox.create(
    `
    <img src=${url} width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keyup", onKeyup);
      },
      onClose: () => {
        document.removeEventListener("keyup", onKeyup);
      },
    }
  );
  instance.show();
}

galleryEl.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(
      (item) => `
        <div class="gallery__item">
            <a class="gallery__link" href=${item.original}>
                <img
                    class="gallery__image"
                    src=${item.preview}
                    data-source=${item.original}
                    alt=${item.description}
                />
            </a>
        </div>`
    )
    .join("")
);
