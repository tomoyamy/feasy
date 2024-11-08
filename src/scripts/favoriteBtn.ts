type Styles = { property: keyof CSSStyleDeclaration; value: string }[];

const btnStyle: Styles = [
  { property: 'width', value: '100px' },
  { property: 'height', value: '50px' },
  { property: 'color', value: 'red' },
];

const iframeStyle: Styles = [
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '50%' },
  { property: 'left', value: '50%' },
  { property: 'transform', value: 'translate(-50%, -50%)' },
];

const setStyle = (htmlElm: HTMLElement, styles: Styles) => {
  styles.forEach((val) => {
    htmlElm.style.setProperty(String(val.property), val.value);
  });
};

const setDisplayIframe = (child: HTMLElement) => {
  document.body.appendChild(child);
};

const btn = document.createElement('button');
const iframe = document.createElement('iframe');
btn.innerText = 'iframe 表示';
iframe.src = 'https://www.mouse-jp.co.jp/';
setStyle(btn, btnStyle);
setStyle(iframe, iframeStyle);
btn.addEventListener('click', () => setDisplayIframe(iframe));
document.body.appendChild(btn);
