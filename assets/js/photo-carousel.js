(function () {
  var root = document.getElementById("photo-carousel");
  var dataEl = document.getElementById("photo-carousel-data");
  var image = document.getElementById("photo-carousel-image");
  var prev = document.getElementById("photo-carousel-prev");
  var next = document.getElementById("photo-carousel-next");
  if (!root || !dataEl || !image || !prev || !next) return;

  var photos = JSON.parse(dataEl.textContent);
  var index = 0;
  var timer = null;
  var delay = 5000;

  function show(nextIndex) {
    index = (nextIndex + photos.length) % photos.length;
    image.src = photos[index].src;
    image.alt = photos[index].alt;
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    stop();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = setInterval(function () {
      show(index + 1);
    }, delay);
  }

  prev.addEventListener("click", function () {
    show(index - 1);
    start();
  });
  next.addEventListener("click", function () {
    show(index + 1);
    start();
  });
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);
  start();
})();
