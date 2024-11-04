const createBtn = () => {
  return document.createElement('button');
};

const alertFunc = () => {
  alert('Hello World!!');
};

const setBtnStyle = <T extends keyof CSSStyleDeclaration>(
  property: T,
  value: CSSStyleDeclaration[T],
  btnElm: HTMLButtonElement
) => {
  btnElm.style[property] = value;
};

const setBtnInnerText = (btnElm: HTMLButtonElement, txt: string) => {
  btnElm.innerText = txt;
};

const alertBtn = createBtn();
setBtnInnerText(alertBtn, 'アラート表示');
setBtnStyle('height', '50px', alertBtn);
setBtnStyle('width', '100px', alertBtn);
setBtnStyle('color', 'white', alertBtn);
setBtnStyle('backgroundColor', 'red', alertBtn);
alertBtn.addEventListener('click', alertFunc);
document.body.appendChild(alertBtn);
