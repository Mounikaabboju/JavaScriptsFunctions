// UDMv4.6 //
///////////////////////////////////////////////////////////////////
var um = { 'menuClasses': [], 'itemClasses': [], 'menuCode': [] };
///////////////////////////////////////////////////////////////////
//                                                               //
//  ULTIMATE DROP DOWN MENU Version 4.6 by Brothercake          //
//  http://www.udm4.com/                                         //
//                                                               //
//  This script may not be used or distributed without license   //
//                                                               //
///////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////
// CORE CONFIGURATION                                            //
///////////////////////////////////////////////////////////////////


//path to images folder
um.baseSRC = "/wps/themes/html/ACSDefault/images/";


//initialization trigger element ["id"];
um.trigger = "";


//navbar orientation
um.orientation = [
  "horizontal",	// alignment ["vertical"|"horizontal"|"popup"|"expanding"]
  "left",		// h align ["left"|"right"]
  "top",		// v align ["top"|"bottom"]
  "relative",	// positioning ["relative"|"absolute"|"fixed"|"allfixed"]
  "1",	// x position ["em"|"ex"|"px"|"0"]
  "0",	// y position ["em"|"ex"|"px"|"0"]
  "5",		// z order ["0" to "10000"] (menu takes 20000 headroom)
];


//navbar list output
um.list = [
  "flexible",	// horizontal overflow ["rigid"|"flexible"]
  "yes",		// -SPARE-
  "no", 		// -SPARE-
];


//menu behaviors
um.behaviors = [
  "200",		// open timer ["milliseconds"|"0"]
  "500",		// close timer ["milliseconds"|"never"|"0"]
  "yes",		// reposition menus to stay inside the viewport ["yes"|"no"]
  "default",	// manage windowed controls for win/ie ["default","hide","iframe","none"]
];


//reset behaviors
um.reset = [
  "yes",		// reset from document mouse click ["yes"|"no"]
  "yes",		// reset from window resize ["yes"|"no"]
  "yes",		// reset from text resize ["yes"|"no"]
  "no",		// reset after following link ["yes"|"no"]
];


//horizontal continuation strip
um.hstrip = [
  "#0D5DBB",// background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
  "yes",// copy navbar item margin-right to margin-bottom ["yes"|"no"]
];




///////////////////////////////////////////////////////////////////
// MODULE SETTINGS                                               //
///////////////////////////////////////////////////////////////////


//keyboard navigation [comment out or remove if not using]
um.keys = [
  "38",		// up ["n"] ("38" = up arrow key)
  "39",		// right ["n"] ("39" = right arrow key)
  "40",		// down ["n"] ("40" = down arrow key)
  "37",		// left ["n"] ("37" = left arrow key)
  "119",		// hotkey ["n"] ("119" = F8]
  "none",		// hotkey modifier ["none"|"shiftKey"|"ctrlKey"|"altKey"|"metaKey"]
  "27",		// escape ["n"|"none"] ("27" = escape key)
  "document.getElementsByTagName('a')[0]", // exit focus ["js-expression"]
];




///////////////////////////////////////////////////////////////////
// NAVBAR DEFAULT STYLES                                         //
///////////////////////////////////////////////////////////////////


//styles which apply to the navbar
um.navbar = [
  "0",// nav -> menu x-offset (+-)["n" pixels]
  "0",// nav -> menu y-offset (+-)["n" pixels]
  "auto",// width ["em"|"ex"|"px"] (vertical navbar only - horizontal navbar items have "auto" width) ("%" doesn't work right)
];


//styles which apply to each navbar item
um.items = [
  "1",// margin between items ["n" pixels]
  "1",// border size ["n" pixels] (single value only)
  "collapse",// border collapse ["collapse"|"separate"] (only applies when margin = "0")
  "#fff",// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "#999999",// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "#ffffff",// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "15",// left/right padding ["n" pixels] (single value only)
  "5",// top/bottom padding ["n" pixels] (single value only)
  "#548CCE",// background ["color"|"#hex"|"rgb()"|"image.gif"]
  "#d1e8ff",// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
  "#548CCE",// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
  "11px",// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
  "tahoma,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
  "bold",// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
  "none",// text decoration ["none"|"underline"|"overline"|"line-through"]
  "left",// text-align ["left"|"right"|"center"]
  "#ffffff",// color ["color"|"#hex"|"rgb()"]
  "#b05010",// hover/focus color ["color"|"#hex"|"rgb()"]
  "#ffffff",// visited color ["color"|"#hex"|"rgb()"]
  "normal",// font-style ["normal"|"italic"|"oblique"]
  "normal",// hover/focus font-style ["normal"|"italic"|"oblique"]
  "normal",// visited font-style ["normal"|"italic"|"oblique"]
  "letter-spacing:1px !important;",// additional link CSS (careful!)
  "",// additional hover/focus CSS (careful!)
  "",// additional visited CSS (careful!)
  "menu_arrow1.gif",// menu indicator character/image ["text"|"image.gif"|"none"]
  "menu_arrow3.gif",// menu indicator rollover character/image ["text"|"image.gif"|"none"] (must be same type)
  "8",// clipping width of indicator image ["n" pixels] (only when using image arrows)
  "menu",// alt text of indicator image ["text"] (only when using image arrows)
];




///////////////////////////////////////////////////////////////////
// MENU DEFAULT STYLES                                           //
///////////////////////////////////////////////////////////////////


//styles which apply to each menu
um.menus = [
  "0",// menu -> menu x-offset (+-)["n" pixels]
  "0",// menu -> menu y-offset (+-)["n" pixels]
  "1",// border size ["n" pixels] (single value only)
  "#999999",// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "200px",// width ["em"|"ex"|"px"]
  "2",// padding ["n" pixels] (single value only)
  "#d1e8ff",// background ["color"|"#hex"|"rgb()"|"image.gif"]
  "",// additional menu CSS (careful!) (you can use a transition here but *not* a static filter)
  "",//"greenshadow.png",// shadow background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
  "2px",// shadow offset (+-) ["em"|"px"|"pt"|"%"|"0"]
  "filter:alpha(opacity=50);",// additional shadow layer CSS (if you use a Microsoft.Shadow filter here then Win/IE5.5+ will do that *instead* of default shadow)
];


//styles which apply to each menu item
um.menuItems = [
  "0",// margin around items ["n" pixels] (single value only; margins are like table cellspacing)
  "1",// border size ["n" pixels] (single value only)
  "separate",// border collapse ["collapse"|"separate"] (only applies when margin = "0")
  "#d1e8ff",// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "#999999",// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "#d1e8ff",// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "5",// left/right padding ["n" pixels] (single value only)
  "2",// top/bottom padding ["n" pixels] (single value only)
  "transparent",// background ["color"|"#hex"|"rgb()"|"image.gif"]
  "#e6e6e6",// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
  "transparent",// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
  "11px",// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
  "tahoma,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
  "normal",// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
  "none",// text decoration ["none"|"underline"|"overline"|"line-through"]
  "left",// text-align ["left"|"right"|"center"]
  "#7F7F7F",// color ["color"|"#hex"|"rgb()"]
  "#000",// hover/focus color ["color"|"#hex"|"rgb()"]
  "#7F7F7F",// visited color ["color"|"#hex"|"rgb()"]
  "normal",// font-style ["normal"|"italic"|"oblique"]
  "normal",// hover/focus font-style ["normal"|"italic"|"oblique"]
  "normal",// visited font-style ["normal"|"italic"|"oblique"]
  "",// additional link CSS (careful!)
  "",// additional hover/focus CSS (careful!)
  "",// additional visited CSS (careful!)
  "menu_arrow2.gif",// submenu indicator character/image ["text"|"image.gif"|"none"]
  "menu_arrow2.gif",// submenu indicator rollover character/image ["text"|"image.gif"|"none"] (must be the same type)
  "8",// clipping width of indicator image ["n" pixels] (only when using image arrows)
  "menu",// alt text of indicator image ["text"] (only when using image arrows)
];




///////////////////////////////////////////////////////////////////
// MENU CLASSES [comment out or remove if not using]             //
///////////////////////////////////////////////////////////////////


//classes which apply to menus [optional]
um.menuClasses["orangeMenu"] = [
  "#fdcb95 #a97742 #a97742 #fdcb95",// border colors ["color"|"#hex"|"rgb()"]
  "solid",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "8em",		// width ["em"|"ex"|"px"]
  "#fec",		// background ["color"|"#hex"|"rgb()"|"image.gif"]
  "",		// additional menu CSS (careful!) (you can use a transition here but *not* a static filter)
  "",//"orangeshadow.png",// shadow background ["color"|"#hex"|"rgb()"|"image.gif"|"none"]
  "2px",		// shadow offset (+-) ["em"|"px"|"pt"|"%"|"0"]
  "", // additional shadow layer CSS (if you use a Microsoft.Shadow filter here then Win/IE5.5+ will do that *instead* of default shadow)
];


//classes which apply to menu items [optional]
um.itemClasses["orangeMenuItem"] = [
  "#fec",		// border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",	// border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "#edbb85",	// hover/focus border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",	// hover/focus border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "#fec",		// visited border colors ["color"|"#hex"|"rgb()"] (single, double or four values)
  "solid",	// visited border styles ["solid"|"double"|"dotted"|"dashed"|"groove"|"ridge"|"inset"|"outset"] (single, double or four values; be careful with using "none")
  "#fec",		// background ["color"|"#hex"|"rgb()"|"image.gif"]
  "#f8fbd0",	// hover/focus background ["color"|"#hex"|"rgb()"|"image.gif"]
  "#fec",		// visited background ["color"|"#hex"|"rgb()"|"image.gif"]
  "70%",		// font size ["em"|"ex"|"%"|"px"|"pt"|"absolute-size"|"relative-size"]
  "tahoma,sans-serif",// font family ["font1,font2,font3"] (always end with a generic family name)
  "normal",	// font weight ["normal"|"bold"|"bolder"|"lighter|"100" to "900"]
  "none",		// text decoration ["none"|"underline"|"overline"|"line-through"]
  "left",		// text-align ["left"|"right"|"center"]
  "#803090",	// color ["color"|"#hex"|"rgb()"]
  "#5656bd",	// hover/focus color ["color"|"#hex"|"rgb()"]
  "#803090",	// visited color ["color"|"#hex"|"rgb()"]
  "normal",	// font-style ["normal"|"italic"|"oblique"]
  "normal",	// hover/focus font-style ["normal"|"italic"|"oblique"]
  "normal",	// visited font-style ["normal"|"italic"|"oblique"]
  "",		// additional link CSS (careful!)
  "",		// additional hover/focus CSS (careful!)
  "",		// additional visited CSS (careful!)
  "",//"right-purple.gif",// submenu indicator character/image ["text"|"image.gif"|"none"] (must be the same type as default submenu indicator)
  "",//"right-blue.gif",// submenu indicator rollover character/image ["text"|"image.gif"|"none"] (must be the same type)
  "..",		// alt text of indicator image  ["text"] (only when using image arrow)
];




///////////////////////////////////////////////////////////////////
// DYNAMIC MENUS                                                 //
///////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////udm-resources/udm-control.js//
//////////////////////////////////////////////////////

