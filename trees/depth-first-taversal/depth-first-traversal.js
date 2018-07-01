class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstTraversal(array) {
    array.push(this.name);
		for (let i = 0; i < this.children.length; i++) {
      this.children[i].depthFirstTraversal(array);
    }
		return array;
	}
}
