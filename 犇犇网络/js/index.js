$(function () {
  var timer = null;
  var num = 0;

  function st() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      num++;
      clearTimeout(timer);
      if (num > 3) {
        num = 0;
      }
      $(".banner>div").eq(num).removeClass('di');
      $(".banner>div").eq(num).siblings().addClass('di');
      st();
    }, 5000)
  }
  st();

})