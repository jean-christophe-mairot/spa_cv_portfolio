// variable pour la selection du bouton
var btn = document.querySelector("button.btn-eye");
// variable selection de la div
var hideAppText = document.querySelector("div.appText");
// fonction pour pour faire switcher la class hide
function switchHide() {
  hideAppText.classList.toggle("hide");
}
// ecoute du click qui declenche la function switchHide
btn.addEventListener("click", switchHide);

console.log(btn);
