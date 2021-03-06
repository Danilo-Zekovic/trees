function Node(data, left, right) {
 this.data = data;
 this.left = left;
 this.right = right;
 this.show = show;
}
function show() {
 return this.data;
}

function BST() {
 this.root = null;
 this.insert = insert;
 this.inOrder = inOrder;
 this.preOrder = preOrder;
 this.postOrder = postOrder;
 this.max = max;
 this.min = min;
 }

function insert(data) {
 var n = new Node(data, null, null);
 if (this.root === null) {
   this.root = n;
   }
 else {
   var current = this.root;
   var parent;
   while (true) {
     parent = current;
     if (data < current.data) {
       current = current.left;
       if (current === null) {
         parent.left = n;
         break;
         }
     }
   else {
     current = current.right;
     if (current === null) {
       parent.right = n;
       break;
       }
     }
   }
 }
}

function remove(data) {
	 root = removeNode(this.root, data);
}
function removeNode(node, data) {
	 if (node === null) {
		  return null;
		   }
	  if (data == node.data) {
		  // node has no children
		  if (node.left === null && node.right === null) {
			   return null;
			    }
		  // node has no left child
		  if (node.left === null) {
			   return node.right;
			    }
		  // node has no right child
		  if (node.right === null) {
			   return node.left;
			    }
		  // node has two children
		  var tempNode = getSmallest(node.right);
		   node.data = tempNode.data;
		    node.right = this.removeNode(node.right, tempNode.data);
		     return node;
		      }
	   else if (data < node.data) {
		    node.left = this.removeNode(node.left, data);
		     return node;
		      }
	    else {
		     node.right = this.removeNode(node.right, data);
		      return node;
		       }
}

// change value in data
function update(data) {
	 var grade = this.find(data);
	  grade.count++;
	   return grade;
}

// display array contents
function prArray(arr) {
	 putstr(arr[0].toString() + ' ');
	  for (var i = 1; i < arr.length; ++i) {
		   putstr(arr[i].toString() + ' ');
		    if (i % 10 === 0) {
			     putstr("\n");
			      }
		     }
}

// create an array with specified length and fill with random integers
function genArray(length) {
	 var arr = [];
	  for (var i = 0; i < length; ++i) {
		   arr[i] = Math.floor(Math.random() * 101);
		    }
	   return arr;
}

function getSmallest(node) {
   if (node.left == null) {
      return node;
   }
   else {
      return getSmallest(node.left);
   }
}

function find(data) {
  var current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    }
    else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}

// return the max vale of the BST
function max() {
  // set node to the root value
  var node = this.root;
  // loop until there is no more values to the right
  while( node.right != null ) {
    node = node.right; // move to the right value
  } // end while
  return node.data;
} // end max

// return the min value of the BST
// similar to max
function min() {
  var node = this.root;
  while( node.left != null ){
    node = node.left;
  }
  return node.data;
}
