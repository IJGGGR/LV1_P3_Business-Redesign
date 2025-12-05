
// todo: do none of the numbered combos have sides listed? rice, beans, salad, and tortillas?
// todo: combos > no. 4 : what kind of meat?

const categoryIDs = [
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
  for (let i = 0; i < categoryIDs.length; i++) {
    document.getElementById("btn-" + categoryIDs[i]).classList.remove("btn-menu-select");
  }

  // reset all div
  for (let i = 0; i < categoryIDs.length; i++) {
    document.getElementById("div-" + categoryIDs[i]).classList.remove("div-menu-select");
  }

  document.getElementById("btn-" + id).classList.add("btn-menu-select");
  document.getElementById("div-" + id).classList.add("div-menu-select");
}

// POPULATE MENU ITEMS
fetch("/data/menu.json")
  .then(some => some.json())
  .then(data => {
    for (let i = 0; i < categoryIDs.length; i++) {
      const curr = categoryIDs[i];
      const list = data[curr]["list"];
      const elem = document.querySelector(`#div-${curr} #list`);

      elem.innerHTML = ""; // clear div

      for (let j = 0; j < list.length; j++) {
        const item = list[j];

        // luckily empty elements don't render
        elem.innerHTML +=
          `<div class="row align-items-center">` +
            `<div class="col-12 col-md">` +
              `<span class="mb-0 h3 lh-sm">${item["name"]}</span>` +
            `</div>` +
            `<div class="col-12 col-md-auto">` +
              `<span class="mb-0 h6 lh-sm">${item["cost"]}</span>` +
            `</div>` +
            `<div class="col-12">` +
              `<span class="mb-0 fs-6 lh-base">${item["desc"] ?? ""}</span>` +
            `</div>` +
          `</div>`;

        // avoids placing a trailing <hr>
        if (j !== list.length - 1) {
          elem.innerHTML += "<hr>";
        }
      }
    }
  });

// SELECT POPULAR ITEMS
select(categoryIDs[0]);

// CREATE BUTTON LISTENERS
for (let i = 0; i < categoryIDs.length; i++) {
  document.getElementById("btn-" + categoryIDs[i]).addEventListener("click", () => {
    select(categoryIDs[i]);
  });
}
