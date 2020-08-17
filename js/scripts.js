$(document).ready(function() {
  const favIceCreams = ["Coffee", "Pistachio", "Rocky Road"];

  favIceCreams.forEach(function(favIceCream) {
    $("#iceCreams").append(" " + favIceCream + "!");
  });
});