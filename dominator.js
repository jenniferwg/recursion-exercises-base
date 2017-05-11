const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const rootArr = flattenTreeToArray(root);
  return (_.filter(rootArr, currentEl => {
  	return currentEl.id === id;
  }))[0];
};

const getElementsByClassName = function(root, className) {
  const rootArr = flattenTreeToArray(root);
  return _.filter(rootArr, currentEl => {
  		return currentEl.className && (currentEl.className).indexOf(className) != -1;
  });
};

const getElementsByTagName = function(root, tagName) {
  const rootArr = flattenTreeToArray(root);
  return _.filter(rootArr, currentEl => {
  	return currentEl.tagName === tagName;
  });
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
