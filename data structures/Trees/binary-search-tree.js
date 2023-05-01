class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const node = new Node(value);
        
        if(!this.root){
            this.root = node;
            return this;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //left node insert
                    if(!currentNode.left){
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else {
                    // right node insert
                    if(!currentNode.right){
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if( value > currentNode.value){
                currentNode = currentNode.right;
            }else if( currentNode.value === value ){
                return currentNode;
            }
        }

        return false;
    }

    // the leftmost leaf in bst is the min value
    min(){
        // if root node is null;
        if(this.root === null){
            return null;
        }

        //if no left child in a root node, return the node value
        if(this.root.left === null){
            return this.root.value;
        }else{
            let currentNode = this.root;
            while(currentNode.left){
                currentNode = currentNode.left;
            }
            return currentNode.value;
        }
    }

    // the rightmost leaf in bst is the max value
    max(){
        // if root node is null;
        if(this.root === null){
            return null;
        }

        //if no left child in a root node, return the node value
        if(this.root.right === null){
            return this.root.value;
        }else{
            let currentNode = this.root;
            while(currentNode.right){
                currentNode = currentNode.right
            }
            return currentNode.value;
        }
    }

    //remove node by value
    remove(value){
        if(this.root === null){
            return false;
        }
        let currentNode = this.root;
        //keep track of the parent node of the node to be removed.
        let parentNode = null;
        let isLeftchild = true;

        //search the node to remove
        while(currentNode != null && currentNode.value != value){
            parentNode = currentNode;
            if(value < currentNode.value){
                currentNode = currentNode.left;
                isLeftchild = true;
            }else{
                currentNode = currentNode.right;
                isLeftchild = false;
            }    
        }

        //if node not found, return null
        if(currentNode === null){
            return null;
        }

        //case 1: no left or right child node present for the node to be removed.
        //if the node has no children, remove it
        if(currentNode.left === null && currentNode.right === null){
            //if current node is root, mark root as null. this can occur if tree has only one node
            if(currentNode === this.root){
                this.root = null;
            }else if(isLeftchild){
                //remove left child node
                // make left pointer of parent as null to remove left child of the parent
                parentNode.left = null;
            }else{
                // remove right child node
                // make the right point of the parent as null
                parentNode.right = null;
            }
        }
        //case 2.1: if the node to be removed has only one child - right
        else if(currentNode.left === null){
            //case 2.1.1 if no left child present for currentNode, check if its the root node
            if(currentNode === this.root){
                //2.1.2 make the right node as the root node
                this.root = currentNode.right;
            }
            //case 2.1.3 if the currentNode is the left child node with no left leaf and one right leaf node
            //point the parentnode of left to the right leaf of the currentNode
            else if(isLeftchild){
                parentNode.left = currentNode.right;
            }
            //case 2.1.4 if the currentNode is not the left child and has only right leaf 
            //point the parentNode of the right to the right leaf of the currentNode
            else{
                parentNode.right = currentNode.right;
            }
        }
        //case 2.2: if the node to be removed has only one child - left
        else if(currentNode.right === null){
            //case 2.2.1 if no right child present for currentNode, check if its the root node
            if(currentNode === this.root){
                //2.2.2 make the left node as the root node
                this.root = currentNode.left;
            }
            //case 2.2.3 if the currentNode is the left child node with no right leaf and only one left leaf node
            //point the parentnode of left to the left leaf of the currentNode
            else if(isLeftchild){
                parentNode.left = currentNode.left;
            }
            //case 2.2.4 if the currentNode is not the left child and has only left leaf 
            //point the parentNode of the right to the left leaf of the currentNode
            else{
                parentNode.right = currentNode.left;
            }
        }
        //case 3: if the currentNode has 2 children, replace it with its successor
        //get the inorder successor
        else{
            let successor = this.getSuccessor(currentNode);
            //check if currenNode is root
            if(currentNode === this.root){
                //point root to successor
                this.root = successor;
            }
            //check if the node to be removed is left side of the root
            else if(isLeftchild){
                //point the parent of the node to be removed to the successor of the node to be removed.
                parentNode.left = successor;
            }else{
                //point the parent of the node to be removed to the successor of the node to be removed.
                parentNode.right = successor;
            }
            //point the entire left branch of the node to be removed to the successor.left
            successor.left = currentNode.left;
            //successor.right is already taken care of in getsuccessor function
        }
    }

    //get the successor of the node, leftmost node of currentNode.right
    getSuccessor(node){
        //assign successor to the right of node to be removed
        let successor = node.right;

        //assign node to be removed as successorparent to the successor
        let successorParent = node;

        //traverse to the leftmost node of successor
        while(successor.left !== null){
            //make successorParent as successor
            successorParent = successor;

            //move successor to the left
            successor = successor.left;
        }

        //check if successor is not equal to the node of right meaning if successor has no left branch
        if(successor !== node.right){
            //point successorParent of left to the successor of right
            successorParent.left = successor.right;

            //change pointer of successor.right to the the node(to be removed) of right
            successor.right = node.right;
        }
        //else if successor = node.right, simple return successor

        return successor;

    }

    breadthFirstSearch(){
        let queue = [];
        //let list = [];
        queue.push(this.root);

        while(queue.length){
            let currentNode = queue.shift();
            console.log(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
    }

    bfsRecursive(queue){
        if(!queue.length){
            return;
        }

        let currentNode = queue.shift(); //remove the first element of the list, FIFO satisfied.
        console.log(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        return this.bfsRecursive(queue);
    }

    validateBST(){
        let queue = [];
        queue.push(this.root);

        while(queue.length){
            let currentNode = queue.shift();
            //console.log(currentNode.value);
            if(currentNode.left){
                if(currentNode.left.value < currentNode.value){
                    queue.push(currentNode.left);
                }
                else{
                    return false;
                }
            }
            if(currentNode.right){
                if(currentNode.right.value > currentNode.value){
                    queue.push(currentNode.right);
                }else{
                    return false;
                }
            }
        }

        return true;
    }

    inOrder(node){
        if(node){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    inOrderWithArr(node, arr){
        if(node){
            this.inOrderWithArr(node.left, arr);
            //console.log(node.value);
            arr.push(node.value);
            this.inOrderWithArr(node.right, arr);
        }
        //return arr;
    }

    preOrder(node){
        if(node){
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }
}

const bst = new BinarySearchTree();
console.log('Tree is empty?',bst.isEmpty());
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(15);
bst.insert(170);
bst.insert(1);


//use below commented for remove, traverse, search
// bst.insert(45);
// bst.insert(25);
// bst.insert(65);
// bst.insert(11);
// bst.insert(29);
// bst.insert(5);
// bst.insert(15);
// bst.insert(32);
// bst.insert(60);
// bst.insert(95);
// bst.insert(63);
// bst.insert(72);
// bst.insert(99);
// bst.insert(68);
// bst.insert(85);
// bst.insert(100);
// bst.insert(69);

// console.log(traverse(bst.root));

// console.log(bst.search(100));
// console.log('minimum value:',bst.min());
// console.log('maximum value:',bst.max());
// //bst.remove(65);
 console.log(traverse(bst.root));

//breadth first search
console.log('Breadth first search');
bst.breadthFirstSearch();
//bst.bfsRecursive([bst.root]);

//depth first search
console.log('Depth first search');
let inOrderArr = [];
//bst.inOrder(bst.root);
console.log('InOrder');
bst.inOrderWithArr(bst.root, inOrderArr);
console.log(inOrderArr);
console.log('PreOrder');
bst.preOrder(bst.root);
console.log('PostOrder');
bst.postOrder(bst.root);

console.clear();
console.log('is bst:',bst.validateBST());


function traverse(node) {
    const tree = { node: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}