var umTree = null; um.ready = 0; um.pi = function (n) { n = parseInt(n, 10); return (isNaN(n) ? 0 : n); }; um.un = 'undefined'; um.m = document; um.gd = function (n) { return um.m.getElementById(n); }; um.xd = function (n) { n.style.display = 'block'; }; um.xn = function (n) { n.style.display = 'none'; }; um.xv = function (n) { n.style.visibility = 'visible'; }; um.xh = function (n) { n.style.visibility = 'hidden'; }; um.ne = function (n) { return n.parentNode.className == 'udm'; }; if (typeof um.reset == um.un) { um.reset = ['yes', 'yes', 'yes']; } if (typeof um.hstrip == um.un) { um.hstrip = ['none', 'yes']; }
if (typeof um.reset[3] == um.un) { um.reset[3] = 'no'; } um.cx = ['orientation', 'list', 'behaviors', 'navbar', 'items', 'menus', 'menuItems', 'menuClasses', 'itemClasses']; um.ei = 0; um.e = []; um.v = []; um.w = []; um.vl = 0; um.wl = 0; um.ek = 0; um.im = []; um.pcv = function (v) { if (v && /^[+\-]?[0-9]+$/.test(v)) { v = um.pi(v); if ((um.ei == 10 || um.ei == 11) && v < 1) { v = 1; } } if (v && /\.(gif|png|mng|jpg|jpeg|jpe|bmp)/i.test(v)) { um.im[um.ek] = new Image; um.im[um.ek++].src = um.baseSRC + v; } return v; }; um.d = (typeof um.m.getElementById != um.un && (typeof um.m.createElement != um.un || typeof um.m.createElementNS != um.un) && typeof navigator.IBM_HPR == um.un); um.u = navigator.userAgent.toLowerCase(); um.o5 = /opera[\/ ][56]/.test(um.u); um.k = (navigator.vendor == 'KDE');
if (um.o5) { um.d = 0; } um.b = (um.d || um.o5); um.o7 = (um.d && typeof window.opera != um.un); um.o75 = 0; um.o73 = 0; um.o71 = 0; um.o9 = 0; if (um.o7) { um.ova = um.pi(um.u.split(/opera[\/ ]/)[1].match(/[17-9]/)[0]); um.ovi = um.pi(um.u.split(/opera[\/ ][17-9]\./)[1].match(/^[0-9]/)[0]); um.o9 = (um.ova >= 9 || um.ova == 1); um.o75 = (um.ova >= 8 || um.ovi >= 5); um.o73 = (um.ova >= 8 || um.ovi >= 3); um.o71 = (um.ova == 7 && um.ovi <= 1); } um.s = (navigator.vendor == 'Apple Computer, Inc.'); um.s2 = (um.s && typeof XMLHttpRequest != um.un); um.s3 = (um.s && /applewebkit\/[5-9]/.test(um.u)); um.ggc = (navigator.vendor == 'Google Inc.'); um.k4 = (um.k && /khtml\/[4-9]/.test(um.u));
if (um.ggc || um.k4) { um.s = 1; um.s2 = 1; um.s3 = 1; } um.wie = (um.d && typeof um.m.all != um.un && typeof window.opera == um.un && !um.k); um.mie = (um.wie && um.u.indexOf('mac') > 0); um.mx = 0; um.omie = 0; if (um.mie) { um.wie = 0; um.iev = um.u; um.iev = um.iev.split('msie '); um.iev[1] = um.iev[1].split(';'); um.iev = parseFloat(um.iev[1][0], 10); um.omie = (um.iev < 5.2); } um.ie = (um.wie || um.mie); um.wie5 = (um.wie && um.u.indexOf('msie 5') > 0); um.wie55 = (um.wie && um.u.indexOf('msie 5.5') > 0); um.wie50 = (um.wie5 && !um.wie55); um.wie6 = (um.wie && um.u.indexOf('msie 6') > 0);
if (um.wie6) { um.wie55 = 1; } um.wie7 = (um.wie && typeof XMLHttpRequest != um.un); um.wie8 = (um.wie && um.u.indexOf('msie 8') > 0); um.q = (um.wie5 || um.mie || ((um.wie6 || um.wie7 || um.o7) && um.m.compatMode != 'CSS1Compat')); um.og = 0; um.dg = 0; if (navigator.product == 'Gecko' && !um.s) { um.sub = um.pi(navigator.productSub); um.og = (um.sub < 20030312); um.dg = (um.sub < 20030208); } if (um.b) {
  var i = 0; do {
    if (um.cx[i].indexOf('Classes') < 0) { um.cxl = um[um.cx[i]].length; var j = 0; do { if (typeof um[um.cx[i]][j] != um.un) { um.pv = um.pcv(um[um.cx[i]][j]); um.e[um.ei] = um.pv; um.ei++; } j++; } while (j < um.cxl); } else {
      for (j in um[um.cx[i]]) {
        if (typeof um[um.cx[i]][j] != 'function') {
        um.cxl = um[um.cx[i]][j].length; var k = 0; do { if (typeof um[um.cx[i]][j][k] != um.un) { um.pcv(um[um.cx[i]][j][k]); } k++; } while (k < um.cxl);
          if (um.cx[i] == 'menuClasses') { um.v[j] = um[um.cx[i]][j]; um.vl++; } else { um.w[j] = um[um.cx[i]][j]; um.wl++; }
        }
      }
    } i++;
  } while (i < 9); um.kb = (typeof um.keys != um.un && !(um.mie || um.o7 || (um.k && !um.k4) || (um.s && !um.s2))); um.skb = (um.kb || (typeof um.keys != um.un && ((um.o7 && !um.o71) || (um.k && !um.k4)))); um.sp = (typeof um.speech != um.un && um.wie); if (typeof um.speech != um.un) { um.e[12] = 'no'; um.e[0] = 'vertical'; } um.rp = (um.e[3] == 'relative'); if (um.wie50 && um.rp) { um.e[12] = 'no'; } um.dir = 'left';
  if (um.e[1] == 'rtl') { um.dir = 'right'; um.e[1] = 'right'; } um.e[13] = (um.e[13] == 'yes') ? 'default' : (um.e[13] == 'no') ? 'iframe' : um.e[13]; um.hz = (um.wie50 && um.e[13] == 'default') || (um.wie && um.e[13] == 'hide'); um.h = um.e[0] == 'horizontal'; i = 4; do { if (parseFloat(um.e[i], 10) < 0) { um.e[i] = '0'; } i++ } while (i < 6); if (um.h && um.dir == 'right') { um.e[4] = '-' + um.e[4]; } um.p = um.e[0] == 'popup'; if (um.p) { um.va = ['left', 'top', 'absolute', '-2000px', '-2000px']; i = 0; do { um.e[i + 1] = um.va[i]; i++ } while (i < 5); um.e[14] = 0; um.e[15] = 0; } um.ep = 0; if (um.e[0] == 'expanding') { um.ep = 1; um.e[0] = 'vertical'; } um.a = (um.e[1] == 'right'); um.rg = (um.h && um.e[7] == 'rigid' && um.dir != 'right'); um.fe = false; if (um.e[3] == 'allfixed') {
  um.e[3] = 'fixed';
    if (um.wie5 || um.wie6) { um.fe = true; }
  } um.f = (um.e[3] == 'fixed' && !(um.wie5 || um.wie6 || um.og)); um.nc = (um.e[17] == 0 && um.e[19] == 'collapse'); um.mc = (um.e[61] == 0 && um.e[63] == 'collapse'); um.nm = ((um.og && um.rp) || (um.omie && um.h) || ((um.dg || um.wie50) && um.dir == 'right')); um.nr = (um.nm || um.mie); um.ns = (um.dg || um.o71 || (um.wie50 && um.rp) || (um.o7 && um.f) || um.mie); um.cns = (typeof um.m.createElementNS != um.un); um.ss = (um.cns && typeof um.m.styleSheets != um.un && !(um.s || um.k));
  if (um.kb) { i = 0; do { um.keys[i] = um.pi(um.keys[i]); i++ } while (i < 5); if (um.keys[6] != 'none') { um.keys[6] = um.pi(um.keys[6]); } else { um.keys[6] = -1; } } um.ni = /(gif|png|mng|jpg|jpeg|jpe|bmp)/i.test(um.e[45]); um.mi = /(gif|png|mng|jpg|jpeg|jpe|bmp)/i.test(um.e[89]);
} um.rn = 0; um.rv = []; um.addReceiver = function (f, c) { um.rv[um.rn++] = [f, c]; }; um.gp = function (n) { return n ? um.vn(n.nodeName).toLowerCase() == 'li' ? n : this.gp(n.parentNode) : null; }; um.createElement = function (n, a) { um.el = (um.cns) ? um.m.createElementNS('http://www.w3.org/1999/xhtml', n) : um.m.createElement(n); if (typeof a != um.un) { for (var i in a) { switch (i) { case 'text': um.el.appendChild(um.m.createTextNode(a[i])); break; case 'class': um.el.className = a[i]; break; default: um.el.setAttribute(i, ''); um.el[i] = a[i]; break; } } } return um.el; };


/////////////////////////////////////////////////////////////////udm-resources/udm-dom.js//
/////////////////////////////////////////////////////

