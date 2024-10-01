"use strict";var A=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=A(function(L,n){
var F=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),c=require('@stdlib/math-base-assert-is-integer/dist'),l=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-gamma-delta-ratio/dist'),g=require('@stdlib/math-base-special-floor/dist'),q=require('@stdlib/math-base-special-abs/dist'),_=require('@stdlib/constants-float64-max/dist'),I=require('@stdlib/constants-float64-pinf/dist'),v=require('@stdlib/constants-float64-max-safe-nth-factorial/dist');function T(e,r){var i,t;return l(e)||!c(r)?NaN:e<0?(r<0&&(e+=r,r=-r,t=!0),i=(r&1?-1:1)*a(-e,r),t&&(i=1/i),i):r===0?1:e===0?r<0?-f(e+1,-r):0:e<1&&e+r<0?(i=f(1-e,-r),r&1?-i:i):1/f(e,r)}function a(e,r){var i,t,u,s,o;return l(e)||!F(r)?NaN:e===0?0:e<0?(r&1?-1:1)*T(-e,r):r===0?1:e<.5?r>v-2?(s=e*a(e-1,v-2),o=a(e-v+1,r-v+1),_/q(s)<q(o)?I:s*o):e*a(e-1,r-1):e<=r-1?(t=e+1,u=q(g(t)),u===t?0:(i=f(t,-u),e-=u,i*=e,u+=1,u<r&&(i*=a(e-1,r-u)),i)):f(e+1,-r)}n.exports=a
});var m=N();module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
