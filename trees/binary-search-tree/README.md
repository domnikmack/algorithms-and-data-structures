# Binary Search Tree (BST)
## Analysis

Time:
Average: O(log(n))
Worst: O(n)

Space:
Average: O(log(n))
Worst: O(n)

*All iterative methods shown here have the same complexity.*

## Note:
The most difficult method is **removal** of a node as every of the following cases has to be handled differently:
* Node has no children: Remove the node by setting its parent's pointer it it to null. If it's the root node you are deleting the entire tree which i.e. only thing you can do is set its value to null.
* Node has one child: Replace node to be removed with its child by setting nodes parent's pointer to the nodes child. If removed node is the root node you have to 'manually' set its value, left and right pointers to the corresponding properties of its child.
* Node has two children: Find the next higher value in the tree and replace the removed node's value with it (If the tree stores equal value in its right branches find the minimum value on the to be deleted node's right subtree). Then call remove on the node that contained the next higher value (call the same remove method on the replaced nodes right subtree (where you found it in the first place)).

