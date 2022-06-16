// notranslateをつけたい要素のセレクタを列挙
const selectors = [
  "adiv.prism-code",
  "div.enlighter-overflow-scroll",
  "div.code-excerpt",
  "pre",
  'div[spellcheck="false"]',
  "button",
];

const targets = document.querySelectorAll(selectors.join());

for (const target of targets) {
  target.classList.add("notranslate");
}
