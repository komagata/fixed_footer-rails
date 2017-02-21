window.FixedFooter = function(id) {
  var addEvent, checkFontSize, footer, footerFixed;
  footer = document.getElementById(id);
  if (!footer) {
    return null;
  }
  footerFixed = function() {
    var dh, fh, ft, wh;
    dh = document.getElementsByTagName("body")[0].clientHeight;
    footer.style.top = "0px";
    ft = footer.offsetTop;
    fh = footer.offsetHeight;
    if (window.innerHeight) {
      wh = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight !== 0) {
      wh = document.documentElement.clientHeight;
    }
    if (ft + fh < wh) {
      footer.style.position = "relative";
      return footer.style.top = wh - fh - ft - 1 + "px";
    }
  };
  checkFontSize = function(callback) {
    var checkBoxSize, defHeight, e, s;
    e = document.createElement("div");
    s = document.createTextNode("S");
    checkBoxSize = function() {
      var defHeight;
      if (defHeight !== e.offsetHeight) {
        callback();
        return defHeight = e.offsetHeight;
      }
    };
    e.appendChild(s);
    e.style.visibility = "hidden";
    e.style.position = "absolute";
    e.style.top = "0";
    document.body.appendChild(e);
    defHeight = e.offsetHeight;
    return setInterval(checkBoxSize, 1000);
  };
  addEvent = function(elm, listener, fn) {
    var e;
    try {
      elm.addEventListener(listener, fn, false);
    } catch (_error) {
      e = _error;
      elm.attachEvent("on" + listener, fn);
    }
  };
  checkFontSize(footerFixed);
  return addEvent(window, "resize", footerFixed);
};
