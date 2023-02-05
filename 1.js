let user = {};

function setterGenerator(key) {
  return function (value) {
    this[key] = value;
    return this;
  }.bind(user);
}
const nameSetter = setterGenerator("name");
const lastNameSetter = setterGenerator("lastName");
nameSetter("saeid");
console.log(lastNameSetter("lak"));
