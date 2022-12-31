$(document).ready(function() {
  $(".portfolio-item").click(function() {
    $(".collapse").collapse("hide");
  });

  lightbox.option({
    //"resizeDuration": 200,
    "wrapAround": true
  });
});