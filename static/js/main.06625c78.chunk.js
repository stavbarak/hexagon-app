(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,n,t){e.exports=t(70)},48:function(e,n,t){},49:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(35),l=t.n(c),o=(t(48),t(1)),i=t(18),u=t(13),s=t(2),f=(t(49),t(42)),m=t(6),d=t(7),h=t(9),x=t(8),b=t(10);function v(){var e=Object(o.a)(["\n  align-self: center;\n  width: 90%;\n  height: 40px;\n  background: blue;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  transition: all 300ms;\n  border-radius: 4px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);\n  }\n"]);return v=function(){return e},e}var g=function(e){var n=e.children,t=e.onClick,r=e.className;return a.a.createElement(p,{onClick:t,className:r},n)},p=s.a.div(v()),E=t(16),j=t.n(E),O="/api/task",k={getCompletedTask:function(){return j.a.get("".concat(O,"?").concat("")).then(function(e){return e.data}).catch(function(e){throw e})},save:function(e){return e._id?j.a.put("".concat(O,"/").concat(e._id),e).then(function(e){return e.data}).catch(function(e){throw e}):j.a.post("".concat(O),e).then(function(e){var n=e.data;return n}).catch(function(e){throw e})},getEmpty:function(){return{img:{_id:"",src:""},inputs:[],verifications:[]}}};function w(){var e=Object(o.a)(["\n  margin-left: 2em;\n"]);return w=function(){return e},e}var y=function(){return a.a.createElement(H,null,a.a.createElement("div",null,a.a.createElement("svg",{viewBox:"0 0 1350 770"},a.a.createElement("defs",null,a.a.createElement("polygon",{id:"hexagon",points:"50,25 100,25 125,68 100,111 50,111 25,68",style:{fill:"white",stroke:"black","stroke-width":"2"}})),[1,2,3,4,5,6,7,8].map(function(e,n){return a.a.createElement(a.a.Fragment,null,a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate("+n+","+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(150,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(300,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(450,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(600,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(750,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(900,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1050,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(75,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(225,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(375,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(525,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(675,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(825,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(975,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1125,"+(86*n+43)+")"}))}),"Sorry, your browser does not support inline SVG.")))},H=s.a.div(w());function C(){var e=Object(o.a)([""]);return C=function(){return e},e}function S(){var e=Object(o.a)([""]);return S=function(){return e},e}var D=function(){return a.a.createElement(N,null,a.a.createElement(T,null),a.a.createElement(y,null))},N=s.a.div(S()),T=s.a.div(C());function z(){var e=Object(o.a)(["\n  align-self: center;\n  width: 90%;\n  height: 120px;\n  border: 3px solid #cccccc;\n  font-family: Tahoma, sans-serif;\n  box-sizing: border-box;\n  padding: 6px;\n  color: #444;\n  font-size: 18px;\n"]);return z=function(){return e},e}function V(){var e=Object(o.a)(["\n  font-size: 14px;\n  margin-top: 16px;\n  margin-bottom: 6px;\n"]);return V=function(){return e},e}function A(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return A=function(){return e},e}var F=function(e){var n=e.label,t=e.placeholder,r=e.className,c=e.onChange;return a.a.createElement(B,{className:r},a.a.createElement(I,null,n),a.a.createElement(L,{placeholder:t,onChange:c}))},B=s.a.div(A()),I=s.a.div(V()),L=s.a.textarea(z());function M(){var e=Object(o.a)([""]);return M=function(){return e},e}function _(){var e=Object(o.a)(["\n  background-color: #f5f5f5;\n"]);return _=function(){return e},e}function G(){var e=Object(o.a)([""]);return G=function(){return e},e}function J(){var e=Object(o.a)([""]);return J=function(){return e},e}var W=function(e){function n(){var e,t;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(a)))).state={},t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,a.a.createElement(X,null),a.a.createElement(q,null,[1,2,3,4,5,6,7,8,9,10].map(function(e,n){return a.a.createElement($,{placeholder:"input...",label:n+1})}))))}}]),n}(r.Component),P=s.a.div(J()),X=s.a.div(G()),$=Object(s.a)(F)(_()),q=s.a.div(M());function K(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return K=function(){return e},e}function Q(){var e=Object(o.a)(["\n  width: 25%;\n  align-self: left;\n  background-color: lightseagreen;\n"]);return Q=function(){return e},e}function R(){var e=Object(o.a)([""]);return R=function(){return e},e}function U(){var e=Object(o.a)(["\n  max-height: 53vh;\n  border-radius: 4px;\n  transition: all 300ms;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  }\n"]);return U=function(){return e},e}function Y(){var e=Object(o.a)(["\n  margin: 1em 2em;\n  background-color: white;\n  width: 45vw;\n  max-height: 65vh;\n  overflow: scroll;\n"]);return Y=function(){return e},e}var Z=function(e){function n(){var e,t;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(a)))).state={},t.handleSubmitDesc=function(){k.save(Object(f.a)({},t.state))},t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=k.getEmpty();this.setState({task:e})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(te,null,a.a.createElement("h1",null,"Task"),a.a.createElement(D,null)),a.a.createElement(ae,null,a.a.createElement(ne,null,a.a.createElement(W,null)),a.a.createElement(re,{onClick:this.handleSubmitDesc},"Send")))}}]),n}(r.Component),ee=s.a.div(Y()),ne=Object(s.a)(ee)(U()),te=Object(s.a)(ee)(R()),re=Object(s.a)(g)(Q()),ae=s.a.div(K());function ce(){var e=Object(o.a)(["\n  border-radius: 0%;\n"]);return ce=function(){return e},e}function le(){var e=Object(o.a)(["\n  background: ",";\n  width: 3em;\n  height: 3em;\n  margin: 0 0.5em;\n  border-radius: 50%;\n  border: 1px solid black;\n  outline: none;\n  box-shadow: ",";\n  transition: all 300ms;\n\n  &:hover {\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);\n  }\n"]);return le=function(){return e},e}function oe(){var e=Object(o.a)(["\n  align-self: center;\n  height: 60px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n  transition: all 300ms;\n  border-radius: 4px;\n  cursor: pointer;\n"]);return oe=function(){return e},e}var ie=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(h.a)(this,Object(x.a)(n).call(this,e))).handleClick=function(e){t.setState({currentColor:e.target.attributes.color.value})},t.state={currentColor:"pink"},t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(ue,null,["gold","limegreen","crimson","black","dodgerblue","violet","orange"].map(function(n){return a.a.createElement(se,{color:n,selected:n===e.state.currentColor,onClick:e.handleClick})}),a.a.createElement(fe,{color:"white",selected:"white"===this.state.currentColor,onClick:this.handleClick}))}}]),n}(r.Component),ue=s.a.div(oe()),se=s.a.button(le(),function(e){return e.color},function(e){return e.selected?"0 5px 10px rgba(0, 0, 0, 0.8)":""}),fe=Object(s.a)(se)(ce());function me(){var e=Object(o.a)(["\n  width: 25%;\n  align-self: flex-end;\n  background-color: lightseagreen;\n"]);return me=function(){return e},e}function de(){var e=Object(o.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n"]);return de=function(){return e},e}function he(){var e=Object(o.a)([""]);return he=function(){return e},e}function xe(){var e=Object(o.a)([""]);return xe=function(){return e},e}function be(){var e=Object(o.a)(["\n  margin: 2em;\n  background-color: white;\n  width: 45vw;\n  max-height: 65vh;\n"]);return be=function(){return e},e}var ve=function(e){function n(){var e,t;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(a)))).state={},t.handleSubmitVerificaion=function(){},t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=k.getCompletedTask();this.setState({taskToVerify:e})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ee,null,a.a.createElement("h1",null,"Task"),a.a.createElement(pe,null,"Show next line of Instructions when user done")),a.a.createElement(je,null,a.a.createElement(ie,null),a.a.createElement(D,null),a.a.createElement(Oe,null,"Done")))}}]),n}(r.Component),ge=s.a.div(be()),pe=s.a.div(xe()),Ee=Object(s.a)(ge)(he()),je=Object(s.a)(ge)(de()),Oe=Object(s.a)(g)(me());function ke(){var e=Object(o.a)(["\n  margin-left: 2em;\n"]);return ke=function(){return e},e}var we=function(){return a.a.createElement(ye,null,a.a.createElement("div",null,a.a.createElement("svg",{viewBox:"0 0 1350 770"},a.a.createElement("defs",null,a.a.createElement("polygon",{id:"hexagon",stroke:"#F3BC23","stroke-width":"1",points:"50,25 100,25 125,68 100,111 50,111 25,68",style:{fill:"white",stroke:"black","stroke-width":"2"}}),a.a.createElement("text",{x:"32",y:"50","text-anchor":"middle",fill:"white","font-size":"30"},"X")),[1,2,3,4,5,6,7,8].map(function(e,n){return a.a.createElement(a.a.Fragment,null,a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate("+n+","+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(150,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(300,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(450,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(600,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(750,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(900,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1050,"+86*n+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(75,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(225,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(375,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(525,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(675,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(825,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(975,"+(86*n+43)+")"}),a.a.createElement("use",{xlinkHref:"#hexagon",transform:"translate(1125,"+(86*n+43)+")"}))}),"Sorry, your browser does not support inline SVG.")))},ye=s.a.div(ke());function He(){var e=Object(o.a)([""]);return He=function(){return e},e}function Ce(){var e=Object(o.a)([""]);return Ce=function(){return e},e}var Se=function(){return a.a.createElement(De,null,a.a.createElement(Ne,null),a.a.createElement(we,null))},De=s.a.div(Ce()),Ne=s.a.div(He());function Te(){var e=Object(o.a)(["\n  background-color: blue;\n  width: 30%;\n  margin-right: 3em;\n"]);return Te=function(){return e},e}function ze(){var e=Object(o.a)(["\n  width: 25%;\n  align-self: flex-end;\n  background-color: lightseagreen;\n"]);return ze=function(){return e},e}function Ve(){var e=Object(o.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n"]);return Ve=function(){return e},e}function Ae(){var e=Object(o.a)(["\n  background-color: lightblue;\n  padding: 0.5em;\n  border-radius: 4px;\n"]);return Ae=function(){return e},e}function Fe(){var e=Object(o.a)([""]);return Fe=function(){return e},e}function Be(){var e=Object(o.a)(["\n  display: flex;\n"]);return Be=function(){return e},e}function Ie(){var e=Object(o.a)(["\n  margin: 2em;\n  background-color: white;\n  width: 45vw;\n  max-height: 65vh;\n"]);return Ie=function(){return e},e}var Le=function(e){function n(){var e,t;Object(m.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(a)))).state={},t.handleSubmitVerificaion=function(){},t}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=k.getCompletedTask();this.setState({taskToVerify:e})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ge,null,a.a.createElement("h1",null,"Verification Task"),a.a.createElement(_e,null,a.a.createElement(Je,null,'Show next line when user clicks next. In the end the "Next" button is replaced with "Done". Location of Next/Done buttons may change."'),a.a.createElement(Pe,null,"Next"))),a.a.createElement(We,null,a.a.createElement(ie,null),a.a.createElement(Se,null)))}}]),n}(r.Component),Me=s.a.div(Ie()),_e=s.a.div(Be()),Ge=Object(s.a)(Me)(Fe()),Je=Object(s.a)(Me)(Ae()),We=Object(s.a)(Me)(Ve()),Pe=(Object(s.a)(g)(ze()),Object(s.a)(g)(Te()));function Xe(){var e=Object(o.a)(["\n  padding: 1em;\n"]);return Xe=function(){return e},e}function $e(){var e=Object(o.a)(["\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);\n  padding: 20px 10px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: inherit;\n  transition: all 300ms;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n  &:hover {\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);\n  }\n"]);return $e=function(){return e},e}function qe(){var e=Object(o.a)(["\n  display: flex;\n  color: #222;\n  list-style: none;\n"]);return qe=function(){return e},e}function Ke(){var e=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n"]);return Ke=function(){return e},e}var Qe=function(e){function n(){return Object(m.a)(this,n),Object(h.a)(this,Object(x.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement(Re,null,a.a.createElement(Ue,null,a.a.createElement(Ze,null,a.a.createElement(Ye,{to:"/describe"},"Describe")),a.a.createElement(Ze,null,a.a.createElement(Ye,{to:"/align"},"Align")),a.a.createElement(Ze,null,a.a.createElement(Ye,{to:"/verify"},"Verify"))))}}]),n}(r.Component),Re=s.a.div(Ke()),Ue=s.a.li(qe()),Ye=Object(s.a)(i.b)($e()),Ze=s.a.li(Xe());function en(){var e=Object(o.a)(["\n  font-size: 36px;\n  color: #444;\n"]);return en=function(){return e},e}function nn(){var e=Object(o.a)(["\n  width: 100%;\n  min-height: 100px;\n  border-bottom: 1px solid #000;\n  background: #fafafa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 24px;\n"]);return nn=function(){return e},e}var tn=function(){return a.a.createElement(rn,null,a.a.createElement(an,null,"Hexagon App"))},rn=s.a.div(nn()),an=s.a.div(en());function cn(){var e=Object(o.a)(["\n  color: #444;\n  font-size: 18px;\n  align-self: flex-end;\n"]);return cn=function(){return e},e}function ln(){var e=Object(o.a)(["\n  width: 500px;\n  height: 1px;\n  background: #444;\n  margin: 20px 0;\n"]);return ln=function(){return e},e}function on(){var e=Object(o.a)(["\n  width: 500px;\n  margin: 1em auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return on=function(){return e},e}var un=function(){return a.a.createElement(sn,null,a.a.createElement(fn,null),a.a.createElement(mn,null,"\xa9 ONLP Lab 2019"))},sn=s.a.div(on()),fn=s.a.div(ln()),mn=s.a.div(cn());function dn(){var e=Object(o.a)(["\n  display: flex;\n  align-self: center;\n"]);return dn=function(){return e},e}function hn(){var e=Object(o.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  background: #e0e0e0;\n  display: flex;\n  flex-direction: column;\n"]);return hn=function(){return e},e}var xn=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,null,a.a.createElement(bn,null,a.a.createElement(Qe,null),a.a.createElement(tn,null),a.a.createElement(vn,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:Z}),a.a.createElement(u.a,{path:"/describe",exact:!0,component:Z}),a.a.createElement(u.a,{path:"/align",exact:!0,component:ve}),a.a.createElement(u.a,{path:"/verify",exact:!0,component:Le}))),a.a.createElement(un,null))))},bn=s.a.div(hn()),vn=s.a.div(dn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(xn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.06625c78.chunk.js.map