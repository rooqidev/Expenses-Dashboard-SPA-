 import { items } from './storage.js';
 
 export function Dashboard() {
   setTimeout(() => {
     // calculating totals
     const overall_items = items.length;
     const ovarall_amout = items.map(item => Number(item.price));
     const ovarall_total_amout = ovarall_amout.reduce((acc, n) => acc + n, 0);
     const dashboard = document.querySelector("#dashboardData");
     
     function updateDashb() {
       setTimeout(() => {
         // calculating cheepest & expensiest item
         const expense = items.map(item => Number(item.price));
         const sorted = expense.sort((a, b) => a - b);
         const expensiestItem = sorted.reduce((max, e) => e.price > max.price ? max : e);
         const expensiest = items.find(item => Number(item.price) === expensiestItem);
         document.querySelector(".expensiest-One").innerHTML = `<p>${expensiest.item || "0"}</p>
        <h2>${localStorage.getItem("currency")|| "$"}${expensiest.price || "0"}</h2>
          <p>Most Expensive One</p> `;
         const sortedRev = expense.sort((a, b) => b - a);
         const cheepestItem = sortedRev.reduce((lowest, e) => e.price > lowest.price ? lowest : e);
         const cheepest = items.find((item) => Number(item.price) === Number(cheepestItem));
         document.querySelector(".cheepest-One").innerHTML = `<p>${cheepest.item || "0"}</p>
        <h2>${localStorage.getItem("currency")|| "$"}${cheepest.price || "0"}</h2>
        <p>Cheapest Item</p>`;
         
         // Category selection
         const currentCategory = document.querySelector("#data").textContent;
         console.log(currentCategory);
         const categoryItems = items.filter((category) => category.category === currentCategory);
         const total_items = categoryItems.length;
         const total = categoryItems.map(item => Number(item.price));
         const total_amount = total.reduce((acc, n) => acc + n, 0);
       
         document.querySelector(".total-amount").innerHTML = `${localStorage.getItem("currency")|| "$"}${total_amount}`;
         document.querySelector(".total-items").innerHTML = total_items;
         
       }, 0);
       
     };
     updateDashb();
     // Showing categories
     const itemCates = new Set(items.map((item) => item.category));
     const categoryHTML = [...itemCates].map((category) => `
        <button class="item" tabindex="0" data-id="${category}" data-index="choosedCategory">${category}</button>
    `).join("");
     const selected_Cate = document.getElementById("data");
     
     document.addEventListener("click", (e) => {
       if (e.target.id === "data") {
         document.addEventListener("click", (e) => {
           if (e.target.dataset.index === "choosedCategory") {
             const selectedCategory = e.target.dataset.id;
             
             document.querySelector("#data").innerHTML = selectedCategory;
             updateDashb();
             
             document.body.removeChild(categoryModel);
           }
         })
         
         const categoryModel = document.createElement("div");
         categoryModel.innerHTML = `
         <div id="categoryModel">
         <h2>Category Specific Items</h2>
         ${categoryHTML}
         </div>
          `;
         document.body.appendChild(categoryModel);
       }
     });
     
     dashboard.innerHTML = `
     
  <div class="data" id="box1">
  <h2>${localStorage.getItem("currency") || "$"}${ovarall_total_amout || "0"}</h2>
  <p>Overall Total Amount</p> 
  </div>
  
  <div class="data" id="box2">
  <h2>${overall_items || "0"}</h2>
  <p>Overall Total Items</p>
  </div>
    <div class="data" id="box6">
  <p class="expensiest-One"></p>
  </div>
  <div class="data" id="box5">
  <p class="cheepest-One"></p>
   </div>

  <div class="data" id="box3">
  <h2 class="total-amount"></h2>
  <p>Total Amount</p> 
  </div>
 
  <div class="data" id="box4">
  <h2 class="total-items"></h2>
  <p class="">Total Items</p>
  </div>
  <button class="item" tabindex="0" id="data" data-id="categories">${[...itemCates][0]}</button>
     `;
   }, 0);
   
   return `
  <div id="dashboard-Div">
  <div id="dashboardData"></div>
  </div>
  `;
 }
// <h1>Measure Everything</h1>