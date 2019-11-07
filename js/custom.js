$(function(){

  // Counter By Pluggin
  $(".num").each(function(){
    $(this).numScroll({
      number: $(this).data("number"),
      time: 3000,
      delay: 0
    })
  })
    // Tabs
    $(".tab-titles").children().click(function(e){
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
      $($(this).data("tab")).addClass("active").siblings().removeClass("active");
    })

})