um.ap = function (c, v) { var r = um.rv.length; if (r > 0) { for (var i = 0; i < r; i++) { if (um.rv[i][1] == '') { um.rv[i][0](v, c); } else if (c == um.rv[i][1]) { um.rv[i][0](v); } } } };
if (um.wie) { um.eva = []; um.ex = ['onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onclick', 'onmousewheel', 'onfilterchange', 'onkeydown', 'onfocus', 'onactivate', 'onscroll', 'over', 'out']; um.gg = um.ex.length; window.attachEvent('onunload', function () { um.lil = umTree.getElementsByTagName('li'); um.lin = um.lil.length; i = 0; do { um.gc(um.lil[i]).detachEvent((um.wie55) ? 'onactivate' : 'onfocus', um.eva[i]); i++; } while (i < um.lin); um.da = document.all.length; i = 0; do { um.t = document.all[i]; j = 0; do { um.t[um.ex[j]] = null; j++; } while (j < um.gg); i++; } while (i < um.da); }); } if (!um.k && typeof window.addEventListener != um.un) { window.addEventListener('load', umIni, 0); } else if (um.o7) { um.m.addEventListener('load', umIni, 0); }
else if (um.wie) { window.attachEvent('onload', umIni); } else { if (typeof window.onload == 'function') { um.on = onload; window.onload = function () { um.on(); umIni(); }; } else { window.onload = umIni; } } function umIni(g) {
  if (typeof g == um.un) { g = 1; } if (typeof um.ini != um.un || (um.k && typeof window.sidebar == um.un)) { return; } if (um.drt) { clearTimeout(um.drt); } um.ini = 1; um.ha = 0; umTree = (um.b) ? um.gd('udm') : null; if (umTree && um.d) {
    if (g) { um.ap('000', umTree); } for (i in um.menuCode) {
      var l = um.gd(i); if (l) {
        if (um.mie) { um.menuCode[i] = um.menuCode[i].replace(/<\/(li|ul)>/ig, '</$1>\n'); } l.innerHTML += um.menuCode[i];
        if (um.mie) { um.dm = um.gm(l); um.xn(um.dm); um.xh(um.dm); }
      }
    } um.bub = 0; um.wsr = 0; um.rtl = um.m.getElementsByTagName('html')[0].getAttribute('dir') == 'rtl'; um.kdf = 0;
    if (um.o7) { um.m.addEventListener('keydown', function (e) { if (e.keyCode == 16) { um.kdf = 1; } }, 0); um.m.addEventListener('keyup', function (e) { if (e.keyCode == 16) { um.kdf = 0; } }, 0); } um.skb = (um.skb && typeof umKM == 'function'); um.kb = (um.skb && um.kb); if (um.skb) { um.kbm = new umKM; if (g) { um.ap('001', um.kbm); } } um.sp = (um.sp && typeof udmSpeechModule == 'function'); if (um.sp) { um.sapi = new udmSpeechModule; if (g) { um.ap('002', um.sapi); } } um.n = new umNav(umTree, g);
    if (g) { um.ap('009', um.n); } if (um.fe) { um.tr.style.left = (um.getScrollAmount(1)) + 'px'; um.tr.style.top = (um.getScrollAmount()) + 'px'; window.attachEvent('onscroll', function () { um.tr.style.left = (um.getScrollAmount(1)) + 'px'; um.tr.style.top = (um.getScrollAmount()) + 'px'; }); } if (um.s) { umTree.style.KhtmlOpacity = '1'; } um.s1 = (typeof umTree.style.KhtmlOpacity != um.un); um.ready = 1;
    if (g) { um.ap('010', um.tr); }
  }
}; function umNav(umTree, g) {
um.n = this; um.tr = umTree; if (um.wie) { um.tr.style.color = 'black'; } um.jv = 'javascript:void(0)'; if (um.rg) { um.rw = 0; } var l = umTree.getElementsByTagName('li'); if (l.length == 0) { return; } var i = 0; do { if (um.wl > 0) { var b = um.es(l[i].className); if (b == '' && !um.ne(l[i])) { var a = um.gp(l[i].parentNode); b = um.es(a.className); if (b != '' && !um.ne(a)) { l[i].className = b; } } } this.it(l[i]); if (g) { um.ap('008', l[i]); } i++; } while (i < l.length); if (um.vl > 0) {
um.mo = um.gu(um.tr); um.en = um.mo.length; if (um.en > 0) {
  i = 0; do {
    b = um.es(um.mo[i].className); if (b == '') {
      a = um.mo[i].parentNode.parentNode; b = um.es(a.className);
      if (b != '' && b != 'udm') { um.mo[i].className = b; }
    } i++;
  } while (i < um.en);
}
} um.mf = 0; um.lf = 0; um.ety = typeof document.addEventListener != um.un ? 'addEventListener' : typeof document.attachEvent != um.un ? 'attachEvent' : ''; um.epx = um.ety == 'attachEvent' ? 'on' : ''; if (um.ety != '') { um.m[um.ety](um.epx + 'mousedown', function (e) { if (!e) { e = window.event; } um.mf = 1; if (um.skb) { um.ha = 0; } clearInterval(um.oc); um.or = 0; if (um.reset[0] != 'no') { if (um.hz) { if (!um.tr.contains(event.srcElement)) { um.n.ts('visible'); } } um.cm(e); } }, 0); um.m[um.ety](um.epx + 'mouseup', function () { um.mf = 0; }, 0); } if (um.kb) { um.kbm.bdh(); } if (um.skb && um.o7) { um.kbm.bfh(); } if (um.rg) { this.aw(); } um.cc = null, um.cr = 0, um.oc = null, um.or = 0;
  if (!um.ie) { um.tr.contains = function (n) { return (n == null) ? false : (n == this) ? true : this.contains(n.parentNode); }; } um.lw = um.getWindowDimensions(); um.lh = um.gc(um.tr).offsetHeight; if (um.og && um.hstrip[0] != 'none') { um.tr.style.height = (um.hstrip[1] == 'yes') ? (um.lh + um.e[17]) + 'px' : um.lh + 'px'; } var p = um.m.getElementById('udm-purecss'); if (p) { p.disabled = 1; } um.vs = setInterval('um.n.ws()', 55);
}; umNav.prototype.it = function (l) {
  if (um.wie) { var f = (um.wie55) ? 'onactivate' : 'onfocus'; um.gc(l).attachEvent(f, um.eva[um.eva.length] = function () { if (um.kb && !um.lf) { um.bub = 0; l.over(1, um.gc(l)); } }); } var a = um.es(l.className); var h = (a.indexOf('onclick') != -1) ? 'onclick' : 'onmouseover'; var s = um.ne(l); var umM = (typeof um.gu(l)[0] != um.un) ? um.gu(l)[0] : null;
  if (typeof um.fl == um.un) { um.fl = um.gc(l); } if (umM && !um.nr) {
    if (((s && um.e[45] != 'none') || (!s && um.e[89] != 'none')) && um.n.cck()) {
      if (s) { var r = um.e[45]; var x = (um.ni) ? um.e[48] : '¦¦'; } else { r = um.e[89]; x = (um.mi) ? um.e[92] : '¦¦'; if (typeof um.w[a] != um.un) { r = um.w[a][23]; x = (um.mi) ? um.w[a][25] : '¦¦'; } } if (x == '¦¦') { var t = { 'class': 'udmA', 'text': r }; var u = u = um.gc(l).appendChild(um.createElement('span', t)); } else {
        if (um.wie) { um.gc(l).insertAdjacentHTML('beforeEnd', '<img class=\'udmA\' alt=\'' + x + '\' title=\'\' />'); u = um.gc(l).lastChild; u.src = um.baseSRC + r; } else if (um.s || um.k) { t = { 'class': 'udmA' }; u = um.gc(l).appendChild(um.createElement('span', t)); t = { 'src': um.baseSRC + r, 'alt': x, 'title': '' }; u.appendChild(um.createElement('img', t)); }
        else { t = { 'class': 'udmA', 'alt': x, 'title': '' }; u = um.gc(l).appendChild(um.createElement('img', t)); u.src = um.baseSRC + r; }
      } if (h == 'onclick') { u.onmousedown = function () { return false; } }; u.onmouseover = function (e) { var t = um.gp(this.parentNode).parentNode.childNodes; var n = t.length; for (var i = 0; i < n; i++) { if (t[i].nodeName != '#text' && um.gu(t[i]).length > 0) { if (um.gu(t[i])[0].style.visibility == 'visible') { (!e) ? event.cancelBubble = 1 : e.stopPropagation(); this.parentNode.style.zIndex = um.e[6] += 2; return false; break; } } clearInterval(um.oc); um.or = 0; } return true; }; u.onmouseout = function () { clearInterval(um.oc); um.or = 0; }; um.xd(u);
      if (s) { this.wp(u, l, um.e[26], um.e[18], 1); }
    }
  } if (um.mie) { var v = l.getElementsByTagName('span')[0]; if (typeof v != um.un) { v.onclick = function () { this.parentNode.click(); }; } } if (um.rg && um.ne(l)) { um.n.dw(l); } if (um.mie) { t = um.gc(l); if (t.className && /nohref/.test(t.className)) { um.gc(l).href = um.jv; } } if (um.skb) { um.kbm.bth(l); } l.onmousedown = function (e) { um.lf = 1; um.ap('030', um.gc(this)); (!e) ? event.cancelBubble = 1 : e.stopPropagation(); }; l.onmouseup = function (e) { um.ap('035', um.gc(this)); (!e) ? event.cancelBubble = 1 : e.stopPropagation(); }; if (h != 'onclick') { l.onclick = function (e) { if (!um.bub) { um.qc(um.gc(this).href); } um.bub = 1; }; }
  else if (!um.mie) { l.onmouseover = function () { um.n.lr(um.gc(l), 1); um.bub = 0; }; } if (!(um.mie && h == 'onclick')) {
  l[h] = function (e) {
    var v = (um.ie) ? window.event.srcElement : e.target; if (v.nodeName == '#text' && e.type == 'click') { v = v.parentNode; } if (!um.gp(v)) { return false; } var b = um.es(um.gp(v).className); var c = (um.lf && !um.nm && b.indexOf('onclick') != -1); if (c) { um.rt = um.e[10]; um.e[10] = 1; } if (b.indexOf('onclick') == -1) { um.bub = 0; } else if (!um.lf) { if (!um.bub) { um.qc(v.href); } um.bub = 1; } this.over(0, v);
    if (c) { um.e[10] = um.rt; um.lf = 0; if (v.nodeName != '#text' && um.gu(um.gp(v)).length > 0) { if (typeof v.blur != um.un) { v.blur(); } if (um.gu(um.gp(v))[0].style.display == 'block') { um.n.cd(this.parentNode); (!e) ? event.cancelBubble = 1 : e.stopPropagation(); return false; } (!e) ? event.cancelBubble = 1 : e.stopPropagation(); b = um.es(um.gp(v).className); return (b.indexOf('(true)') != -1); } else { um.qc(v.href); um.bub = 1; } } if (!e) { e = window.event; } return (e.type == 'click' || um.o7);
  }; l.onmouseout = function (e) { this.out(e); };
  } l.over = function (f, t) {
    if (um.bub || (!f && um.ha && um.kdf)) { return false; } var c = um.n.cck(); if (!c || um.mf) {
    um.mf = 0;
      if (!um.ec) { if (um.gm(this)) { this.removeChild(um.gm(this)); } } return false;
    } if (f) { if (!um.wsr && !um.ie) { um.kbm.cws(um.tr); um.wsr = 1; } if (um.sp) { um.sapi.speechBuffer(um.gc(l)); event.cancelBubble = 1; } um.ha = 1; if (um.ie && event.altKey) { um.n.ck(um.gp(t).parentNode); } um.ap('040', t); } if (!f) {
      var n = um.vn(t.nodeName).toLowerCase(); if (/(li|ul)/.test(n)) { return false; } if (um.skb) {
        if (!um.lf) { um.e[10] = um.mt[0]; um.e[11] = um.mt[1]; } um.nf = um.gc(this);
        if (um.ha) { um.n.ck(l.parentNode); um.n.cd(um.gp(t).parentNode); um.nf.focus(); um.nf.blur(); um.ha = 0; }
      } um.ap('020', t);
    } clearInterval(um.cc); um.cr = 0; um.n.lr(um.gc(l), 1); um.n.pr(umM, l, f, t); return l;
  }; l.out = function (e) { if (um.o7 && um.ha && um.kdf) { return; } if (um.lf) { um.gc(this).blur(); } um.lf = 0; if (!e) { e = window.event; e.relatedTarget = e.toElement; } if (!l.contains(e.relatedTarget)) { if (!um.tr.contains(e.relatedTarget)) { clearInterval(um.cc); um.cr = 0; } um.n.cp(umM, l); um.ap('025', um.gc(this)); } };
  if (!um.ie) { l.contains = function (n) { return (n == null) ? false : (n == this) ? true : this.contains(n.parentNode); }; }
}; umNav.prototype.cck = function () { if (typeof document.defaultView != um.un && typeof document.defaultView.getComputedStyle != um.un) { um.sa = document.defaultView.getComputedStyle(um.fl, '').getPropertyValue('display'); } else if (typeof um.fl.currentStyle != um.un && um.fl.currentStyle) { um.sa = um.fl.currentStyle.display; } um.mv = 1; um.ec = (!um.wie || um.tr.currentStyle.color == 'black'); return ((um.sa != 'inline' || typeof um.sa == um.un) && um.ec); }; umNav.prototype.lr = function (l, v) {
  if (l && typeof l.style != um.un) {
  um.cl = um.es(l.className); um.ii = um.ne(um.gp(l));
    if (v) { l.style.zIndex = um.e[6] += 2; (um.cl == '') ? l.className = 'udmR' : l.className += (l.className.indexOf('udmR') == -1) ? ' udmR' : ''; } else { if (um.cl.indexOf('udmR') != -1) { l.className = um.cl.replace(/([ ]?udmR)/g, ''); } } um.n.wv(l, um.ii);
  }
}; umNav.prototype.pr = function (m, l, f, r) { if (um.skb && f) { um.kbm.cu(m, l, r); } if (!um.nm && m && m.style.visibility != 'visible') { if (um.wie && !um.wie7) { if (um.e[61] > 0) { um.gc(m).style.marginTop = um.e[61] + 'px'; } else if (um.e[63] == 'collapse') { m.firstChild.style.marginTop = 0 + 'px'; } } if (um.skb && f) { um.n.ou(m); } if (!(um.skb && f)) { um.n.tu(m, null); } } if (m == null) { um.n.tu(null, l); } }; umNav.prototype.tu = function (m, l) {
  if (um.cr) { clearInterval(um.oc); um.oj = m; um.ij = l; um.or = 1; um.oc = setInterval('um.n.tu(um.oj,um.ij)', um.e[10]); }
  else if (um.or) { clearInterval(um.oc); um.or = 0; this.ou(m, l); } else { um.ap('061', m); um.oj = m; um.ij = l; um.or = 1; um.oc = setInterval('um.n.tu(um.oj,um.ij)', um.e[10]); }
}; umNav.prototype.ou = function (m, l) {
  if (m == null) { this.cd(l.parentNode); return false; } this.cd(um.gp(m).parentNode); if (typeof m.m == um.un) { m.m = um.gu(m); m.l = m.m.length; if (m.l > 0) { for (var i = 0; i < m.l; i++) { um.xh(m.m[i]); um.xn(m.m[i]); } } } if (um.ep) { m.style.position = 'static'; if (um.wie8) { m.style.styleFloat = 'left'; } } if (um.hz) { this.ts('hidden'); } um.xd(m); if (!um.nr && um.e[89] != 'none') {
    var c = m.childNodes.length; for (i = 0; i < c; i++) {
      var t = m.childNodes.item(i); var n = um.vn(t.nodeName).toLowerCase(); if (n == 'li') {
        var a = um.n.ga(um.gc(t));
        if (a) { this.wp(a, t, um.e[70], um.e[62], 0); }
      }
    }
  } um.ap('058', m); this.pu(m); if (um.e[12] == 'yes') { this.ru(m); } um.mp = { x: (m.offsetLeft), y: (m.offsetTop) }; um.sh = null; if (!um.ns && um.e[58] != 'none') { this.hl(m); } if (um.wie55 && (um.e[13] == 'default' || um.e[13] == 'iframe')) { this.il(m); } um.hf = (um.wie55 && typeof m.filters != 'unknown' && m.filters && m.filters.length > 0); if (um.hf) { m.filters[0].Apply(); } if (um.wie && um.h) { var t = m.parentNode; if (um.ne(t)) { t = t.style; t.position = 'absolute'; t.zIndex = um.e[6] += 2; t.position = 'relative'; } } um.xv(m);
  if (um.hf) { um.ap('065', m); m.filters[0].Play(); if (um.sh) { m.onfilterchange = function () { um.xd(um.sh); um.ap('066', m); }; } } else if (um.sh) { um.xd(um.sh); } if (um.wie50) { um.xn(m); um.xd(m); } if (um.ep && um.s && m.offsetLeft < -1000) { var fs = um.pi(document.defaultView.getComputedStyle(m, '').getPropertyValue('font-size')); m.style.fontSize = (fs - 1) + 'px'; setTimeout(function () { m.style.fontSize = fs + 'px'; }, 0); } um.ap('060', m); return m;
}; umNav.prototype.cd = function (m) { var s = um.mie ? um.gt(m, 'ul') : um.gu(m); var n = s.length; for (var i = 0; i < n; i++) { this.clm(s[i]); } }; umNav.prototype.ck = function (m) { var l = um.mie ? um.gt(m, 'a') : m.getElementsByTagName('a'); var n = l.length; for (var i = 0; i < n; i++) { this.lr(l[i], 0); } }; umNav.prototype.cp = function (m, l) {
  clearTimeout(um.oc); um.or = 0; this.lr(um.gc(l), 0);
  if (!um.nm && m) { this.cot(m); }
}; umNav.prototype.cot = function (m) { if (um.cr) { clearInterval(um.cc); um.cr = 0; this.clm(m); } else if (um.e[11] != 'never') { um.ap('071', m); um.cb = m; um.cr = 1; um.cc = setInterval('um.n.cot(um.cb)', um.e[11]); } }; umNav.prototype.clm = function (m) { if (m.style.visibility == 'visible') { if (typeof um.sim == um.un || !um.sim || um.ha) { um.xh(m); um.xn(m); if (um.hz) { if (um.ne(m.parentNode)) { this.ts('visible'); } } um.t = ['udmC', 'udmS']; for (var i = 0; i < 2; i++) { var b = m.parentNode.lastChild; if (b && b.className && b.className.indexOf(um.t[i]) != -1) { m.parentNode.removeChild(b); } } } um.ap('070', m); } }; umNav.prototype.ga = function (l) {
  var a = null; var t = ['span', 'img']; for (var k = 0; k < 2; k++) {
    var s = l.getElementsByTagName(t[k]); var n = s.length; for (var j = 0; j < n; j++) {
      var b = um.es(s[j].className);
      if (b == 'udmA') { a = s[j]; break; }
    }
  } return a;
}; umNav.prototype.wp = function (a, l, p, b, n) { a.fn = arguments; if (a.offsetHeight > 0 && !um.o7) { this.wpo(a.fn[0], a.fn[1], a.fn[2], a.fn[3], a.fn[4]); } else { a.c = 0; a.ti = window.setInterval(function () { if (a.offsetHeight > 0) { clearInterval(a.ti); um.n.wpo(a.fn[0], a.fn[1], a.fn[2], a.fn[3], a.fn[4]); } else { a.c++; if (a.c >= 100) { clearInterval(a.ti); } } }, 55); } return true; }; umNav.prototype.wpo = function (a, l, p, b, n) {
  var s = um.gc(l); var t = [a.offsetWidth, a.offsetHeight]; a.style.marginTop = um.pi(((s.offsetHeight - t[1]) / 2) - b) + 'px'; s.style[(um.a || um.rtl) ? 'paddingLeft' : 'paddingRight'] = ((p * 2) + t[0]) + 'px';
  if (um.wie && um.rtl) { a.style.marginRight = ((n) ? (0 - um.e[26]) : (0 - um.e[70])) + 'px'; } if ((((um.wie50 || um.wie7) && um.a) || (um.wie55 && um.rtl)) && n && um.h) { a.style.top = (b) + 'px'; a.style.left = (b) + 'px'; } if ((n && um.ni) || (!n && um.mi)) { var c = ((n) ? um.e[47] : um.e[91]); if ((t[0] - c) < 0) { c = t[0]; } a.style.clip = (um.a || um.rtl) ? 'rect(0,' + c + 'px,' + t[1] + 'px,0)' : 'rect(0,' + t[0] + 'px,' + t[1] + 'px,' + (t[0] - c) + 'px)'; } um.xv(a); return true;
}; umNav.prototype.wv = function (l, n) {
  if (um.nr) { return false; } var a = this.ga(l); if (a) {
    var c = um.es(l.className); var r = (c.indexOf('udmR') == -1);
    if (c.indexOf('udmY') != -1) { r = 0; } var p = um.es(um.gp(l).className); var t = (um.s || um.k) ? a.firstChild : a; t.src = um.baseSRC + ((n) ? (r) ? um.e[45] : um.e[46] : (typeof um.w[p] != um.un) ? (r) ? um.w[p][23] : um.w[p][24] : (r) ? um.e[89] : um.e[90]);
  } return a;
}; umNav.prototype.pu = function (m) {
  m.style.height = 'auto'; m.style.overflow = 'visible'; var s = (um.ne(m.parentNode)); var l = m.parentNode; var p = { tw: l.offsetWidth, th: l.offsetHeight, mw: m.offsetWidth, pw: (s) ? um.gc(l).offsetWidth : l.parentNode.offsetWidth }; var x = (um.p) ? 2000 : 0; var y = (um.p) ? 2000 : 0;
  if (!((um.h || um.p) && s)) { x = (s) ? (um.a ? (0 - p.mw) : p.pw) : ((um.a ? (0 - p.mw) : p.pw) - um.e[51] - um.e[55]); y = (0 - p.th); } else if (um.h && s && um.a) { x = (0 - p.mw + p.tw); } x += (s) ? (um.a ? (0 - um.e[14]) : um.e[14]) : (um.a ? (0 - um.e[49]) : um.e[49]); y += (s) ? (um.e[2] == 'bottom') ? (0 - um.e[15]) : um.e[15] : um.e[50]; if (s) { if (um.h) { if (um.e[2] == 'bottom') { y -= (m.offsetHeight + p.th); } if (um.s) { if (um.nc && !um.a) { x -= um.e[18]; } if (!um.s1 && um.rp) { x += um.getRealPosition(um.tr, 'x'); y += um.getRealPosition(um.tr, 'y'); } } if (um.mie) { x -= um.gc(l).offsetWidth; if (um.nc && um.a) { x += um.e[18]; } y += p.th; } if (um.ie && um.hstrip[1] == 'yes') { y -= um.e[17]; } } else if (um.ie && um.nc) { y -= um.e[18]; } } m.style.marginLeft = x + 'px'; m.style.marginTop = y + 'px';
  if (!um.p || !s) { m.style.left = 'auto'; m.style.top = 'auto'; if (um.s1 || um.k) { m.style.top = (p.th) + 'px'; } } if (um.wie50) { um.xn(m); um.xd(m); }
}; umNav.prototype.ru = function (m) {
  var c = um.es(m.className); if (/nomove/.test(c)) { return false; } var w = um.getWindowDimensions(); var p = { x: um.getRealPosition(m, 'x'), y: um.getRealPosition(m, 'y'), w: m.offsetWidth, h: m.offsetHeight, pw: m.parentNode.parentNode.offsetWidth, m: 32, nx: -1, ny: -1, sc: um.getScrollAmount(), scx: um.getScrollAmount(1) }; if (um.wie50 && um.rtl) { p.x -= um.m.body.clientWidth; } if (typeof um.scr != um.un) { p.h = scr.gmh(m); } var s = (um.ne(m.parentNode));
  if (um.s) { p.x -= um.m.body.offsetLeft; p.y -= um.m.body.offsetTop; } else if (um.mie) { var t = um.e[55] + um.e[51]; p.x -= t; p.y -= t; } else { t = m; while (!um.ne(t.parentNode)) { p.x += um.e[51]; p.y += um.e[51]; t = t.parentNode.parentNode; } } if (!um.ie && um.e[3] == 'fixed' && s) { p.x += p.scx; p.y += p.sc; } t = [(p.x + p.w), (w.x - p.m + p.scx)]; if (t[0] > t[1]) { if (s) { p.nx = (((um.p) ? p.x : 0) - (t[0] - t[1])); } else { p.nx = (((um.p) ? (0 - p.w - p.pw + um.e[55] - um.e[49]) : (0 - p.w - um.e[55] - um.e[51])) - um.e[49]); } } if (p.x < 0) { if (!s) { p.nx = (0 - um.e[55] - um.e[51] + p.pw + um.e[49]); } } um.yd = (p.y + p.h) - (w.y - p.m + p.sc);
  if (um.f && !s) { um.yd += p.sc; } if (um.yd > 0) { t = m.parentNode; um.y = um.getRealPosition(t, 'y'); while (!um.ne(t)) { um.y += um.e[51]; t = t.parentNode.parentNode; } p.ny = (0 - um.y - (p.m * 2) + w.y + p.sc - p.h); if (um.f) { p.ny -= p.sc; } } if (p.y < 0) { p.ny = (0 - (0 - p.y)); } if (p.nx != -1) { if (um.p) { m.style.left = p.nx + 'px'; } else { m.style.marginLeft = p.nx + 'px'; } um.ap('110', m); } if (p.ny != -1) { if (um.p && um.ne(m.parentNode)) { m.style.marginTop = (2000 - um.yd) + 'px'; } else { m.style.marginTop = p.ny + 'px'; } um.ap('120', m); } t = m; var y = (um.wie50 && !um.p) ? ((um.pi(m.style.marginTop) + m.parentNode.offsetHeight + um.getRealPosition(m.parentNode, 'y')) - p.sc) : (um.getRealPosition(t, 'y') - p.sc); while (!um.ne(t.parentNode)) { y += um.e[51]; t = t.parentNode.parentNode; } if (um.f) { y += p.sc; } if (y < 0) {
  p.ny = um.pi(m.style.marginTop);
    if (isNaN(p.ny)) { p.ny = 0; } m.style.marginTop = (p.ny - y) + 'px';
  } t = m; var x = um.getRealPosition(t, 'x') - p.scx; while (!um.ne(t.parentNode)) { x += um.e[51]; t = t.parentNode.parentNode; } if (x < 0) { m.style.marginLeft = (um.p && um.ne(m.parentNode)) ? '2000px' : (p.scx > 0 ? 0 - x : 0) + 'px'; m.style.left = '0'; } return true;
}; umNav.prototype.hl = function (m) {
  var d = { 'class': 'udmS' }; um.sh = m.parentNode.appendChild(um.createElement('span', d)); var c = um.es(m.className); if (c != '') { if (typeof um.v[c] != um.un) { if (um.sh.className.indexOf(c) == -1) { um.sh.className += ' ' + c; } } } um.sh.style.width = m.offsetWidth + 'px'; var h = m.offsetHeight; if (typeof um.scr != um.un) { h = scr.gmh(m); } um.sh.style.height = h + 'px'; var p = { x: (m.offsetLeft), y: (m.offsetTop) }; var s = um.ne(um.sh.parentNode);
  if (um.wie8 && !um.q && !s) { p.x -= um.e[51]; p.y -= um.e[51]; } if (um.s && !um.s1 && !s) { p.x -= um.e[51]; p.y -= um.e[51]; } um.sh.style.left = p.x + 'px'; um.sh.style.top = p.y + 'px'; return um.sh;
}; umNav.prototype.il = function (m) { var c = m.parentNode.appendChild(um.createElement('iframe', { 'class': 'udmC', 'src': 'javascript:false;' })); c.tabIndex = '-1'; c.style.width = m.offsetWidth + 'px'; c.style.height = (typeof um.scr != um.un ? scr.gmh(m) : m.offsetHeight) + 'px'; c.style.left = m.offsetLeft + 'px'; c.style.top = m.offsetTop + 'px'; return c; }; umNav.prototype.dw = function (a) {
um.rw += a.offsetWidth;
  if (um.nc) { um.rw -= um.e[18]; } else { um.rw += um.e[17]; }
}; umNav.prototype.aw = function () { if (um.o7 || um.mie || um.q) { um.rw += (um.gp(um.gc(um.tr)).offsetLeft + um.getRealPosition(um.tr, 'x')); } if (um.mie || um.og) { um.rw *= 1.05; } if (um.getWindowDimensions().x < um.rw) { um.tr.style.width = um.rw + 'px'; } else { if (um.wie50) { um.tr.style.setExpression('width', 'document.body.clientWidth'); } else { um.tr.style.width = '100%'; } } if (um.mie) { um.tr.style.height = um.gc(um.tr).offsetHeight + 'px'; } }; umNav.prototype.ts = function (v) {
  var s = um.m.getElementsByTagName('select'); var n = s.length;
  if (n > 0) { var i = 0; do { s[i++].style.visibility = v; } while (i < n); um.ap((v == 'hidden') ? '067' : '077', s); }
}; umNav.prototype.ws = function () {
  clearInterval(um.vs); var h = um.gc(um.tr).offsetHeight; var w = um.getWindowDimensions(); if ((h != um.lh && um.reset[2] != 'no') || ((w.x != um.lw.x || w.y != um.lw.y) && um.reset[1] != 'no')) {
    um.closeAllMenus(); if (um.rg) { um.rw = 0; var n = um.tr.childNodes; var l = n.length; for (var i = 0; i < l; i++) { if (n[i].nodeName != '#text') { this.dw(n[i]); } } this.aw(); } um.lw = w; um.lh = h;
    if (um.og && um.hstrip[0] != 'none') { um.tr.style.height = (um.hstrip[1] == 'yes') ? (um.lh + um.e[17]) + 'px' : um.lh + 'px'; }
  } um.vs = setInterval('um.n.ws()', 55);
}; um.qc = function (l) { if (um.reset[3] == 'yes' && l != '' && l != um.jv) { um.closeAllMenus(); } }; um.vn = function (n) { return n.replace(/html[:]+/, ''); }; um.es = function (c) { return c == null ? '' : c; }; um.gt = function (r, t, a) { if (!a) { a = []; } for (var i = 0; i < r.childNodes.length; i++) { if (r.childNodes[i].nodeName.toUpperCase() == t.toUpperCase() || t == '*') { a[a.length] = r.childNodes[i]; } a = um.gt(r.childNodes[i], t, a); } return a; }; um.gc = function (r) { return r.getElementsByTagName('a')[0]; };
um.gu = function (r) { return r.getElementsByTagName('ul'); }; um.gm = function (r) { var m = null; var c = r.childNodes; var l = c.length; for (var i = 0; i < l; i++) { var n = um.vn(c[i].nodeName).toLowerCase(); if (n == 'ul') { m = c[i]; break; } } return m; }; um.cm = function (e) { if (!e) { e = window.event; } if (!um.tr.contains(e.srcElement || e.target) || e.keyCode) { um.closeAllMenus(); } }; um.refresh = function (g) {
  if (typeof g == um.un) { g = 0; } delete um.ini; um.ready = 0; if (umTree) {
    var l = um.tr.getElementsByTagName('li'); var n = l.length; for (i = 0; i < n; i++) {
      var a = um.n.ga(l[i]);
      if (a) { a.parentNode.removeChild(a); }
    }
  } umIni(g);
}; um.closeAllMenus = function () { um.n.cd(um.tr); um.n.ck(um.tr); um.ha = 0; }; um.getWindowDimensions = function () {
  if (typeof window.innerWidth != um.un) { var w = { x: window.innerWidth, y: window.innerHeight }; }
  else if (um.q) { w = { x: um.m.body.clientWidth, y: um.m.body.clientHeight }; } else { w = { x: um.m.documentElement.offsetWidth, y: um.m.documentElement.offsetHeight }; } return w;
}; um.getScrollAmount = function (d) { return ((typeof d == um.un || !d) ? (typeof window.pageYOffset != um.un ? window.pageYOffset : um.q ? um.m.body.scrollTop : um.m.documentElement.scrollTop) : (typeof window.pageXOffset != um.un ? window.pageXOffset : um.q ? um.m.body.scrollLeft : um.m.documentElement.scrollLeft)); }; um.getRealPosition = function (r, d) { um.ps = (d == 'x') ? r.offsetLeft : r.offsetTop; um.te = r.offsetParent; while (um.te) { um.ps += (d == 'x') ? um.te.offsetLeft : um.te.offsetTop; um.te = um.te.offsetParent; } return um.ps; };
if (typeof um.trigger != um.un && um.trigger != '' && !um.mie) { um.drt = null; um.drw = function () { this.n = typeof this.n == um.un ? 0 : this.n++; if (typeof um.m.getElementsByTagName != um.un && um.m.getElementsByTagName('body')[0] && um.gd('udm') && um.gd(um.trigger)) { try { umIni(); } catch (err) { clearTimeout(um.drt); return; } } else if (this.n < 60) { um.drt = setTimeout('um.drw()', 250); } }; um.drw(); } um.activateMenu = function (n, x, y) { if (!um.pet()) { return; } var umVN = um.gd(n); if (umVN && !um.rtl) { um.vm = um.gm(umVN); if (um.vm) { if (um.n.cck()) { um.n.cd(umVN); um.n.pr(um.vm, umVN, 0); um.vm.style.left = x; um.vm.style.top = y; } } } }; um.deactivateMenu = function (n) {
  if (!um.pet()) { return; } var umVN = um.gd(n);
  if (umVN && !um.rtl) { um.n.cp(um.gm(umVN), umVN); }
}; um.pet = function () { return !um.s || typeof event == um.un || (!(event.target == event.relatedTarget.parentNode || (event.eventPhase == 3 && event.target.parentNode == event.relatedTarget))); };


