<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Falling Factorial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [falling factorial][falling-and-rising-factorials].

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import fallingFactorial from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-falling-factorial@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-falling-factorial/tags). For example,

```javascript
import fallingFactorial from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-falling-factorial@v0.2.2-deno/mod.js';
```

#### fallingFactorial( x, n )

Evaluates the [falling factorial][falling-and-rising-factorials] of `x` and `n`.

```javascript
var v = fallingFactorial( 0.9, 5 );
// returns ~0.644

v = fallingFactorial( -9.0, 3 );
// returns -990.0

v = fallingFactorial( 0.0, 2 );
// returns 0.0

v = fallingFactorial( NaN, 3 );
// returns NaN

v = fallingFactorial( 5.0, NaN );
// returns NaN

v = fallingFactorial( NaN, NaN );
// returns NaN
```

The function returns `NaN` if not provided a nonnegative integer for `n`.

```javascript
var v = fallingFactorial( 2.0, 1.5 );
// returns NaN

v = fallingFactorial( 3.0, -2 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import ceil from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@deno/mod.js';
import fallingFactorial from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-falling-factorial@deno/mod.js';

var n;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*40.0 ) - 20.0;
    n = ceil( randu()*20.0 );
    console.log( 'fallingFactorial(%d,%d) = %d', x, n, fallingFactorial( x, n ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/rising-factorial`][@stdlib/math/base/special/rising-factorial]</span><span class="delimiter">: </span><span class="description">compute the rising factorial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-falling-factorial.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-falling-factorial

[test-image]: https://github.com/stdlib-js/math-base-special-falling-factorial/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/math-base-special-falling-factorial/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-falling-factorial/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-falling-factorial?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-falling-factorial.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-falling-factorial/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-falling-factorial/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-falling-factorial/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-falling-factorial/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-falling-factorial/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-falling-factorial/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-falling-factorial/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-falling-factorial/blob/main/branches.md

[falling-and-rising-factorials]: https://en.wikipedia.org/wiki/Falling_and_rising_factorials

<!-- <related-links> -->

[@stdlib/math/base/special/rising-factorial]: https://github.com/stdlib-js/math-base-special-rising-factorial/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
