// first you create a strucutre of the tree class.

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// tree class will accept a root
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
//     here you create a method "insert" which will accept a value .
    insert(value){
        var newNode = new Node(value);  
//         if there is no value it will return root
        if(this.root === null){
            this.root = newNode;
            return this;
        }
//         we create a current variable to undertand better
        var current = this.root;
//         we will loop untill the condition is true.
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
