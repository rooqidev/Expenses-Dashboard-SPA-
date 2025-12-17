export let items = JSON.parse(localStorage.getItem("items")) || [];

export function saveItems() {
  localStorage.setItem("items", JSON.stringify(items));
};

export function addtolist(category, item, price) {
  items.push({
    id: Date.now(),
    category: category,
    item: item,
    price: price,
  });
  saveItems();
}

export function resetingData() {
  localStorage.setItem("items", JSON.stringify(items.filter(item => item != item)));
};

export function deleteItem(id) {
  items = items.filter(item => item.id != id);
  saveItems();
}

export function renderExpenses() {
  const tracks = document.querySelector(".tracks");
  if (!tracks) return;
  tracks.innerHTML = "";
  
  if (items.length >= 1) {
    items.map((item) => {
        const itemHTML = document.createElement("div");
        itemHTML.innerHTML = `
        <div class="item-Card">
        <div class="Card">
        <p class="category">${item.category || ""}</p>
        <p>${item.item || ""}</p>
        <p>${localStorage.getItem("currency") || "$"}${item.price || ""}</p>
        </div>
        <button class="item" tabindex="0" id="delete-btn" data-index="${item.id}">X</button>
        </div>
        `;
        tracks.appendChild(itemHTML);
      });
    } else {
      tracks.innerHTML = `
    <div class="no-items">
    <b>No Tracks to show..</b>
    </div>
    `;
    }
  }