//////////////////////////////////////////////////////////////udm-resources/udm-mod-keyboard.js//
/////////////////////////////////////////////////////////

function umKM() {
um.kbm = this; um.ha = 0; um.fkd = 0; um.tf = null; um.mt = [um.e[10], um.e[11]]; if (um.kb && um.m.cookie) {
  var f = [um.gd('hotkeySelector'), um.gd('modifierSelector')]; var c = um.m.cookie.split(';'); var n = c.length; i = 0; do {
    if (/udmKeyPrefs/.test(c[i])) {
      var a = c[i].split('=')[1].split(','); j = 0; do {
      um.keys[j + 4] = a[j];
        if (f[j]) { var z = f[j].options; var l = z.length; var k = 0; do { if (z[k].value == a[j]) { z[k].selected = 1; break; } k++; } while (k < l); } j++;
      } while (j < 2); break;
    } i++;
  } while (i < n);
}
}; um.keyPrefs = function () {
  if (!(um.kb && um.d)) { alert('Sorry, this feature is not supported in your browser.'); return false; } var d = new Date(); d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000)); um.m.cookie = 'udmKeyPrefs=test; expires=' + d.toGMTString() + '; path=/';
  if (!um.m.cookie) { alert('Sorry, your browser didn\'t accept the cookie.\nWe cannot save your settings.'); } else { var f = [um.gd('hotkeySelector'), um.gd('modifierSelector')]; i = 0; do { um.keys[i + 4] = f[i].options[f[i].options.selectedIndex].value; i++; } while (i < 2); um.m.cookie = 'udmKeyPrefs=' + um.keys[4] + ',' + um.keys[5] + '; expires=' + d.toGMTString() + '; path=/'; alert('Save successful!'); } return true;
}; umKM.prototype.bdh = function () {
  if (typeof document.addEventListener != um.un) {
    if (um.s) { var self = this; document.addEventListener('keydown', function (e) { if (um.fkd) { return; } um.fkd = 1; self.kha(e); }, 0); document.addEventListener('keyup', function () { um.fkd = 0; }, 0); }
    else { document.addEventListener('keypress', this.kha, 0); }
  } else { document.attachEvent('onkeydown', this.kha); }
}; umKM.prototype.bfh = function () { document.addEventListener('mouseover', function (e) { if (um.ha && um.kdf && !umTree.contains(e.target)) { um.cm(e); um.ha = 0; } }, 0); }; umKM.prototype.bth = function (l) { var a = um.gc(l); var c = um.es(a.className); if (/nohref/i.test(c)) { um.kbm.cdl(a); } if (um.ie) { return false; } a.addEventListener('focus', function (e) { if ((!um.o7 && !um.lf) || (um.o7 && um.kdf)) { um.bub = 0; l.over(1, e.target); } }, 0); return true; }; umKM.prototype.cu = function (m, l, t) {
  var v = [null, null, null];
  if ((m != null && m.style.visibility != 'visible') || m == null) { if (l.previousSibling) { v[0] = l.previousSibling; } if (l.nextSibling) { v[1] = l.nextSibling; } } m = (um.gu(um.gp(t)).length > 0) ? um.gu(um.gp(t))[0] : null; if (m != null && typeof m.style != um.un && m.style.visibility == 'visible') { var r = m.getElementsByTagName('li'); var n = r.length; j = 0; do { v[v.length] = r[j++]; } while (j < n); } if (um.tf != null) {
    r = um.gp(um.tf).parentNode.lastChild;
    if (um.gp(um.tf) == r) { um.n.lr(um.gc(r), 0); }
  } n = v.length; i = 0; do { if (v[i] != null) { if (um.gu(v[i]).length > 0) { um.n.cp(um.gu(v[i])[0], v[i]); } else { um.n.cp(null, v[i]); } } i++; } while (i < n);
}; umKM.prototype.cdl = function (l) { l.href = um.jv; l.style.cursor = 'default'; }; umKM.prototype.mkc = function (k) { for (i = 1; i < 4; i += 2) { if (k == um.keys[i]) { k = um.keys[4 - i]; break; } } return k; }; umKM.prototype.kha = function (e) {
  if (!e) { e = window.event; } k = e.keyCode; if (!um.kb && k != 9) { return false; } if (k == um.keys[6]) { um.ha = 1; } if ((k == um.keys[4] && ((um.keys[5] == 'none' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) || e[um.keys[5]])) || (k == um.keys[6])) {
  um.e[10] = 1; um.e[11] = 1;
    if (!um.ha) { um.cm(e); um.fl.focus(); um.ha = 1; um.ap('080', um.tr); } else { if (um.sp) { um.sapi.voice.Speak(um.vocab[8], 2); } um.cm(e); if (um.wie50 && um.e[13] == 'yes') { um.n.ts('visible'); } eval(um.keys[7]).focus(); um.e[10] = um.mt[0]; um.e[11] = um.mt[1]; um.ha = 0; um.ap('090', um.tr); }
  } var a = (e.target) ? e.target : e.srcElement; if (um.tr.contains(a)) {
  um.e[10] = 1; um.e[11] = 1; var c = um.es(um.gp(a).parentNode.className);
    if ((um.h && c == 'udm') || typeof um.hmx == 'boolean') { if (um.nm && (k == um.keys[0] || k == um.keys[2])) { return false; } i = 0; do { if (k == um.keys[i]) { k = um.keys[um.rtl ? (i - 1) : (3 - i)]; break; } i++; } while (i < 4); } else {
      if (um.nm && (k == um.keys[1] || k == um.keys[3])) { return false; } var t = um.gp(a).parentNode; if (um.a || um.e[12] == 'yes') {
        c = um.es(t.className); if (um.gu(um.gp(a))[0]) { um.xm = um.gu(um.gp(a))[0]; if (um.getRealPosition(um.xm, 'x') < um.getRealPosition(t, 'x')) { k = um.kbm.mkc(k); } } else if (c != 'udm') {
        um.pm = um.gp(t).parentNode;
          if (um.getRealPosition(um.pm, 'x') > um.getRealPosition(t, 'x')) { k = um.kbm.mkc(k); }
        }
      }
    } um.tf = null; var l = umTree.getElementsByTagName('li'); var n = l.length; switch (k) {
      case 9: i = 0; do { if (l[i] == um.gp(a)) { um.tf = a; if (e.shiftKey) { var p = (i == 0) ? -1 : i - 1; } else { p = ((i + 1) == n) ? -1 : i + 1; } if (p <= -1) { setTimeout('um.closeAllMenus()', 55); } break; } i++; } while (i < n); break; case um.keys[0]: if (um.gp(a).previousSibling) { var s = um.gp(a).previousSibling; if (s) { t = um.gc(s); var f = (typeof t != um.un) ? t : null; if (f) { f.focus(); } } } else if (um.gp(a).parentNode.childNodes.length > 1) {
        um.n.cp(um.gu(um.gp(a))[0], um.gp(a)); t = um.gc(um.gp(a).parentNode.lastChild); f = (um.gp(a).parentNode.className != 'udm');
        if (f && um.h && um.gp(um.gp(a).parentNode).parentNode.className == 'udm') { t = um.gc(um.gp(um.gp(a).parentNode)); } t.focus();
      } um.ap('100', a); if (um.ie) { return false; } else if (e) { e.preventDefault(); } break; case um.keys[1]: if (um.gu(um.gp(a))[0]) { t = um.gu(um.gp(a))[0]; f = (t) ? um.gc(t) : null; if (f) { f.focus(); } } um.ap('101', a); if (um.ie) { return false; } else if (e) { e.preventDefault(); } break; case um.keys[2]: if (um.gp(a).nextSibling) { s = um.gp(a).nextSibling; if (s) { t = um.gc(s); f = (typeof t != um.un) ? t : null; if (f) { f.focus(); } } } else if (um.gp(a).parentNode.childNodes.length > 1) { um.n.cp(um.gu(um.gp(a))[0], um.gp(a)); um.gc(um.gp(a).parentNode.firstChild).focus(); } um.ap('102', a);
        if (um.ie) { return false; } else if (e) { e.preventDefault(); } break; case um.keys[3]: if (um.gp(a).parentNode.parentNode) { t = um.gp(a).parentNode; f = (t.className == 'udm') ? null : um.gc(um.gp(t)); if (f && (typeof f.focus == 'function' || typeof f.focus == 'object')) { f.focus(); } } um.ap('103', a); if (um.ie) { return false; } else if (e) { e.preventDefault(); } break;
    }
  } return true;
}; umKM.prototype.cws = function (n) { if (um.mie) { return false; } for (var x = 0; x < n.childNodes.length; x++) { var k = n.childNodes[x]; if ((k.nodeType == 3) && (!/\S/.test(k.nodeValue))) { n.removeChild(n.childNodes[x]); x--; } if (k.nodeType == 1) { this.cws(k); } } return n; };


