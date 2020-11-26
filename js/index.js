// premier code test

// // variable pour la selection du bouton
// var btn = document.querySelector("button.toggle-xp");
// // variable selection de la div
// var hideAppText = document.querySelector("div.hide");

// // fonction pour pour faire switcher la class hide
// function switchHide() {
//   hideAppText.classList.slideDown("appText");
// }
// // ecoute du click qui declenche la function switchHide
// btn.addEventListener("click", switchHide);

// // console.log(hideAppText);

class DOMAnimation {
  /**
   *masque un element avec un effet de repli
   * @param {HTMLElement} element
   * @param {Number} duration
   *
   */
  // fonction static pour la class DOMAnimation
  static slideUp(element, duration = 1000) {
    // recupère la hauteur de l'element
    element.style.height = element.offsetHeight + "px";
    //
    // effet d'animation
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = duration + "ms";
    //force le redessin de la page effet d'animation ok
    element.offsetHeight;
    // pour masquer tout ce qui depasse
    element.style.overflow = "hidden";
    // pour le hidden reinitialisation à 0
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    // timer pour passer en display block on clean le html
    window.setTimeout(function () {
      element.style.display = "none";
      element.style.removeProperty("height");
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-bottom");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-property");
      element.style.removeProperty("transition-duration");
    }, duration);
  }

  /**
   *affiche un eleemnt avec un effet de depliement
   * @param {HTMLElement} element
   * @param {Number} duration
   *
   */
  // pour faire l'inverse

  static slideDown(element, duration = 1000) {
    element.style.removeProperty("display");
    let display = window.getComputedStyle(element).display;
    if (display === "none") display = "block";
    element.style.display = display;
    let height = element.offsetHeight;
    element.style.overflow = "hidden";
    // pour le hidden reinitialisation à 0
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    // force le redessin
    element.offsetHeight;
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = duration + "ms";
    // on lui redonne la hauteur
    element.style.height = height + "px";
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    // timer pour passer en display block on clean le html
    window.setTimeout(function () {
      element.style.display = "block";
      element.style.removeProperty("height");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-property");
      element.style.removeProperty("transition-duration");
    }, duration);
  }

  /**
   *affiche ou masque un element avec un effet de repli
   * @param {HTMLElement} element
   * @param {Number} duration
   *
   */

  static slideToggle(element, duration = 1000) {
    let display = window.getComputedStyle(element).display;
    if (display === "none") {
      this.slideDown(element, duration);
    } else {
      this.slideUp(element, duration);
    }
  }
}

document
  .querySelector(".btn-xp-webdev")
  .addEventListener("click", function (e) {
    // eviter le scroll vers le haut
    e.preventDefault();
    DOMAnimation.slideToggle(document.querySelector(".webdev"));
  });
