let user = {};

function setterGenerator(key) {

  return function (value) {
    this[key] = value;
    return this;
  };
}
const nameSetter = setterGenerator('name');
const nameSetter2 = setterGenerator('name2');

// console.log(nameSetter2.bind(user, 'mohtashami'));