// basic Document

// Get today's Date
function makeArray() {
  for (i = 0; i < makeArray.arguments.length; i++)
    this[i + 1] = makeArray.arguments[i];
}

var months = new makeArray('January', 'February', 'March',
  'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December');

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;

today = months[month] + " " + day + ", " + year;
//

//
// Function to get parameters from html "querystring"
var locate = window.location
var action = locate.toString()

function delineate(str) {
  theleft = str.indexOf("=") + 1;
  theright = str.lastIndexOf("&");
  return (str.substring(theleft, theright));
}

//

function openClose(hidden, id) {
  var el = document.getElementById(hidden);
  var elLink = document.getElementById(id);
  if (elLink.className == 'minus') {
    el.style.display = 'none';
    elLink.className = 'plus';
  }
  else if (elLink.className == 'plus') {
    el.style.display = 'block';
    elLink.className = 'minus';
  }
}

function autotab(original, destination) {
  if (original.getAttribute && original.value.length == original.getAttribute("maxlength"))
    destination.focus()
}

function radioToggle(hidden, state) {
  var el = document.getElementById(hidden);
  if (state == 1) {
    el.style.display = 'block';
  }
  else if (state == 0) {
    //alert('hiden is WHAT=>' + hidden + "]");
    el.style.display = 'none';
  }
}

