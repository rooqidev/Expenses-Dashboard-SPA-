import { saveItems, items, addtolist, deleteItem, renderExpenses } from './storage.js';
import { deleteSure } from './itemDeleted.js';

export function Tracks() {
  setTimeout(() => {
    const trackPage = document.querySelector(".tracks-page");
    // Deleting Item
    document.addEventListener("click", (e) => {
      if (e.target.id === "delete-btn") {
        const index = e.target.dataset.index;
        const modelw = deleteSure();
        document.body.appendChild(modelw);
        setTimeout(() => {
          document.addEventListener("click", (e) => {
            if (e.target.id === "dontDelete") {
              document.body.removeChild(modelw);
            }
          });
          document.addEventListener("click", (e) => {
            if (e.target.id === "deleteIt") {
              deleteItem(index);
              renderExpenses();
              document.body.removeChild(modelw);
            }
          });
        }, 0);
      }
    });
    
    renderExpenses();
  }, 0);
  return `
  <div class="tracks-page">
  <h1>Track Each Item</h1>
  <div class="item-headings">
    <b>Category</b>
    <b>Item</b>
    <b>Price</b>
  </div>
  <div class="tracks"></div>
  </div>
  `;
}