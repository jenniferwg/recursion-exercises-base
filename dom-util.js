
const visitAllNodes = function(node, callback) {
  callback(node);

  if (node.childNodes.length === 0) {
  	return;
  } 
  node.childNodes.forEach(childNode => {
  	visitAllNodes(childNode, callback);
  });
};

const flattenTreeToArray = function(node) {
  let result = [];
  visitAllNodes(node, childNode => {
  	result.push(childNode);
  });
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};