import { dashboardLock } from './popup.js';
import { saveItems, items, addtolist, renderExpenses } from './storage.js';

export function Home() {
  setTimeout(() => {
    // taking data
    const categoryInput = document.getElementById("categoryInput");
    const itemInput = document.getElementById("itemInput");
    const priceInput = document.getElementById("priceInput");
    
    const addBtn = document.querySelector("#add");
    addBtn.addEventListener("click", () => {
      if (Number(priceInput.value.trim())) {
        if (categoryInput.value, itemInput.value) {
          const [category, item, price] = [categoryInput, itemInput, priceInput].map(input => input.value[0].toUpperCase() + input.value.slice(1).trim());
          addtolist(category, item, price);
          renderExpenses();
        } else {
          let red = setInterval(() => {
            [categoryInput, itemInput, priceInput].map(input => input.style.border = "1px solid red");
            
          }, 20);
          setTimeout(() => {
            [categoryInput, itemInput, priceInput].map(input => input.style.border = "1px solid white");
            clearInterval(red);
          }, 5000)
          
          return;
        }
        [categoryInput, itemInput, priceInput].map(input => input.value = "");
      } else {
        let red = setInterval(() => {
          [categoryInput, itemInput, priceInput].map(input => input.style.border = "1px solid red");
          
        }, 20);
        setTimeout(() => {
          [categoryInput, itemInput, priceInput].map(input => input.style.border = "1px solid white");
          clearInterval(red);
        }, 5000)
      }
      
    });
  }, 0);
  
  return `
  <div class="home-div">
  <div class="inputs">
  <h1>Record Track</h1> 
  <input class="item" tabindex="0" type="text" id="categoryInput" placeholder="Enter category.."/>
  <input class="item" tabindex="0" type="text" id="itemInput" placeholder="Enter item.."/>
  <input class="item" tabindex="0" type="text" id="priceInput" placeholder="Enter amount.."/>
  <button class="item" tabindex="0" id="add">Track</button>
  </div>
  </div>
  `;
}