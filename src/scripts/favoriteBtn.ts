type Style = {
  height: string;
  width: string;
  color: string;
  'background-color': string;
};

const createBtn = () => {
  return document.createElement('button');
};

const alertFunc = () => {
  alert('Hello World!!');
};

const btnStyle: Style = {
  height: '50px',
  width: '100px',
  color: 'white',
  'background-color': 'red',
};

const setBtnStyle = (btnElm: HTMLButtonElement, style: Style) => {
  Object.keys(style).forEach((key) => {
    btnElm.style.setProperty(key, style[key as keyof typeof style]);
  });
};

const setBtnInnerText = (btnElm: HTMLButtonElement, txt: string) => {
  btnElm.innerText = txt;
};

const alertBtn = createBtn();
setBtnInnerText(alertBtn, 'アラート表示');
setBtnStyle(alertBtn, btnStyle);
alertBtn.addEventListener('click', alertFunc);
document.body.appendChild(alertBtn);
