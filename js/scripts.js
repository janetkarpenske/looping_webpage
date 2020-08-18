$(document).ready(function() {
  const favIceCreams = ["Coffee", "Pistachio", "Rocky Road"];

  // favIceCreams.forEach(function(favIceCream) {
  //   $("#iceCreams").append(" " + favIceCream + "!");
  // });
  for (let index = 0; index < favIceCreams.length; index += 1){
    $('#iceCreams').append(" " +favIceCreams[index]+"!");
  }
});