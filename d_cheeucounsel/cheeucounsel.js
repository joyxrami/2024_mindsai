// counsel apply//
$(function(){
    $(".inner .cheeucounsel--btn").hover(function(){
      $("#cheeucounsel--apply--normal").css("visibility","hidden");
      $("#cheeucounsel--apply--hover").css("visibility","visible");
    },function(){
      $("#cheeucounsel--apply--normal").css("visibility","visible");
      $("#cheeucounsel--apply--hover").css("visibility","hidden");
    });
  });
