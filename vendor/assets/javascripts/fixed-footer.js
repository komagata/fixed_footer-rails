window.FixedFooter = function(id) {
  var footer = document.getElementById(id);
  if (!footer) { return null; }

  var footerFixed = function() {
    var footer = document.getElementById(id);
    var dh = document.getElementsByTagName("body")[0].clientHeight;
    footer.style.top = "0px";
    var ft = footer.offsetTop;
    var fh = footer.offsetHeight;
    var wh;
    if (window.innerHeight) {
      wh = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight !== 0) {
      wh = document.documentElement.clientHeight;
    }
    if (ft + fh < wh) {
      footer.style.position = "relative";
      footer.style.top = wh - fh - ft - 1 + "px";
    }
  };

  var addEvent = function(elm, listener, fn) {
    var e;
    try {
      elm.addEventListener(listener, fn, false);
    } catch (_error) {
      e = _error;
      elm.attachEvent("on" + listener, fn);
    }
  };

  footerFixed();
  addEvent(window, "resize", footerFixed);
};
