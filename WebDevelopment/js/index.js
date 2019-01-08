$( function() {
  $("body > div > p").on("animationend",function(evt){
      var span = $("span[data-href]",this)[0];
      var href = span.dataset.href;
      window.location = href;
  });

  var xyz = 10;

  $("body > div > p").on("click",{ abc:xyz},function(evt){

      console.log(evt.data.abc);

      $("body > div > p").not(this).removeClass("clicked");
      $(this).addClass("clicked");
  });
});