'use strict';

const Node = require('./node');

module.exports = class BinaryTree {
  constructor(root) {
    this.root = new Node(root);
  }
};
