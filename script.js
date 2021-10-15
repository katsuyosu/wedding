$(function(){
//メニューのクリック
  $('.hamburger').on('click',function(){
    $('.hamburger,#navi').toggleClass('active');
  })

  $('.inview-slide-left').on('inview',function(event,isInView){
    if(isInView){
      $(this).stop().addClass('slide-left');
    }
  });
  $('.inview-slide-right').on('inview',function(event,isInView){
    if(isInView){
      $(this).stop().addClass('slide-right');
    }
  });

  $('.firstday,.Wefellinlove,.Willyoumarryme,.Shestolehislastname,.WesaidIdo').on('inview',function(event,isInView){
    if(isInView){
      $(this).stop().addClass('balloon');
    }
  });


});
