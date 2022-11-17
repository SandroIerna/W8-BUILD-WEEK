let library = document.querySelector(
  "div.flex-column.bg-test.flex-grow-1.overflow-auto"
);
console.log(library);
let libraryArray = [];
const displayLibrary = () => {
  libraryArray.forEach((book) => {
    library.innerHTML += `
<p class="navbar-song-list my-1 ml-3">${book.title}</p>
`;
  });
};

const pushInLibraryArray = () => {};
