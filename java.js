var button = document.getElementById("play-button");
button.addEventListener("click", function() {
    console.log('444');
  const audio = new Audio("./aaaaaaaaaaaaaaaaaaa.mp3");
  audio.play();
});
$(document).ready(function(){
    $("#toggle-button").click(function(){
      var p = $("#example");
      if (p.is(":visible")) {
         p.hide();
      } else {
         p.show();
      }
    });
  });
  