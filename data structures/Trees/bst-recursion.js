class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
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
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode);
            }
        }else{
            if(root.right === null){
                root.right = newNode;
            }else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value){
        if(!root){
            return false;
        }else{
            if(root.value === value){
                return root; //originally true
            }else if(value < root.value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }

    min(root){
        //if root does not have left child, return root value
        if(root.left === null){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    max(root){
        //if root does not have left child, return root value
        if(root.right === null){
            return root.value;
        }else{
            return this.min(root.right);
        }
    }
}

const bst = new BinarySearchTree();
console.log('Tree is empty?',bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);

//console.log(JSON.stringify(traverse(bst.root)));
console.log(traverse(bst.root));

console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log('minimum value:',bst.min(bst.root));
console.log('maximum value:',bst.max(bst.root));


function traverse(node) {
    const tree = { node: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}