function hideMe(hide, exempt) {
  recurse(document.documentElement);

  function recurse(node) {
    if (node != null) {
      if (node.childNodes != null) {
        for (var i = 0; i < node.childNodes.length; ++i) {
          recurse(node.childNodes[i]);
        }
      }
      var isHidden = node.id != null && node.id.match(hide);
      var isExempt = node.id != null && exempt != null && node.id.match(exempt);
      if (!isExempt && isHidden) {
        node.style.display = "none";
      }
    }
  }
}

function showAll(show) {
  recurseShow(document.documentElement);

  function recurseShow(node) {
    if (node != null) {
      if (node.childNodes != null) {
        for (var i = 0; i < node.childNodes.length; ++i) {
          recurseShow(node.childNodes[i]);
        }
      }
      var isHidden = node.id != null && node.id.match(show);
      if (isHidden) {
        node.style.display = "block";
      }
    }
  }
}

function showMe(area, hideVar) {
  if (!document.getElementById) return null;
  showArea = document.getElementById(area);
  showArea.style.display = "block";

  if (!hideVar) {
    hideMe('showhide_', area);
  }
  else {
    hideMe(hideVar, area);
  }
}

function hideTabs(exempt, tab, parentId) {
  if (!document.getElementsByTagName) return null;
  if (!exempt) exempt = "";
  if (!tab) tab = "";
  if (parentId) {
    var parentCont = document.getElementById(parentId);
    var divs = parentCont.getElementsByTagName("div");
    var tabs = parentCont.getElementsByTagName("a");
  }
  else {
    var divs = document.getElementsByTagName("div");
    var tabs = document.getElementsByTagName("a");
  }
  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var id = div.id;
    //alert(id)
    if ((id.indexOf("tab_") != -1) && (id != exempt)) {
      div.style.display = "none";
    }
  }
  for (var j = 0; j < tabs.length; j++) {
    var a = tabs[j];
    var aid = a.id;
    //alert(aid)
    if ((aid.indexOf("tablink_") != -1) && (aid != tab)) {
      a.className = "";
    }
  }
}

function showTabs(what, tab, parentId) {
  if (!document.getElementById) return null;
  showWhat = document.getElementById(what);
  showTab = document.getElementById(tab);
  showWhat.style.display = "block";
  showTab.className = "active";
  hideTabs(what, tab, parentId);
}

//Check all function for checkboxes
var checkflag = "false";
function check(field) {
  if (checkflag == "false") {
    for (i = 0; i < field.length; i++) {
      field[i].checked = true;
    }
    checkflag = "true";
    return "Uncheck All";
  }
  else {
    for (i = 0; i < field.length; i++) {
      field[i].checked = false;
    }
    checkflag = "false";
    return "Check All";
  }
}

//display remaining characters for textarea
function textCounter(field, cntfield, maxlimit) {
  var vLength = field.value.length
  if (vLength > maxlimit) // if too long...trim it!
    field.value = field.value.substring(0, maxlimit);
  // otherwise, update 'characters left' counter
  else
    cntfield.value = maxlimit - vLength;
}

//Move select box items to another
var NS4 = (navigator.appName == "Netscape" && parseInt(navigator.appVersion) < 5);

function addOption(theSel, theText, theValue) {
  var newOpt = new Option(theText, theValue);
  var selLength = theSel.length;
  theSel.options[selLength] = newOpt;
}

function deleteOption(theSel, theIndex) {
  var selLength = theSel.length;
  if (selLength > 0) {
    theSel.options[theIndex] = null;
  }
}

function moveOptions(theSelFrom, theSelTo) {

  var selLength = theSelFrom.length;
  var selectedText = new Array();
  var selectedValues = new Array();
  var selectedCount = 0;

  var i;

  // Find the selected Options in reverse order
  // and delete them from the 'from' Select.
  for (i = selLength - 1; i >= 0; i--) {
    if (theSelFrom.options[i].selected) {
      selectedText[selectedCount] = theSelFrom.options[i].text;
      selectedValues[selectedCount] = theSelFrom.options[i].value;
      deleteOption(theSelFrom, i);
      selectedCount++;
    }
  }

  // Add the selected text/values in reverse order.
  // This will add the Options to the 'to' Select
  // in the same order as they were in the 'from' Select.
  for (i = selectedCount - 1; i >= 0; i--) {
    addOption(theSelTo, selectedText[i], selectedValues[i]);
  }

  if (NS4) history.go(0);
}

//write out pod menus
function getLink(name, href, currentPage) {
  if (currentPage != href) {
    return '<li><a href="' + href + '">' + name + '</a></li>';
  }
  else {
    return '<li class="here">' + name + '</li>';
  }
}




function resetForm(formName, results) {
  document.forms[formName].reset()
  if (results) {
    hideMe(results);
  }
}

// Title: tigra tables
// URL: http://www.softcomplex.com/products/tigra_tables/
// Version: 1.1
// Date: 08/15/2005
// Notes: Permission given to use this script in any kind of applications if
//    header lines are left unchanged.

function tigra_tables(
  str_tableid, // table id (req.)
  num_header_offset, // how many rows to skip before applying effects at the begining (opt.)
  num_footer_offset, // how many rows to skip at the bottom of the table (opt.)
  str_odd_color, // background color for odd rows (opt.)
  str_even_color, // background color for even rows (opt.)
  str_mover_color, // background color for rows with mouse over (opt.)
  str_onclick_color // background color for marked rows (opt.)
) {

  // validate required parameters
  if (!str_tableid) return alert("No table(s) ID specified in parameters");
  var obj_tables = (document.all ? document.all[str_tableid] : document.getElementById(str_tableid));
  if (!obj_tables) return alert("Can't find table(s) with specified ID (" + str_tableid + ")");

  // set defaults for optional parameters
  var col_config = [];
  col_config.header_offset = (num_header_offset ? num_header_offset : 0);
  col_config.footer_offset = (num_footer_offset ? num_footer_offset : 0);
  col_config.odd_color = (str_odd_color ? str_odd_color : '#ffffff');
  col_config.even_color = (str_even_color ? str_even_color : '#dbeaf5');
  col_config.mover_color = (str_mover_color ? str_mover_color : '#6699cc');
  col_config.onclick_color = (str_onclick_color ? str_onclick_color : '#4C7DAB');

  // init multiple tables with same ID
  if (obj_tables.length)
    for (var i = 0; i < obj_tables.length; i++)
      tt_init_table(obj_tables[i], col_config);
  // init single table
  else
    tt_init_table(obj_tables, col_config);
}

function tt_init_table(obj_table, col_config) {
  var col_lconfig = [],
    col_trs = obj_table.rows;
  if (!col_trs) return;
  for (var i = col_config.header_offset; i < col_trs.length - col_config.footer_offset; i++) {
    col_trs[i].config = col_config;
    col_trs[i].lconfig = col_lconfig;
    col_trs[i].set_color = tt_set_color;
    col_trs[i].onmouseover = tt_mover;
    col_trs[i].onmouseout = tt_mout;
    col_trs[i].onmousedown = tt_onclick;
    col_trs[i].order = (i - col_config.header_offset) % 2;
    col_trs[i].onmouseout();
  }
}
function tt_set_color(str_color) {
  this.className = str_color;
}

// event handlers
function tt_mover() {
  if (this.lconfig.clicked != this)
    this.set_color(this.config.mover_color);
}
function tt_mout() {
  if (this.lconfig.clicked != this)
    this.set_color(this.order ? this.config.odd_color : this.config.even_color);
}
function tt_onclick() {
  if (this.lconfig.clicked == this) {
    this.lconfig.clicked = null;
    this.onmouseover();
  }
  else {
    var last_clicked = this.lconfig.clicked;
    this.lconfig.clicked = this;
    if (last_clicked) last_clicked.onmouseout();
    this.set_color(this.config.onclick_color);
  }
}

function getUrlParameterArray() {
  input = decodeURI(location.search).substring(1);
  return input.length > 0 ? input.split("&") : new Array();
}

/**
 * Get the parameters passed in the URL as an object.
 * The parameter has a property for each parameter.
 * If the parameter has a value, it is used, otherwise it is set to true.
 */
function getUrlParameters() {
  parameters = new Object();
  array = getUrlParameterArray();
  for (i = 0; i < array.length; ++i) {
    index = array[i].indexOf("=");
    attribute = index == -1 ? array[i] : array[i].substring(0, index);
    value = index == -1 ? true : array[i].substring(index + 1);
    parameters[attribute] = value;
  }
  return parameters;
}

function getProperties(object) {
  string = "";
  for (i in object) {
    if (i.match(/[0-9]+/)) continue;
    if (string != "") string += ", ";
    string += i + "=" + object[i];
  }
  return string;
}

function toString(object) {
  return object + "  {" + getProperties(object) + "}";
}

function setDisableInputTagsOf(element, disabledValue) {
  tags = ["INPUT", "SELECT", "TEXTAREA"];
  for (i = 0; i < tags.length; ++i) {
    elements = element.getElementsByTagName(tags[i]);

    if (elements == null || elements == undefined) continue;
    for (j = 0; j < elements.length; ++j) {
      var el = elements[j];
      if ((el.type == "text") ||
        (el.type == "select-one") ||
        (el.type == "select-multiple") ||
        (el.type == "textarea")) {
        el.disabled = disabledValue;
        el.className = "disabled";
      }
      else if ((el.type == "checkbox") ||
        (el.type == "radio")) {
        el.disabled = disabledValue;
        //el.className = "noBorder";
      }
    }
  }
}


function showDate() {
  var aceDate = new Date();
  var aceYear = aceDate.getYear();
  if (aceYear < 1000) {
    aceYear += 1900;
  }
  var aceDay = aceDate.getDay();
  var aceMonth = aceDate.getMonth() + 1;
  if (aceMonth < 10) {
    aceMonth = "0" + aceMonth;
  }
  var aceDayMonth = aceDate.getDate();
  if (aceDayMonth < 10) {
    aceDayMonth = "0" + aceDayMonth;
  }
  return aceMonth + "/" + aceDayMonth + "/" + aceYear;
}

