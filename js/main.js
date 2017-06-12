(function () {
  var ie = !!(window.attachEvent && !window.opera);
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
  var fn = [];
  var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
  var d = document;
  d.ready = function (f) {
    if (!ie && !wk && d.addEventListener)
      return d.addEventListener('DOMContentLoaded', f, false);
    if (fn.push(f) > 1) return;
    if (ie)
      (function () {
        try { d.documentElement.doScroll('left'); run(); }
        catch (err) { setTimeout(arguments.callee, 0); }
      })();
    else if (wk)
      var t = setInterval(function () {
        if (/^(loaded|complete)$/.test(d.readyState))
          clearInterval(t), run();
      }, 0);
  };
})();

document.ready(function(){
	alert("test successful!!!");
});


//插入指定的容器中
var htm = CMP.create("cmp","100%","100%","../cmp/cmp.swf");
document.getElementById("xlpig").innerHTML = htm;
//插入的同时传递一些参数
// var flashvars = {
// 	name:"CMP4",
// 	skin:"skins/vplayer.zip",
// 	lists:"mylist.xml"
// };
// var htm = CMP.create("cmp","100%","100%","cmp.swf",flashvars);
// document.getElementById("xlpig").innerHTML = htm;