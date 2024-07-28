// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}function n(e){return e!=e}function t(e){return Math.abs(e)}var i,a=Number.NEGATIVE_INFINITY,o=2147483647,u=2146435072,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,s=Object.prototype.hasOwnProperty,l="function"==typeof Symbol?Symbol:void 0,p="function"==typeof l?l.toStringTag:"",v=f&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,i,a;if(null==e)return c.call(e);n=e[p],a=p,r=null!=(i=e)&&s.call(i,a);try{e[p]=void 0}catch(r){return c.call(e)}return t=c.call(e),r?e[p]=n:delete e[p],t}:function(e){return c.call(e)},g="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,d="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var e,r,n;if("function"!=typeof y)return!1;try{r=new y(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(g&&n instanceof Uint32Array||"[object Uint32Array]"===v(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?d:function(){throw new Error("not implemented")};var h,w=i,b="function"==typeof Float64Array,m="function"==typeof Float64Array?Float64Array:null,A="function"==typeof Float64Array?Float64Array:void 0;h=function(){var e,r,n;if("function"!=typeof m)return!1;try{r=new m([1,3.14,-3.14,NaN]),n=r,e=(b&&n instanceof Float64Array||"[object Float64Array]"===v(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?A:function(){throw new Error("not implemented")};var N,_=h,E="function"==typeof Uint8Array,U="function"==typeof Uint8Array?Uint8Array:null,S="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var e,r,n;if("function"!=typeof U)return!1;try{r=new U(r=[1,3.14,-3.14,256,257]),n=r,e=(E&&n instanceof Uint8Array||"[object Uint8Array]"===v(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?S:function(){throw new Error("not implemented")};var I,x=N,k="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var e,r,n;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,65536,65537]),n=r,e=(k&&n instanceof Uint16Array||"[object Uint16Array]"===v(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?j:function(){throw new Error("not implemented")};var T,O={uint16:I,uint8:x};(T=new O.uint16(1))[0]=4660;var V=52===new O.uint8(T.buffer)[0],$=!0===V?1:0,G=new _(1),H=new w(G.buffer);function W(e){return G[0]=e,H[$]}function C(e,r){var n,t,i,a;return i=(a=e*e)*a,t=a*function(e){return 0===e?.0416666666666666:.0416666666666666+e*(2480158728947673e-20*e-.001388888888887411)}(a),t+=i*i*function(e){return 0===e?-2.7557314351390663e-7:e*(2.087572321298175e-9+-11359647557788195e-27*e)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-e*r))}var L=-.16666666666666632,P=.00833333333332249,M=-.0001984126982985795,R=27557313707070068e-22,Z=-2.5050760253406863e-8,X=1.58969099521155e-10;function Y(e,r){var n,t,i;return n=P+(i=e*e)*(M+i*R)+i*(i*i)*(Z+i*X),t=i*e,0===r?e+t*(L+i*n):e-(i*(.5*r-t*n)-r-t*L)}var q,z,B=1048575,D=!0===V?0:1,J=new _(1),K=new w(J.buffer);!0===V?(q=1,z=0):(q=0,z=1);var Q={HIGH:q,LOW:z},ee=new _(1),re=new w(ee.buffer),ne=Q.HIGH,te=Q.LOW;function ie(e,r){return re[ne]=e,re[te]=r,ee[0]}var ae=Number.POSITIVE_INFINITY,oe=1023,ue=1023,fe=-1023,ce=-1074;function se(e){return e===ae||e===a}var le=2147483648,pe="function"==typeof Object.defineProperty?Object.defineProperty:null,ve=Object.defineProperty;function ge(e){return"number"==typeof e}function ye(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function de(e,r,n){var t=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=n?e+ye(i):ye(i)+e,t&&(e="-"+e)),e}var he=String.prototype.toLowerCase,we=String.prototype.toUpperCase;function be(e){var r,n,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,t=parseInt(n,10),!isFinite(t)){if(!ge(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(n=(-t).toString(r),e.precision&&(n=de(n,e.precision,e.padRight)),n="-"+n):(n=t.toString(r),t||e.precision?e.precision&&(n=de(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===we.call(e.specifier)?we.call(n):he.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var me=Math.abs,Ae=String.prototype.toLowerCase,Ne=String.prototype.toUpperCase,_e=String.prototype.replace,Ee=/e\+(\d)$/,Ue=/e-(\d)$/,Se=/^(\d+)$/,Ie=/^(\d+)e/,xe=/\.0$/,ke=/\.0*e/,Fe=/(\..*[^0])0*e/;function je(e){var r,n,t=parseFloat(e.arg);if(!isFinite(t)){if(!ge(e.arg))throw new Error("invalid floating-point number. Value: "+n);t=e.arg}switch(e.specifier){case"e":case"E":n=t.toExponential(e.precision);break;case"f":case"F":n=t.toFixed(e.precision);break;case"g":case"G":me(t)<1e-4?((r=e.precision)>0&&(r-=1),n=t.toExponential(r)):n=t.toPrecision(e.precision),e.alternate||(n=_e.call(n,Fe,"$1e"),n=_e.call(n,ke,"e"),n=_e.call(n,xe,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=_e.call(n,Ee,"e+0$1"),n=_e.call(n,Ue,"e-0$1"),e.alternate&&(n=_e.call(n,Se,"$1."),n=_e.call(n,Ie,"$1.e")),t>=0&&e.sign&&(n=e.sign+n),n=e.specifier===Ne.call(e.specifier)?Ne.call(n):Ae.call(n)}function Te(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}var Oe=String.fromCharCode,Ve=Array.isArray;function $e(e){return e!=e}function Ge(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function He(e){var r,n,t,i,a,o,u,f,c,s,l,p,v;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,f=0;f<e.length;f++)if("string"==typeof(t=e[f]))o+=t;else{if(r=void 0!==t.precision,!(t=Ge(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,$e(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,$e(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=be(t);break;case"s":t.maxWidth=r?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!$e(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=$e(a)?String(t.arg):Oe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=je(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=de(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+Te(v):Te(v)+s)),o+=t.arg||"",u+=1}return o}var We=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ce(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Le(e){var r,n,t,i;for(n=[],i=0,t=We.exec(e);t;)(r=e.slice(i,We.lastIndex-t[0].length)).length&&n.push(r),n.push(Ce(t)),i=We.lastIndex,t=We.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function Pe(e){var r,n;if("string"!=typeof e)throw new TypeError(Pe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Le(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return He.apply(null,r)}var Me,Re,Ze=Object.prototype,Xe=Ze.toString,Ye=Ze.__defineGetter__,qe=Ze.__defineSetter__,ze=Ze.__lookupGetter__,Be=Ze.__lookupSetter__,De=function(){try{return pe({},"x",{}),!0}catch(e){return!1}}()?ve:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Xe.call(e))throw new TypeError(Pe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===Xe.call(n))throw new TypeError(Pe("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(ze.call(e,r)||Be.call(e,r)?(t=e.__proto__,e.__proto__=Ze,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Ye&&Ye.call(e,r,n.get),o&&qe&&qe.call(e,r,n.set),e};function Je(e,r,n){De(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===V?(Me=1,Re=0):(Me=0,Re=1);var Ke={HIGH:Me,LOW:Re},Qe=new _(1),er=new w(Qe.buffer),rr=Ke.HIGH,nr=Ke.LOW;function tr(e,r,n,t){return Qe[0]=e,r[t]=er[rr],r[t+n]=er[nr],r}function ir(e){return tr(e,[0,0],1,0)}Je(ir,"assign",tr);var ar=[0,0];function or(e,r){var n,t;return ir.assign(e,ar,1,0),n=ar[0],n&=o,t=W(r),ie(n|=t&=le,ar[1])}var ur=22250738585072014e-324,fr=4503599627370496;function cr(e,r,i,a){return n(e)||se(e)?(r[a]=e,r[a+i]=0,r):0!==e&&t(e)<ur?(r[a]=e*fr,r[a+i]=-52,r):(r[a]=e,r[a+i]=0,r)}Je((function(e){return cr(e,[0,0],1,0)}),"assign",cr);var sr=2220446049250313e-31,lr=2148532223,pr=[0,0],vr=[0,0];function gr(e,r){var t,i;return 0===r||0===e||n(e)||se(e)?e:(cr(e,pr,1,0),e=pr[0],r+=pr[1],r+=function(e){var r=W(e);return(r=(r&u)>>>20)-oe|0}(e),r<ce?or(0,e):r>ue?e<0?a:ae:(r<=fe?(r+=52,i=sr):i=1,ir.assign(e,vr,1,0),t=vr[0],t&=lr,i*ie(t|=r+oe<<20,vr[1])))}function yr(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var dr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],hr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wr=16777216,br=5.960464477539063e-8,mr=yr(20),Ar=yr(20),Nr=yr(20),_r=yr(20);function Er(r,n,t,i,a,o,u,f,c){var s,l,p,v,g,y,d,h,w;for(v=o,w=i[t],h=t,g=0;h>0;g++)l=br*w|0,_r[g]=w-wr*l|0,w=i[h-1]+l,h-=1;if(w=gr(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=g=_r[t-1]>>24-a,_r[t-1]-=g<<24-a,p=_r[t-1]>>23-a):0===a?p=_r[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=_r[g],0===s?0!==h&&(s=1,_r[g]=16777216-h):_r[g]=16777215-h;if(a>0)switch(a){case 1:_r[t-1]&=8388607;break;case 2:_r[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=gr(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=_r[g];if(0===h){for(y=1;0===_r[o-y];y++);for(g=t+1;g<=t+y;g++){for(c[f+g]=dr[u+g],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(g-h)];i[g]=l}return Er(r,n,t+=y,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===_r[t];)t-=1,a-=24;else(w=gr(w,-a))>=wr?(l=br*w|0,_r[t]=w-wr*l|0,a+=24,_r[t+=1]=l):_r[t]=0|w;for(l=gr(1,a),g=t;g>=0;g--)i[g]=l*_r[g],l*=br;for(g=t;g>=0;g--){for(l=0,y=0;y<=v&&y<=t-g;y++)l+=hr[y]*i[g+y];Nr[t-g]=l}for(l=0,g=t;g>=0;g--)l+=Nr[g];for(n[0]=0===p?l:-l,l=Nr[0]-l,g=1;g<=t;g++)l+=Nr[g];return n[1]=0===p?l:-l,7&d}function Ur(e,r,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)mr[f]=c<0?0:dr[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=e[c]*mr[o+(f-c)];Ar[f]=i}return Er(e,r,4,Ar,u,4,a,o,mr)}var Sr=Math.round,Ir=.6366197723675814,xr=1.5707963267341256,kr=6077100506506192e-26,Fr=6077100506303966e-26,jr=20222662487959506e-37,Tr=20222662487111665e-37,Or=84784276603689e-45,Vr=2047;function $r(e,r,n){var t,i,a,o,u;return a=e-(t=Sr(e*Ir))*xr,o=t*kr,u=r>>20|0,n[0]=a-o,u-(W(n[0])>>20&Vr)>16&&(o=t*jr-((i=a)-(a=i-(o=t*Fr))-o),n[0]=a-o,u-(W(n[0])>>20&Vr)>49&&(o=t*Or-((i=a)-(a=i-(o=t*Tr))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Gr=0,Hr=16777216,Wr=1.5707963267341256,Cr=6077100506506192e-26,Lr=2*Cr,Pr=3*Cr,Mr=4*Cr,Rr=598523,Zr=1072243195,Xr=1073928572,Yr=1074752122,qr=1074977148,zr=1075183036,Br=1075388923,Dr=1075594811,Jr=1094263291,Kr=[0,0,0],Qr=[0,0];function en(e,r){var n,t,i,a,f,c,s;if((i=W(e)&o|0)<=Zr)return r[0]=e,r[1]=0,0;if(i<=Yr)return(i&B)===Rr?$r(e,i,r):i<=Xr?e>0?(s=e-Wr,r[0]=s-Cr,r[1]=s-r[0]-Cr,1):(s=e+Wr,r[0]=s+Cr,r[1]=s-r[0]+Cr,-1):e>0?(s=e-2*Wr,r[0]=s-Lr,r[1]=s-r[0]-Lr,2):(s=e+2*Wr,r[0]=s+Lr,r[1]=s-r[0]+Lr,-2);if(i<=Dr)return i<=zr?i===qr?$r(e,i,r):e>0?(s=e-3*Wr,r[0]=s-Pr,r[1]=s-r[0]-Pr,3):(s=e+3*Wr,r[0]=s+Pr,r[1]=s-r[0]+Pr,-3):i===Br?$r(e,i,r):e>0?(s=e-4*Wr,r[0]=s-Mr,r[1]=s-r[0]-Mr,4):(s=e+4*Wr,r[0]=s+Mr,r[1]=s-r[0]+Mr,-4);if(i<Jr)return $r(e,i,r);if(i>=u)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return J[0]=e,K[D]}(e),s=ie(i-((t=(i>>20)-1046)<<20|0),n),f=0;f<2;f++)Kr[f]=0|s,s=(s-Kr[f])*Hr;for(Kr[2]=s,a=3;Kr[a-1]===Gr;)a-=1;return c=Ur(Kr,Qr,t,a),e<0?(r[0]=-Qr[0],r[1]=-Qr[1],-c):(r[0]=Qr[0],r[1]=Qr[1],c)}var rn=1072243195,nn=1045430272,tn=[0,0],an=3.141592653589793,on=2.5066282746310007;function un(e){return r(e/2)}function fn(e){return un(e>0?e-1:e+1)}var cn=Math.sqrt,sn=!0===V?0:1,ln=new _(1),pn=new w(ln.buffer);function vn(e,r){return ln[0]=e,pn[sn]=r>>>0,ln[0]}function gn(e){return 0|e}var yn=1072693247,dn=1e300,hn=1e-300,wn=!0===V?1:0,bn=new _(1),mn=new w(bn.buffer);function An(e,r){return bn[0]=e,mn[wn]=r>>>0,bn[0]}var Nn=1048575,_n=1048576,En=1072693248,Un=536870912,Sn=524288,In=20,xn=9007199254740992,kn=.9617966939259756,Fn=.9617967009544373,jn=-7.028461650952758e-9,Tn=[1,1.5],On=[0,.5849624872207642],Vn=[0,1.350039202129749e-8],$n=1.4426950408889634,Gn=1.4426950216293335,Hn=1.9259629911266175e-8,Wn=.6931471805599453,Cn=1048576,Ln=1071644672,Pn=20,Mn=.6931471824645996,Rn=-1.904654299957768e-9,Zn=1072693247,Xn=1105199104,Yn=1139802112,qn=1083179008,zn=1072693248,Bn=1083231232,Dn=3230714880,Jn=31,Kn=1e300,Qn=1e-300,et=8008566259537294e-32,rt=[0,0],nt=[0,0];function tt(e,i){var u,f,c,s,l,p,v,g,y,d,h,w,b,m;if(n(e)||n(i))return NaN;if(ir.assign(i,rt,1,0),l=rt[0],0===rt[1]){if(0===i)return 1;if(1===i)return e;if(-1===i)return 1/e;if(.5===i)return cn(e);if(-.5===i)return 1/cn(e);if(2===i)return e*e;if(3===i)return e*e*e;if(4===i)return(e*=e)*e;if(se(i))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:t(e)<1==(r===ae)?0:ae}(e,i)}if(ir.assign(e,rt,1,0),s=rt[0],0===rt[1]){if(0===s)return function(e,r){return r===a?ae:r===ae?0:r>0?fn(r)?e:0:fn(r)?or(ae,e):ae}(e,i);if(1===e)return 1;if(-1===e&&fn(i))return-1;if(se(e))return e===a?tt(-0,-i):i<0?0:ae}if(e<0&&!1===r(i))return(e-e)/(e-e);if(c=t(e),u=s&o|0,f=l&o|0,v=l>>>Jn|0,p=(p=s>>>Jn|0)&&fn(i)?-1:1,f>Xn){if(f>Yn)return function(e,r){return(W(e)&o)<=yn?r<0?dn*dn:hn*hn:r>0?dn*dn:hn*hn}(e,i);if(u<Zn)return 1===v?p*Kn*Kn:p*Qn*Qn;if(u>zn)return 0===v?p*Kn*Kn:p*Qn*Qn;h=function(e,r){var n,t,i,a,o,u,f;return a=(i=r-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Hn-a*$n)-((t=vn(t=(o=Gn*i)+u,0))-o),e[0]=t,e[1]=n,e}(nt,c)}else h=function(e,r,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,N,_;return m=0,n<_n&&(m-=53,n=W(r*=xn)),m+=(n>>In)-oe|0,n=(A=n&Nn|0)|En|0,A<=235662?N=0:A<767610?N=1:(N=0,m+=1,n-=_n),o=vn(i=(w=(r=An(r,n))-(c=Tn[N]))*(b=1/(r+c)),0),t=(n>>1|Un)+Sn,f=An(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=vn(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(r-(f-c))))*(o+i)),0),l=vn(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Fn*l,y=(v=jn*l+(b-(l-w))*kn+Vn[N])-((g=vn(g=p+v+(s=On[N])+(d=m),0))-d-s-p),e[0]=g,e[1]=y,e}(nt,c,u);if(w=(d=(i-(g=vn(i,0)))*h[0]+i*h[1])+(y=g*h[0]),ir.assign(w,rt,1,0),b=gn(rt[0]),m=gn(rt[1]),b>=qn){if(0!=(b-qn|m))return p*Kn*Kn;if(d+et>w-y)return p*Kn*Kn}else if((b&o)>=Bn){if(0!=(b-Dn|m))return p*Qn*Qn;if(d<=w-y)return p*Qn*Qn}return w=function(e,r,n){var t,i,a,u,f,c,s,l,p,v;return p=((l=e&o|0)>>Pn)-oe|0,s=0,l>Ln&&(i=An(0,((s=e+(Cn>>p+1)>>>0)&~(B>>(p=((s&o)>>Pn)-oe|0)))>>>0),s=(s&B|Cn)>>Pn-p>>>0,e<0&&(s=-s),r-=i),e=gn(e=W(c=1-((c=(a=(i=vn(i=n+r,0))*Mn)+(u=(n-(i-r))*Wn+i*Rn))*(t=c-(i=c*c)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=u-(c-a))+c*f)-c))),(e+=s<<Pn>>>0)>>Pn<=0?gr(c,s):An(c,e)}(b,y,d),p*w}var it=Math.ceil;function at(r){return r<0?it(r):e(r)}var ot=.6931471803691238,ut=1.9082149292705877e-10,ft=1.4426950408889634,ct=709.782712893384,st=-745.1332191019411,lt=1/(1<<28),pt=-lt;function vt(e){var r;return n(e)||e===ae?e:e===a?0:e>ct?ae:e<st?0:e>pt&&e<lt?1+e:function(e,r,n){var t,i,a,o;return gr(1-(r-(t=e-r)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-e),n)}(e-(r=at(e<0?ft*e-.5:ft*e+.5))*ot,r*ut,r)}var gt=143.01608;function yt(e){var r,n,t;return r=1+(r=1/e)*function(e){return 0===e?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(e*(.0007873113957930937*e-.00022954996161337813)-.0026813261780578124))}(r),n=vt(e),n=e>gt?(t=tt(e,.5*e-.25))*(t/n):tt(e,e-.5)/n,on*n*r}var dt=.5772156649015329;function ht(e,r){return r/((1+dt*e)*e)}function wt(i){var f,c,s,l;if(r(i)&&i<0||i===a||n(i))return NaN;if(0===i)return function(e){return 0===e&&1/e===a}(i)?a:ae;if(i>171.61447887182297)return ae;if(i<-170.5674972726612)return 0;if((c=t(i))>33)return i>=0?yt(i):(f=0==(1&(s=e(c)))?-1:1,(l=c-s)>.5&&(l=c-(s+=1)),l=c*function(e){var r;if(r=W(e),(r&=o)<=rn)return r<nn?e:Y(e,0);if(r>=u)return NaN;switch(3&en(e,tn)){case 0:return Y(tn[0],tn[1]);case 1:return C(tn[0],tn[1]);case 2:return-Y(tn[0],tn[1]);default:return-C(tn[0],tn[1])}}(an*l),f*an/(t(l)*yt(c)));for(l=1;i>=3;)l*=i-=1;for(;i<0;){if(i>-1e-9)return ht(i,l);l/=i,i+=1}for(;i<2;){if(i<1e-9)return ht(i,l);l/=i,i+=1}return 2===i?l:l*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+0*e)))))),n=1+e*(.0714304917030273+e*(e*(.035823639860549865+e*(.011813978522206043+e*(e*(.0005396055804933034+-23158187332412014e-21*e)-.004456419138517973)))-.23459179571824335))):(r=0+(e=1/e)*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+1*e)))))),n=e*(.0005396055804933034+e*(e*(.011813978522206043+e*(.035823639860549865+e*(e*(.0714304917030273+1*e)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),r/n)}(i-=2)}var bt=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291],mt=170;function At(e){return n(e)?NaN:r(e)?e<0?NaN:e<=mt?bt[e]:ae:wt(e+1)}function Nt(e){var r,n;return 0===e?1/0:((e<0?-e:e)<=1?(r=38474670393.31777+e*(36857665043.51951+e*(15889202453.72942+e*(4059208354.298835+e*(680547661.1834733+e*(78239755.00312005+e*(6246580.776401795+e*(341986.3488721347+e*(12287.194511824551+e*(261.61404416416684+2.5066282746310007*e))))))))),n=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+1*e)))))))))):(r=2.5066282746310007+(e=1/e)*(261.61404416416684+e*(12287.194511824551+e*(341986.3488721347+e*(6246580.776401795+e*(78239755.00312005+e*(680547661.1834733+e*(4059208354.298835+e*(15889202453.72942+e*(36857665043.51951+38474670393.31777*e))))))))),n=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+0*e)))))))))),r/n)}var _t=.6931471803691238,Et=1.9082149292705877e-10,Ut=.41421356237309503,St=-.2928932188134525,It=1.862645149230957e-9,xt=5551115123125783e-32,kt=9007199254740992,Ft=.6666666666666666;function jt(e){var r,t,i,o,u,f,c,s,l,p;if(e<-1||n(e))return NaN;if(-1===e)return a;if(e===ae)return e;if(0===e)return e;if(p=1,(i=e<0?-e:e)<Ut){if(i<It)return i<xt?e:e-e*e*.5;e>St&&(p=0,o=e,t=1)}return 0!==p&&(i<kt?(u=(p=((t=W(l=1+e))>>20)-oe)>0?1-(l-e):e-(l-1),u/=l):(p=((t=W(l=e))>>20)-oe,u=0),(t&=1048575)<434334?l=An(l,1072693248|t):(p+=1,l=An(l,1071644672|t),t=1048576-t>>2),o=l-1),r=.5*o*o,0===t?0===o?p*_t+(u+=p*Et):p*_t-((s=r*(1-Ft*o))-(p*Et+u)-o):(s=(c=(f=o/(2+o))*f)*function(e){return 0===e?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+.14798198605116586*e)))))}(c),0===p?o-(r-f*(r+s)):p*_t-(r-(f*(r+s)+(p*Et+u))-o))}function Tt(e){return un(e>0?e-1:e+1)}var Ot=1072693247,Vt=1e300,$t=1e-300,Gt=1048575,Ht=1048576,Wt=1072693248,Ct=536870912,Lt=524288,Pt=20,Mt=9007199254740992,Rt=.9617966939259756,Zt=.9617967009544373,Xt=-7.028461650952758e-9,Yt=[1,1.5],qt=[0,.5849624872207642],zt=[0,1.350039202129749e-8],Bt=1.4426950408889634,Dt=1.4426950216293335,Jt=1.9259629911266175e-8,Kt=1048576,Qt=1071644672,ei=20,ri=.6931471824645996,ni=-1.904654299957768e-9,ti=1072693247,ii=1105199104,ai=1139802112,oi=1083179008,ui=1072693248,fi=1083231232,ci=3230714880,si=31,li=1e300,pi=1e-300,vi=8008566259537294e-32,gi=[0,0],yi=[0,0];function di(e,i){var u,f,c,s,l,p,v,g,y,d,h,w,b,m;if(n(e)||n(i))return NaN;if(ir.assign(i,gi,1,0),l=gi[0],0===gi[1]){if(0===i)return 1;if(1===i)return e;if(-1===i)return 1/e;if(.5===i)return cn(e);if(-.5===i)return 1/cn(e);if(2===i)return e*e;if(3===i)return e*e*e;if(4===i)return(e*=e)*e;if(se(i))return function(e,r){return-1===e?(e-e)/(e-e):1===e?1:t(e)<1==(r===ae)?0:ae}(e,i)}if(ir.assign(e,gi,1,0),s=gi[0],0===gi[1]){if(0===s)return function(e,r){return r===a?ae:r===ae?0:r>0?Tt(r)?e:0:Tt(r)?or(ae,e):ae}(e,i);if(1===e)return 1;if(-1===e&&Tt(i))return-1;if(se(e))return e===a?di(-0,-i):i<0?0:ae}if(e<0&&!1===r(i))return(e-e)/(e-e);if(c=t(e),u=s&o|0,f=l&o|0,v=l>>>si|0,p=(p=s>>>si|0)&&Tt(i)?-1:1,f>ii){if(f>ai)return function(e,r){return(W(e)&o)<=Ot?r<0?Vt*Vt:$t*$t:r>0?Vt*Vt:$t*$t}(e,i);if(u<ti)return 1===v?p*li*li:p*pi*pi;if(u>ui)return 0===v?p*li*li:p*pi*pi;h=function(e,r){var n,t,i,a,o,u,f;return a=(i=r-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Jt-a*Bt)-((t=vn(t=(o=Dt*i)+u,0))-o),e[0]=t,e[1]=n,e}(yi,c)}else h=function(e,r,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,N,_;return m=0,n<Ht&&(m-=53,n=W(r*=Mt)),m+=(n>>Pt)-oe|0,n=(A=n&Gt|0)|Wt|0,A<=235662?N=0:A<767610?N=1:(N=0,m+=1,n-=Ht),o=vn(i=(w=(r=An(r,n))-(c=Yt[N]))*(b=1/(r+c)),0),t=(n>>1|Ct)+Lt,f=An(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=vn(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(r-(f-c))))*(o+i)),0),l=vn(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Zt*l,y=(v=Xt*l+(b-(l-w))*Rt+zt[N])-((g=vn(g=p+v+(s=qt[N])+(d=m),0))-d-s-p),e[0]=g,e[1]=y,e}(yi,c,u);if(w=(d=(i-(g=vn(i,0)))*h[0]+i*h[1])+(y=g*h[0]),ir.assign(w,gi,1,0),b=gn(gi[0]),m=gn(gi[1]),b>=oi){if(0!=(b-oi|m))return p*li*li;if(d+vi>w-y)return p*li*li}else if((b&o)>=fi){if(0!=(b-ci|m))return p*pi*pi;if(d<=w-y)return p*pi*pi}return w=function(e,r,n){var t,i,a,u,f,c,s,l,p,v;return p=((l=e&o|0)>>ei)-oe|0,s=0,l>Qt&&(i=An(0,((s=e+(Kt>>p+1)>>>0)&~(B>>(p=((s&o)>>ei)-oe|0)))>>>0),s=(s&B|Kt)>>ei-p>>>0,e<0&&(s=-s),r-=i),e=gn(e=W(c=1-((c=(a=(i=vn(i=n+r,0))*ri)+(u=(n-(i-r))*Wn+i*ni))*(t=c-(i=c*c)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((f=u-(c-a))+c*f)-c))),(e+=s<<ei>>>0)>>ei<=0?gr(c,s):An(c,e)}(b,y,d),p*w}var hi=2220446049250313e-31,wi=2.718281828459045,bi=10.900511,mi=170,Ai=4269068009004705e289;function Ni(e,r){var n,i,a;return e<hi?r>mi?(i=Ni(r,mi-r),i*=e,1/(i*=Ai)):1/(e*wt(e+r)):(a=e+bi-.5,e+r===e?n=t(r)<10?vt((.5-e)*jt(r/a)):1:(n=t(r)<10?vt((.5-e)*jt(r/a)):di(a/(a+r),e-.5),n*=Nt(e)/Nt(e+r)),n*=di(wi/(a+r),r))}var _i=170;function Ei(r,n){var i,a,o;if(r<=0||r+n<=0)return wt(r)/wt(r+n);if((a=e(n))===n){if((o=e(r))===r&&r<=_i&&r+n<=_i)return At(o-1)/At(a+o-1);if(t(n)<20){if(0===n)return 1;if(n<0){for(i=r-=1,n+=1;0!==n;)i*=r-=1,n+=1;return i}for(i=1/r,n-=1;0!==n;)i/=r+=1,n-=1;return i}}return Ni(r,n)}var Ui=17976931348623157e292,Si=170;function Ii(i,a){var o,u,f,c,s;return n(i)||!function(r){return e(r)===r&&r>=0}(a)?NaN:0===i?0:i<0?(1&a?-1:1)*function(e,t){var i,a;return n(e)||!r(t)?NaN:e<0?(t<0&&(e+=t,t=-t,a=!0),i=(1&t?-1:1)*Ii(-e,t),a&&(i=1/i),i):0===t?1:0===e?t<0?-Ei(e+1,-t):0:e<1&&e+t<0?(i=Ei(1-e,-t),1&t?-i:i):1/Ei(e,t)}(-i,a):0===a?1:i<.5?a>Si-2?(c=i*Ii(i-1,Si-2),s=Ii(i-Si+1,a-Si+1),Ui/t(c)<t(s)?ae:c*s):i*Ii(i-1,a-1):i<=a-1?(f=t(e(u=i+1)))===u?0:(o=Ei(u,-f),o*=i-=f,(f+=1)<a&&(o*=Ii(i-1,a-f)),o):Ei(i+1,-a)}return Ii},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).fallingFactorial=r();
//# sourceMappingURL=browser.js.map
