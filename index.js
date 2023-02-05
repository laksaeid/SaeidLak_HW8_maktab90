"use strict";
const elemCreator = function (element, cb) {
  const newElem = document.createElement(element);
  cb(newElem);
  document.body.append(newElem);
}
elemCreator('div', (elem) => {
  elem.style.backgroundColor = 'red'
  elem.style.width = '100px';
  elem.style.height = '100px';
})