// authored by: jhillmann
// shows progress bar when button is pushed
// buttId is id of button triggering progress bar

function showHideProgressBar(buttId) {

  var theBox;
  var ind;

  var iebody = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
  var dsocleft = document.all ? iebody.scrollLeft : pageXOffset
  var dsoctop = document.all ? iebody.scrollTop : pageYOffset

  showProgress(buttId);

  function showProgress(buttId) {

    var ind = 0;
    theBox = document.getElementById('waiting')
    theBox.style.left = parseInt(dsocleft) + 500 + "px"
    theBox.style.top = dsoctop + 150 + "px"
    theBox.style.display = 'block';
    buttonWorks(buttId, 'active')
    intervalID = setInterval(hideProgress, 4000);
  }

  function hideProgress() {
    theBox.style.display = 'none';
    buttonWorks(buttId, 'dis')
    clearInterval(intervalID);
  }
}

function buttonWorks(id, action) {
  theButt = document.getElementById(id);
  if (action == 'active') {
    theButt.disabled = true;
    theButt.className = 'formBtn disabledButton';
  }
  else if (action == 'dis') {
    theButt.disabled = false;
    theButt.className = 'formBtn';
  }
}

function newWindow(page) {
  /* Modified width for defect ESPRD00722000 */
  window.open(page, null, "height=500,width=1000,status=yes,toolbar=no,menubar=no,location=no");
  /* Ends Here for defect ESPRD00722000 */
}

function writeProgressInd(str) {
  if (!str) str = 'claim'
  box =
    '<div  id="waiting" class="progressCont">' +
    '<div id="progress" class="inprogress">' +
    '<div class="inprogressinner">' +
    '<div>Please wait while your ' + str + ' is processing...</div>' +
    '<div><img src="../images/x.gif" border="0" width="1" height="10" alt="" title=""/></div>' +
    '<img src="../images/progressbar2.gif" alt="" title=""/>' +
    '</div>' +
    '</div>' +

    '<iframe id="frame" src="javascript:" class="progressframe"></iframe>' +

    '</div>';
  document.write(box);
}

// claim form functions

function addClaim() {

}

function saveClaim(theField, val) {
  var theVal = parseInt(val)
  var newVal = theVal + 1;
  var strVal = newVal.toString();
  if (strVal.length < 2) {
    theField.value = newVal;
    //alert('less 2: '+ theField.value)
  }
  else if (strVal.length >= 2) {
    theField.value = newVal;
    //alert('more 2: '+ theField.value)
  }
}


/*
authored jhillmann
currently in use for cosxt acuity tables
works with array of sections defined on html page
*/
function openAll() {
  var xLength = sectionArray.length - 1
  for (x in sectionArray) {
    var linkId = 'plusMinus_' + sectionArray[x]
    var el = document.getElementById(sectionArray[x]);
    var elLink = document.getElementById(linkId);
    el.style.display = '';
    elLink.className = 'minus';
    openCloseGroup(el, 'entry_', 'show')
    openCloseGroup(el, 'total_', 'show')
  }
}

function closeAll() {
  for (x in sectionArray) {
    var linkId = 'plusMinus_' + sectionArray[x]
    var el = document.getElementById(sectionArray[x]);
    var elLink = document.getElementById(linkId);
    el.style.display = 'none';
    elLink.className = 'plus';
    //openCloseGroup(el,'entry_','hide')
    //openCloseGroup(el,'total_','hide')
  }
}
// currently not using - jhillmann
function openCloseGroup(el, group, action) {
  var divs = el.getElementsByTagName('div')
  var dLength = divs.length - 1;
  for (var d = 0; d <= dLength; d++) {
    if (divs[d].id.match(group)) {
      var linkId = 'plusMinus_' + divs[d].id
      var divLink = document.getElementById(linkId);
      if (action == 'hide') {
        divs[d].style.display = 'none';
        divLink.className = 'plus';
      }
      else if (action == 'show') {
        divs[d].style.display = '';
        divLink.className = 'minus';
      }
    }
  }
}

function rowColor(id) {
  var tab = document.getElementById(id);
  var rowArray = tab.getElementsByTagName('tr');
  rowArray = findShowRows(rowArray)
  var l = rowArray.length
  for (i = 2; i < l; i++) {
    if (i % 2 == 0) {
      rowArray[i].className = 'row_alt';
    }
    else {
      rowArray[i].className = 'row';
    }
  }
}

function popContextHelp(pWhere) {
  window.open(pWhere + "help.html", "help", "resizable=1,width=650,height=450");
}

function ckField(fieldName) {
  var theField = document.getElementById(fieldName);
  var theValue = theField.value

  if (theValue != "") {
    alert("Save it")
  }
}

function deleteConfirm(where, str) {
  if (!str) str = '';
  if (confirm("Are you sure you want to Delete?")) {
    deleteMsg(where);
    hideMe('table' + str + '_');
  }
}

function deleteRow(msg, str) {
  if (confirm("Are you sure you want to Delete?")) {
    deleteMsg(msg);
    hideMe(str);
  }
}

function deleteToPage(page) {
  if (confirm("Are you sure you want to Delete?")) {
    window.location = page;
  }
}

//Function for saving a page
function success(str) {
  if (!str) str = '';
  el = document.getElementById('msgBox' + str);
  el.innerHTML = "Success"
  var theMsgBox = 'message_success' + str
  showMe(theMsgBox, 'message_');
}

function deleteMsg(str) {

  if (!str) str = '';
  el = document.getElementById('msgDeleteBox' + str);
  el.innerHTML = "Successfully Deleted";
  var theMsgBox = 'message_delete' + str
  showMe(theMsgBox, 'message_');

}

function declineArgeement() {
  if (confirm("We regret that you have declined the Medicaid Provider Enrollment Agreement.  You may not enroll as a Medicaid Provider unless you accept the agreement.  Please contact ACS by phone or fax to assist you and answer questions you may have about the agreement.  Phone (999) 999-9999 Fax (999) 999-9999")) {
    location.href = "../start.html";
  }
}

function confirmExit() {
  if (confirm("Do you wish to exit this application?\n All unsaved data will be lost,\nand the page cannot be recalled for printing.")) {
    document.location.href = "../start.html";
  }
}

/*
function writeAuditSection(path, str, w){
if(!w) w = '50';
if(!str) str = '';
section = '<fieldset class="expand">' +
'<legend><a href="javascript:void(0)" onClick="openClose(\'moreContact' + str + '\',this.id);" id="plusMinus_moreContact' + str + '" class="plus">Audit</a></legend>' +
'<div id="moreContact' + str + '" class="hide">' +
'<table cellspacing="0" width="' + w + '%">' +
'<tr>' +
'<td colspan="2"><span class="strong">Member Info Table</span></td>' +
'</tr>' +
'<tr style="cursor:pointer">' +
'<td class="dataLabel">Last Update Date / Time:</td>' +
'<td><a href="javascript:radioToggle(\'log_detail' + str + '\',1)">06/30/2006 05:17:25PM</a></td>' +
'</tr>' +
'<tr>' +
'<td class="dataLabel">Last Update User ID:</td>' +
'<td>rbordeaux<br /><br /></td>' +
'</tr>' +
'<tr>' +
'<td class="dataLabel">Original Entry Date / Time:</td>' +
'<td>06/15/2006 03:45:09PM</td>' +
'</tr>' +
'<tr>' +
'<td class="dataLabel">Original Entry User ID:</td>' +
'<td>rkowalske</td>' +
'</tr>' +
'<tr>' +
'<td colspan="2">' +
'<div><img src="' + path + '../images/x.gif" border="0" width="1" height="10" alt="" title=""/></div>' +
'</td>' +
'</tr>' +
'</table>' +
'<div id="log_detail' + str + '" class="hide">' +
'<table cellspacing="0" width="' + w + '%" class="dataTable">' +
'<tr>' +
'<th>Field Name</th>' +
'<th>Before</th>' +
'<th>After</th>' +
'</tr>' +
'<tr class="row">' +
'<td>Sample Field 1</td>' +
'<td>002</td>' +
'<td>000</td>' +
'</tr>' +
'<tr class="row_alt">' +
'<td>Sample Field 2</td>' +
'<td>002</td>' +
'<td>000</td>' +
'</tr>' +
'</table>' +
'</div>' +
'</div>' +
'</fieldset>';
document.write(section);

}
*/

/* Added to handle toggle button   */

function toggle(obj, state) {
  var el = document.getElementById(obj);

  if (state == 1) {
    el.style.display = 'block';
  }
  else if (state == 0) {
    el.style.display = 'none';
  }
  else if (state == 2) {
    if ((el.style.display == 'none') || (el.style.display == '')) {
      el.style.display = 'block';
    }
    else if (el.style.display == 'block') {
      el.style.display = 'none';
    }
  }
}


function afterRefresh(hiddenText, area, outputLinkID) {
  var hiddenTxtComponent = find(hiddenText);
  if (hiddenTxtComponent.value == 'minus') {
    showAll(area);
    var outputLinkComp = findLink(outputLinkID);
    plusMinusForRefresh(area, outputLinkComp, hiddenText)
  }
}

/*
 * Used to display either '+' image or '-' image when a section
 * is closed or expanded respectively
 */
function plusMinusForRefresh(id, obj, hiddenTextId) {
  var hiddenTxt = find(hiddenTextId);
  var el = document.getElementById(id);
  if (el.style.display == 'none') {
    obj.className = 'plus';
    hiddenTxt.value = 'plus';
  }
  else if (el.style.display == 'block') {
    obj.className = 'minus';
    hiddenTxt.value = 'minus';
  }
  else if (el.style.display == '') {
    obj.className = 'minus';
    hiddenTxt.value = 'minus';
  }
}

/*
 * Pass the id of the component in a JSF page. The value of the component is returned.
 */
function find(id) {
  var formVar;
  for (var i = 0; i < document.forms.length; i++) {
    for (var j = 0; j < document.forms[i].elements.length; j++) {
      if (document.forms[i].elements[j].id.indexOf(id) >= 0) {
        return (document.forms[i].elements[j]);
      }
    }
  }
}

/* to disable links */

function disableLinks() {
  for (i = 0; i < document.links.length; i++) {
    document.links[i].style.cursor = 'default';
    document.links[i].onclick = retFalse;
  }

}
function retFalse() {
  return false;
}

/* to disable Buttons */
function disableButtons() {

  /* Modified  for defect ESPRD00722000 */
  var allFields = document.getElementsByTagName('*');
  /* Ends Here for defect ESPRD00722000 */
  for (var i = 0; i < allFields.length; i++) {
    if (allFields[i].className == 'formBtn') {
      allFields[i].disabled = true;
    }
  }
}
function disableControls() {

  /* Modified  for defect ESPRD00722000 */
  var allFields = document.getElementsByTagName('*');
  /* Ends Here for defect ESPRD00722000 */
  for (var i = 0; i < allFields.length; i++) {
    if (allFields[i].tagName == "INPUT") {
      allFields[i].disabled = true;
    }
    else if (allFields[i].tagName == "SELECT") {
      allFields[i].disabled = true;
    }
    else if (allFields[i].tagName == "TEXTAREA") {
      allFields[i].disabled = true;
    }
  }
}

function enableButtons() {

  /* Modified  for defect ESPRD00722000 */
  var allFields = document.getElementsByTagName('*');
  /* Ends Here for defect ESPRD00722000 */
  for (var i = 0; i < allFields.length; i++) {
    if (allFields[i].className == 'actions')
      allFields[i].disabled = false;
  }
}


/* Functions used for ProviderClaims module - Start */

function renderDiv(hiddenId, plusMinusId, sectionId) {

  var hiddenVariable = document.getElementById(portletNameSpace + hiddenId);

  if ((hiddenVariable == null) || (hiddenVariable == '') || (hiddenVariable.length == 0)) {
    hideDivById(sectionId);
  } else if ((hiddenVariable.value == 'plus')) {
    hideDivById(sectionId);
  } else if ((hiddenVariable.value == 'minus')) {
    var plusMinusLinkObj = document.getElementById(portletNameSpace + plusMinusId);
    plusMinusLinkObj.className = 'minus';
    showDivById(sectionId);
  } else {
    hideDivById(sectionId);
  }
}

function setHiddenValue(hiddenVariable, hiddenValue) {
  document.getElementById(portletNameSpace + hiddenVariable).value = hiddenValue;
  alert("hiddenValue::" + hiddenValue);
}

