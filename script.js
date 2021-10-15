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
  $('.inview-balloon').on('inview',function(event,isInView){
    if(isInView){
      $(this).stop().addClass('balloon');
    }
  });


});
