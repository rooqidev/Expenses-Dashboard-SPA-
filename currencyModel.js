import { currencySymbols } from './currencyList.js';

export function currencyModel() {
  const currencyHTML = currencySymbols.map((currency, index) => `
  <button class="item" tabindex="0" id="currency" data-id="${index}">${currency}</button>
  `).join('');
// currency model 
  const currencyListModel = document.createElement("div")
  currencyListModel.className = "currencys-Model";
  currencyListModel.innerHTML = "";
  currencyListModel.innerHTML = `
<h2>Set your currency</h2>
<div class="currency"> 
  ${currencyHTML}
</div> `
  return currencyListModel;
}