function plusMinusToggle(id, obj, hiddenTextId) {

  var hiddenTxt = document.getElementById(portletNameSpace + hiddenTextId);
  var el = document.getElementById(id);
  if (el.style.display == 'none') {
    obj.className = 'plus';
    hiddenTxt.value = 'plus';
  } else if (el.style.display == 'block') {
    obj.className = 'minus';
    hiddenTxt.value = 'minus';
  } else if (el.style.display == '') {
    obj.className = 'minus';
    hiddenTxt.value = 'minus';
  }

}

function renderRadioTogNo(radioObj, tabTobeOpen) {
  var selRadioObjs = document.getElementsByName(portletNameSpace + radioObj);
  if (selRadioObjs != null) {

    if (selRadioObjs[2].checked == true) {
      radioToggle(tabTobeOpen, 1);
    } else {
      radioToggle(tabTobeOpen, 0);
    }

  } else {
    return "";
  }

}

function radioTogNo(radioObj, tabTobeOpen) {
  if (radioObj.checked) {

    if (radioObj.value == "Y") {
      radioToggle(tabTobeOpen, 0)
    }
    else if (radioObj.value == "N") {
      radioToggle(tabTobeOpen, 1)
    }
  } else {
    return "";
  }
}

function radioTogYes(radioObj, tabTobeOpen) {
  if (radioObj.checked) {
    if (radioObj.value == "Y") {
      radioToggle(tabTobeOpen, 1)
    }
    else if (radioObj.value == "N") {
      radioToggle(tabTobeOpen, 0)
    }
  } else {
    return "";
  }
}

function renderRadioTogYes(radioObj, tabTobeOpen) {

  var selRadioObjs = document.getElementsByName(portletNameSpace + radioObj);
  if (selRadioObjs != null) {

    if (selRadioObjs[1].checked == true) {
      radioToggle(tabTobeOpen, 1);
    } else {
      radioToggle(tabTobeOpen, 0);
    }

  } else {
    return "";
  }
}

function hideDivById(hideId) {
  var hideVar = document.getElementById(hideId);
  if (hideVar != null) {
    hideVar.style.display = "none";
  }
}

function showDivById(showId) {
  var hideVar = document.getElementById(showId);
  if (hideVar != null) {
    hideVar.style.display = "block";
  }
}

function submitButtonAsLink(buttonId) {
  var buttonObj = document.getElementById(portletNameSpace + buttonId);

  if (buttonObj != null) {
    buttonObj.click();
  }
}

function textCounterById(vfield, cntfield, maxlimit) {
  //var vfield = document.getElementById(portletNameSpace+field);
  var vcntfield = document.getElementById(portletNameSpace + cntfield);

  var vLength = vfield.value.length
  if (vLength > maxlimit) // if too long...trim it!
    vfield.value = vfield.value.substring(0, maxlimit);
  // otherwise, update 'characters left' counter
  else
    vcntfield.value = maxlimit - vLength;
}

var portletNameSpace;

/* Functions used for ProviderClaims module - End */
function getRow(thisObj, thisEvent) {

  if (!thisEvent || !thisObj) return;
  var p = ((thisEvent.target) ? thisEvent.target : ((thisEvent.srcElement) ? thisEvent.srcElement : null));
  var tr = null;

  while (tr == null && p != null) {
    if (p.tagName && p.tagName.toUpperCase() == "TR") tr = p;
    else p = p.parentNode;
  }
  if (tr && tr.parentNode.tagName.toUpperCase() == "TBODY" && tr.parentNode.parentNode.id == thisObj.id) {
    return tr;
  }
  return null;
}

function setRowClass(tr, name, name1, name2) {

  if (!tr || !tr.cells || !tr.cells.length) return;
  //tr.className=name
  for (var i = 0; i < tr.cells.length; i++) {
    //alert(tr.cells[i].className);
    if (i == 0) {
      tr.cells[i].className = name2;
    } else if (i == tr.cells.length - 1) {
      tr.cells[i].className = name1;
    } else {
      tr.cells[i].className = name;
    }
  }
}



function setRowClassOne(tr, name) {
  if (!tr || !tr.cells || !tr.cells.length) return;
  //tr.className=name
  for (var i = 0; i < tr.cells.length; i++) {
    tr.cells[i].className = name;
  }
}



function tableMouseOver(thisObj, thisEvent) {
  var row = getRow(thisObj, thisEvent);
  if (row) setRowClass(row, "rowonon_mouse", "rowonon_mouse_right", "rowonon_mouse_left");
}

function tableMouseOut(thisObj, thisEvent) {
  //alert("Inside tableMouseOut");
  var row = getRow(thisObj, thisEvent);
  if (row) setRowClassOne(row, "rowone,row_alt");
}

// var msgWindow = null;
function viewHelp(href) {
  //alert("test");
  var msgWindow = window.open(href, 'MCWebHelp', "resizable=1,scrollbars=1,menubar=0,toolbar=0,status=0,location=0,directories=0,width=800,height=600,screenX=10,screenY=10,top=10,left=10");
  msgWindow.focus();
  //return false;
}

function autoFocus() {
  if (document.forms.length > 0) {
    forms = document.forms;
    for (j = 0; j < forms.length; j++) {
      for (i = 0; i < forms[j].length; i++) {
        if (!forms[j][i].readonly != undefined && forms[j][i].type != "hidden" && forms[j][i].disabled != true && forms[j][i].style.display != 'none' && forms[j][i].type != "submit") {
          forms[j][i].focus();
          return;
        }
      }
    }
  }
}



///////////////////////////////////////////////////////////////////dynamicTabs.js////////////////////////////////////////////////////////////////////////////////


function myFaces_showPanelTab(
  tabIndex, tabIndexSubmitFieldID,
  headerId, paneId,
  allHeaderCellsIDs, allPanesIDs,
  activeHeaderStyleClass, inactiveHeaderStyleClass,
  activeSubHeaderStyleClass, inactiveSubHeaderStyleClass) {

  if (!document.getElementById) // Too Old Browser. Fallback on server side switch
    return true;

  document.getElementById(tabIndexSubmitFieldID).value = tabIndex;

  // Change Headers styles
  for (var i = 0; i < allHeaderCellsIDs.length; i++) {
    var styleClass;
    if (headerId == allHeaderCellsIDs[i]) {
      styleClass = "myFaces_panelTabbedPane_activeHeaderCell";
      if (activeHeaderStyleClass != null)
        styleClass += " " + activeHeaderStyleClass;
    } else {
      styleClass = "myFaces_panelTabbedPane_inactiveHeaderCell";
      if (inactiveHeaderStyleClass != null)
        styleClass += " " + inactiveHeaderStyleClass
    }

    var headerCell = document.getElementById(allHeaderCellsIDs[i]);
    headerCell.className = styleClass;
  }

  // Sub Headers
  for (var i = 0; i < allHeaderCellsIDs.length; i++) {
    var styleClasses = "myFaces_panelTabbedPane_subHeaderCell";
    if (i == 0)
      styleClasses += " myFaces_panelTabbedPane_subHeaderCell_first";
    if (headerId == allHeaderCellsIDs[i]) {
      styleClasses += " myFaces_panelTabbedPane_subHeaderCell_active";
      if (activeSubHeaderStyleClass != null)
        styleClasses += " " + activeSubHeaderStyleClass;
    } else {
      styleClasses += " myFaces_panelTabbedPane_subHeaderCell_inactive";
      if (inactiveHeaderStyleClass != null)
        styleClasses += " " + inactiveSubHeaderStyleClass;
    }

    var subHeaderCell = document.getElementById(allHeaderCellsIDs[i] + "_sub");
    subHeaderCell.className = styleClasses;
  }

  // Switch pane content
  for (var i = 0; i < allPanesIDs.length; i++) {
    document.getElementById(allPanesIDs[i]).style.display = (paneId == allPanesIDs[i]) ? 'block' : 'none';
  }

  return false;
}



/////////////////////////////////////////////////////////////////////////////sessionTimeOutpopup.js///////////////////////////////////////////////////////////////////////////////////


var xmlHttpRequest = null;
var lay;
var l = 0;
var t = 0;

function getXmlHttpRequest() {

  var xmlHttp = null;

  if (window.XMLHttpRequest) {
    // XMLHttpRequest for IE7+, Firefox, Chrome, Opera, Safari
    xmlHttp = new XMLHttpRequest();
  }
  else {
    // XMLHttpRequest for IE6, IE5
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return xmlHttp;
}

function logoutNavig() {
  //alert("logOutFlag_on= " + logOutFlag_on);
  if (logOutFlag_on == true || logOutFlag_on == 'true') {
    window.location.href = logoutUrl;
  }
}


function clickYes() {

  logOutFlag_on = false;
  document.getElementById('sessionTimeOutDiv').style.display = 'none';
  xmlHttpRequest = getXmlHttpRequest();

  if (xmlHttpRequest != null) {
    if (refreshUrl.split("?").length > 1) {
      refreshUrl = refreshUrl.split("?")[0];
    }

    refreshUrl = refreshUrl + "?random=" + Math.floor(Math.random() * 1001);
    xmlHttpRequest.onreadystatechange = getStateofXmlHttpRequest;
    xmlHttpRequest.open("POST", refreshUrl, true)
    xmlHttpRequest.send(null);
  }
}

function getStateofXmlHttpRequest() {

  //alert("xmlHttpRequest.readyState"+xmlHttpRequest.readyState);

  if (xmlHttpRequest.readyState == 4) {
    popupmessage();
  }
}
function popIt() {
  var windowHTML = "<HTML><HEAD><TITLE>Session expiry notification</TITLE><BODY style=width:75%;background:#d0d0ff;border:solid black 1px;padding:5px;> Your session is about to expire. Do you want to continue with this session?<P><center>"
    + "<input type='button' id='btn1' value='YES' onClick=window.opener.clickYes();window.close() </input> </center>" +
    "</P>" +
    "</BODY></HEAD></HTML>";
  var disp_setting = "directories=no, status=no, menubar=no, scrollbars=no, resizable=no,width=350, height=120,top=200,left=300";
  var popWindow = window.open("", "", disp_setting);
  popWindow.document.open();
  popWindow.document.write(windowHTML);
}
function popupmessage() {
  sesspopUpCount = 0;
  setTimeout('sessionIncrement()', 840000);
}

function sessionIncrement() {
  logOutFlag_on = true;
  popIt();
  logOutFlag_on = true;
  sesspopUpCount = 0;
  timedCount();
}

function timedCount() {
  if (logOutFlag_on == true || logOutFlag_on == 'true') {
    sesspopUpCount = sesspopUpCount + 1;

    if (sesspopUpCount < 60) {
      setTimeout("timedCount()", 1000);
    } else if (sesspopUpCount == 60) {

      //alert("1logOutFlag_on= " + logOutFlag_on + "; session popupcount: "+ sesspopUpCount);
      logoutNavig();
    }
  }
}


var ns = (navigator.appName.indexOf("Netscape") != -1);
var d = document;
var pX, pY;

function floatingSession(id, sx, sy) {
  var el = d.getElementById ? d.getElementById(id) : d.all ? d.all[id] : d.layers[id];
  var px = document.layers ? "" : "px";
  window[id + "_obj"] = el;
  if (el != null && el != 'undefined') {
    if (d.layers) el.style = el;
    el.cx = el.sx = sx; el.cy = el.sy = sy;
    el.sP = function (x, y) { this.style.left = x + px; this.style.top = y + px; };
    el.floatIt = function () {
      pX = (this.sx >= 0) ? 0 : ns ? innerWidth :
        document.documentElement && document.documentElement.clientWidth ?
          document.documentElement.clientWidth : document.body.clientWidth;

      pY = (ns ? pageYOffset : document.documentElement && document.documentElement.scrollTop ?
        document.documentElement.scrollTop : document.body.scrollTop);
      if (this.sy < 0)
        pY += ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ?
          document.documentElement.clientHeight : document.body.clientHeight;

      //if(this.cx>this.cy)

      this.cx += (pX + this.sx - this.cx) / 8;

      //if(this.cy<100)
      //this.cy = 100;
      if (this.cx < 300)
        this.cx = 300;
      this.cy += (pY + this.sy - this.cy) / 8;
      if (this.cy < 200)
        this.cy = 200;
      this.sP(this.cx, this.cy);
      setTimeout(this.id + "_obj.floatIt()", 40);
    }
  }
  return el;
}


if (floatingSession("sessionTimeOutDiv", 100, 80) != null)
  floatingSession("sessionTimeOutDiv", 100, 80).floatIt();



