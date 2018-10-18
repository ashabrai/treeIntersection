'use strict';

const findRepeatValue = require('../lib/solution');
const Node = require('../lib/node');
const BinaryTree = require('../lib/binaryTree');

describe('testing to see if matches were found', () => {
  test('test to see matches found', () => {
    const nodeOne = new Node(4);
    const nodeTwo = new Node(3);
    const nodeThree = new Node(5);
    const nodeFour = new Node(9);
    const nodeFive = new Node(7);
    const nodeSix = new Node(1);
    const nodeSeven = new Node(8);

    const treeA = new BinaryTree(nodeOne);
    const treeB = new BinaryTree(nodeThree);

    nodeOne.left = nodeTwo;
    nodeOne.right = nodeThree;

    nodeTwo.left = nodeFour;
    nodeTwo.right = nodeFive;

    nodeThree.left = nodeSix;
    nodeThree.right = nodeSeven;

    findRepeatValue(treeA, treeB);

    expect(findRepeatValue(treeA, treeB))
      .toEqual([1, 5, 8]);
  });
  test('test to see if return undefined', () => {
    const nodeOne = new Node(4);
    const nodeTwo = new Node(3);
    const nodeThree = new Node(5);
    const nodeFour = new Node(9);
    const nodeFive = new Node(7);
    const nodeSix = new Node(1);
    const nodeSeven = new Node(8);

    const treeA = new BinaryTree(nodeOne);
    const treeB = new BinaryTree();

    nodeOne.left = nodeTwo;
    nodeOne.right = nodeThree;

    nodeTwo.left = nodeFour;
    nodeTwo.right = nodeFive;

    nodeThree.left = nodeSix;
    nodeThree.right = nodeSeven;

    findRepeatValue(treeA, treeB);

    expect(findRepeatValue(treeA, treeB)).toEqual(undefined);
  });
});
