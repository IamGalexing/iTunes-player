(() => {
  "use strict";
  var e = function e() {
      var t = document.querySelector(".radio"),
        o = document.querySelector(".radio-cover__img"),
        a = document.querySelector(".radio-navigation"),
        n = document.querySelector(".radio-header__big"),
        c = document.querySelectorAll(".radio-item"),
        r = document.querySelector(".radio-stop"),
        u = document.querySelector(".radio-volume"),
        i = document.querySelector(".radio-mute"),
        s = new Audio();
      (s.type = "audio/aac"), (r.disabled = !0);
      var d = function () {
        s.paused
          ? (t.classList.remove("play"),
            r.classList.add("fa-play"),
            r.classList.remove("fa-stop"))
          : (t.classList.add("play"),
            r.classList.add("fa-stop"),
            r.classList.remove("fa-play"));
      };
      a.addEventListener("change", function (e) {
        var t,
          a = e.target,
          u = a.closest(".radio-item");
        (t = u),
          c.forEach(function (e) {
            return e.classList.remove("select");
          }),
          t.classList.add("select");
        var i = u.querySelector(".radio-name").textContent;
        n.textContent = i;
        var l = u.querySelector(".radio-img").src;
        (o.src = l),
          (r.disabled = !1),
          (s.src = a.dataset.radioStantion),
          s.play(),
          d();
      }),
        r.addEventListener("click", function () {
          s.paused ? s.play() : (s.pause(), d());
        }),
        u.addEventListener("input", function () {
          (s.volume = u.value / 100), (s.muted = !1);
        }),
        i.addEventListener("click", function () {
          s.muted = !s.muted;
        }),
        (u.value = 100 * s.volume),
        (e.stop = function () {
          s.pause(), d();
        }),
        console.log("Radio init.");
    },
    t = function e() {
      var t = document.querySelector(".video-player"),
        o = document.querySelector(".video-button__play"),
        a = document.querySelector(".video-button__stop"),
        n = document.querySelector(".video-time__passed"),
        c = document.querySelector(".video-progress"),
        r = document.querySelector(".video-time__total"),
        u = document.querySelector(".video-volume");
      document
        .querySelector(".video-fullscreen")
        .addEventListener("click", function () {
          t.requestFullscreen(), (t.controls = !0);
        }),
        t.addEventListener("fullscreenchange", function () {
          document.fullscreen ? (t.controls = !0) : (t.controls = !1);
        });
      var i = function () {
          t.paused
            ? (o.classList.remove("fa=play"), o.classList.add("fa-pause"))
            : (o.classList.remove("fa-pause"), o.classList.add("fa-play"));
        },
        s = function (e) {
          e.preventDefault(), t.paused ? t.play() : t.pause(), i();
        },
        d = function (e) {
          return e < 10 ? "0" + e : e;
        },
        l = function () {
          var e = u.value;
          t.volume = e / 100;
        };
      t.addEventListener("click", s),
        o.addEventListener("click", s),
        t.addEventListener("play", i),
        t.addEventListener("pause", i),
        a.addEventListener("click", function () {
          t.pause(), (t.currentTime = 0);
        }),
        t.addEventListener("timeupdate", function () {
          var e = t.currentTime,
            o = t.duration;
          c.value = (e / o) * 100;
          var a = Math.floor(e / 60),
            u = Math.floor(e % 60),
            i = Math.floor(o / 60),
            s = Math.floor(o % 60);
          (n.textContent = "".concat(d(a), ":").concat(d(u))),
            (r.textContent = "".concat(d(i), ":").concat(d(s)));
        }),
        c.addEventListener("input", function () {
          var e = t.duration,
            o = c.value;
          t.currentTime = (o * e) / 100;
        }),
        u.addEventListener("input", l),
        t.addEventListener("volumechange", function () {
          u.value = Math.round(100 * t.volume);
        }),
        l(),
        (e.stop = function () {
          t.pause(), i();
        });
    },
    o = function e() {
      var t = document.querySelector(".audio"),
        o = document.querySelector(".audio-img"),
        a = document.querySelector(".audio-header"),
        n = document.querySelector(".audio-player"),
        c = document.querySelector(".audio-navigation"),
        r = document.querySelector(".audio-button__play"),
        u = document.querySelector(".audio-progress"),
        i = document.querySelector(".audio-progress__timing"),
        s = document.querySelector(".audio-time__passed"),
        d = document.querySelector(".audio-time__total"),
        l = function (e) {
          return e < 10 ? "0" + e : e;
        },
        v = ["hello", "flow", "speed"],
        p = 1,
        m = function () {
          var e = n.paused,
            t = v[p];
          (o.src = "./audio/".concat(t, ".jpg")),
            (n.src = "./audio/".concat(t, ".mp3")),
            (a.textContent = t.toUpperCase()),
            e ? n.pause() : n.play();
        },
        f = function () {
          p === v.length - 1 ? (p = 0) : p++, m(), (i.style.width = 0);
        };
      c.addEventListener("click", function (e) {
        var o = e.target;
        o.classList.contains("audio-button__play") &&
          (t.classList.toggle("play"),
          r.classList.toggle("fa-play"),
          r.classList.toggle("fa-pause"),
          n.paused ? n.play() : n.pause());
        var c = v[p];
        (a.textContent = c.toUpperCase()),
          o.classList.contains("audio-button__prev") &&
            (0 !== p ? p-- : (p = v.length - 1), m(), (i.style.width = 0)),
          o.classList.contains("audio-button__next") && f();
      }),
        n.addEventListener("ended", function () {
          f(), n.play();
        }),
        n.addEventListener("timeupdate", function () {
          var e = n.duration,
            t = n.currentTime,
            o = (t / e) * 100;
          i.style.width = o + "%";
          var a = Math.floor(t / 60) || "0",
            c = Math.floor(t % 60) || "0",
            r = Math.floor(e / 60) || "0",
            u = Math.floor(e % 60) || "0";
          (s.textContent = "".concat(l(a), ":").concat(l(c))),
            (d.textContent = "".concat(l(r), ":").concat(l(u)));
        }),
        u.addEventListener("click", function (e) {
          var t = (e.offsetX / u.clientWidth) * n.duration;
          n.currentTime = t;
        }),
        (e.stop = function () {
          n.paused ||
            (n.pause(),
            t.classList.remove("play"),
            r.classList.add("fa-play"),
            r.classList.remove("fa-pause"));
        }),
        console.log("Music init.");
    },
    a = document.querySelectorAll(".player-btn"),
    n = document.querySelectorAll(".player-block"),
    c = document.querySelector(".temp");
  a.forEach(function (r, u) {
    r.addEventListener("click", function () {
      (c.style.display = "none"),
        a.forEach(function (e) {
          e.classList.remove("active");
        }),
        n.forEach(function (e) {
          e.classList.remove("active");
        }),
        t.stop(),
        e.stop(),
        o.stop(),
        r.classList.add("active"),
        n[u].classList.add("active");
    });
  }),
    t(),
    e(),
    o();
})();
