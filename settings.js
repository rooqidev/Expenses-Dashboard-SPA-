import { resetData, resetDataSuccess } from './popup.js';
import { changeFont } from './fontStyle.js';
import { changeCurrency } from './currency.js';
import { resetingData } from './storage.js';

export function Settings() {
  setTimeout(() => {
    const currencyBtn = document.querySelector("#currency-Btn");
    currencyBtn.addEventListener("click", () => changeCurrency());
    const fontBtn = document.querySelector("#font-style");
    fontBtn.addEventListener("click", () => changeFont());
    const resetBtn = document.querySelector("#reset-data");
    // Reseting data
    resetBtn.addEventListener("click", () => {
      setTimeout(() => {
        document.addEventListener("click", (e) => {
          if (e.target.id === "delete-it") {
            resetingData();
            document.body.removeChild(warning);
            //alert("Refresh to see Results..");
            setTimeout(() => {
              const okBtn = document.querySelector("#okBtn");
              okBtn.addEventListener("click", () => {
                document.body.removeChild(successCard);
              });
            }, 0)
            const successCard = resetDataSuccess();
            document.body.appendChild(successCard);
          } else if (e.target.id === "dont-delete") {
            document.body.removeChild(warning);
          }
        });
        
        
      }, 0);
      
      const warning = resetData();
      document.body.appendChild(warning);
    });
    
  }, 0)
  return `
  <div class="settings-Div">
  <h1>Your Prefrence</h1>
  <div class="settings"></div>
  <button class="item" tabindex="0" id="currency-Btn">Change Currency</button>
  <button class="item" tabindex="0" id="font-style">Change Font</button>
  <button class="item" tabindex="0" id="reset-data">Reset Data</button>
  </div>
  `;
}