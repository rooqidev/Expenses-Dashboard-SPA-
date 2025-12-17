export function deleteSure(){
  const warningModel = document.createElement("div");
  warningModel.innerHTML = `
  <div class="deleteSure-model">
  <b>Deleting Item.. sure?</b>
  <button class="item" tabindex="0" id="deleteIt">Delete It</button>
  <button class="item" tabindex="0" id="dontDelete">Don't do It</button>
  </div>
  `;
  return warningModel;
}