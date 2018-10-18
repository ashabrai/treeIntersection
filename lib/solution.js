'use strict';

module.exports = function binaryTreeSearch(treeA, treeB) {
  const valueMap = new Map();
  const valueSet = new Map();

  function traverseTree(root) {
    if (!root) {
      return undefined;
    }
    if (root.value) {
      valueMap.set(root.value, true);
    }
    traverseTree(root.left);
    traverseTree(root.right);
    return undefined;
  }

  function traverseTreeTwo(root) {
    if (!root) {
      return undefined;
    }
    if (root.value) {
      if (valueMap.get(root.value) === true) {
        valueSet.set(root.value, true);
      }
      traverseTreeTwo(root.left);
      traverseTreeTwo(root.right);
      return undefined;
    }
    traverseTree(treeA.root);
    traverseTree(treeB.root);
    return undefined;

    //
    // const match = [];
    // for (const [key] of valueSet.entries()) { // eslint-disable-line
    //   match.push(key);
    // }
    // return match;
  }

  return traverseTreeTwo();
};
