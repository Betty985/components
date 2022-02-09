const top = function (a) {
  var timer = null;
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    let oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      if (a == true) scrollTo(0, oTop - 50);
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    }
  });
};
export { top };
