
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  $(function () {
    // #acc1以外を縮める
    $('dd[id != "acc1"]').css("width", "0px");
  });

  // a要素をclick
  $("a").click(function () {
    $(".current").animate({ "width": "0px" }, 300);
    // click時処理
    $($(this).attr("href")).animate({ "width": "800px" }, 300);
    $("dd").removeClass();
    $($(this).attr("href")).addClass("current");
    $("a").removeClass();
    $(this).addClass("currentBtn");
    return false;
  });

  // ↓消さない
});
