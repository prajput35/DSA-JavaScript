function removeNode(root, key) {
  let currentNode = root;
  let parentNode = null;
  let isLeftChild = true;

  // Find the node to remove
  while (currentNode !== null && currentNode.value !== key) {
    parentNode = currentNode;
    if (key < currentNode.value) {
      currentNode = currentNode.left;
      isLeftChild = true;
    } else {
      currentNode = currentNode.right;
      isLeftChild = false;
    }
  }

  // If the node was not found, return null
  if (currentNode === null) {
    return null;
  }

  // If the node has no children, simply remove it
  if (currentNode.left === null && currentNode.right === null) {
    if (currentNode === root) {
      root = null;
    } else if (isLeftChild) {
      parentNode.left = null;
    } else {
      parentNode.right = null;
    }
  }
  // If the node has only one child, replace it with its child
  else if (currentNode.left === null) {
    if (currentNode === root) {
      root = currentNode.right;
    } else if (isLeftChild) {
      parentNode.left = currentNode.right;
    } else {
      parentNode.right = currentNode.right;
    }
  } else if (currentNode.right === null) {
    if (currentNode === root) {
      root = currentNode.left;
    } else if (isLeftChild) {
      parentNode.left = currentNode.left;
    } else {
      parentNode.right = currentNode.left;
    }
  }
  // If the node has two children, replace it with its successor
  else {
    let successor = getSuccessor(currentNode);
    if (currentNode === root) {
      root = successor;
    } else if (isLeftChild) {
      parentNode.left = successor;
    } else {
      parentNode.right = successor;
    }
    successor.left = currentNode.left;
  }

  return root;
}

function getSuccessor(node) {
  let successor = node.right;
  let successorParent = node;

  while (successor.left !== null) {
    successorParent = successor;
    successor = successor.left;
  }

  if (successor !== node.right) {
    successorParent.left = successor.right;
    successor.right = node.right;
  }

  return successor;
}