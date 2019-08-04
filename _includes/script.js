// find closest matching element
let closest = function(element, selector) {
  do {
    if (element.matches && element.matches(selector)) {
      return element;
    }
    element = element.parentNode;
  } while (element);
  return null;
};

// when icon is clicked, add to favorites
window.addEventListener("click", e => {
  var icon = closest(e.target, ".icon");
  if (icon) {
    icon.classList.toggle("favorite");
  }
});

// add listener to favorites toggle
document.getElementById("favorites").addEventListener("change", function(e) {
  document.body.classList.toggle("only-show-fave", this.checked);
});

// add listener to minimal toggle
document.getElementById("minimal").addEventListener("change", function(e) {
  document.body.classList.toggle("minimal", this.checked);
});

// add listener to name toggle
document.getElementById("show-name").addEventListener("change", function(e) {
  document.body.classList.toggle("show-name", this.checked);
});
