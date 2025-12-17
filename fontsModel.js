import { builtInCSSFonts } from './built-in_fonts.js';
export function fontsModel() {
  const fontsHTML = builtInCSSFonts.map((font) => `
  <button style="font-family: ${font};" class="item" tabindex="0" data-id="${font}">${font}</button>
  `).join('');
  
  const fontsListModel = document.createElement("div");
  fontsListModel.innerHTML = "";
  fontsListModel.innerHTML = `
  <div class="fonsts-model">
  <h2>Set your font</h2>
  ${fontsHTML}
  <div/>`
  return fontsListModel;
}