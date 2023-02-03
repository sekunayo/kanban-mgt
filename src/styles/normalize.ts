export const globalStyles = `
:root {
  font-size: 1rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  margin: 0;
  direction: rtl;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Plus Jakarta Sans";
}

main {
  display: block;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace; 
  font-size: 1rem;
}

a {
  background-color: transparent;
  text-decoration: none;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1rem; 
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  display: block;
  border: none;
  outline: none;
  max-width: 100%;
  height: auto;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  outline: none;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -wwebkit-appearance: button;
  appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

[type="number"] {
  -moz-appearance: textfield;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"],
[type="date"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

ul,
ol {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

p {
  font-family: "Plus Jakarta Sans";
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-family: "Plus Jakarta Sans";
}

ul,
ol,
li {
  list-style: none;
  padding: 0;
}

img:not([alt]) {
  filter: blur(10px);
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

button:focus,
button:hover {
  outline: none;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`


// button:-moz-focusring,
// [type="button"]:-moz-focusring,
// [type="reset"]:-moz-focusring,
// [type="submit"]:-moz-focusring {
//   outline: 1px dotted ButtonText;
// }