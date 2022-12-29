window.onload = function () {
  var mainNav = document.getElementById("mainNav");
  var logoImg = document.getElementById("logoImg");
  var avatar = document.getElementById("panel");
  var navLink = document.querySelectorAll(".menu a");
  var heroActive = false;
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      if (!heroActive) {
        heroActive = true;
        mainNav.classList.add("navbar-color");
        mainNav.classList.add("navbar-after");
        avatar.classList.add("white");
        for (let i = 0; i < navLink.length; i++) {
          navLink[i].classList.add("navlinkAfter");
        }
        if (window.innerWidth < 956) return;
        logoImg.className = "consize";
      }
    } else {
      if (heroActive) {
        heroActive = false;
        mainNav.classList.remove("navbar-color");
        mainNav.classList.remove("navbar-after");
        avatar.classList.remove("white");
        for (let i = 0; i < navLink.length; i++) {
          navLink[i].classList.remove("navlinkAfter");
        }
        if (window.innerWidth < 956) return;
        logoImg.className = "";
      }
    }
  });

  var line = $(".line");

  var tl = new TimelineLite({
    onComplete: function () {
      tl.restart();
    },
  });

  TweenLite.defaultEase = Circ.easeInOut;

  var time = 0.9;
  var y = 100;

  tl.add(
    TweenMax.staggerFromTo(
      line,
      time,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
      },
      2
    )
  ).add(
    TweenMax.staggerTo(
      line,
      time,
      {
        delay: time,
        opacity: 0,
        y: -y,
      },
      2
    ),
    1.3
  );
};
