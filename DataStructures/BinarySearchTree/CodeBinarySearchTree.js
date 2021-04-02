
class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        if (this.root === null){
            this.root = newNode
            return this
        }
        let current = this.root
        while (true){
            if (current.val === val) return undefined
            if (val < current.val){
                if (current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left
                } 
            else {
                if (current.right === null){
                    current.right = newNode
                    return this
                }
                current = current.right
                }     
        }
    }
    find(val){
        if (this.root == null) return false
        let current = this.root,
            found = false
        while(current && !found){
            if (val < current){
                current = current.left
            }
            else if (val > current){
                current = current.right
            }
            else {
                found = true
            }
        }
        if (!found) return undefined
        return current
    }
    BFS(){
        let data = [],
            queue = [],
            node = this.root

        queue.push(this.root)

        while (queue.length){
            node = queue.shift()
            data.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }
    DFSPreOrder(){
        let data = []
        let current = this.root

        function traverse(node){
            data.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }
    DFSPostOrder(){
        let data = []
        let current = this.root

        function traverse(node){
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(current)
        return data
    }
}



let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)