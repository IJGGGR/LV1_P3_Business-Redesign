
// INDEX ===========================================================================================

document.querySelectorAll('.pop').forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    const imageSrc = this.querySelector('img').src;
    const modalImage = document.getElementById('imagepreview');
    modalImage.src = imageSrc;

    const myModal = new bootstrap.Modal(document.getElementById('imagemodal'));
    myModal.show();
  });
});

// MENU ============================================================================================

const baseIDs = [
  "popular-items",
  "burgers-and-sandwiches",
  "lunch-specials",
  "custom-combo",
  "soups-and-salads",
  "house-specials",
  "dinner",
  "combinations",
  "extras-and-sides",
  "beverages",
  "beer-and-wine",
  "breakfast",
  "desserts",
];

// reset all tab styling and category visibility then select one ("example" -> "btn-example" & "div-example")
function select(id) {
  console.log("select", id);

  // reset all btn
  for (let i = 0; i < baseIDs.length; i++) {
    document.getElementById("btn-" + baseIDs[i]).classList.remove("btn-menu-select");
  }

  // reset all div
  for (let i = 0; i < baseIDs.length; i++) {
    document.getElementById("div-" + baseIDs[i]).classList.remove("div-menu-select");
  }

  document.getElementById("btn-" + id).classList.add("btn-menu-select");
  document.getElementById("div-" + id).classList.add("div-menu-select");
}

// SELECT POPULAR ITEMS
select(baseIDs[0]);

// CREATE BUTTON LISTENERS
for (let i = 0; i < baseIDs.length; i++) {
  document.getElementById("btn-" + baseIDs[i]).addEventListener("click", () => {
    select(baseIDs[i]);
  });
}
