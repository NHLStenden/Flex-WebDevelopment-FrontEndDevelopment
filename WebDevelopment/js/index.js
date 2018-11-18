$( function() {
  $("body > div > p").on("animationend",function(evt){
      var span = $("span[data-href]",this)[0];
      var href = span.dataset.href;
      window.location = href;
  });

  $("body > div > p").click(function(evt){

      $("body > div > p").not(this).removeClass("clicked");
      $(this).addClass("clicked");
  });
});