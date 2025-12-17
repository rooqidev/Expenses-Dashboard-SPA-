import { fontsModel } from './fontsModel.js';
import { builtInCSSFonts } from './built-in_fonts.js';
document.body.style.fontFamily = localStorage.getItem("font");
export function changeFont(){

 document.addEventListener("click", (e) =>{
  const i = e.target.dataset.id;
  const fontFamily = builtInCSSFonts.find((font) => font === i);
  if(fontFamily){
   localStorage.setItem("font", fontFamily);
   document.body.style.fontFamily = localStorage.getItem("font");
   document.body.removeChild(fontsListModel);
  }
  
 });
 const fontsListModel = fontsModel();
 document.body.appendChild(fontsListModel);
}