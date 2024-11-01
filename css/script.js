const searchInput = document.getElementById("search");
const searchIcon = document.getElementById("icon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  if (searchInput.classList.contains("active")) {
    searchInput.focus(); // Foca no campo ao expandir
  } else {
    searchInput.blur(); // Remove o foco ao contrair
  }
});

searchInput.addEventListener("blur", () => {
  searchInput.classList.remove("active"); // Contrai ao sair
});
