(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(n,e,t){n.exports=t(71)},49:function(n,e,t){},50:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(36),l=t.n(c),o=(t(49),t(1)),i=t(19),u=t(13),s=t(2),f=(t(50),t(43)),m=t(6),d=t(7),h=t(10),b=t(8),x=t(9);function g(){var n=Object(o.a)(["\n  align-self: center;\n  width: 90%;\n  height: 40px;\n  background: blue;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  transition: all 300ms;\n  border-radius: 4px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);\n  }\n"]);return g=function(){return n},n}var v=function(n){var e=n.children,t=n.onClick,a=n.className;return r.a.createElement(p,{onClick:t,className:a},e)},p=s.a.div(g()),E=t(16),O=t.n(E),j="/api/task",k={getCompletedTask:function(){return O.a.get("".concat(j,"?").concat("")).then(function(n){return n.data}).catch(function(n){throw n})},save:function(n){return n._id?O.a.put("".concat(j,"/").concat(n._id),n).then(function(n){return n.data}).catch(function(n){throw n}):O.a.post("".concat(j),n).then(function(n){var e=n.data;return e}).catch(function(n){throw n})},getEmpty:function(){return{img:{_id:"",src:""},inputs:[],verifications:[]}}};function w(){var n=Object(o.a)(["\n  margin-left: 2em;\n"]);return w=function(){return n},n}var y=function(){return r.a.createElement(H,null,r.a.createElement("div",null,r.a.createElement("svg",{viewBox:"0 0 1350 770"},r.a.createElement("defs",null,r.a.createElement("polygon",{id:"hexagon",points:"50,25 100,25 125,68 100,111 50,111 25,68",style:{fill:"white",stroke:"black","stroke-width":"2"}})),[1,2,3,4,5,6,7,8].map(function(n,e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate("+e+","+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(150,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(300,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(450,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(600,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(750,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(900,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1050,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(75,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(225,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(375,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(525,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(675,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(825,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(975,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1125,"+(86*e+43)+")"}))}),"Sorry, your browser does not support inline SVG.")))},H=s.a.div(w());function C(){var n=Object(o.a)([""]);return C=function(){return n},n}function S(){var n=Object(o.a)([""]);return S=function(){return n},n}var T=function(){return r.a.createElement(N,null,r.a.createElement(D,null),r.a.createElement(y,null))},N=s.a.div(S()),D=s.a.div(C());function F(){var n=Object(o.a)(["\n  align-self: center;\n  width: 90%;\n  height: 120px;\n  border: 3px solid #cccccc;\n  font-family: Tahoma, sans-serif;\n  box-sizing: border-box;\n  padding: 6px;\n  color: #444;\n  font-size: 18px;\n"]);return F=function(){return n},n}function z(){var n=Object(o.a)(["\n  font-size: 14px;\n  margin-top: 16px;\n  margin-bottom: 6px;\n"]);return z=function(){return n},n}function V(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return V=function(){return n},n}var A=function(n){var e=n.label,t=n.placeholder,a=n.className,c=n.onChange;return r.a.createElement(B,{className:a},r.a.createElement(I,null,e),r.a.createElement(L,{placeholder:t,onChange:c}))},B=s.a.div(V()),I=s.a.div(z()),L=s.a.textarea(F());function M(){var n=Object(o.a)([""]);return M=function(){return n},n}function _(){var n=Object(o.a)(["\n  background-color: #f5f5f5;\n"]);return _=function(){return n},n}function G(){var n=Object(o.a)([""]);return G=function(){return n},n}function J(){var n=Object(o.a)([""]);return J=function(){return n},n}var W=function(n){function e(){var n,t;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(n=Object(b.a)(e)).call.apply(n,[this].concat(r)))).state={},t}return Object(x.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null,r.a.createElement(X,null),r.a.createElement(q,null,[1,2,3,4,5,6,7,8,9,10].map(function(n,e){return r.a.createElement($,{placeholder:"input...",label:e+1})}))))}}]),e}(a.Component),P=s.a.div(J()),X=s.a.div(G()),$=Object(s.a)(A)(_()),q=s.a.div(M());function K(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return K=function(){return n},n}function Q(){var n=Object(o.a)(["\n  width: 25%;\n  align-self: left;\n  background-color: lightseagreen;\n"]);return Q=function(){return n},n}function R(){var n=Object(o.a)([""]);return R=function(){return n},n}function U(){var n=Object(o.a)(["\n  max-height: 53vh;\n  border-radius: 4px;\n  transition: all 300ms;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  }\n"]);return U=function(){return n},n}function Y(){var n=Object(o.a)(["\n  margin: 1em 2em;\n  background-color: white;\n  width: 45vw;\n  max-height: 65vh;\n  overflow: scroll;\n"]);return Y=function(){return n},n}var Z=function(n){function e(){var n,t;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(n=Object(b.a)(e)).call.apply(n,[this].concat(r)))).state={},t.handleSubmitDesc=function(){k.save(Object(f.a)({},t.state))},t}return Object(x.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){var n=k.getEmpty();this.setState({task:n})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(tn,null,r.a.createElement("h1",null,"Task"),r.a.createElement(T,null)),r.a.createElement(rn,null,r.a.createElement(en,null,r.a.createElement(W,null)),r.a.createElement(an,{onClick:this.handleSubmitDesc},"Send")))}}]),e}(a.Component),nn=s.a.div(Y()),en=Object(s.a)(nn)(U()),tn=Object(s.a)(nn)(R()),an=Object(s.a)(v)(Q()),rn=s.a.div(K()),cn=t(18);function ln(){var n=Object(o.a)(["\n  background: dodgerblue;\n"]);return ln=function(){return n},n}function on(){var n=Object(o.a)(["\n  background: limegreen;\n"]);return on=function(){return n},n}function un(){var n=Object(o.a)(["\n  background: gold;\n"]);return un=function(){return n},n}function sn(){var n=Object(o.a)(["\n  background: crimson;\n"]);return sn=function(){return n},n}function fn(){var n=Object(o.a)(["\n  width: 40px;\n  height: 40px;\n  margin: 0 7px;\n  border-radius: 50%;\n  border: 1px solid black;\n  background: pink;\n  outline: none;\n  transition: all 300ms;\n\n  &:hover {\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n  }\n"]);return fn=function(){return n},n}function mn(){var n=Object(o.a)(["\n  align-self: center;\n  height: 60px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  transition: all 300ms;\n  border-radius: 4px;\n  cursor: pointer;\n"]);return mn=function(){return n},n}var dn=function(n){function e(n){var t;return Object(m.a)(this,e),(t=Object(h.a)(this,Object(b.a)(e).call(this,n))).state={color:"pink",isToggleOn:!0},t.handleClick=t.handleClick.bind(Object(cn.a)(t)),t}return Object(x.a)(e,n),Object(d.a)(e,[{key:"handleClick",value:function(){this.setState(function(n){return{isToggleOn:!n.isToggleOn}})}},{key:"render",value:function(){return r.a.createElement(hn,null,r.a.createElement(xn,{onClick:this.handleClick},this.state.isToggleOn?"ON":"OFF"),r.a.createElement(gn,{onClick:this.handleClick}),r.a.createElement(vn,{onClick:this.handleClick}),r.a.createElement(pn,{onClick:this.handleClick}))}}]),e}(a.Component),hn=s.a.div(mn()),bn=s.a.button(fn()),xn=Object(s.a)(bn)(sn()),gn=Object(s.a)(bn)(un()),vn=Object(s.a)(bn)(on()),pn=Object(s.a)(bn)(ln());function En(){var n=Object(o.a)(["\n  width: 25%;\n  align-self: flex-end;\n  background-color: lightseagreen;\n"]);return En=function(){return n},n}function On(){var n=Object(o.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n"]);return On=function(){return n},n}function jn(){var n=Object(o.a)([""]);return jn=function(){return n},n}function kn(){var n=Object(o.a)([""]);return kn=function(){return n},n}function wn(){var n=Object(o.a)(["\n  margin: 2em;\n  background-color: white;\n  width: 45vw;\n  max-height: 65vh;\n"]);return wn=function(){return n},n}var yn=function(n){function e(){var n,t;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(n=Object(b.a)(e)).call.apply(n,[this].concat(r)))).state={},t.handleSubmitVerificaion=function(){},t}return Object(x.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){var n=k.getCompletedTask();this.setState({taskToVerify:n})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Sn,null,r.a.createElement("h1",null,"Task"),r.a.createElement(Cn,null,"Show next line of Instructions when user done")),r.a.createElement(Tn,null,r.a.createElement(dn,null),r.a.createElement(T,null),r.a.createElement(Nn,null,"Done")))}}]),e}(a.Component),Hn=s.a.div(wn()),Cn=s.a.div(kn()),Sn=Object(s.a)(Hn)(jn()),Tn=Object(s.a)(Hn)(On()),Nn=Object(s.a)(v)(En());function Dn(){var n=Object(o.a)(["\n  margin-left: 2em;\n"]);return Dn=function(){return n},n}var Fn=function(){return r.a.createElement(zn,null,r.a.createElement("div",null,r.a.createElement("svg",{viewBox:"0 0 1350 770"},r.a.createElement("defs",null,r.a.createElement("polygon",{id:"hexagon",stroke:"#F3BC23","stroke-width":"1",points:"50,25 100,25 125,68 100,111 50,111 25,68",style:{fill:"white",stroke:"black","stroke-width":"2"}}),r.a.createElement("text",{x:"32",y:"50","text-anchor":"middle",fill:"white","font-size":"30"},"X")),[1,2,3,4,5,6,7,8].map(function(n,e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate("+e+","+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(150,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(300,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(450,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(600,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(750,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(900,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1050,"+86*e+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(75,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(225,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(375,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(525,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(675,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(825,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(975,"+(86*e+43)+")"}),r.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1125,"+(86*e+43)+")"}))}),"Sorry, your browser does not support inline SVG.")))},zn=s.a.div(Dn());function Vn(){var n=Object(o.a)([""]);return Vn=function(){return n},n}function An(){var n=Object(o.a)([""]);return An=function(){return n},n}var Bn=function(){return r.a.createElement(In,null,r.a.createElement(Ln,null),r.a.createElement(Fn,null))},In=s.a.div(An()),Ln=s.a.div(Vn());function Mn(){var n=Object(o.a)(["\n  background-color: blue;\n  width: 30%;\n  margin-right: 3em;\n"]);return Mn=function(){return n},n}function _n(){var n=Object(o.a)(["\n  width: 25%;\n  align-self: flex-end;\n  background-color: lightseagreen;\n"]);return _n=function(){return n},n}function Gn(){var n=Object(o.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n"]);return Gn=function(){return n},n}function Jn(){var n=Object(o.a)(["\n  background-color: lightblue;\n  padding: 0.5em;\n  border-radius: 4px;\n"]);return Jn=function(){return n},n}function Wn(){var n=Object(o.a)([""]);return Wn=function(){return n},n}function Pn(){var n=Object(o.a)(["\n  display: flex;\n"]);return Pn=function(){return n},n}function Xn(){var n=Object(o.a)(["\n  margin: 2em;\n  background-color: white;\n  width: 45vw;\n  max-height: 65vh;\n"]);return Xn=function(){return n},n}var $n=function(n){function e(){var n,t;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(h.a)(this,(n=Object(b.a)(e)).call.apply(n,[this].concat(r)))).state={},t.handleSubmitVerificaion=function(){},t}return Object(x.a)(e,n),Object(d.a)(e,[{key:"componentDidMount",value:function(){var n=k.getCompletedTask();this.setState({taskToVerify:n})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qn,null,r.a.createElement("h1",null,"Verification Task"),r.a.createElement(Kn,null,r.a.createElement(Rn,null,'Show next line when user clicks next. In the end the "Next" button is replaced with "Done". Location of Next/Done buttons may change."'),r.a.createElement(Yn,null,"Next"))),r.a.createElement(Un,null,r.a.createElement(dn,null),r.a.createElement(Bn,null)))}}]),e}(a.Component),qn=s.a.div(Xn()),Kn=s.a.div(Pn()),Qn=Object(s.a)(qn)(Wn()),Rn=Object(s.a)(qn)(Jn()),Un=Object(s.a)(qn)(Gn()),Yn=(Object(s.a)(v)(_n()),Object(s.a)(v)(Mn()));function Zn(){var n=Object(o.a)(["\n  padding: 1em;\n"]);return Zn=function(){return n},n}function ne(){var n=Object(o.a)(["\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);\n  padding: 20px 10px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 300ms;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n  &:hover {\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(o.a)(["\n  display: flex;\n  color: #222;\n  list-style: none;\n"]);return ee=function(){return n},n}function te(){var n=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n"]);return te=function(){return n},n}var ae=function(n){function e(){return Object(m.a)(this,e),Object(h.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(x.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){return r.a.createElement(re,null,r.a.createElement(ce,null,r.a.createElement(oe,null,r.a.createElement(le,{to:"/describe"},"Describe")),r.a.createElement(oe,null,r.a.createElement(le,{to:"/align"},"Align")),r.a.createElement(oe,null,r.a.createElement(le,{to:"/verify"},"Verify"))))}}]),e}(a.Component),re=s.a.div(te()),ce=s.a.li(ee()),le=Object(s.a)(i.b)(ne()),oe=s.a.li(Zn());function ie(){var n=Object(o.a)(["\n  font-size: 36px;\n  color: #444;\n"]);return ie=function(){return n},n}function ue(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: 100px;\n  border-bottom: 1px solid #000;\n  background: #fafafa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 24px;\n"]);return ue=function(){return n},n}var se=function(){return r.a.createElement(fe,null,r.a.createElement(me,null,"Hexagon App"))},fe=s.a.div(ue()),me=s.a.div(ie());function de(){var n=Object(o.a)(["\n  color: #444;\n  font-size: 18px;\n  align-self: flex-end;\n"]);return de=function(){return n},n}function he(){var n=Object(o.a)(["\n  width: 500px;\n  height: 1px;\n  background: #444;\n  margin: 20px 0;\n"]);return he=function(){return n},n}function be(){var n=Object(o.a)(["\n  width: 500px;\n  margin: 1em auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return be=function(){return n},n}var xe=function(){return r.a.createElement(ge,null,r.a.createElement(ve,null),r.a.createElement(pe,null,"\xa9 ONLP Lab 2019"))},ge=s.a.div(be()),ve=s.a.div(he()),pe=s.a.div(de());function Ee(){var n=Object(o.a)(["\n  display: flex;\n  align-self: center;\n"]);return Ee=function(){return n},n}function Oe(){var n=Object(o.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  background: #e0e0e0;\n  display: flex;\n  flex-direction: column;\n"]);return Oe=function(){return n},n}var je=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(ke,null,r.a.createElement(ae,null),r.a.createElement(se,null),r.a.createElement(we,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:Z}),r.a.createElement(u.a,{path:"/describe",exact:!0,component:Z}),r.a.createElement(u.a,{path:"/align",exact:!0,component:yn}),r.a.createElement(u.a,{path:"/verify",exact:!0,component:$n}))),r.a.createElement(xe,null))))},ke=s.a.div(Oe()),we=s.a.div(Ee());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.dbb15bf6.chunk.js.map