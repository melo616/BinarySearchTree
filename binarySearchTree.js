class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
* Represents an ordered tree of nodes where the data of left nodes are <= to
* their parent and the data of nodes to the right are > their parent's data.
*/
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }

    /**
 * Determines if this tree is empty.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {boolean} Indicates if this tree is empty.
 */
    isEmpty() {
        if (this.root == null) {
            return true;
        }
        return false;
    }


    /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
    insert(newVal) {
        const newNode = new BSTNode(newVal)

        if (this.isEmpty()) {
            // Inserting ROOT
            console.log(`Inserting ${newVal} as the ROOT`)
            this.root = newNode
        } else {
            let curr = this.root
            // Traverse the list while either left or right is not null
            // When it is null we have reached the node where the new node is to be inserted
            while (curr.left !== null && curr.right !== null) {
                // Traverse RIGHT
                if (newVal > curr.data) {
                    // console.log("Traversing to the RIGHT of ", curr.data)
                    curr = (curr.right !== null) ? curr.right : curr
                } else {
                    // Traverse LEFT
                    // console.log("Traversing to the LEFT of ", curr.data)
                    curr = (curr.left !== null) ? curr.left : curr
                }
            }
            // Insert RIGHT
            if (newVal > curr.data) {
                console.log(`Inserting ${newVal} to the RIGHT of ${curr.data}`)
                curr.right = newNode
            } else {
                // Insert LEFT
                console.log(`Inserting ${newVal} to the LEFT of ${curr.data}`)
                curr.left = newNode
            }
        }
        return this
    }

    min(current = this.root) {
        if (!this.isEmpty()) {
            if (current.left === null) {
                return current.data
            }
            return this.min(current.left)
        }
    }

    contains(searchVal) {
        let current = this.root;
        //check if empty - return false
        if (this.isEmpty()) {
            return false;
        }
        //check if root == search val; return true
        while (current) {
            //if searchval < root go left
            if (current.data === searchVal) {
                return true;
            }
            if (searchVal < current.data) {
                current = current.left
            }
            //if searchval > root go right
            else {
                current = current.right
            }
        }
        //update current to left or right node depending on size of searchval
        //check searchval relative to current and do the same
        //return false if not true at any point
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) { }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (!this.isEmpty()) {
            if (current.right === null) {
                return current.data
            }
            return this.max(current.right);
        }
    }

    /**
* Calculates the range (max - min) from the given startNode.
* - Time: O(?).
* - Space: O(?).
* @param {Node} startNode The node to start from to calculate the range.
* @returns {number|null} The range of this tree or a sub tree depending on if the
*    startNode is the root or not.
*/
    range(startNode = this.root) {
        return this.max() - this.min() || false
    }


    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {
        //check if BST is empty
        if (!curr) {
            let newNode = new BSTNode(newVal)
            return this;
        }
        //checks to see if left or right side are null
        if ((curr.left || curr.right) === null) {
            newVal < curr.data ? curr.left = newNode : curr.right = newNode //determine new node placement
            return this; //traverse back up the stack
        }
        else {
            //update pointer/current then recurse...
            newVal < curr.data ? curr = curr.left : curr = curr.right;
            return this.insertRecursive(newVal, curr)
        }
    }

    /**
 * DFS Preorder: (CurrNode, Left, Right)
 * Converts this BST into an array following Depth First Search preorder.
 * Example on the fullTree var:
 * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */


    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */

    toArrPreorder(node = this.root, vals = []) {
        if (node) {
            vals.push(node.data)
            this.toArrPreorder(node.left, vals)
            this.toArrPreorder(node.right, vals)
        }
        return vals
    }

    toArrInorder(node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals)
            vals.push(node.data)
            this.toArrInorder(node.right, vals)
        }
        return vals
    }

    // toArrPreorder
    // Preorder (Parent, Left, Right): on the provided fullTree var, it should be in this order: [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
    // toArrInorder
    // Inorder (Left, Parent, Right): on the provided fullTree var, it should be in this order: [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]

    /**
      * Recursively counts the total number of nodes in this tree.
      * - Time: O(?).
      * - Space: O(?).
      * @param {Node} node The current node during the traversal of this tree.
      * @returns {number} The total number of nodes.
      */
    // size(node = this.root, num=0) { 
    //     if (node) {
    //         num++
    //         this.size(node.left, num);
    //         num++
    //         this.size(node.right, num);
    //     }
    //     return num;
    // }
    size(node = this.root) {
        if (node == null) {
            return 0;
        } else {
            return this.size(node.left) + 1 + this.size(node.right);
        }
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {

        //go down the tree starting from left
        //count = 0
        //temp count = 0
        //each time you move to the next node, temp count++
        //when left & right are both null, if tempcount>count count=tempcount
        //return count
    }
    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) { }






    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the last nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) {
        if (node.left === null && node.right === null) {
            return true;
        }
        if (node.left != null && node.right != null) {
            return (this.isFull(node.left) && this.isFull(node.right));
        }
        return false;
    }


    /**
     * Finds all the values that are repeated in the binary search tree
     * - Time: O(?).
     * - Space: O(?).
     * @returns {Array<Number>} The values that are repeated in the binary search tree.
     */
    findDuplicates(duplicateArr = [], node = this.root, hashTable = {}) {
        if (!node) {
            return;
        }
        if (!(node.data in hashTable)) {
            hashTable[node.data] = 1;
        } else {
            duplicateArr.push(node.data);
        }
        this.findDuplicates(duplicateArr, node.left, hashTable);
        this.findDuplicates(duplicateArr, node.right, hashTable);
        return duplicateArr;
    }

    /**
* DFS Postorder (Left, Right, CurrNode)
* Converts this BST into an array following Depth First Search postorder.
* Example on the fullTree var:
* [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
* @param {Node} node The current node during the traversal of this tree.
* @param {Array<number>} vals The data that has been visited so far.
* @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
*/
    toArrPostorder(node = this.root, vals = []) { 
        if (node) {
            this.toArrPostorder(node.left, vals)
            this.toArrPostorder(node.right, vals)
            vals.push(node.data)
        }
        return vals
    }
}

const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(10)
bst.insert(25)
bst.insert(5)
bst.insert(15)
bst.insert(22)
bst.insert(50)
bst.insert(16)
// console.log("The min value in the tree is ", bst.min())
// const bst2 = new BinarySearchTree()
// console.log(bst2.contains(5))
// bst2.insert(5)
// console.log(bst2.contains(5))
// console.log(bst.contains(5))
// console.log("Should be false:", bst.contains(13))
// console.log("Range: ", bst.range())
// console.log("Min: ", bst.min());
// console.log("Size; should be 8", bst.size());
const bst3 = new BinarySearchTree();
bst3.insert(20)
bst3.insert(10)
bst3.insert(25)
bst3.insert(5)
bst3.insert(15)
bst3.insert(22)
bst3.insert(50)
bst3.insert(50)
bst3.insert(16)
bst3.insert(8)
bst3.insert(13)
bst3.insert(27)

//          BST
//           20
//          /   \
//         10   25
//        / \   / \
//      5   15  22  50
//          \
//          16
// console.log("BST isFUll should be false:", bst.isFull());
// console.log("BST3 isFUll should be true:", bst3.isFull());    
// console.log(bst3.findDuplicates())
console.log(bst3.toArrPostorder())