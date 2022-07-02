// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor,e=r;var n=function(r){return e(r)===r&&r>=0},t=r;var u=function(r){return t(r)===r};var f=function(r){return r!=r};var i=function(r){return Math.abs(r)},o=Number.NEGATIVE_INFINITY,a=o;var c=function(r){return 0===r&&1/r===a};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return v&&"symbol"==typeof Symbol.toStringTag},l=Object.prototype.toString,p=l;var w=function(r){return p.call(r)},A=Object.prototype.hasOwnProperty;var N=function(r,e){return null!=r&&A.call(r,e)},b="function"==typeof Symbol?Symbol.toStringTag:"",s=N,U=b,h=l;var m=w,d=function(r){var e,n,t;if(null==r)return h.call(r);n=r[U],e=s(r,U);try{r[U]=void 0}catch(e){return h.call(r)}return t=h.call(r),e?r[U]=n:delete r[U],t},I=y()?d:m,F=I,S="function"==typeof Uint32Array;var H="function"==typeof Uint32Array?Uint32Array:null,O=function(r){return S&&r instanceof Uint32Array||"[object Uint32Array]"===F(r)},g=H;var E=function(){var r,e;if("function"!=typeof g)return!1;try{e=new g(e=[1,3.14,-3.14,4294967296,4294967297]),r=O(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var j="function"==typeof Uint32Array?Uint32Array:void 0,T=function(){throw new Error("not implemented")},G=E()?j:T,M=I,L="function"==typeof Float64Array;var W="function"==typeof Float64Array?Float64Array:null,x=function(r){return L&&r instanceof Float64Array||"[object Float64Array]"===M(r)},P=W;var V=function(){var r,e;if("function"!=typeof P)return!1;try{e=new P([1,3.14,-3.14,NaN]),r=x(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var Y="function"==typeof Float64Array?Float64Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,q=I,z="function"==typeof Uint8Array;var B="function"==typeof Uint8Array?Uint8Array:null,C=function(r){return z&&r instanceof Uint8Array||"[object Uint8Array]"===q(r)},D=B;var J=function(){var r,e;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,256,257]),r=C(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var K="function"==typeof Uint8Array?Uint8Array:void 0,Q=function(){throw new Error("not implemented")},R=J()?K:Q,X=I,Z="function"==typeof Uint16Array;var $="function"==typeof Uint16Array?Uint16Array:null,rr=function(r){return Z&&r instanceof Uint16Array||"[object Uint16Array]"===X(r)},er=$;var nr=function(){var r,e;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,65536,65537]),r=rr(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var tr,ur="function"==typeof Uint16Array?Uint16Array:void 0,fr=function(){throw new Error("not implemented")},ir={uint16:nr()?ur:fr,uint8:R};(tr=new ir.uint16(1))[0]=4660;var or=52===new ir.uint8(tr.buffer)[0],ar=G,cr=!0===or?1:0,vr=new k(1),yr=new ar(vr.buffer);var lr=function(r){return vr[0]=r,yr[cr]};var pr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},wr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Ar=function(r,e){var n,t,u,f;return u=(f=r*r)*f,t=f*pr(f),t+=u*u*wr(f),(u=1-(n=.5*f))+(1-u-n+(f*t-r*e))},Nr=-.16666666666666632;var br=function(r,e){var n,t,u;return n=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===e?r+t*(Nr+u*n):r-(u*(.5*e-t*n)-e-t*Nr)},sr=G,Ur=!0===or?0:1,hr=new k(1),mr=new sr(hr.buffer);var dr,Ir,Fr=function(r){return hr[0]=r,mr[Ur]};!0===or?(dr=1,Ir=0):(dr=0,Ir=1);var Sr=G,Hr={HIGH:dr,LOW:Ir},Or=new k(1),gr=new Sr(Or.buffer),Er=Hr.HIGH,jr=Hr.LOW;var Tr=function(r,e){return gr[Er]=r,gr[jr]=e,Or[0]},Gr=Tr,Mr=Number.POSITIVE_INFINITY,Lr=Mr,Wr=o;var xr,Pr,Vr=function(r){return r===Lr||r===Wr};!0===or?(xr=1,Pr=0):(xr=0,Pr=1);var Yr=G,_r={HIGH:xr,LOW:Pr},kr=new k(1),qr=new Yr(kr.buffer),zr=_r.HIGH,Br=_r.LOW;var Cr=function(r,e){return kr[0]=e,r[0]=qr[zr],r[1]=qr[Br],r};var Dr=function(r,e){return 1===arguments.length?Cr([0,0],r):Cr(r,e)},Jr=Dr,Kr=lr,Qr=Gr,Rr=[0,0];var Xr=function(r,e){var n,t;return Jr(Rr,r),n=Rr[0],n&=2147483647,t=Kr(e),Qr(n|=t&=2147483648,Rr[1])},Zr=Vr,$r=f,re=i;var ee=function(r,e){return $r(e)||Zr(e)?(r[0]=e,r[1]=0,r):0!==e&&re(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var ne=lr;var te=function(r){var e=ne(r);return(e=(2146435072&e)>>>20)-1023|0},ue=Mr,fe=o,ie=f,oe=Vr,ae=Xr,ce=function(r,e){return 1===arguments.length?ee([0,0],r):ee(r,e)},ve=te,ye=Dr,le=Gr,pe=[0,0],we=[0,0];var Ae=function(r,e){var n,t;return 0===e||0===r||ie(r)||oe(r)?r:(ce(pe,r),e+=pe[1],(e+=ve(r=pe[0]))<-1074?ae(0,r):e>1023?r<0?fe:ue:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ye(we,r),n=we[0],n&=2148532223,t*le(n|=e+1023<<20,we[1])))},Ne=Ae;var be=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var se=r,Ue=Ne,he=function(r){return be(0,r)},me=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ie=5.960464477539063e-8,Fe=he(20),Se=he(20),He=he(20),Oe=he(20);function ge(r,e,n,t,u,f,i,o,a){var c,v,y,l,p,w,A,N,b;for(l=f,b=t[n],N=n,p=0;N>0;p++)v=Ie*b|0,Oe[p]=b-16777216*v|0,b=t[N-1]+v,N-=1;if(b=Ue(b,u),b-=8*se(.125*b),b-=A=0|b,y=0,u>0?(A+=p=Oe[n-1]>>24-u,Oe[n-1]-=p<<24-u,y=Oe[n-1]>>23-u):0===u?y=Oe[n-1]>>23:b>=.5&&(y=2),y>0){for(A+=1,c=0,p=0;p<n;p++)N=Oe[p],0===c?0!==N&&(c=1,Oe[p]=16777216-N):Oe[p]=16777215-N;if(u>0)switch(u){case 1:Oe[n-1]&=8388607;break;case 2:Oe[n-1]&=4194303}2===y&&(b=1-b,0!==c&&(b-=Ue(1,u)))}if(0===b){for(N=0,p=n-1;p>=f;p--)N|=Oe[p];if(0===N){for(w=1;0===Oe[f-w];w++);for(p=n+1;p<=n+w;p++){for(a[o+p]=me[i+p],v=0,N=0;N<=o;N++)v+=r[N]*a[o+(p-N)];t[p]=v}return ge(r,e,n+=w,t,u,f,i,o,a)}}if(0===b)for(n-=1,u-=24;0===Oe[n];)n-=1,u-=24;else(b=Ue(b,-u))>=16777216?(v=Ie*b|0,Oe[n]=b-16777216*v|0,u+=24,Oe[n+=1]=v):Oe[n]=0|b;for(v=Ue(1,u),p=n;p>=0;p--)t[p]=v*Oe[p],v*=Ie;for(p=n;p>=0;p--){for(v=0,w=0;w<=l&&w<=n-p;w++)v+=de[w]*t[p+w];He[n-p]=v}for(v=0,p=n;p>=0;p--)v+=He[p];for(e[0]=0===y?v:-v,v=He[0]-v,p=1;p<=n;p++)v+=He[p];return e[1]=0===y?v:-v,7&A}var Ee=function(r,e,n,t){var u,f,i,o,a,c,v;for(4,(f=(n-3)/24|0)<0&&(f=0),o=n-24*(f+1),c=f-(i=t-1),v=i+4,a=0;a<=v;a++)Fe[a]=c<0?0:me[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Fe[i+(a-c)];Se[a]=u}return 4,ge(r,e,4,Se,o,4,f,i,Fe)},je=Math.round,Te=lr;var Ge=lr,Me=Fr,Le=Gr,We=Ee,xe=function(r,e,n){var t,u,f,i,o;return f=r-1.5707963267341256*(t=je(.6366197723675814*r)),i=6077100506506192e-26*t,o=e>>20|0,n[0]=f-i,o-(Te(n[0])>>20&2047)>16&&(i=20222662487959506e-37*t-((u=f)-(f=u-(i=6077100506303966e-26*t))-i),n[0]=f-i,o-(Te(n[0])>>20&2047)>49&&(i=84784276603689e-45*t-((u=f)-(f=u-(i=20222662487111665e-37*t))-i),n[0]=f-i)),n[1]=f-n[0]-i,t},Pe=1.5707963267341256,Ve=6077100506506192e-26,Ye=2*Ve,_e=4*Ve,ke=[0,0,0],qe=[0,0];var ze=function(r,e){var n,t,u,f,i,o,a;if((u=2147483647&Ge(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?xe(r,u,e):u<=1073928572?r>0?(a=r-Pe,e[0]=a-Ve,e[1]=a-e[0]-Ve,1):(a=r+Pe,e[0]=a+Ve,e[1]=a-e[0]+Ve,-1):r>0?(a=r-2*Pe,e[0]=a-Ye,e[1]=a-e[0]-Ye,2):(a=r+2*Pe,e[0]=a+Ye,e[1]=a-e[0]+Ye,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?xe(r,u,e):r>0?(a=r-3*Pe,e[0]=a-1.8231301519518578e-10,e[1]=a-e[0]-1.8231301519518578e-10,3):(a=r+3*Pe,e[0]=a+1.8231301519518578e-10,e[1]=a-e[0]+1.8231301519518578e-10,-3):1075388923===u?xe(r,u,e):r>0?(a=r-4*Pe,e[0]=a-_e,e[1]=a-e[0]-_e,4):(a=r+4*Pe,e[0]=a+_e,e[1]=a-e[0]+_e,-4);if(u<1094263291)return xe(r,u,e);if(u>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=Me(r),a=Le(u-((t=(u>>20)-1046)<<20|0),n),i=0;i<2;i++)ke[i]=0|a,a=16777216*(a-ke[i]);for(ke[2]=a,f=3;0===ke[f-1];)f-=1;return o=We(ke,qe,t,f),r<0?(e[0]=-qe[0],e[1]=-qe[1],-o):(e[0]=qe[0],e[1]=qe[1],o)},Be=lr,Ce=Ar,De=br,Je=ze,Ke=[0,0];var Qe=function(r){var e;if(e=Be(r),(e&=2147483647)<=1072243195)return e<1045430272?r:De(r,0);if(e>=2146435072)return NaN;switch(3&Je(r,Ke)){case 0:return De(Ke[0],Ke[1]);case 1:return Ce(Ke[0],Ke[1]);case 2:return-De(Ke[0],Ke[1]);default:return-Ce(Ke[0],Ke[1])}},Re=u;var Xe=function(r){return Re(r/2)};var Ze=function(r){return Xe(r>0?r-1:r+1)},$e=Math.sqrt,rn=G,en=!0===or?0:1,nn=new k(1),tn=new rn(nn.buffer);var un=function(r,e){return nn[0]=r,tn[en]=e>>>0,nn[0]},fn=un;var on=function(r){return 0|r},an=Ze,cn=Xr,vn=o,yn=Mr;var ln=function(r,e){return e===vn?yn:e===yn?0:e>0?an(e)?r:0:an(e)?cn(yn,r):yn},pn=lr;var wn=function(r,e){return(2147483647&pn(r))<=1072693247?e<0?1/0:0:e>0?1/0:0},An=i,Nn=Mr;var bn=function(r,e){return-1===r?(r-r)/(r-r):1===r?1:An(r)<1==(e===Nn)?0:Nn},sn=G,Un=!0===or?1:0,hn=new k(1),mn=new sn(hn.buffer);var dn=function(r,e){return hn[0]=r,mn[Un]=e>>>0,hn[0]},In=dn;var Fn=lr,Sn=fn,Hn=In,On=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},gn=[1,1.5],En=[0,.5849624872207642],jn=[0,1.350039202129749e-8];var Tn=fn,Gn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Mn=lr,Ln=In,Wn=fn,xn=on,Pn=Ne,Vn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Yn=f,_n=Ze,kn=Vr,qn=u,zn=$e,Bn=i,Cn=Dr,Dn=fn,Jn=on,Kn=o,Qn=Mr,Rn=ln,Xn=wn,Zn=bn,$n=function(r,e,n){var t,u,f,i,o,a,c,v,y,l,p,w,A,N,b,s,U,h,m,d;return h=0,n<1048576&&(h-=53,n=Fn(e*=9007199254740992)),h+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?d=0:m<767610?d=1:(d=0,h+=1,n-=1048576),t=524288+(n>>1|536870912),o=(U=1/((e=Hn(e,n))+(c=gn[d])))*((s=e-c)-(i=Sn(u=s*U,0))*(a=Hn(0,t+=d<<18))-i*(e-(a-c))),b=(f=u*u)*f*On(f),a=Sn(a=3+(f=i*i)+(b+=o*(i+u)),0),A=(p=-7.028461650952758e-9*(y=Sn(y=(s=i*a)+(U=o*a+(b-(a-3-f))*u),0))+.9617966939259756*(U-(y-s))+jn[d])-((w=Sn(w=(l=.9617967009544373*y)+p+(v=En[d])+(N=h),0))-N-v-l),r[0]=w,r[1]=A,r},rt=function(r,e){var n,t,u,f,i;return n=(i=1.9259629911266175e-8*(u=e-1)-1.4426950408889634*(u*u*Gn(u)))-((t=Tn(t=(f=1.4426950216293335*u)+i,0))-f),r[0]=t,r[1]=n,r},et=function(r,e,n){var t,u,f,i,o,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(t=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),e-=f=Ln(0,t)),a=(o=.6931471805599453*(n-((f=Wn(f=n+e,0))-e))+-1.904654299957768e-9*f)-((c=(i=.6931471824645996*f)+o)-i),u=c-(f=c*c)*Vn(f),r=Mn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=xn(r),c=(r+=v<<20>>>0)>>20<=0?Pn(c,v):Ln(c,r)},nt=1e300,tt=[0,0],ut=[0,0];var ft=function r(e,n){var t,u,f,i,o,a,c,v,y,l,p,w,A,N;if(Yn(e)||Yn(n))return NaN;if(Cn(tt,n),o=tt[0],0===tt[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return zn(e);if(-.5===n)return 1/zn(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(kn(n))return Zn(e,n)}if(Cn(tt,e),i=tt[0],0===tt[1]){if(0===i)return Rn(e,n);if(1===e)return 1;if(-1===e&&_n(n))return-1;if(kn(e))return e===Kn?r(-0,-n):n<0?0:Qn}if(e<0&&!1===qn(n))return(e-e)/(e-e);if(f=Bn(e),t=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,a=(a=i>>>31|0)&&_n(n)?-1:1,u>1105199104){if(u>1139802112)return Xn(e,n);if(t<1072693247)return 1===c?a*nt*nt:1e-300*a*1e-300;if(t>1072693248)return 0===c?a*nt*nt:1e-300*a*1e-300;p=rt(ut,f)}else p=$n(ut,f,t);if(l=(n-(v=Dn(n,0)))*p[0]+n*p[1],y=v*p[0],Cn(tt,w=l+y),A=Jn(tt[0]),N=Jn(tt[1]),A>=1083179008){if(0!=(A-1083179008|N))return a*nt*nt;if(l+8008566259537294e-32>w-y)return a*nt*nt}else if((2147483647&A)>=1083231232){if(0!=(A-3230714880|N))return 1e-300*a*1e-300;if(l<=w-y)return 1e-300*a*1e-300}return a*(w=et(A,y,l))},it=ft,ot=Math.ceil,at=r,ct=ot;var vt=Ne,yt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var lt=f,pt=function(r){return r<0?ct(r):at(r)},wt=o,At=Mr,Nt=function(r,e,n){var t,u,f;return f=(t=r-e)-(u=t*t)*yt(u),vt(1-(e-t*f/(2-f)-r),n)};var bt=function(r){var e;return lt(r)||r===At?r:r===wt?0:r>709.782712893384?At:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(e=pt(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),Nt(r-.6931471803691238*e,1.9082149292705877e-10*e,e))};var st=it,Ut=bt,ht=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var mt=f,dt=u,It=c,Ft=i,St=r,Ht=Qe,Ot=Mr,gt=o,Et=3.141592653589793,jt=function(r){var e,n,t;return e=1+(e=1/r)*ht(e),n=Ut(r),2.5066282746310007*(n=r>143.01608?(t=st(r,.5*r-.25))*(t/n):st(r,r-.5)/n)*e},Tt=function(r,e){return e/((1+.5772156649015329*r)*r)},Gt=function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)};var Mt=function(r){var e,n,t,u;if(dt(r)&&r<0||r===gt||mt(r))return NaN;if(0===r)return It(r)?gt:Ot;if(r>171.61447887182297)return Ot;if(r<-170.5674972726612)return 0;if((n=Ft(r))>33)return r>=0?jt(r):(e=0==(1&(t=St(n)))?-1:1,(u=n-t)>.5&&(u=n-(t+=1)),u=n*Ht(Et*u),e*Et/(Ft(u)*jt(n)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Tt(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Tt(r,u);u/=r,r+=1}return 2===r?u:u*Gt(r-=2)},Lt=f,Wt=u,xt=Mt,Pt=Mr,Vt=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,0x1b02b9306890000,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8.841761993739702e30,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,1.0333147966386145e40,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,1.3868311854568984e80,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8.247650592082472e90,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,1.1978571669969892e100,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5.797126020747368e120,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,2.4227095383672734e130,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1.352001527678403e140,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,1.1462805637347084e170,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,1.7629525510902446e180,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3.393108684451898e190,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8.094298525273444e200,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,2.6904727073180504e230,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,3.80892263763057e260,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1.853271869493735e280,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1.503616514864999e300,25260757449731984e286,4269068009004705e289,7257415615307999e291];var Yt=f,_t=lr,kt=In,qt=Mr,zt=o,Bt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Ct=.6931471803691238,Dt=1.9082149292705877e-10;var Jt=function(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=38474670393.31777+r*(36857665043.51951+r*(15889202453.72942+r*(4059208354.298835+r*(680547661.1834733+r*(78239755.00312005+r*(6246580.776401795+r*(341986.3488721347+r*(12287.194511824551+r*(261.61404416416684+2.5066282746310007*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=2.5066282746310007+(r=1/r)*(261.61404416416684+r*(12287.194511824551+r*(341986.3488721347+r*(6246580.776401795+r*(78239755.00312005+r*(680547661.1834733+r*(4059208354.298835+r*(15889202453.72942+r*(36857665043.51951+38474670393.31777*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)},Kt=Mt,Qt=function(r){var e,n,t,u,f,i,o,a,c,v;if(r<-1||Yt(r))return NaN;if(-1===r)return zt;if(r===qt)return r;if(0===r)return r;if(v=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,n=1)}return 0!==v&&(t<9007199254740992?(f=(v=((n=_t(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((n=_t(c=r))>>20)-1023,f=0),(n&=1048575)<434334?c=kt(c,1072693248|n):(v+=1,c=kt(c,1071644672|n),n=1048576-n>>2),u=c-1),e=.5*u*u,0===n?0===u?v*Ct+(f+=v*Dt):v*Ct-((a=e*(1-.6666666666666666*u))-(v*Dt+f)-u):(a=(o=(i=u/(2+u))*i)*Bt(o),0===v?u-(e-i*(e+a)):v*Ct-(e-(i*(e+a)+(v*Dt+f))-u))},Rt=i,Xt=bt,Zt=it;var $t=function r(e,n){var t,u,f;return e<2220446049250313e-31?n>170?(u=r(n,170-n),u*=e,1/(u*=4269068009004705e289)):1/(e*Kt(e+n)):(f=e+10.900511-.5,e+n===e?t=Rt(n)<10?Xt((.5-e)*Qt(n/f)):1:(t=Rt(n)<10?Xt((.5-e)*Qt(n/f)):Zt(f/(f+n),e-.5),t*=Jt(e)/Jt(e+n)),t*=Zt(2.718281828459045/(f+n),n))},ru=i,eu=r,nu=Mt,tu=function(r){return Lt(r)?NaN:Wt(r)?r<0?NaN:r<=170?Vt[r]:Pt:xt(r+1)},uu=$t;var fu=function(r,e){var n,t,u;if(r<=0||r+e<=0)return nu(r)/nu(r+e);if((t=eu(e))===e){if((u=eu(r))===r&&r<=170&&r+e<=170)return tu(u-1)/tu(t+u-1);if(ru(e)<20){if(0===e)return 1;if(e<0){for(n=r-=1,e+=1;0!==e;)n*=r-=1,e+=1;return n}for(n=1/r,e-=1;0!==e;)n/=r+=1,e-=1;return n}}return uu(r,e)};function iu(e,t){var o,a,c,v,y;return f(e)||!n(t)?NaN:0===e?0:e<0?(1&t?-1:1)*function(r,e){var n,t;return f(r)||!u(e)?NaN:r<0?(e<0&&(r+=e,e=-e,t=!0),n=(1&e?-1:1)*iu(-r,e),t&&(n=1/n),n):0===e?1:0===r?e<0?-fu(r+1,-e):0:r<1&&r+e<0?(n=fu(1-r,-e),1&e?-n:n):1/fu(r,e)}(-e,t):0===t?1:e<.5?t>168?(v=e*iu(e-1,168),y=iu(e-170+1,t-170+1),17976931348623157e292/i(v)<i(y)?Mr:v*y):e*iu(e-1,t-1):e<=t-1?(c=i(r(a=e+1)))===a?0:(o=fu(a,-c),o*=e-=c,(c+=1)<t&&(o*=iu(e-1,t-c)),o):fu(e+1,-t)}export{iu as default};
//# sourceMappingURL=mod.js.map
