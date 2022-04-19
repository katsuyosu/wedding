// id="body"要素の一番上の位置を取得
const profileTop = $(".profile").offset().top;

// スクロールをトリガーに処理を開始
$(window).scroll(function () {
  // トップからのスクロール量を取得
  let scroll = $(this).scrollTop();
  if (scroll >= profileTop) {
    // id="body"要素より下にきたらアイコンを表示
    $("#header").attr({
      style: "visibility: visible; opacity: 1;",
    });
  } else {
    // id="body"要素より上にきたらアイコンを非表示
    $("#header").attr({
      style: "visibility: hidden; opacity: 0;",
    });
  }
});
ScrollReveal().reveal(".balloon", {
  duration: 800, // アニメーションの完了にかかる時間
  viewFactor: 0.9, // 0~1,どれくらい見えたら実行するか
});
ScrollReveal().reveal(".antro", {
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0.9, // 0~1,どれくらい見えたら実行するか
});
ScrollReveal().reveal(".trip-title", {
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
});
ScrollReveal().reveal(".trip-item", {
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
});

$('.slider').slick({
  autoplay:true,
  autoplaySpeed:5000,
  dots:true,
});