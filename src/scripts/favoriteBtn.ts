type Styles = { property: keyof CSSStyleDeclaration; value: string }[];

const btnStyle: Styles = [
  { property: 'width', value: '100px' },
  { property: 'height', value: '50px' },
  { property: 'color', value: 'red' },
];

const alertFunc = () => {
  alert('Hello World!!');
};

const setStyle = (htmlElm: HTMLElement, styles: Styles) => {
  styles.forEach((val) => {
    htmlElm.style.setProperty(String(val.property), val.value);
  });
};

const btn = document.createElement('button');
btn.innerText = 'アラート表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', alertFunc);
document.body.appendChild(btn);
