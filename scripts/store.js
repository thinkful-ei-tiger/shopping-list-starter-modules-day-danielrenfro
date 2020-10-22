import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = function (id) {
  const foundItem = items.find((item) => item.id === id);
  return foundItem;
}

const addItem = function (name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

const findAndToggleChecked = function (id) {
  let itemFound = this.findById(id);
  itemFound.checked = !itemFound.checked;
}

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);
    let itemFound = this.findById(id);
    itemFound.name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`)
  }
}

const findAndDelete = function (id) {
  let index = this.items.findIndex((item) => item.id === id);
  this.items.splice(index, 1);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}



export default {
  items, 
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete, 
  toggleCheckedFilter
};