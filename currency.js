import { currencySymbols } from './currencyList.js';
import { currencyModel } from './currencyModel.js';

export function changeCurrency() {
  document.addEventListener("click", (e) => {
    if (e.target.id === "currency") {
      const ID = Number(e.target.dataset.id);
      
      const that_currency = currencySymbols[ID];
      if (that_currency) {
        localStorage.setItem("currency", that_currency);
        document.body.removeChild(model);
        
      } else {
        document.body.removeChild(model);
        return;
        
      }
    }
  });
  const model = currencyModel();
  document.body.appendChild(model);
};