const validateName = function (name) {
  if (!name) {
    throw new TypeError('Name must not be blank');
  }
}

const create = function (name) {
  let newItem = {
    id: cuid(),
    name: name,
    checked: false
  }
  return newItem;
}

export default {
  validateName,
  create
};