(function(g){var window=this;'use strict';var p6=function(a){g.W.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.fg=!1;this.player=a;this.N(a,"minimized",this.pg);this.N(a,"onStateChange",this.OE)},q6=function(a){g.FN.call(this,a);
this.i=new p6(this.player);this.i.hide();g.uN(this.player,this.i.element,4);a.Ne()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(p6,g.W);g.k=p6.prototype;
g.k.ZC=function(){this.tooltip=new g.dR(this.player,this);g.F(this,this.tooltip);g.uN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.qc=new g.AO(this.player);g.F(this,this.qc);this.Bg=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.F(this,this.Bg);this.Bg.Ba(this.element);this.N(this.Bg.element,"click",this.Py);var a=new g.W({D:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.IL()]});g.F(this,a);a.Ba(this.Bg.element);this.N(a.element,"click",this.Ai);
a=new g.R1(this.player,this);g.F(this,a);a.Ba(this.Bg.element);this.Uo=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.F(this,this.Uo);this.Uo.Ba(this.Bg.element);this.N(this.Uo.element,"click",this.Py);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,b);b.Ba(this.Uo.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.F(this,a);a.Ba(this.Uo.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,c);c.Ba(this.Uo.element);this.iL=new g.aQ(this.player,
this,!1);g.F(this,this.iL);this.iL.Ba(b.element);b=new g.YP(this.player,this);g.F(this,b);b.Ba(a.element);this.nextButton=new g.aQ(this.player,this,!0);g.F(this,this.nextButton);this.nextButton.Ba(c.element);this.Dg=new g.RQ(this.player,this);g.F(this,this.Dg);this.Dg.Ba(this.Bg.element);this.Ic=new g.fQ(this.player,this);g.F(this,this.Ic);g.uN(this.player,this.Ic.element,4);this.By=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.F(this,this.By);g.uN(this.player,this.By.element,4);a=new g.W({D:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.IL()]});g.F(this,a);a.Ba(this.By.element);this.N(a.element,"click",this.Ai);a=new g.W({D:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.NL()]});g.F(this,a);a.Ba(this.By.element);this.N(a.element,"click",this.aU);this.N(this.player,"presentingplayerstatechange",this.Hc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.zd=new g.Bq(this.Mp,null,this);this.zd.start();this.fg||(this.ZC(),this.fg=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.W.prototype.hide.call(this);this.player.Ne()||(this.fg&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.W.prototype.xa.call(this)};
g.k.Ai=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.aU=function(){this.player.playVideo()};
g.k.Py=function(a){if(a.target===this.Bg.element||a.target===this.Uo.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.MK(this.player.ub())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.pg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Ne())};
g.k.hd=function(){this.Ic.Rb();this.Dg.Rb()};
g.k.Mp=function(){this.hd();this.zd&&this.zd.start()};
g.k.Hc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.qQ(this.Ic,0,this.player.bb().getPlayerSize().width,!1);g.hQ(this.Ic)};
g.k.OE=function(a){this.player.Ne()&&(0===a?this.hide():this.show())};
g.k.jc=function(){return this.tooltip};
g.k.Le=function(){return!1};
g.k.qf=function(){return!1};
g.k.ni=function(){return!1};
g.k.yz=function(){};
g.k.Nm=function(){};
g.k.rr=function(){};
g.k.Zm=function(){return null};
g.k.ij=function(){return new g.rl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Up=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ql(a);if(b){c=g.Lq(b,"ytp-prev-button")||g.Lq(b,"ytp-next-button");var m=g.Lq(b,"ytp-play-button"),n=g.Lq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ol(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Lq(b,"ytp-miniplayer-button-top-left"),f=g.Ol(b,this.element),b=g.Ql(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Nf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Rk=function(){};
g.k.pk=function(){return!1};g.v(q6,g.FN);q6.prototype.create=function(){};
q6.prototype.Li=function(){return!1};
q6.prototype.load=function(){this.player.hideControls();this.i.show()};
q6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.QN.miniplayer=q6;})(_yt_player);
