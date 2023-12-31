function VLPSkin(e, l, n) {
  var s, t, i, o, a, d, c, u, r, v, p, h, f, m, g, k, w, b, C, B, I, S, y, T, V, P, x, F, A, E, D, U, z, H, j, L, R, W, _, O, X;
  this.setIntervals = function() {
    _ = setInterval(s.checkResize, 200)
  }, this.clearIntervals = function() {
    clearInterval(H), clearInterval(j), clearInterval(L), clearInterval(R), clearInterval(W), clearInterval(_)
  }, this.changeElapsed = function(l, n) {
    var t = l / e.duration * 100;
    S.html(s.format(l)), n || (C.css("margin-left", t + "%"), b.css("width", t + "%"))
  }, this.changeDuration = function(l) {
    y.html(s.format(l)), e.hd ? D.show() : D.hide()
  }, this.changeBuffer = function(e) {
    B.css("width", e)
  }, this.changeVolume = function(e) {
    P.css("margin-left", 100 * e + "%")
  }, this.changePreview = function(e) {
    c.css("background-image", ""), $("<img />").attr("src", e).on("load", function() {
      c.css("background-image", "url(" + e + ")")
    })
  }, this.format = function(e) {
    var l, n, s;
    return this.parse = function(e) {
      return (e = parseInt(e)) < 10 ? "0" + e : e > 99 ? 99 : e
    }, l = this.parse(e % 60), n = this.parse(e / 60), "00" == (s = this.parse(e / 3600)) ? n + ":" + l : s + ":" + n + ":" + l
  }, this.calcSeek = function() {
    return 0 == e.duration ? 0 : parseFloat(C.css("margin-left")) / w.width() * e.duration
  }, this.showVolume = function() {
    A = !1, t.removeClass("hideVol")
  }, this.hideVolume = function() {
    null == W ? t.addClass("hideVol") : A = !0
  }, this.showBuffer = function() {
    if (t.hasClass("playing") && null == H) {
      var e = 0;
      u.show(), H = setInterval(function() {
        360 == e && (e = 0), u.css("transform", "rotate(" + e + "deg)"), e += 45
      }, 77)
    }
  }, this.hideBuffer = function() {
    null != H && (clearInterval(H), u.hide(), H = null)
  }, this.seekTo = function(l) {
    if (null == R && 1 == l.which) {
      var n, t, i = "click" == l.type;
      C.addClass("active"), R = setInterval(function() {
        n = e.mouseX - w.offset().left, t = w.width(), n < 0 && (n = 0), n > t && (n = t), C.css("margin-left", n), s.changeElapsed(s.calcSeek(), !0), i && $(document).mouseup()
      }, 26)
    }
  }, this.volumeTo = function(l) {
    if (null == W && 1 == l.which) {
      var n, s, t, i = "click" == l.type;
      W = setInterval(function() {
        n = e.mouseX - T.offset().left, s = T.width(), n < 0 && (n = 0), n > s && (n = s), t = n / s, e.setVolume(t), i && $(document).mouseup()
      }, 26)
    }
  }, this.volumeWheel = function(l) {
    var n = e.videoObj.volume;
    return l.originalEvent.deltaY < 0 ? e.setVolume(n + .1) : e.setVolume(n - .1), !1
  }, this.timeUpdate = function() {
    X || (null == R && s.changeElapsed(e.videoObj.currentTime), e.bufferUpdate())
  }, this.ended = function() {
    t.hasClass("ended") || (t.removeClass("started"), e.ended())
  }, this.toggleHD = function() {
    e.hd && (X = !0, s.showBuffer(), e.toggleHD(), t.hasClass("ended") && e.play())
  }, this.startExpAnim = function() {
    if (null == j) {
      var e = 1;
      j = setInterval(function() {
        4 == e && (e = 0), e < 3 ? E.css("background-position", "-" + (220 + 22 * e) + "px 0px") : E.css("background-position", ""), e++
      }, 100)
    }
  }, this.stopExpAnim = function() {
    null != j && (clearInterval(j), E.css("background-position", ""), j = null)
  }, this.startFullAnim = function() {
    if (null == L) {
      var e = 1,
        l = 1;
      L = setInterval(function() {
        if (10 == e) e = 0, l = 0;
        else if (l >= 5 && l <= 8) return void l++;
        U.css("background-position", "-" + 22 * e + "px 0px"), e++, l++
      }, 77)
    }
  }, this.stopFullAnim = function() {
    null != L && (clearInterval(L), U.css("background-position", ""), L = null)
  }, this.checkResize = function() {
    O != t.width() && (O = t.width(), s.resize())
  }, this.resize = function() {
    t.removeClass("compact hideTimer"), h.width() < 100 && (t.addClass("compact hideVol"), h.width() < 100 && t.addClass("hideTimer"))
  }, this.mouseUp = function(l) {
    null != R && (clearInterval(R), R = null, C.removeClass("active"), 0 != e.duration ? (e.seek(s.calcSeek()), t.hasClass("started") || e.play()) : C.css("margin-left", 0)), null != W && (clearInterval(W), W = null, A && s.hideVolume()), t.find(".vlButton").removeClass("active")
  }, t = e.obj, s = this, a = $('<div class="vlScreen"></div>'), i = $('<div class="vlPreload"></div>'), o = $('<input type="text" tabindex="-1" />'), u = $('<div class="vlsLoad"></div>'), r = $('<div class="vlsPlay vlButton"></div>'), c = $('<div class="vlPreview"></div>'), d = $('<div class="vlScreenContainer"></div>'), v = $('<div class="vlControls"></div>'), p = $('<div class="vlcLeft"></div>'), h = $('<div class="vlcCenter"></div>'), f = $('<div class="vlcRight"></div>'), m = $('<div class="vlSeparator"></div>'), g = $('<div class="vlcPlay vlButton"></div>'), k = $('<div class="vlcStop vlButton"></div>'), w = $('<div class="vlProgress"></div>'), b = $('<div class="vlPosition"></div>'), C = $('<div class="vlSeeker vlButton"></div>'), B = $('<div class="vlBuffer"></div>'), I = $('<div class="vlTimer"> / </div>'), S = $('<span class="vltPos">00:00</span>'), y = $('<span class="vltDur">' + this.format(e.duration) + "</span>"), T = $('<div class="vlcSoundBar"></div>'), V = $('<div class="vlcSound vlButton"></div>'), P = $('<div class="vlcSoundSlider vlButton"></div>'), x = $('<span class="vlcSoundContainer"></span>'), F = $('<span class="vlcSoundContainerAbsolute"></span>'), E = $('<div class="vlcExpand vlButton"></div>'), D = $('<div class="vlcHDButton vlButton">HD</div>'), U = $('<div class="vlcFull vlButton"></div>'), z = $('<div class="vlcCloseFull vlButton"></div>'), this.hiddenUrl = o;
  var M = e.skinPath + "/skin.css?" + window.vlpv,
    Y = e.skinPath + "/img";
  $("#vlPlayer2007css").remove(), $('<link id="vlPlayer2007css" rel="stylesheet"></link>').attr("href", M).appendTo("head").on("load", function() {
    t.addClass("vlPlayer2007"), t.append(i), t.append(d), t.append(v), i.append(o), d.append(a), a.append(c), a.append(u), a.append(r), a.append(e.video), v.append(p), v.append(f), v.append(h), p.append(g), p.append(k), h.append(w), f.append(I), f.append(m.clone()), f.append(x), f.append(m.clone()), f.append(E), f.append(D), f.append(U), f.append(z), x.append(F), F.append(T), x.append(V), T.append(P), w.append(b), w.append(C), w.append(B), I.prepend(S), I.append(y), e.video.click(e.toggle), e.video.dblclick(e.toggleFull), g.click(e.toggle), r.click(e.toggle), r.dblclick(e.toggleFull), k.click(e.stop), V.click(e.toggleMute), U.click(e.toggleFull), z.click(e.toggleFull), D.click(s.toggleHD), U.on("mouseenter focus", s.startFullAnim), U.on("mouseleave blur", s.stopFullAnim), E.on("mouseenter focus", s.startExpAnim), E.on("mouseleave blur", s.stopExpAnim), w.click(s.seekTo), w.mousedown(s.seekTo), b.mousedown(s.seekTo), b.click(s.seekTo), C.mousedown(s.seekTo), B.mousedown(s.seekTo), x.focus(s.showVolume), x.mouseenter(s.showVolume), x.mouseleave(s.hideVolume), x.blur(s.hideVolume), P.mousedown(s.volumeTo), T.mousedown(s.volumeTo), T.click(s.volumeTo), T.on("wheel", s.volumeWheel), T.mouseenter(function() {
      s.allowScroll = !1
    }), T.mouseleave(function() {
      s.allowScroll = !0
    }), V.mouseenter(function() {
      s.allowScroll = !1
    }), V.mouseleave(function() {
      s.allowScroll = !0
    }), V.on("wheel", s.volumeWheel), e.video.on("playing seeked", function() {
      X = !1
    }), e.video.on("timeupdate", s.timeUpdate), e.video.on("ended", s.ended), e.video.on("waiting", s.showBuffer), e.video.on("playing canplay canplaythrough timeupdate pause", s.hideBuffer), $(document).mouseup(s.mouseUp), $(document).on("wheel scroll", s.allowScroll), l ? E.click(l) : E.hide(), e.hd || (D.hide(), D.addClass("hidden")), e.toggleFull(!0) || (U.hide(), z.hide()), e.adjust && (t.css("padding-bottom", 32), t.parent().css("padding-bottom", 32));
    for (var A = e.buttonColor, H = e.background, j = ["loop.png", "buttons_" + A + ".png", "play" + ("black" == H ? "_black" : "") + ".png", "full" + ("black" == H ? "_black" : "") + ".png", "buffer.png"], L = 0, R = 0; R < j.length; R++) $("<img />").attr("src", Y + "/" + j[R]).on("load", function() {
      ++L == j.length && ("red" != A && t.addClass(A + "Bt"), "white" != H && t.addClass(H + "Bg"), t.addClass("initialized"), t.prop("tabindex", 0), n())
    })
  })
}