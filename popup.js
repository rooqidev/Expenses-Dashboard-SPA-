export function dashboardLock() {
  const poPup = document.createElement("div");
  poPup.className = "dashboard-poPup";
  poPup.innerHTML = `
  <h1>Enter some data..</h1>
  <p>Don't enough data to show..</p>
  <button class="item" tabindex="0" id="okDashB">Ok!</button>
  `;
  return poPup;
}

export function resetDataSuccess() {
  const successCard = document.createElement("div");
  successCard.className = "successCard-poPup";
  successCard.innerHTML = `
  <div class="success-Card">
  <h1>Operation Successful!</h1>
  <p>Restart to see the Results.</p>
  <button class="item" tabindex="0" id="okBtn">Ok!</button>
  </div>
  `;
  return successCard;
}

export function resetData() {
  
  const warning = document.createElement("div");
  warning.innerHTML = `
      <div class="warning-Card">
      <h1>Sure? deleting your data...</h1>
      <p>Action can't be undone..</p>
      <div>
      <button class="item" tabindex="0" id="delete-it">Yes! Delete It</button>
      <button class="item" tabindex="0" id="dont-delete">No! Don't Delete It</button>
      </div>
      </div>
      `;
  return warning;
};