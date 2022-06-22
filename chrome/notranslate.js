// notranslateをつけたい要素のセレクタを列挙
let selectors = [
  "adiv.prism-code",
  "div.enlighter-overflow-scroll",
  "div.code-excerpt",
  "pre",
  'div[spellcheck="false"]',
  "button",
];

let targets = document.querySelectorAll(selectors.join());

for (const target of targets) {
  target.classList.add("notranslate");
}
