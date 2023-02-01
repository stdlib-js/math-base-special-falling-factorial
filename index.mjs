// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-delta-ratio@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";function d(o,j){var l,h,p,b,c;return e(o)||!s(j)?NaN:0===o?0:o<0?(1&j?-1:1)*function(s,n){var m,r;return e(s)||!t(n)?NaN:s<0?(n<0&&(s+=n,n=-n,r=!0),m=(1&n?-1:1)*d(-s,n),r&&(m=1/m),m):0===n?1:0===s?n<0?-i(s+1,-n):0:s<1&&s+n<0?(m=i(1-s,-n),1&n?-m:m):1/i(s,n)}(-o,j):0===j?1:o<.5?j>168?(b=o*d(o-1,168),c=d(o-170+1,j-170+1),r/m(b)<m(c)?a:b*c):o*d(o-1,j-1):o<=j-1?(p=m(n(h=o+1)))===h?0:(l=i(h,-p),l*=o-=p,(p+=1)<j&&(l*=d(o-1,j-p)),l):i(o+1,-j)}export{d as default};
//# sourceMappingURL=index.mjs.map
