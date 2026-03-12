import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
<a href="${largeImageURL}">
<img src="${webformatURL}" alt="${tags}" />
</a>
<div class="info">
    <p><b>Likes</b><br><span class="value">${likes}</span></p>
    <p><b>Views</b><br><span class="value">${views}</span></p>
    <p><b>Comments</b><br><span class="value">${comments}</span></p>
    <p><b>Downloads</b><br><span class="value">${downloads}</span></p>
  </div>
</li>
`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("show");
}

export function hideLoader() {
  loader.classList.remove("show");
}