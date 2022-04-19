$('.slider').slick({
  autoplay:true,
  autoplaySpeed:5000,
  dots:true,
});

ScrollReveal().reveal(".balloon", {
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
});