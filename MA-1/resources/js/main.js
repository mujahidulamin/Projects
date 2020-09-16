$(document).ready(function(){
    
    //Sticky Menu
    $(".js--services-section").waypoint(function(direction){
        if(direction =="down"){
            $("nav").addClass("sticky");
           }else{
            $("nav").removeClass("sticky");
           }
    });
    

    //Scroll Top to Up
    
      $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('.topBtn').fadeIn();
    } else{
      $('.topBtn').fadeOut();
    }
  });

  $(".topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},200);
  });
    
    
    
    
    
    
    
    
    
    //Mixitup (portfolio section)
    var mixer = mixitup('.container');
    
    //Smooth Scroll IE/EDGE/SAFARI

    
    
    
    
    
    
});

function openNav(){
    document.getElementById("myNav").style.width="100%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}